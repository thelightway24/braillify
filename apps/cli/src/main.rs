use std::io::{self, Write};

use anyhow::{bail, Result};
use braillify::encode_to_unicode;
use clap::{Parser};
use rustyline::{error::ReadlineError, DefaultEditor};

#[derive(Parser, Debug)]
#[command(name = "braillify", about = "한국어 점자 변환 CLI", version)] 
struct Cli {
    /// 입력 문자열. 없으면 REPL 모드로 진입합니다
    input: Option<String>,
}

fn main() -> Result<()> {
    let cli = Cli::parse();

    match cli.input {
        Some(text) => run_one_shot(&text),
        None => run_repl(),
    }
}

fn run_one_shot(text: &str) -> Result<()> {
    let out = encode_to_unicode(text).map_err(|e| anyhow::anyhow!("점자 변환 실패: {}", e))?;
    let mut stdout = io::stdout();
    stdout.write_all(out.as_bytes())?;
    stdout.flush()?;
    Ok(())
}

fn run_repl() -> Result<()> {
    let mut rl = DefaultEditor::new()?;
    let mut stdout = io::stdout();
    writeln!(stdout, "braillify REPL - 입력을 점자로 변환합니다. 종료: Ctrl+C or Ctrl+D")?;
    loop {
        match rl.readline("> ") {
            Ok(line) => {
                rl.add_history_entry(&line).ok();
                match encode_to_unicode(&line) {
                    Ok(out) => writeln!(stdout, "{}", out)?,
                    Err(e) => writeln!(stdout, "오류: {}", e)?
                }
            }
            Err(ReadlineError::Interrupted) | Err(ReadlineError::Eof) => {
                writeln!(stdout, "종료합니다.")?;
                break;
            }
            Err(err) => bail!("입력 오류: {}", err),
        }
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use assert_cmd::assert::OutputAssertExt;
    use predicates::prelude::*;
    use super::*;

    // 유닛 테스트들
    #[test]
    fn test_run_one_shot_success() {
        let result = run_one_shot("안녕");
        assert!(result.is_ok());
    }

    #[test]
    fn test_run_one_shot_invalid_input() {
        // 빈 문자열이나 특수한 경우 테스트
        let result = run_one_shot("");
        assert!(result.is_ok()); // 빈 문자열도 유효한 입력
    }

    #[test]
    fn test_cli_parsing_with_input() {
        let args = vec!["braillify", "안녕하세요"];
        let cli = Cli::try_parse_from(args).unwrap();
        assert_eq!(cli.input, Some("안녕하세요".to_string()));
    }

    #[test]
    fn test_cli_parsing_without_input() {
        let args = vec!["braillify"];
        let cli = Cli::try_parse_from(args).unwrap();
        assert_eq!(cli.input, None);
    }

    // assert_cmd를 사용한 통합 테스트들
    #[test]
    fn test_braillify_integration_single_word() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("안녕");
        let assert = cmd.assert().success().stdout(predicate::str::is_empty().not());
        
        // 점자 유니코드가 포함되어 있는지 확인
        let stdout = String::from_utf8_lossy(&assert.get_output().stdout);
        assert!(stdout.chars().any(|c| c as u32 >= 0x2800 && c as u32 <= 0x28FF));
    }

    #[test]
    fn test_braillify_integration_english() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("hello");
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty().not());
    }

    #[test]
    fn test_braillify_integration_mixed() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("안녕 hello");
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty().not());
    }

    #[test]
    fn test_braillify_integration_numbers() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("123");
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty().not());
    }



    #[test]
    fn test_braillify_pipe_input() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        let mut child = cmd.stdin(std::process::Stdio::piped()).stdout(std::process::Stdio::piped()).spawn().unwrap();
        {
            let stdin = child.stdin.as_mut().unwrap();
            stdin.write_all("안녕\n".as_bytes()).unwrap();
        }
        let output = child.wait_with_output().unwrap();
        assert!(output.status.success());
        assert!(!output.stdout.is_empty());
    }

    #[test]
    fn test_braillify_help() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("--help");
        cmd.assert()
            .success()
            .stdout(predicate::str::contains("한국어 점자 변환 CLI"));
    }

    #[test]
    fn test_braillify_version() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("--version");
        cmd.assert()
            .success()
            .stdout(predicate::str::contains("braillify"));
    }

    #[test]
    fn test_braillify_no_args() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        // 인자 없이 실행하면 REPL 모드로 진입
        let mut child = cmd.stdin(std::process::Stdio::piped()).stdout(std::process::Stdio::piped()).spawn().unwrap();
        {
            let stdin = child.stdin.as_mut().unwrap();
            stdin.write_all("안녕\n".as_bytes()).unwrap();
        }
        let output = child.wait_with_output().unwrap();
        assert!(output.status.success());
        assert!(!output.stdout.is_empty());
        cmd.assert()
            .success()
            .stdout(predicate::str::contains("braillify REPL"));
    }

    #[test]
    fn test_braillify_empty_input() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("");
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty());
    }

    #[test]
    fn test_braillify_long_text() {
        let long_text = "안녕하세요 ".repeat(100);
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg(&long_text);
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty().not());
    }

    #[test]
    fn test_braillify_special_characters() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("!@#$%^&*()");
        cmd.assert()
            .failure()
            .stderr(predicate::str::contains("Invalid character"));
    }

    #[test]
    fn test_braillify_korean_sentences() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("안녕하세요. 오늘 날씨가 좋네요.");
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty().not());
    }

    #[test]
    fn test_braillify_multiple_spaces() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("안녕    하세요");
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty().not());
    }

    #[test]
    fn test_braillify_newlines() {
        let built = escargot::CargoBuild::new().bin("braillify").current_release().current_target().run().unwrap();
        let mut cmd = built.command();
        cmd.arg("안녕\n하세요");
        cmd.assert()
            .success()
            .stdout(predicate::str::is_empty().not());
    }

    // 성능 테스트
    #[test]
    fn test_braillify_performance_long_text() {
        let long_text = "안녕하세요 ".repeat(100);
        let start = std::time::Instant::now();
        
        let result = run_one_shot(&long_text);
        let duration = start.elapsed();
        
        assert!(result.is_ok());
        // 1초 이내에 완료되어야 함
        assert!(duration.as_secs() < 1);
    }

    // 에러 처리 테스트
    #[test]
    fn test_braillify_error_handling() {
        // 특수 문자나 매우 긴 입력에 대한 에러 처리 테스트
        let very_long_text = "a".repeat(10000);
        let result = run_one_shot(&very_long_text);
        // 에러가 발생하더라도 프로그램이 크래시되지 않아야 함
        // (실제로는 성공할 수도 있지만, 에러 처리가 제대로 되는지 확인)
        let _ = result;
    }

    #[test]
    fn test_braillify_invalid_input() {
        let result = run_one_shot("§");
        assert!(result.is_err());   
    }
}


