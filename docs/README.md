# 그누보드7 Glitter Aura 개발자 문서

## 문서 목차

- [아키텍처](architecture.md)
- [컴포넌트](components.md)
- [레이아웃과 라우트](layouts.md)
- [핸들러](handlers.md)

## 1.4.32 게시글 읽기·토론 통합

1.4.32는 `/community/{slug}/{id}`를 보드 맥락, 안전한 본문·첨부파일 읽기, 이전/다음 탐색, 댓글·답글·수정·삭제 참여가 연결된 하나의 읽기 화면으로 정리합니다. 댓글 읽기 권한이 없는 경우 토론 영역을 표시하지 않고, 게시글·댓글·탐색 datasource 오류는 서로의 성공한 내용을 가리지 않습니다. 비회원 댓글 검증 비밀번호는 성공 즉시 정리하며, 댓글 mutation과 authoritative refresh의 분리는 유지합니다.

## 1.4.33 게시글 작성 경험

1.4.33은 Community 게시글 Create/Edit 폼의 모드와 보드 맥락을 명확히 하고, 제목·본문 검증 오류를 입력 필드에 연결합니다. HTML 게시글은 기존 HTML 원문 편집 한계를 안내하며 content mode와 입력값 보존, datasource retry, 비밀글·비회원 필드, 성공·취소 경로를 변경하지 않습니다.

## 1.4.36 다크 모드 토글 및 1.4.35 활성화 수정

1.4.36은 기존 그누보드 색상 모드 계약을 사용하는 Glitter Aura 헤더 다크 모드 토글을 데스크톱과 모바일에 제공합니다. 1.4.35의 저장된 색상 모드·시스템 설정 초기화와 1.4.34의 일반 UI·본문·display용 시스템 고딕 스택은 유지합니다.

## 1.4.31 커뮤니티 보드 랜딩 개선

1.4.31은 `/community/{slug}`를 보드 참여의 기준점으로 다듬습니다. 보드 상세 권한에서 사용자 작성 가능 여부를 확인하고, 게시글 오류가 보드 맥락을 가리지 않도록 하며, 서버 검색·페이지네이션의 보드/쿼리 연속성과 게시글 메타데이터를 유지합니다. 새 필터·정렬·추천·관리 기능은 추가하지 않습니다.

## 1.4.30 홈·교차 여정 개선

1.4.30은 Home의 최신 게시글·커뮤니티 탐색을 검증된 `/community`, `/content`, `/search` 목적지와 연결합니다. 공개 조회 계약을 벗어나지 않도록 비밀글은 상세 링크 없이 제목만 표시하며, 최신글·커뮤니티의 loading·empty·error·datasource retry 상태와 기존 부분 실패 격리를 유지합니다. 추천·트렌딩·개인화·새 API는 추가하지 않습니다.

## 1.4.29 계정·개인 작성글 개선

1.4.29는 인증된 사용자 전용 `/api/modules/sirsoft-board/me/board-activities?activity_type=authored` 계약을 사용해 최근 작성글의 보드·본문 미리보기·댓글·조회 맥락과 안전한 게시글/커뮤니티 이동을 제공합니다. 프로필 및 비밀번호 변경의 기존 `PUT /api/me`, `PUT /api/me/password` 계약과 민감한 값 정리를 유지하며, 삭제·추천·알림·전체 활동 피드는 추가하지 않습니다.

## 1.4.28 Content 디렉터리·탐색 개선

1.4.28은 공개 `sirsoft-board` 게시판·게시글 리소스만 사용해 Content 디렉터리의 게시판 발견, 선택 보드 맥락, 커뮤니티·글쓰기 진입, 게시글 메타데이터와 페이지 탐색 연속성을 개선합니다. `/content/:id`의 기존 상세 경로와 서버 권위 페이지네이션을 유지하며, 정렬·필터·추천 신호·새 API는 추가하지 않습니다.

## 1.4.27 사용자 상태·복구 개선

1.4.27은 콘텐츠·커뮤니티·게시글·검색·작성·계정 화면의 datasource 오류에 범위가 명확한 다시 시도 동작을 제공하고, loading·empty·no-result 상태가 서로 섞이지 않도록 유지합니다. mutation 오류에는 datasource 재시도 동작을 사용하지 않습니다.

## 1.4.26 corrective release

1.4.26은 1.4.25의 corrective release입니다. 댓글 삭제 성공 후 삭제된 댓글을 편집 중이거나 답글 대상으로 지정한 경우에만 해당 로컬 참여 상태를 정리하며, 다른 댓글의 편집·답글 상태와 기존 authoritative refresh 동작은 보존합니다.

## 1.4.25 참여 mutation 개선

댓글·답글·수정·삭제는 검증된 sirsoft-board 공개 계약을 유지하면서 중복 dispatch를 막고, 성공 후 댓글과 게시글 datasource를 다시 읽어 권위 있는 결과와 댓글 수를 반영합니다. 실패 시 입력과 대상 상태를 유지해 재시도할 수 있으며, 댓글 페이지네이션이나 낙관적 로컬 thread 재구성은 추가하지 않습니다.

## 지원 범위

Glitter Aura 1.4.28는 G7 basic component와 최소 composite component 세트, 공통 page-shell 리듬을 제공하는 stable user template입니다. `sirsoft-board`의 공개 읽기 API와 사용자 게시글·댓글 lifecycle, 게시글 첨부 metadata/download, 코어 통합 검색 API를 사용합니다. 검색은 API가 제공하는 권한 적용 게시판 맥락·목적지 URL·미리보기·결과 정확도를 사용하고, 게시판 검색의 무일치 상태를 게시판 빈 상태와 구분합니다. datasource 오류는 해당 datasource만 다시 시도하며 mutation을 자동 재실행하지 않습니다. 헤더는 실제 pathname 기반 중첩 경로 active state를 표시하며, 커뮤니티 목록과 게시글 상세는 전체 콘텐츠 디렉터리로 돌아가는 상위 경로를 제공합니다.

게시글 작성·수정은 공개 `POST`/`PUT` 계약에 맞춰 게시판 컨텍스트, 권한 기반 비회원 필드, 필드별 검증 오류, 저장 중 중복 제출 방지, 실패 시 재시도, 성공 후 상세 이동을 제공합니다. 수정 시 서버가 제공한 `content_mode`를 보존하지만 임의 HTML 입력 컨트롤은 추가하지 않습니다. 첨부 업로드·교체·삭제는 독립적인 user-template FileUploader surface가 확인될 때까지 deferred입니다.

인증 화면은 공식 login/loginTwoFactor/logout handler와 register, forgot-password, reset-password API를 사용하며, 계정 화면은 현재 사용자 조회, 프로필 수정, 비밀번호 변경 계약을 사용합니다. 댓글 작성은 게시판의 `abilities.can_write_comments` 계약을 따르며, 답글은 서버가 계산한 `depth`와 게시판 `max_comment_depth`를 존중합니다. 댓글 수정·삭제와 답글 작성은 같은 공개 댓글 계약을 사용하고 비회원 토큰은 현재 페이지의 local state에만 둡니다.

긴 본문은 G7 `HtmlContent` sanitization 경로를 유지하면서 제목·문단·목록·인용·표·코드·이미지·긴 링크를 읽기 폭 안에서 표현합니다. 첨부파일은 공개 API의 파일명·크기·다운로드 URL을 사용하고, 이전/다음 게시글과 댓글 영역을 본문 뒤의 읽기 흐름에 맞춰 배치합니다. 라우트 `meta.title`과 오류 레이아웃은 G7의 공식 계약을 사용하며 템플릿이 임의 `document.title` 처리를 추가하지 않습니다.
