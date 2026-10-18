# Nakarin Phoorahong portfolio

A framework-free portfolio for Nakarin “Drive” Phoorahong, hosted on GitHub Pages at `https://nakarinph.com`. The identity and project pages use a fictional archive recovered from 2048; personal information and project descriptions remain factual.

## Run locally

No build step or package installation is required. From the repository root, run:

```sh
python3 -m http.server 8765
```

Open `http://localhost:8765/index.html`. Relative links also support the repository’s GitHub Pages URL.

Preview the custom missing-page design at `http://localhost:8765/404.html`. Python's basic static server does not automatically use this file for missing URLs; GitHub Pages does after deployment. The 404 uses root-relative links and assets so it also works at deeply nested missing addresses on the custom domain or user-site URL.

## Structure

- `index.html` — identity, fixed portrait verification, technology focus, featured projects, and contact channels.
- `projects.html` — Projects / Mission Archive, with six linked records grouped by division on a fixed operations board.
- `projects/` — six stable case-file routes with factual contributions, tools, status, and available screenshots.
- `css/dossier.css` — graphite, bone-paper, amber, and cyan design system, scoped to `.dossier-page`.
- `404.html` and `css/not-found.css` — responsive redacted-record error page with Home and Mission Archive recovery links.
- `css/archive-footer.css` — shared paper dossier footer with contact, résumé, social links, and Back to top.
- `assets/archive-grain.svg` — small local decorative paper texture used by the 404 and footer.
- `js/dossier.js` — accessible folder opening, pull-chain lamp, and optional procedural interaction sounds.
- `output/imagegen/bangkok-2048.webp` — original generated Bangkok atmosphere, full 1944 × 809 resolution, lossless WebP (1,623,716 bytes). The decoded pixels match the generated source exactly; it is displayed dimly behind the homepage for readability.
- `card.html`, `css/style.css`, `js/main.js` — preserved card page and shared behavior. The dossier pages still load the shared files for navigation, portrait, and gallery behavior. Do not add dossier assets to the card route.
- `blog.html` — retired route redirecting home.
- `design-qa.md` — design decisions, verification evidence, and known limitations.
- `log.md` — chronological development record.
- `CNAME` — custom-domain configuration.

## Interaction and accessibility

Each case opens with a folder cover. With JavaScript, **Open Case File** supports click, Enter, and Space, then focuses the revealed dossier. With JavaScript disabled, the full record is visible. Mobile navigation also remains accessible without JavaScript.

The archive lamp starts off while every record remains readable. The lamp button exposes its state with `aria-pressed`. `sessionStorage` keys `dossier-lamp` (`off`/`on`) and `dossier-muted` (`false`/`true`) remember preferences for the current visit. Blocked storage falls back to in-page state.

Sound starts enabled, but only deliberate lamp and folder actions can produce a brief, quiet synthesized sound. **Sound: on/off** is available throughout the redesigned pages. There is no ambient or autoplay audio. Reduced-motion preferences remove transitions; missing Web Audio disables the sound control gracefully.

The homepage’s mobile order is identity text → portrait → Tech focus. The portrait is always CSS-controlled at 320 × 420 pixels, including a full-width treatment at a 320-pixel viewport.

The paper footer is static HTML on the homepage, archive, six case pages, and 404, so its links do not depend on JavaScript. When changing its content, update all nine copies; styles are shared in `css/archive-footer.css`. The card route keeps its original footer. Back to top respects reduced-motion preferences. The 404 does not automatically redirect and is marked `noindex`; on mobile, duplicated record metadata is omitted to bring recovery links closer to the top.

The résumé opens in a new tab. Its R2 object must serve `Content-Type: application/pdf` and `Content-Disposition: inline` for browser preview. Available screenshots open their original images. TradingJournal currently has no available screenshots or verified public repository link.

## Verification

JavaScript syntax and whitespace checks:

```sh
node --check js/dossier.js
git diff --check
```

There is no framework build, bundler, or project test runner. The browser QA checklist covers all nine archive routes (including the 404) at desktop, tablet, 390 × 844, and 320 × 568 sizes; folder disclosure, navigation, lamp and sound state, no-JavaScript content, reduced motion, and gallery loading. Check a nested missing URL after deployment. When changing this design, inspect screenshots and compare document width against the viewport. See `design-qa.md` for checks actually performed and any environment limitations.

The frozen card baseline hashes are recorded in `design-qa.md`. Compare its desktop/mobile front, back, and mobile navigation against a fresh pre-change baseline when modifying other portfolio pages.

## GitHub Pages domain setup

1. Keep this repository configured as a user site (`Nakarin010.github.io`).
2. In the repository’s Pages settings, select the deployment branch/folder currently used by the site.
3. Add `nakarinph.com` as the custom domain if GitHub does not detect `CNAME` automatically.
4. At the domain registrar, point the apex domain to GitHub Pages using GitHub’s current published A records and point `www` to `Nakarin010.github.io` with a CNAME if you want the `www` variant.
5. Enable HTTPS after DNS finishes propagating.

The HTML uses `nakarinph.com` as the canonical URL while relative asset links keep the GitHub Pages mirror functional.
