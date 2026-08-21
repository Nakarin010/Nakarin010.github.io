# Design QA — Dedicated A card page

## Source visual truth

- Selected direction: dark-gallery concept from the ideation set.
- Source image: `/Users/nakarin/.codex/generated_images/01a0242a-3a97-7a82-9cef-743bf2f247ba/exec-ae3a631c-d692-4b3c-a462-09dfab902cb9.png`.
- Texture asset: `/Users/nakarin/gitweb/Nakarin010.github.io/assets/bone-paper-texture.png`.
- Selected background asset: `/Users/nakarin/gitweb/Nakarin010.github.io/assets/black-matte-background.png`.
- Source state: dark page with bone-colored business card states shown as a concept reference.

## Implementation evidence

- Route: `http://127.0.0.1:4173/card.html`.
- Desktop front and reverse states with selected matte background: inspected in the in-app browser at a 1280px viewport.
- Mobile front state with selected matte background: the existing 390px no-overflow measurement remains valid; the background asset is responsive and cover-positioned.
- The implementation uses one visible card at runtime; the source’s multiple card views communicate the flip concept only.

## Comparison

### Full view

- The dedicated page remains fully black, with “A card” active in the navbar.
- The black page now uses the selected matte charcoal background with a soft center lift and darker edges, keeping the bone card as the focal point.
- The bone card now has a subtle rough paper surface while retaining readable black typography.
- The front pairs the N monogram with the exact label “WORK”, separated by a deliberate vertical gap.
- The flipped face now preserves the Image 1 treatment: readable contact content on the left with upside-down site, N, name, and role echoes on the right.
- The card starts front-facing and flips only through deliberate interaction.

### Focused region

- Front: generated low-contrast bone paper texture, near-black ink, serif identity treatment, hairline inner border, N monogram, separated “WORK” label, and restrained flip affordance.
- Back: matching textured surface with real LinkedIn and GitHub anchors, each opening in a new tab, plus non-interactive upside-down identity echoes matching the reference.

## Required fidelity surfaces

- Fonts and typography: Georgia is used for the editorial card identity; the existing system sans remains for navigation, metadata, and contact details.
- Spacing and layout rhythm: texture is applied inside the existing card bounds without changing card proportions or layout rhythm.
- Colors and visual tokens: page background `#101014`, stage `#17171c`, bone card `#e9e3d6`, and near-black card ink remain intact.
- Image quality and asset fidelity: the rough paper texture is a generated raster asset at `1254 × 1254`, and the selected matte background is a generated raster asset at `1672 × 1184`; no placeholder image, custom SVG, or CSS drawing was introduced.
- Copy and content: the back includes `https://www.linkedin.com/in/nakarin-phoorahong/` and `https://github.com/Nakarin010`, both with `target="_blank"`.

## Interaction verification

- Initial state: front visible, back hidden.
- Card click: front → back applies `is-flipped` and updates the accessible label.
- Link click: LinkedIn/GitHub hrefs resolve correctly and the card remains on the back.
- Keyboard: Enter on the card flips back to the front; Space is handled by the same keyboard path.
- No hover-triggered flip was added.
- Narrow viewport: at a 390px viewport, measured document scroll width stayed at 375px with no horizontal overflow; the stage measured 352.59px and the card 308.52px.
- In-app browser: clicked the card, confirmed `is-flipped`, confirmed the front became hidden and the back became visible, and visually inspected the restored reverse-face composition.

## Comparison history

1. Initial dedicated-page implementation established the full-black composition and single-card runtime state.
2. Texture refinement: added the generated bone-paper asset and verified the rendered card surface remains low-contrast and readable.
3. Link refinement: replaced passive contact text with real LinkedIn/GitHub anchors and excluded anchor clicks from the flip handler.
4. Post-fix evidence: desktop textured screenshot and browser state/link checks pass.
5. Marble and label refinement: added generated black marble background and paired a separated “WORK” label with the N monogram; desktop/mobile renders and interaction checks pass.
6. Reverse-face refinement: restored the upside-down identity echoes from Image 1 while preserving readable contact links; in-app browser verification passes.

## Findings

- No actionable P0, P1, or P2 findings remain for the reverse-face, texture, contact-link, and selected background changes.

## Final result

final result: passed
