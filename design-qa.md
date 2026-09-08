# Design QA — TOP SECRET identity dossier

## Scope and design decisions

The homepage, project archive, and six project-detail routes use an isolated archive theme. The existing GitHub Pages routes and framework-free architecture remain intact. `blog.html` remains a redirect. `card.html`, `css/style.css`, and `js/main.js` are frozen.

- Graphite background, bone-paper evidence, industrial amber actions, cyan metadata, and restrained red classification stamps.
- Condensed system display fonts, readable system sans-serif body text, and monospace labels; no external font dependency.
- Fiction is limited to archive terminology and the generated Bangkok atmosphere. Project descriptions preserve source facts and do not add deployment, diagnostic-accuracy, or financial-performance claims.
- Homepage order: archive masthead, identity, 320 × 420 portrait, Tech focus, subject profile, three divisions, three featured records, full archive link, contact and résumé.
- Cases retain numbers 01–06 when grouped into Human Signals, Collective Resilience, and Market Intelligence.
- Board records remain semantic links on a fixed board. Lamp illumination changes the scene without making the unlit text unreadable.
- Full case content remains available without JavaScript. Enhanced folder controls reveal and focus the dossier. The cover remains as the document header.

## Image provenance and quality

The original image was generated with the built-in imagegen tool after the requested skill CLI could not complete because its configured API account returned `credit_balance_exhausted`. No API credits were purchased. The built-in generation succeeded.

Final generation prompt:

> Generate one original wide cinematic environment image for a portfolio website. Use case: stylized-concept. Scene: fictional neo-noir future Bangkok in 2048, monumental concrete architecture with subtle Thai architectural silhouettes across dense rooftops, rain-wet city, soft amber illumination and cold cyan haze, graphite-black palette and atmospheric depth. Wide landscape composition, restrained low-contrast detail suitable as a dim decorative website background. No recognizable film characters, no logos, no text or signage, no watermark. Save the image as a local file if supported. The final asset should show the city only, no UI mockup.

- Generated source: `/Users/nakarin/.codex/generated_images/01a07fb1-128a-7462-8696-30c43118c428/exec-b25bf2de-6d13-433f-9381-7663e5bb02c2.png` (retained).
- Website asset: `output/imagegen/bangkok-2048.webp`, 1944 × 809, 1,623,716 bytes.
- Following the user's quality preference, the delivered WebP is lossless at the full generated resolution. Pillow conversion options: `lossless=True, quality=100, method=6`; no resize. A decoded RGB pixel comparison against the original returned no differences.
- The generation tool exposes no quality/size flags. The initial unsuccessful CLI request used `gpt-image-1.5`, `1536x1024`, and `quality=high`; those are not attributed to the successful built-in output.
- CSS applies the image as a decorative, low-contrast atmosphere behind text. It contains no essential information. No social-preview image was generated.

## Verification evidence

Local preview: `http://127.0.0.1:8765/`. Temporary browser scripts, JSON results, and screenshots from this run are under `/private/tmp/dossier-qa/`; these are local QA artifacts, not published website assets.

The verification used cached Playwright Chromium. The installed skill wrapper could not expose its CLI binary, so browser automation used the cached runtime directly without adding a project dependency.

### Frozen card baseline

Fresh before/after screenshots cover desktop and mobile front/back states and the open mobile navigation. All five after screenshots are byte-identical to their before counterparts. Click, Enter, Space, GitHub popup behavior, and archive navigation pass. The card link does not trigger a flip. No card JavaScript errors were observed.

SHA-256 values remain exactly:

```text
card.html     4c7e406c5911de63dda2d3c993725de3cbd1bcae2a622948d5f1bbd753e5cf13
css/style.css de32ad6d0301bcab4a3a1867162ff35b19b94e518b9ae9820093f0a660a31b74
js/main.js    f97d3d080f7335f26ddcb0b9f51fd91ec6e7deb4931fe6fedce2193e877621ed
```

### Interaction checks

- All six folder controls support click, Enter, and Space; focus moves to `#case-dossier` after opening.
- Every dossier remains readable without JavaScript; mobile navigation has a no-JavaScript fallback.
- Lamp defaults off; Enter and Space toggle illumination and `aria-pressed`. Lamp and mute state persist across reload/navigation in the current session.
- Instrumented real Web Audio reports no context/oscillator before deliberate action, one brief oscillator after lamp/folder activation, and no oscillator for muted actions.
- Reduced motion produces immediate disclosure and zero transition/animation duration. Unavailable storage/audio does not prevent navigation or disclosure.
- Mobile portrait remains exactly 320 × 420 before and after verification, with identity text → portrait → Tech focus order.
- Keyboard focus outlines are visible on dark and paper surfaces. Small-text contrast is at least 5.28:1 on the unlit board and 5.45:1 on folder paper after refinement; primary dark-page body and muted text exceed 7:1. These are checks of the defined text/surface pairs, not a claim of exhaustive WCAG conformance.

### Final responsive matrix

All eight initial routes were checked at 1440 × 900, 1024 × 768, 390 × 844, and 320 × 568 (32 views), plus all six opened dossiers at each size (24 views). The final matrix reported zero horizontal overflow, zero JavaScript page errors, zero failed resources, and successful loading of all seven remaining screenshots. The lossless background loaded at all four homepage sizes.

Final screenshots include `preview-home-desktop.png`, `preview-home-mobile.png`, `preview-home-mobile-full.png`, `preview-archive-lit.png`, `preview-open-dossier.png`, and `final-open-*.png` in the local artifact directory. The main agent visually inspected the homepage, unlit/lit archive, mobile layouts, folder covers, and opened dossier, then added spacing between the desktop lamp focus ring and division heading.

### Content and resources

Independent source checks cover unique IDs, internal routes/fragments, ARIA targets, heading hierarchy, tag nesting, duplicate attributes, nested interactive elements, descriptions/canonicals, naming, statuses, and external-link attributes. No TODO/template-placeholder remnants remain on the redesigned routes.

33 original external URLs were probed. Three screenshot endpoints and the TradingJournal repository returned HTTP 404 and were removed from visible content:

- `https://cdn.nakarinph.com/projects/financial-agentic-chatbot-02.webp`
- `https://cdn.nakarinph.com/projects/trading-journal-01.webp`
- `https://cdn.nakarinph.com/projects/trading-journal-02.webp`
- `https://github.com/Nakarin010/TradingJournal`

The other checked endpoints returned HTTP 200. The optionVIZ site timed out initially and succeeded on retry. A 404 repository response does not establish whether the repository is private or missing. TradingJournal now states that screenshots are not yet available. Seven remaining screenshot descriptions were checked against rendered image content, including Thailand/Myanmar emergency information and the actual financial visualizations.

### Visual refinement history

1. Inspected desktop homepage/archive and narrow homepage/archive/folder screenshots.
2. Fixed a rotated connection-line pseudo-element that caused mobile archive widths of 450/406 pixels at 390/320-pixel viewports; the mobile connection is now a contained vertical line.
3. Refined folder metadata, cover actions, mobile spacing, and focus scroll offset beneath the sticky navigation.
4. Darkened small text on paper to `#414c42` after numerical contrast checks.
5. Added the generated city atmosphere, then replaced the initial lossy export with the full-resolution lossless asset requested by the user.

## Limitations

- Verification uses Chromium; Safari/Firefox and physical-device testing were not performed.
- Structural HTML and browser parsing were checked. Full HTML5 standards validation was not run because the available Tidy predates HTML5 and no compatible validator was installed.
- Audio creation/timing/mute were instrumented; perceived loudness was not subjectively tested through speakers.
- The frozen card's existing pale mobile menu has poor contrast; it was preserved as required.
- TradingJournal currently lacks available public screenshots and a verified repository link. No evidence or outcome claims were invented to replace them.
- Third-party links can change after this verification. No production deployment was requested or performed.
