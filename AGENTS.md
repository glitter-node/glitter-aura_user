# 그누보드7 Glitter Aura — 에이전트 가이드

## TL;DR (5초 요약)

bundled source인 이 디렉터리만 수정하고, 운영 활성 디렉터리는 직접 수정하지 않습니다. 레이아웃 문법은 G7 문서와 기존 템플릿 구현에서 확인하며, 수정 후 `template:update` lifecycle을 검토합니다.

## 1. 이 확장은 무엇인가

Glitter.kr이 소유하는 범용 user template foundation입니다. commerce나 특정 demo brand에 종속되지 않으며, 콘텐츠 중심 화면 구조와 조용하고 발광감 있는 editorial visual language를 제공합니다.

## 2. 디렉토리 지도

- `template.json`, `routes.json`, `components.json`: manifest·라우팅·컴포넌트 계약
- `layouts/`: `_user_base`와 페이지/error JSON
- `lang/`: ko/en translation resource
- `src/`: basic component registry와 CSS token
- `dist/`: build 산출물, 직접 편집 금지
- `docs/`: 개발자 문서

## 3. 핵심 흐름

브라우저 경로 → `routes.json` → `_user_base` 상속 레이아웃 → G7 template engine → component registry. 콘텐츠/커뮤니티 화면은 `sirsoft-board` 공개 읽기 API와 코어 검색 API만 사용하며, API가 없는 기능은 정적 presentation으로 남겨 임의의 API를 만들지 않습니다.

## 4. 확장점

현재 공개 composite는 `GlitterHeader`, `GlitterFooter`, `GlitterHero`, `GlitterSectionHeader`, `GlitterFeatureGrid`, `GlitterEditorialSplit`, `GlitterCTA`입니다. 데이터 바인딩은 G7 공식 `data_sources`, `iteration`, `HtmlContent`, `Pagination`만 사용합니다.

## 5. 수정 시 동반 의무

- `_bundled/glitter-aura_user`만 수정
- layout visible text는 translation key로 유지
- manifest behavior 변경 시 version과 CHANGELOG 검토
- TS/CSS 수정 후 `template:build glitter-aura_user --production`과 update 검토
- production 여부와 isolation을 먼저 확인하고, 격리되지 않은 테스트는 실행하지 않음

## 6. 금지 패턴

- installed/active template, `public/build`, generated `dist` 직접 수정
- Still Form/SuperBify asset·문구·commerce 전제 도입
- 지원이 확인되지 않은 layout handler·props·lifecycle 추측
- layout JSON 문장 hardcode 또는 fake API/demo fallback 추가

## 7. 테스트 실행

현재 production checkout에서는 DB·cache·session·filesystem isolation을 증명하기 전 Vitest/Playwright를 실행하지 않습니다. 격리 환경에서만 `npm run test:run`을 사용합니다.

## 8. 문서 목차

- [`README.md`](README.md): 설치·사용자 안내
- [`docs/README.md`](docs/README.md): 구조·레이아웃·검증 절차
