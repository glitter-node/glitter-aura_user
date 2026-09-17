# Glitter Aura 핸들러

## 템플릿 전용 핸들러

템플릿 전용 handler는 0개입니다. layout은 G7에 등록된 `navigate` action과 공식 `api` data source를 사용하며, 인증·검색·API handler를 별도로 발명하지 않습니다.

## 부트스트랩

`src/index.ts`가 basic component를 G7 `ComponentRegistry`에 등록하고 CSS를 로드합니다. API 요청은 layout의 `data_sources`가 담당하고, 페이지 이동과 pagination은 공식 `navigate` action을 사용합니다.
