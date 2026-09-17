# Glitter Aura 아키텍처

## 설계 의도

콘텐츠가 중심이 되는 사이트를 위해 여백·타이포그래피·얇은 선을 공통 언어로 사용합니다. 스타일은 `src/styles/main.css`의 semantic token으로 관리하고 레이아웃은 구조와 번역 key에 집중합니다.

## 계층 지도

`routes.json` → page layout → `_user_base` → G7 layout engine → component registry → template CSS.

Content와 community 목록·상세는 route slug 또는 `board_slug` query를 public `sirsoft-board` API의 path parameter로 전달합니다. 검색은 코어 `/api/search`의 `posts` 결과를 사용하고, 홈 최신글은 `/api/modules/sirsoft-board/boards/posts/recent`를 선택적으로 읽습니다. Community write/edit 화면은 `form-data`/`form-meta`를 읽은 뒤 공식 `apiCall`로 `POST`/`PUT`을 보내고, 상세 화면은 resource의 `is_owner`/`abilities`와 서버 권한을 함께 존중합니다. 게시글 삭제는 확인 UI 후 `DELETE`를 호출합니다. 댓글 수정·삭제는 로그인 소유권 또는 공식 비회원 비밀번호 검증 endpoint가 발급한 1회성 토큰을 사용하며, 성공 후 댓글 data source를 refetch합니다. 토큰은 페이지 범위 G7 local state에만 보관합니다. 게시글 상세 첨부는 `PostResource.attachments`의 `AttachmentResource` metadata와 서버가 제공한 `download_url`만 표시하며 URL을 조립하지 않습니다. 업로드·교체·제거는 독립적인 user-template FileUploader 등록/transport가 확인될 때까지 deferred입니다. 각 data source는 `auth_mode: optional`로 anonymous read permission을 존중하며 loading·empty·error 상태를 별도로 표현합니다.

## 디렉토리

`layouts/`는 route와 data flow, `lang/`은 visible text, `src/components/basic/`은 등록 가능한 semantic HTML wrapper, `src/styles/`는 template-only visual token입니다. API 응답의 본문과 검색 highlight는 G7 `HtmlContent`를 통해 렌더링합니다.
