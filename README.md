# 홍나린 | Portfolio

전북대학교 컴퓨터인공지능학부 3학년 홍나린의 개인 소개 웹사이트입니다.
Hugo와 GitHub Pages로 만들었고, `main`에 push하면 GitHub Actions가 자동으로 배포합니다.

- 사이트: https://skfls0721.github.io/portfolio/
- 저장소: https://github.com/skfls0721/portfolio
- 배포 기록(Actions): https://github.com/skfls0721/portfolio/actions
- 커밋 목록: https://github.com/skfls0721/portfolio/commits/main

사이트는 한 페이지이고, 상단 메뉴로 About Me, Projects, Hobby, Contact 구역으로 이동합니다.

## 사용 도구와 버전

| 도구 | 버전 | 용도 |
|---|---|---|
| Hugo extended | 0.143.0 | 배포(GitHub Actions) 빌드. `.github/workflows/hugo-pages.yml`에 지정 |
| Hugo extended | 0.168.0 | 내 컴퓨터(macOS)에서 미리보기 |
| Python | 3.12 | 배포 워크플로의 빌드 스크립트(`.github/pages_build.py`) |
| Node.js | 24 | 배포 워크플로 환경 |
| 테마 | Hugo Profile (`site/themes/template`) | 화면 구성 |

로컬에서는 Hugo extended를 설치해야 합니다. (예: `conda install -c conda-forge hugo`)
설치 확인은 `hugo version`으로 하고, 출력에 `+extended`가 보이면 됩니다.
