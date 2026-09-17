# Glitter Aura 컴포넌트

## 제공 컴포넌트

A, Article, Button, Div, Form, H1, H2, H3, Hr, Img, Input, Label, Li, Nav, P, Section, Span, Time, Ul을 basic component로 제공합니다. Article과 Time은 콘텐츠의 landmark와 날짜 의미를 보존하기 위한 semantic wrapper입니다.

반복 구조나 responsive/accessibility 동작이 필요한 표현만 GlitterHeader, GlitterFooter, GlitterHero, GlitterSectionHeader, GlitterFeatureGrid, GlitterEditorialSplit, GlitterCTA composite로 제공합니다. 게시글 데이터 자체를 정규화하는 별도 템플릿 API는 만들지 않고, G7의 `data_sources`, `Pagination`, `HtmlContent` 계약을 layout에서 조합합니다.
