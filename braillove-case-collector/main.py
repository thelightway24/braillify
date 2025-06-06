import time
from pywinauto.application import Application
import csv

pattern = " a1b'k2l`cif/msp\"e3h9o6r^djg>ntq,*5<-u8v.%[$+x!&;:4\\0z7(_?w]#y)="
braille = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"


def main():
    try:
        # BrailleLove.exe 실행
        app = Application(backend="uia").start(
            r"C:\Program Files (x86)\Jeomsarang6\BrailleLove.exe"
        )
        print("BrailleLove가 성공적으로 실행되었습니다.")

        # 메인 윈도우 가져오기
        main_window = app.window(
            title="점사랑 6.0",
        )

        # 윈도우가 보이도록 활성화하고 전체화면으로 설정
        main_window.set_focus()
        main_window.maximize()

        # 새문서 버튼 클릭, 다이얼로그 열기
        main_window.child_window(title="새문서", control_type="Button").click()
        print("새문서 버튼을 클릭했습니다.")

        # 확인(O) 버튼 클릭, 다이얼로그 닫기
        main_window.child_window(title="확인(O)", control_type="Button").click()

        # 메인 윈도우를 다시 찾아서 포커스 설정
        main_window = app.window(title=app.windows()[0].window_text())
        pane = main_window.child_window(control_type="Pane", title="작업 영역")
        output = main_window.child_window(control_type="Edit", title="")

        import os
        import glob

        # test_case_inputs 디렉토리의 모든 CSV 파일을 찾습니다
        test_case_files = glob.glob("../test_case_inputs/*.csv")

        # 각 파일을 순회하면서 처리합니다
        for test_file in test_case_files:
            print(f"처리 중인 파일: {test_file}")

            # 파일 이름에서 확장자를 제외한 부분을 가져옵니다
            file_name = os.path.splitext(os.path.basename(test_file))[0]

            # output 파일명을 생성합니다
            output_file = f"../test_cases/{file_name}.csv"

            with open(output_file, "w", encoding="utf-8") as output_file:
                writer = csv.writer(output_file)
                with open(test_file, "r", encoding="utf-8") as file:
                    for row in file.readlines():
                        row = row.strip()
                        time.sleep(0.3)
                        pane.type_keys(
                            row.replace(" ", "{SPACE}")
                            .replace("(", "{(}")
                            .replace(")", "{)}"),
                            pause=0.05,
                        )

                        time.sleep(0.3)

                        # output 에서 read text 가져오기
                        output_text = output.get_value()
                        output_num = ""
                        output_braille = ""
                        for i in range(len(output_text)):
                            if output_text[i] in pattern:
                                output_num += str(pattern.index(output_text[i]))
                                output_braille += braille[pattern.index(output_text[i])]
                            else:
                                if output_text[i] == "@":
                                    output_num += "8"
                                    output_braille += braille[8]
                                elif output_text[i] == "|":
                                    output_num += "51"
                                    output_braille += braille[51]
                                else:
                                    raise Exception(f"오류: {output_text[i]}")

                        main_window.set_focus()
                        time.sleep(0.3)
                        writer.writerow([row, output_text, output_num, output_braille])

                        pane.type_keys("{BACKSPACE}" * len(row))
                        while output.get_value() != "":
                            pane.type_keys("{BACKSPACE}")

        print("완료")
    except Exception as e:
        print(f"오류가 발생했습니다: {str(e)}", e.print_traceback())
    finally:
        # 프로그램 종료
        app.kill()
        print("프로그램을 종료했습니다.")


if __name__ == "__main__":
    main()
