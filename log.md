# Progress log

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
