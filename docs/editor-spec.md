# Glitter Aura 편집기 스펙

## 선언 요약

0.1.0은 전용 `editor-spec.json`을 제공하지 않습니다. G7 basic component의 공통 편집기 계약을 사용합니다.

## 선언 블록

별도 선언 블록이 없습니다. 이후 template-only prop이나 composite component를 추가할 때 공식 editor spec 규약에 맞춰 추가합니다.

## 컴포넌트 팔레트

현재 팔레트는 `components.json`의 basic component 목록과 동일합니다.

## 샘플 데이터와 페이지 상태

샘플 API 데이터와 demo 콘텐츠를 제공하지 않습니다. API가 연결된 실제 상태는 해당 모듈의 격리된 개발 환경에서 검증합니다.

## 수정 시 동반 의무

컴포넌트 표면, layout prop 또는 데이터 source가 추가되면 editor spec과 관련 레이아웃 검증을 함께 갱신합니다. production checkout에서는 isolation이 증명되지 않은 테스트를 실행하지 않습니다.
