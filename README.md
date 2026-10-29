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

## 내 컴퓨터에서 실행하기

```bash
git clone https://github.com/skfls0721/portfolio.git
cd portfolio/site
hugo server --baseURL http://localhost:1313/
```

브라우저에서 http://localhost:1313/ 을 엽니다.
`hugo.yaml`의 `baseURL`이 배포 주소(`/portfolio/` 하위 경로)로 되어 있어서, 로컬 확인에서는 위처럼 `--baseURL`을 덮어써야 화면이 열립니다. 이 옵션은 배포에는 영향을 주지 않습니다.

## 빌드하기

```bash
cd site
hugo --minify --baseURL https://skfls0721.github.io/portfolio/ --destination /tmp/hugo-prod
```

결과물은 `/tmp/hugo-prod`에 만들어지고, `index.html`이 생기면 빌드가 성공한 것입니다.
실제 배포 빌드는 GitHub Actions가 `.github/pages_build.py`로 수행합니다.

## 내용 수정하기

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이름, 소개, About, 프로젝트, 취미, 연락처, 소셜 링크 | `site/hugo.yaml` |
| 사진 | `site/static/images/` (사진 이름을 바꾸면 `hugo.yaml`의 경로도 함께 수정) |
| 폰트, 글자 크기, 키보드 초점 표시 | `site/static/css/custom.css` |
| 메뉴와 섹션 제목(영어) | `site/i18n/ko.toml` |
| 탭 아이콘 | `site/static/fav.png` |

## 수정 후 재배포하기

```bash
git add <수정한 파일>
git commit -m "무엇을 왜 바꿨는지 설명하는 메시지"
git push
```

1. `main`에 push하면 GitHub Actions(`Deploy Hugo to GitHub Pages`)가 자동으로 실행됩니다.
2. https://github.com/skfls0721/portfolio/actions 에서 실행 결과가 초록 체크인지 확인합니다.
3. 1~2분 뒤 https://skfls0721.github.io/portfolio/ 를 시크릿 창에서 열어 변경이 반영됐는지 확인합니다.

저장소 Settings → Pages → Source는 **GitHub Actions**로 설정되어 있어야 합니다.

## 테마 출처와 이용 조건

- 테마: [Hugo Profile](https://github.com/gurusabarish/hugo-profile) (제작: gurusabarish)
- 라이선스: MIT. 라이선스 전문은 `LICENSE`와 `site/themes/template/` 안에 유지했습니다.
- 테마 원본 설명서: `THEME_README.md`
- 사이트 하단에 테마 저작자 표기를 그대로 두었습니다.

### 직접 수정한 테마 파일

| 파일 | 수정 내용 |
|---|---|
| `site/themes/template/layouts/partials/sections/achievements.html` | 카드 본문을 마크다운으로 렌더링, 이미지 alt를 따로 받도록 변경, 제목을 h4로 정리 |
| `site/themes/template/layouts/partials/sections/projects.html` | 카드 본문을 마크다운으로 렌더링, 이미지 alt를 따로 받도록 변경, 제목을 h4로 정리 |
| `site/themes/template/layouts/partials/sections/hero/social.html` | 소셜 아이콘 링크에 aria-label 추가 |
| `site/themes/template/layouts/partials/sections/hero/index.html` | 프로필 이미지 alt를 한국어로 변경 |
| `site/themes/template/layouts/partials/sections/about.html` | 같은 사진이 반복되어 About 사진을 장식 이미지(빈 alt)로 처리 |
| `site/themes/template/layouts/partials/head.html` | Pretendard 폰트와 `custom.css` 연결 |
| `site/themes/template/layouts/404.html` | 테마 기본 404 그림 제거 |
