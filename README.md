# 그누보드7 Glitter Aura 사용자 템플릿

**그누보드7 사용자 템플릿 · glitter-aura_user**

## 소개

Glitter Aura는 콘텐츠, 커뮤니티, 브랜드 및 다양한 서비스 사이트를 위한 범용 사용자 템플릿입니다. Glitter.kr이 유지보수하며 특정 쇼핑몰이나 업종의 콘텐츠를 포함하지 않습니다.

## Stable release

현재 bundled stable release는 1.4.36입니다. 그누보드의 저장된 색상 모드와 시스템 설정을 Aura의 scoped dark 토큰에 연결하고 헤더에서 라이트·다크 모드를 전환할 수 있으며, 한국어·영어 시스템 고딕 sans-serif 기본·display 글꼴과 Community 게시글 작성·수정의 모드 구분, 보드 맥락, 검증 오류 연결, HTML 원문 편집 한계 안내를 제공합니다. 코드용 monospace는 유지하며, 1.4.32의 안전한 읽기·토론 통합과 Community 보드 랜딩, Home, Account, Content, 검색·탐색, 인증 foundation을 유지합니다.

## 디자인 철학

Glitter Aura는 Quiet, Luminous, Editorial, Structural이라는 문법 위에 Precise, Airy, Confident, Contemporary한 감각을 더합니다. 넓은 여백과 강한 타이포그래피, 얇은 경계선, 비대칭 데스크톱 그리드가 콘텐츠를 앞세우며 모바일에서는 한 줄의 읽기 순서로 정리됩니다.

## 주요 기능

- `/`, `/about`, `/content`, `/content/:id`, `/search`
- `/login`, `/register`, `/account`
- `/pages/contact`, `/pages/policy`
- 403·404·500 오류 화면
- 반응형 레이아웃, 한국어·영어 locale, semantic design token
- `sirsoft-board` 공개 읽기 API 기반 content/community 목록·상세
- Content 허브의 실제 게시판·게시글 리소스 기반 보드 발견, 선택 보드 맥락, 커뮤니티·글쓰기 연속성, 게시글 메타데이터와 페이지 탐색
- 인증된 사용자의 프로필·비밀번호 변경과 서버가 본인으로 한정한 최근 작성글 목록, 게시글·커뮤니티·Content 연속성
- `sirsoft-board` 사용자 게시글 작성·수정·삭제와 권한 인식 댓글 작성·수정·삭제·답글 interaction 및 첨부파일 표시·다운로드
- 댓글·답글·수정·삭제 mutation의 중복 제출 방지, 권위 있는 게시글/댓글 새로고침, 실패 복구와 대상 상태 정리
- 게시글 작성·수정 폼의 게시판 컨텍스트, 권한 기반 비회원 필드, 필드별 검증 오류, 저장 중 중복 제출 방지 및 성공 후 상세 이동
- 코어 `/api/search` 기반 게시글 검색, 권한 적용 결과 맥락 및 페이지네이션
- 홈 최신 게시글 미리보기(게시판 모듈이 제공하는 데이터가 있을 때)
- 공식 G7 사용자 인증 handler를 사용하는 로그인·2단계 인증·로그아웃
- 공식 인증 API를 사용하는 회원가입과 인증된 계정의 프로필·비밀번호 변경 foundation
- 공통 page shell, 실용적인 페이지 제목 계층, 중첩 경로 active navigation, 커뮤니티·게시글 컨텍스트 복귀 경로, 반응형 오류 상태
- 게시글 읽기 폭, 작성자·작성 시각 맥락, 첨부파일 크기 표시, 이웃 게시글 탐색, 댓글 영역 전환을 위한 읽기 구조

## 동작 방식

`routes.json`이 경로와 레이아웃을 연결하고, 각 화면은 `_user_base`를 상속합니다. 이번 버전은 G7의 공식 `login`, `loginTwoFactor`, `logout` handler와 `/api/auth/register`, `/api/auth/user`, `/api/me`, `/api/me/password` 계약을 사용합니다. 헤더는 실제 pathname과 history 변화를 사용해 `/content`의 커뮤니티·보드 중첩 경로와 계정 호환 경로의 현재 위치를 표시합니다. 가짜 API나 demo 데이터를 사용하지 않으며, 게시판 slug는 route 또는 `board_slug` query에서 전달받습니다.

페이지 레이아웃은 공통 `glitter-page-shell` 리듬을 사용하고, 목록·검색·커뮤니티 페이지의 첫 제목은 실제 문서 계층에 맞는 `h1`으로 렌더링합니다. 게시글 본문은 G7 `HtmlContent` 경로와 DOMPurify 처리를 유지하면서 제목·문단·목록·인용·표·코드·이미지·긴 링크가 읽기 폭과 작은 화면 안에서 안전하게 흐르도록 표현합니다. 첨부파일은 API가 제공하는 파일명·크기·다운로드 URL을 사용하며, 게시글 이전/다음과 댓글 영역이 본문 뒤의 읽기 흐름을 이어 줍니다. 라우트의 `meta.title`은 G7 레이아웃/SEO 메타데이터 계약으로 유지되며, 현재 코어는 이를 브라우저의 `<title>`로 자동 반영하지 않습니다.

## 요구 사항

- Gnuboard 7 `>=7.0.11`
- PHP 8.3 CLI 환경: `php`
- `sirsoft-board >=1.1.2` (content/community read와 post/comment interaction)
- 별도 plugin dependency 없음

## 설치

bundled source를 `templates/_bundled/glitter-aura_user/`에 둔 뒤 다음 lifecycle을 사용합니다.

```bash
php artisan template:install glitter-aura_user
php artisan template:activate glitter-aura_user
```

운영 checkout에서는 활성 템플릿을 교체하기 전에 백업·승인·검증 절차를 따르세요.

## 컴포넌트 아키텍처

`src/components/basic/`에는 G7 layout에서 직접 조합할 수 있는 semantic HTML wrapper가 있습니다. 반복 구조, 반응형 동작 또는 접근성 동작이 있는 표현만 `GlitterHeader`, `GlitterFooter`, `GlitterHero`, `GlitterSectionHeader`, `GlitterFeatureGrid`, `GlitterEditorialSplit`, `GlitterCTA` composite로 승격했습니다. live data 화면은 공식 `data_sources`와 `Pagination`/`HtmlContent` composite를 사용합니다.

## 커스터마이징 지점

색상·간격·표면은 `src/styles/main.css`의 semantic token에서 조정하고, 공통 헤더·푸터와 홈 정보 구조는 `layouts/_user_base.json`, `layouts/home.json`에서 조정합니다. 사용자 노출 문구는 `lang/ko.json`, `lang/en.json`에만 추가합니다.

## 개발 방법

source of truth는 bundled 디렉터리입니다. 활성 `templates/glitter-aura_user/`와 `public/build/`를 직접 수정하지 않습니다. 레이아웃·번역 변경 후에는 update lifecycle을, TS/CSS 변경 후에는 build와 update lifecycle을 적용합니다.

```bash
cd templates/_bundled/glitter-aura_user
npm run type-check
npm run build
php artisan template:update glitter-aura_user --source=bundled --force
```

`npm run dev` 또는 Docker는 사용하지 않습니다. 운영형 개발에서는 `npm run build:watch`를 사용합니다.

## i18n 원칙

레이아웃 JSON에는 visible sentence를 직접 쓰지 않고 `$t:*` 키만 사용합니다. 문장과 locale별 표현은 `lang/ko.json`, `lang/en.json`에서 관리합니다.

## Content·Community·Search

게시판 모듈의 공개 읽기 API를 통해 콘텐츠 목록·상세, community 목록·상세, 홈 최신글 미리보기와 게시글 검색을 연결합니다. 검색 결과는 API가 제공하는 게시판 맥락·작성자·시각·미리보기와 목적지 URL을 사용하며, 제한된 총 건수는 정확한 수처럼 표시하지 않습니다. 게시판 검색은 새 검색을 첫 페이지에서 시작하고, 검색 무일치와 게시판 자체의 빈 상태를 구분합니다. 게시판은 `/community/:slug` 또는 `/board/:slug`의 route slug, 콘텐츠 화면은 `board_slug` query를 사용하므로 특정 게시판 이름을 전제하지 않습니다. `sirsoft-board >=1.1.2`가 필요합니다.

댓글 목록·작성·수정·삭제를 지원합니다. 인증 화면은 로그인·회원가입·로그아웃, 인증된 계정 정보 조회·프로필 수정·비밀번호 변경을 지원합니다. 비밀번호 재설정, 이메일 인증, 계정 탈퇴는 별도 UX 검증이 필요해 deferred입니다. 게시글 상세에서는 `sirsoft-board`가 제공하는 첨부 metadata와 보호된 다운로드 URL을 표시합니다. 로그인 사용자는 resource 소유권과 서버 권한에 따라 댓글을 관리할 수 있고, 비회원은 댓글 비밀번호를 공식 verify-password endpoint로 확인한 뒤 현재 페이지에서만 발급된 1회성 토큰으로 수정·삭제할 수 있습니다. 첨부 업로드·교체·삭제는 현재 user-template에서 독립적으로 등록할 수 있는 공식 FileUploader transport가 없어 deferred입니다. 토큰은 새 browser 저장소나 custom cookie에 보관하지 않으므로 페이지를 벗어난 뒤의 비회원 관리는 deferred입니다. nested replies, moderation, reactions, 고급 media gallery, CMS 설정 UI와 commerce 화면은 아직 구현하지 않았습니다. 실제 write runtime 검증은 격리된 staging 환경 준비 후 진행해야 합니다. 본문 HTML과 검색 highlight는 G7 `HtmlContent`의 sanitization 경로를 사용하며, demo 이미지·샘플 상품·가짜 API는 포함하지 않습니다.

## 문서

개발자 문서는 [`docs/README.md`](docs/README.md)를 참고하세요.

## 라이선스

MIT. 자세한 내용은 [`LICENSE`](LICENSE)를 참고하세요.
