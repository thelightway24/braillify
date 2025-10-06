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
    use super::*;
    use std::process::{Command, Stdio};
    use std::io::Write;

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

    #[test]
    fn test_braillify_integration_single_word() {
        // 실제 바이너리를 실행하여 테스트
        let output = Command::new("cargo")
            .args(&["run", "--bin", "braillify", "--", "안녕"])
            .current_dir("../../")
            .output()
            .expect("Failed to execute command");

        assert!(output.status.success());
        let stdout = String::from_utf8_lossy(&output.stdout);
        // 점자 유니코드가 출력되는지 확인
        assert!(!stdout.is_empty());
        assert!(stdout.chars().any(|c| c as u32 >= 0x2800 && c as u32 <= 0x28FF));
    }

    #[test]
    fn test_braillify_integration_english() {
        let output = Command::new("cargo")
            .args(&["run", "--bin", "braillify", "--", "hello"])
            .current_dir("../../")
            .output()
            .expect("Failed to execute command");

        assert!(output.status.success());
        let stdout = String::from_utf8_lossy(&output.stdout);
        assert!(!stdout.is_empty());
    }

    #[test]
    fn test_braillify_integration_mixed() {
        let output = Command::new("cargo")
            .args(&["run", "--bin", "braillify", "--", "안녕 hello"])
            .current_dir("../../")
            .output()
            .expect("Failed to execute command");

        assert!(output.status.success());
        let stdout = String::from_utf8_lossy(&output.stdout);
        assert!(!stdout.is_empty());
    }

    #[test]
    fn test_braillify_integration_numbers() {
        let output = Command::new("cargo")
            .args(&["run", "--bin", "braillify", "--", "123"])
            .current_dir("../../")
            .output()
            .expect("Failed to execute command");

        assert!(output.status.success());
        let stdout = String::from_utf8_lossy(&output.stdout);
        assert!(!stdout.is_empty());
    }

    #[test]
    fn test_braillify_pipe_input() {
        // 파이프 입력 테스트
        let mut child = Command::new("cargo")
            .args(&["run", "--bin", "braillify"])
            .current_dir("../../")
            .stdin(Stdio::piped())
            .stdout(Stdio::piped())
            .spawn()
            .expect("Failed to start process");

        if let Some(stdin) = child.stdin.as_mut() {
            stdin.write_all("안녕\n".as_bytes()).expect("Failed to write to stdin");
        }

        let output = child.wait_with_output().expect("Failed to read output");
        assert!(output.status.success());

        // 종료 코드 확인
        assert_eq!(output.status.code(), Some(0));
    }

    #[test]
    fn test_braillify_help() {
        let output = Command::new("cargo")
            .args(&["run", "--bin", "braillify", "--", "--help"])
            .current_dir("../../")
            .output()
            .expect("Failed to execute command");

        assert!(output.status.success());
        let stdout = String::from_utf8_lossy(&output.stdout);
        assert!(stdout.contains("한국어 점자 변환 CLI"));
    }

    #[test]
    fn test_braillify_version() {
        let output = Command::new("cargo")
            .args(&["run", "--bin", "braillify", "--", "--version"])
            .current_dir("../../")
            .output()
            .expect("Failed to execute command");

        assert!(output.status.success());
        let stdout = String::from_utf8_lossy(&output.stdout);
        assert!(stdout.contains("braillify"));
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


