# Progress log

## 2026-08-21 19:52 +07 — Texture and link verification

- Verified the rough paper texture in the rendered card.
- Verified LinkedIn and GitHub hrefs, new-tab targets, click isolation, and keyboard flip behavior.
- Verification: design QA passed with no actionable P0/P1/P2 findings.

## 2026-08-21 19:42 +07 — Card texture and contact links

- Added a generated bone-paper texture asset to the card faces for a subtle rough-stock finish.
- Added real LinkedIn and GitHub anchors to the back face.
- Preserved card flipping while allowing link clicks to navigate without toggling the card.
- Verification: final rendered-browser checks recorded in the later QA entry.

## 2026-08-21 19:34 +07 — Dedicated card final verification

- Verified the full-black desktop page, active “A card” navbar state, responsive mobile dimensions, and settled back-face screenshot.
- Verified click behavior on the dedicated page: front → back → front.
- Verification: design QA passed with no actionable P0/P1/P2 findings.

## 2026-08-21 19:25 +07 — Dedicated A card page

- Moved the virtual business card out of the homepage into a dedicated `card.html` page.
- Added an “A card” link to the primary navigation across the homepage, projects index, and project detail pages.
- Changed the card page to a full black gallery treatment while preserving the click-only front/back interaction.
- Verification: initial desktop render checked; final responsive and interaction checks recorded in the later QA entry.

## 2026-08-21 19:18 +07 — Card visual QA refinement

- Increased the card height and refined the mobile heading wrap after rendered screenshot review.
- Added the final design QA report for the desktop, mobile, and back-face states.
- Verification: focused back-state screenshot reviewed; front → back → front interaction rechecked successfully.

## 2026-08-21 19:07 +07 — Virtual business card

- Added a dark-gallery virtual business card section to the homepage using the existing light spectral-glass system around it.
- Added a single-card front/back interaction that flips only after click or tap and can be toggled back from either state.
- Updated homepage documentation for the new card interaction.
- Verification: rendered desktop and mobile screenshots checked; front → back → front click behavior verified in a headless browser; syntax and whitespace checks passed.

## 2026-08-12 13:46 +07 — Orientation-aware project screenshots

- Removed the fixed 4:3 crop from project-detail proof images so screenshots retain their original aspect ratios.
- Added automatic portrait detection: mobile screenshots are centered at a constrained width while desktop screenshots use the full gallery width.

## 2026-08-12 08:35 +07 — Responsive project intro copy

- Removed the fixed 580px width cap from the project-page supporting copy so short trailing words no longer wrap while notebook-width space remains available.
- Kept wrapping viewport-driven for consistent notebook and mobile presentation.

## 2026-08-12 06:40 +07 — Reusable R2 project galleries

- Added a consistent two-rectangle screenshot gallery to every project-detail page.
- Each gallery uses editable `cdn.nakarinph.com/projects/` R2 image URLs, opens images full-size, and stacks cleanly on small screens.

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
