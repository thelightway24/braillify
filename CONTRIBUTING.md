# 기여 가이드

braillify에 기여해주시려는 여러분께 진심으로 감사드립니다.

여러분의 기여는 이 프로젝트를 발전시키는 데 큰 힘이 됩니다.

원활한 프로젝트 관리를 위해 몇 가지 규칙과 절차를 안내해 드립니다.

이 가이드라인을 따라주시면 여러분의 기여가 더 쉽고 빠르게 반영될 수 있습니다.

## 코드 작성 규칙

아래 문서를 참고해주세요. [코드 작성 규칙]()

## 이슈 생성

이슈를 열기 전에, 깃허브의 이슈에서 유사한 이슈가 있는지 먼저 검색해주세요.
검색 결과가 없다면 [이슈 작성 가이드]()를 참고해 이슈를 남겨주세요.

## Pull Request 제출 방법

저희 프로젝트에 코드를 통합하려면 Pull Request (이하 PR)가 필요합니다.
PR에 대해 잘 모르신다면, [관련된 GitHub 문서](https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)를 먼저 참고해주세요.

오타 수정, 컴파일러 경고 제거와 같은 아주 사소한 수정이 아니라면, Pull Request를 제출하시기 전에 먼저 Issue를 생성해 주시기 바랍니다.

### DCO(Developer Certificate of Origin) 서명 커밋

저희 프로젝트의 모든 커밋은 기여자가 [Developer Certificate of Origin (DCO)](https://developercertificate.org/)에 동의함을 나타내는 Signed-off-by 트레일러를 커밋 메시지 끝에 포함해야 합니다.

DCO 서명에 대해 자세히 알고 싶으시다면 [왜 DCO 서명을 사용할까요?]() 문서를 참고해주세요.

### Repository Fork

기여를 시작하기 전에 먼저 코드를 수정하고 변경 사항을 반영할 수 있도록, 개인 계정으로 저장소를 **포크(Fork)** 해 주시기 바랍니다.

1. [brailify 레포지토리](https://github.com/dev-five-git/braillify)에 접속하세요.
2. 페이지 우측 상단에 있는 'Fork 버튼'을 클릭합니다.
3. 이어지는 화면에서 필요하다면 설정값을 조정한 후 'Create fork 버튼'을 클릭하세요.
4. 더 자세한 방법은 [깃허브의 리포지토리 포크 문서](https://docs.github.com/ko/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)를 참고하세요.

### 로컬 개발 환경 구축하기

이 가이드는 git, rust가 설치 되었음을 가정하고 작성되었습니다.

만약 설치되지 않은 환경이라면 [git 설치 가이드](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98), [rust 설치 가이드]()를 참고하세요.

1. 작업을 진행할 폴더에서 아래 명령을 복사 한 뒤, \<your-github-username\>을 수정하여 실행하세요.

   `git clone git@github.com:<your-github-username>/braillify.git`

2. `cd braillify` 명령을 실행해 작업 폴더로 이동하세요.
3. `git remote -v` 명령을 실행하여 1에서 입력한 remote가 표시되는지 확인하세요.
4. `git remote add upstream git@github.com:dev-five-git/braillify` 명령을 실행하여 원본 저장소(dev-five-git/braillify)를 upstream이라는 이름으로 추가하세요.
5. `git remote -v` 명령을 실행하여 origin 외에 upstream 리모트가 보이는지 확인하세요. 여기서 upstream은 릴리스가 빌드되는 dev-five-git/braillfy 저장소입니다.
6. `git fetch --all` 명령을 실행하여 모든 리모트 저장소(origin과 upstream)로부터 최신 변경 사항을 모두 로컬로 가져오세요.
7. `git branch -a`명령을 실행하여 브랜치 목록을 확인하세요. main을 포함하여 origin뿐만 아니라 upstream에도 있는 브랜치들이 모두 보여야 합니다.

### 기여 작업 흐름

- 항상 **Topic Branch** 에서 작업해야합니다.
  (일반적으로 GitHub 이슈 ID를 브랜치 이름으로 사용합니다.)
  - 예를 들어, 이슈 GH-123에 대한 새 브랜치를 만들고 전환하려면 `git checkout -b GH-123` 명령을 실행하면됩니다.
- 여러 개의 토픽 브랜치에서 동시에 작업하는 상황이 생길 수 있습니다. 그런 경우, 한 브랜치에서 작업을 중단할 때 반드시 커밋을 수행해야 합니다.
- Git 문서의 [프로젝트 기여하기](https://git-scm.com/book/ko/v2/%EB%B6%84%EC%82%B0-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-Git-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0) 장에 명시된 [커밋 가이드라인](https://git-scm.com/book/ko/v2/%EB%B6%84%EC%82%B0-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C%EC%9D%98-Git-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0#_commit_guidelines)을 읽어볼 것을 권장 합니다.
