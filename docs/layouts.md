# Glitter Aura 레이아웃

## 레이아웃 목록

`home`, `about`, `content/index`, `content/detail`, `community/index`, `community/detail`, `search`, `auth/login`, `auth/register`, `account/index`, `pages/contact`, `pages/policy`, `errors/403`, `errors/404`, `errors/500`이 `_user_base`를 상속합니다.

## 라우트 매핑

라우트와 layout 매핑의 source of truth는 루트의 `routes.json`입니다. G7 user template의 관행에 따라 인증 경로는 `/login`, `/register`를 사용합니다. 콘텐츠는 `?board_slug=...`, 커뮤니티는 `/community/:slug` 또는 `/board/:slug`로 게시판 context를 전달합니다. 게시판 slug는 특정 값으로 고정하지 않습니다.
# Attachment surface

`community/detail` renders only attachments returned by `PostResource` and links the server-provided `download_url`. It does not construct storage paths or transform attachment HTML. Post upload, replacement and removal remain deferred until the official `FileUploader` can be registered for this standalone user-template bundle without adding a custom transport.
