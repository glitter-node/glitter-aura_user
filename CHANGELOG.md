# Changelog

## 1.4.36

- Added a compact, translated Glitter Aura header toggle that uses the established Gnuboard color-scheme state for light/dark switching on desktop and mobile.

## 1.4.35

- Fixed user-template dark-mode activation by applying the established Gnuboard color-scheme preference and system setting to the document theme state consumed by Aura's scoped dark tokens.

## 1.4.34

- Changed the template-scoped normal and display typography to one Korean/English system Gothic sans-serif stack without adding an external font dependency; intentional code monospace remains unchanged.

## 1.4.33

- Clarified Community post Create/Edit mode, board context, and HTML-source editing without introducing a new editor or content transformation.
- Connected title/content validation messages to their fields while preserving existing datasource retry, local-value retention, guest-field, secret, mutation, and cancel/success contracts.

## 1.4.32

- Integrated community post reading and discussion with explicit article semantics, board-context labeling, permission-aware comment visibility, and scoped navigation recovery.
- Cleared guest verification passwords immediately after successful verification and comment deletion while preserving existing mutation/refetch separation, reply behavior, and delete-target cleanup.

## 1.4.31

- Strengthened Community board landing with authoritative board identity, permission-backed Write visibility, scoped post loading/error recovery, and preserved board/search/pagination context.
- Preserved backend post ordering, pagination, visibility, native post destinations, and Content ↔ Community continuity without adding filters, ranking, or moderation features.

## 1.4.30

- Strengthened Home as a truthful entry point into Content, Community, Post, and Search journeys with verified destinations and compact latest-post/community discovery.
- Preserved datasource-scoped loading, empty, error, and retry behavior while keeping secret latest-post entries non-navigable when the public detail contract does not authorize access.

## 1.4.29

- Improved the authenticated account workspace with clearer Content continuation and richer, server-scoped recent authored-post context.
- Preserved profile/password mutation contracts, sensitive credential handling, account-scoped loading/error/retry states, and non-destructive personal-content navigation.

## 1.4.28

- Strengthened the Content browsing hub with clearer board context, verified community/write continuity, and denser post metadata using the public board and post resources.
- Preserved authoritative pagination context, scoped loading/error/empty recovery, and the existing Content detail route without adding sorting, filtering, or invented discovery signals.

## 1.4.27

- Made datasource error states recoverable with scoped retry actions across content, community, post, search, authoring, account, and related-content navigation surfaces.
- Preserved the distinction between loading, empty, no-result, permission, validation, and mutation states without retrying mutations.

## 1.4.26

- Corrected comment-delete success cleanup so a matching active edit or reply target is invalidated while unrelated targets remain preserved.
- Preserved delete-failure behavior and the existing authoritative comment/post refresh sequence.

## 1.4.25

- Improved community participation mutations with action-level duplicate protection, authoritative post and comment refreshes, clearer pending-state recovery, and safer reply/edit/delete target cleanup.
- Preserved the verified comment API, permission checks, guest verification, backend reply depth, and non-paginated thread behavior.

## 1.4.24

- Improved community post authoring with clearer create/edit hierarchy, board context, and permission-backed guest fields.
- Added field-level validation feedback for supported post fields, reliable saving/error recovery, duplicate-submit protection, and authoritative create/update navigation.
- Preserved the backend-provided content mode during edits without introducing an unsafe HTML authoring control; attachment authoring remains deferred until a complete user-template upload lifecycle is exposed.

## 1.4.23

- Improved community post reading hierarchy with clearer author and publication metadata, a focused reading measure, and a stronger transition into attachments, neighboring posts, and discussion.
- Added responsive rich-content treatment for paragraphs, headings, lists, links, quotes, code, images, tables, and long content while preserving the verified sanitized `HtmlContent` path.
- Made attachment filenames and authoritative size metadata easier to scan without changing download destinations or permissions.

## 1.4.22

- Improved navigation continuity across content, community, post detail, search, and account journeys.
- Added contextual return paths from community surfaces and kept Content and Account navigation active across their verified nested routes.

## 1.4.21

- Improved global and board-scoped discovery with authoritative result destinations, clearer result-count accuracy, and a distinct no-match state for board searches.
- Preserved search query continuity while making new searches start from the first result page and keeping result context readable across narrow layouts.

## 1.4.20

- Improved the authentication and account experience across login, registration, password recovery, profile editing, password changes and authenticated navigation.
- Added clearer field-level validation feedback, consistent saving/error recovery, password input semantics and account loading/error states while preserving the existing platform contracts.

## 1.4.19

- Added permission-aware threaded comment replies with a clear reply target, guest/member field handling, cancel and saving states, duplicate-submit protection, and responsive depth-aware presentation.

## 1.4.18

- Improved comment participation with board-permission-aware composer visibility, clearer guest/member fields, saving feedback, success feedback, and a counted comments heading.

## 1.4.17

- Improved community discovery with richer board browsing actions and clearer search reset navigation.

## 1.4.16 - 2026-09-17

### Added

- Added board-scoped post search and clear-search navigation to community lists.

### Improved

- Prevented repeated post/comment delete submissions while a request is in progress.
- Added distinct translated accessibility names for the footer's primary and utility navigation groups.

## 1.4.15 - 2026-09-17

### Fixed

- Corrected the header surface and hero decoration to follow the active Aura color tokens in dark mode.

## 1.4.14 - 2026-09-17

### Fixed

- Corrected community write and comment error bindings to use the supported `error.errors` response contract.
- Added scoped dark-mode color tokens for the declared dark-mode feature and removed root-level theme variable leakage.

## 1.4.13 - 2026-09-16

### Changed

- Removed filled backgrounds from normal Aura primary actions and refined their quiet editorial interaction treatment.

## 1.4.12 - 2026-09-16

### Changed

- Corrected multiline display-heading line-height for clearer Korean legibility while preserving Aura hierarchy and measures.

## 1.4.11 - 2026-09-16

### Changed

- Corrected the Contact email action presentation and refined local page spacing.

## 1.4.10 - 2026-09-16

### Changed

- Aligned Forgot Password with the refined auth-task hierarchy and improved recovery form and return-action rhythm.

## 1.4.9 - 2026-09-16

### Changed

- Aligned Register with the refined auth-page composition and improved agreement and action spacing.

## 1.4.8 - 2026-09-16

### Changed

- Refined Login hierarchy, authentication form measure and primary/secondary action rhythm.

## 1.4.7 - 2026-09-16

### Changed

- Refined internal-page typography and tightened Content/Search empty and pre-query composition.

## 1.4.6 - 2026-09-16

### Changed

- Refined empty-state composition, editorial bridge alignment and final CTA proportion on the home page.

## 1.4.5 - 2026-09-16

### Changed

- Refined home typographic hierarchy so the hero remains the single strongest display moment.
- Improved multilingual heading measure and tightened empty-state composition and vertical rhythm.

## 1.4.4 - 2026-09-16

### Added

- Added an account-local recent authored-post list with genuine loading, empty and error states.
- Preserved safe non-link rendering for private, blinded, deleted or otherwise uncertain post targets.

## 1.4.3 - 2026-09-16

### Fixed

- Added visible, accessible success and error feedback for profile and password updates.
- Corrected profile and password submitting states to prevent duplicate submissions.

## 1.4.2 - 2026-09-16

### Fixed

- Exposed the existing board-configured private-post option in Community write and edit forms without changing the post API contract.

## 1.4.1 - 2026-09-16

### Fixed

- Corrected Aura label bindings to use the supported native `htmlFor` property across Search and Community forms.
- Added explicit labels and autocomplete metadata to guest comment author and password fields.

## 1.4.0 - 2026-09-16

### Added

- Added a public password-recovery journey with request and reset pages using the existing enumeration-resistant auth API contract.
- Added a restrained recovery entry link to the Aura login page with Korean and English translations.

## 1.3.0 - 2026-09-16

### Changed

- Added a verified board-context link to Search results so readers can move from intentional retrieval into the matching Content board without changing result destinations.

## 1.2.4 - 2026-09-16

### Changed

- Aligned the Aura-owned login, registration and account surfaces with the shared internal page and form system without changing authentication or authorization contracts.

## 1.2.3 - 2026-09-16

### Changed

- Reworked `/about` into a quiet template identity and orientation page rather than a minimal placeholder.
- Added editorial identity, working principles, Content/Search/Community rhythm, and verified continuation links using static i18n content.

## 1.2.2 - 2026-09-16

### Changed

- Refined Community post detail with verified board context, conversation metadata and in-community previous/next navigation.
- Preserved the existing safe content renderer, attachment downloads and comment lifecycle while respecting board comment availability.
- Added verified board context to Community write/edit forms.

## 1.2.1 - 2026-09-16

### Changed

- Refined the supported `/community/{slug}` route into a board-context community surface using verified board identity, description, post count and conversation metadata.
- Preserved native community post destinations, write permission gating and pagination context while keeping the unsupported `/community` directory route out of scope.

## 1.2.0 - 2026-09-16

### Changed

- Refined `/search` as a native Glitter Aura retrieval surface with an intentional initial state, submitted-query context, quiet result counts and denser editorial scanning rhythm.
- Bound post results to the verified Aura content detail route and retained the real core search pagination contract.
- Rendered verified search titles and previews through escaped text bindings instead of HTML content rendering.

## 1.1.0 - 2026-09-16

### Changed

- Reworked the `/content/{id}?board_slug={slug}` destination into a focused reading surface with verified board context, quiet metadata, safe article-body rendering, attachment downloads and optional adjacent-post navigation.
- Added responsive reading-width, typography and rich-content resilience rules scoped to the content detail page.

## 1.0.9 - 2026-09-16

### Changed

- Refined `/content` with verified selected-board metadata and a direct return to board selection.
- Added quiet sequence metadata to populated post rows while preserving the existing pagination and board-scoped API contract.

## 1.0.8 - 2026-09-16

### Added

- Added a public board-context directory to `/content` so visitors can enter the supported board-scoped content index.
- Added compact loading, error and empty states for board discovery while preserving the existing paginated post index.

## 1.0.7 - 2026-09-16

### Fixed

- Increased the contrast of soft metadata and footer text on Aura surfaces.
- Strengthened the keyboard focus indicator contrast across links, buttons and form controls.

## 1.0.6 - 2026-09-16

### Changed

- Refined home-page chapter rhythm, CMS heading hierarchy, editorial transitions and responsive spacing.
- Reduced empty-state whitespace while preserving the existing populated content structures and data sources.

## 1.0.5 - 2026-09-16

### Changed

- Replaced the two repeated static editorial sections after Community Highlight with one concise Editorial Bridge into the design principles.
- Removed the obsolete placeholder content state, iteration and /about action from the replaced section.
- Added Korean and English bridge copy focused on reading, discovery and return.

## 1.0.4 - 2026-09-16

### Added

- Replaced the static capability rows with a public board discovery Community Highlight index using real names, descriptions, post counts and verified community routes.
- Added compact loading, error and empty states for the public community directory.

## 1.0.3 - 2026-09-16

### Changed

- Replaced the static home statement with a chronological Latest Content editorial index using the public recent-posts contract.
- Preserved the existing Aura loading, error and empty-state patterns and added an explicit empty-content message for the live production state.

## 1.0.2 - 2026-09-16

### Added

- Added a real-data Selected Stories section immediately after the hero, using the public recent-posts API and an asymmetric primary/secondary reading order.
- Added Korean and English labels for the new editorial section while preserving existing loading, empty and error states.

## 1.0.1 - 2026-09-15

### Fixed

- Kept authenticated desktop logout inside a compact Account dropdown overlay without adding header flow height.
- Preserved the existing guest and mobile navigation models while exposing the official logout action through the component action contract.
- Finalized the authenticated identity dropdown with nickname-to-name fallback, conditional administrator access, and the preferred `/mypage/profile` destination while retaining `/account` compatibility.

## 1.0.0 - 2026-09-15

### Stable

- Declared the stable Glitter Aura user-template release after the 0.9.0 readiness audit.
- Consolidated the visual, content, community, interaction, authentication, navigation and error-state foundations for production deployment.
- Included the verified `GlitterAuraUser` IIFE global, root-key translation references and canonical `auth_account.logout` reference.

### Known limitations

- Attachment upload/replacement/removal, nested replies, moderation, reactions, notifications, guest verification persistence and commerce remain outside the template scope.
- The browser document title remains controlled by G7/server application configuration; route `meta.title` is not automatically connected to `document.title`.

## 0.9.0 - 2026-09-15

### Added

- Added a shared page-shell rhythm and practical page-level heading semantics across content, community, search, account and utility pages.
- Added restrained active-route treatment to desktop and mobile navigation, including nested-route awareness and `aria-current` coverage.
- Added a consistent responsive error-page shell while preserving the official G7 error layout contract.

### Changed

- Refined small-screen navigation, long-title wrapping, state spacing and recovery-page presentation without changing data or mutation contracts.
- Refined long-form post typography, table/link overflow handling, comment landmark labeling and pagination wrapping for reading continuity.
- Kept document titles server-owned because G7 does not currently bridge layout `meta.title` to the browser document title.

## 0.7.3 - 2026-09-15

### Fixed

- Corrected route metadata translation references to use the existing root-key language resources.
- Reused the canonical `auth_account.logout` translation without adding a duplicate key.

## 0.7.2 - 2026-09-15

### Fixed

- Corrected layout translation references to match the root-key language resource contract.

## 0.7.1 - 2026-09-15

### Fixed

- Corrected the user-template IIFE global contract so G7 can load `GlitterAuraUser` from the component bundle.
- Synchronized component manifest and package metadata with the hotfix version.

## 0.7.0 - 2026-09-15

### Added

- Connected login and registration screens to the official G7 user authentication contract
- Added auth-aware header navigation and logout action
- Added authenticated account identity, profile update and password-change foundations
- Added two-factor login continuation handling

### Changed

- Replaced auth and account placeholders with accessible, responsive forms and server-error states
- Kept password reset, email verification and account deletion deferred until their user-facing flows are separately designed

## 0.6.0 - 2026-09-15

### Added

- Added official post attachment metadata display and protected download links on community detail pages
- Added responsive, text-safe attachment rows using the sirsoft-board `AttachmentResource` contract

### Changed

- Kept upload, replacement and removal deferred because the user-template bundle has no supported FileUploader registration/transport surface independent of `sirsoft-admin_basic`
- Kept comment attachments, previews and custom upload transport outside this release

## 0.5.0 - 2026-09-15

### Added

- Added authenticated comment editing and deletion using the sirsoft-board comment contract
- Added guest comment password verification with a one-time, page-scoped verification token
- Added inline comment editing, destructive-action confirmation, and comment-level error states

### Changed

- Added per-comment edit, delete, verification and submitting state handling with comment refetch after mutation
- Kept guest verification tokens out of rendered UI, logs and persistent browser storage
- Kept attachments, nested replies, moderation and reactions deferred

## 0.4.0 - 2026-09-15

### Added

- Added community post create and edit routes using the sirsoft-board user form contract
- Added capability-aware post delete confirmation and comment list/create interaction foundation
- Added Korean and English mutation feedback and form state translations

### Changed

- Added the official `Textarea` basic component and interaction styling
- Kept attachments, nested replies and moderation outside this foundation

### Security

- Mutation requests use G7 `apiCall`, optional Sanctum authentication and the built-in CSRF path; no custom API client or sanitizer was added

## 0.3.0 - 2026-09-15

### Added

- Connected content and community layouts to the sirsoft-board public read APIs
- Added route-context board browsing for `/community/:slug` and `/board/:slug`
- Added live latest-post preview on the home page and post search through the core search API
- Added loading, empty, error, pagination and sanitized HTML content rendering states

### Changed

- Added `sirsoft-board >=1.1.2` as the only template module dependency
- Kept board selection generic through route parameters or the `board_slug` query; no board slug is hardcoded

## 0.2.0 - 2026-09-15

### Added

- Glitter Aura visual system with editorial tokens, responsive rhythm and accessible focus states
- Responsive `GlitterHeader`, `GlitterFooter`, `GlitterHero`, `GlitterSectionHeader`, `GlitterFeatureGrid`, `GlitterEditorialSplit` and `GlitterCTA` composites
- Showcase home experience with statement, capabilities, principles and closing CTA sections

### Changed

- Reworked the shared base layout to use semantic navigation, main and footer landmarks
- Replaced the starter home composition with a text-led, asymmetric editorial experience
- Kept all public copy in Korean and English translation resources

## 0.1.0 - 2026-09-15

- 최초 foundation 공개
- 범용 콘텐츠·소개·검색·인증·계정·정책·오류 화면 추가
- 한국어·영어 locale과 responsive Glitter Aura token 추가
