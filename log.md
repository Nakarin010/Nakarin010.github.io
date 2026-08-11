# Progress log

## 2026-08-11 20:45 +07 — Mobile surname visibility

- Reduced the mobile homepage-name scale so the unbroken “Phoorahong” surname, including its final “g”, fits inside the hero card.

## 2026-08-11 20:40 +07 — Project-detail action styling

- Applied the black primary-button style to every project-details action on the project cards.

## 2026-08-11 20:37 +07 — Project-card GitHub actions

- Added a GitHub action beside the detail action on project cards 03–06, matching the first card’s cover layout.
- Marked those new GitHub URLs as TODO placeholders until their repositories are available.

## 2026-08-11 20:28 +07 — Project detail templates

- Added dedicated TODO detail templates for project cards 02–06.
- Connected every project card to its corresponding detail page while retaining the existing Dermalytix page for card 01.

## 2026-08-11 20:21 +07 — Notebook project-heading wrap

- Widened the project-page heading measure so “building, testing” stays on the same line at notebook viewport widths.
- Kept the existing small-screen typography breakpoint unchanged.

## 2026-08-10 21:20 +07 — Project card placeholders expanded

- Added project cards 03–06 using the existing card component structure.
- Included status, description, technology tags, and detail-action placeholders in each new card.

## 2026-08-10 21:13 +07 — Resume cache refresh

- Added a version query to the Resume URL so visitors receive the updated R2 `inline` response while the prior cached URL expires or is purged.

## 2026-08-10 21:07 +07 — Resume preview link

- Updated the Resume contact link to open in a new browser tab for in-browser PDF preview.
- Corrected the Resume icon markup and removed the HTML download instruction.
- Documented the required R2 response metadata for preview behavior.

## 2026-08-08 — Portrait reveal flow simplified

- Made the portrait reveal one-way: the initial blurred preview reveals permanently after the first tap.
- Removed the unnecessary second-tap blur behavior.

## 2026-08-07 — Contact and typography cleanup

- Removed the contact-panel heading and supporting text, then centered Email, LinkedIn, and GitHub.
- Removed the green location/status dot.
- Reduced the mobile name scale and protected the surname from wrapping so “Phoorahong” remains fully visible.

## 2026-08-07 — Portrait reveal refinement

- Changed the portrait’s initial state to a heavily blurred full-image preview.
- A tap reveals the clear image with the existing restrained rainbow sparkle treatment and ends the interaction.

## 2026-08-07  — Portfolio redesign foundation

- Replaced the homepage with a focused identity/contact experience.
- Added a three-item navigation: Home, Projects, and GitHub.
- Added the attached portrait as `portrait.jpeg`.
- Added a one-way click/tap portrait reveal with spectral rainbow glow and sparkles.
- Added a project index and reusable project detail-page scaffold.
- Retired the old blog route by redirecting it to the homepage.
- Added `CNAME` and canonical metadata for `nakarinph.com`.
- Added TODO markers for personal copy, links, project details, and proof.
