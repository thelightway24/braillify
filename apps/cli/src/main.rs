use std::io::{self, Write};

use anyhow::{bail, Result};
use braillify::encode_to_unicode;
use clap::{Parser};
use rustyline::{error::ReadlineError, DefaultEditor};

#[derive(Parser, Debug)]
#[command(name = "braillify", about = "한국어 점자 변환 CLI")] 
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


