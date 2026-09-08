# Nakarin Phoorahong portfolio

A framework-free portfolio for Nakarin “Drive” Phoorahong, hosted on GitHub Pages at `https://nakarinph.com`. The identity and project pages use a fictional archive recovered from 2048; personal information and project descriptions remain factual.

## Run locally

No build step or package installation is required. From the repository root, run:

```sh
python3 -m http.server 8765
```

Open `http://localhost:8765/index.html`. Relative links also support the repository’s GitHub Pages URL.

## Structure

- `index.html` — identity, fixed portrait verification, technology focus, featured projects, and contact channels.
- `projects.html` — Projects / Mission Archive, with six linked records grouped by division on a fixed operations board.
- `projects/` — six stable case-file routes with factual contributions, tools, status, and available screenshots.
- `css/dossier.css` — graphite, bone-paper, amber, and cyan design system, scoped to `.dossier-page`.
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

The résumé opens in a new tab. Its R2 object must serve `Content-Type: application/pdf` and `Content-Disposition: inline` for browser preview. Available screenshots open their original images. TradingJournal currently has no available screenshots or verified public repository link.

## Verification

JavaScript syntax and whitespace checks:

```sh
node --check js/dossier.js
git diff --check
```

There is no framework build, bundler, or project test runner. Browser QA covers all eight redesigned routes at 1440 × 900, 1024 × 768, 390 × 844, and 320 × 568; folder disclosure, navigation, lamp and sound state, no-JavaScript content, reduced motion, and gallery loading. When changing this design, capture and inspect both full-page and focused screenshots and check document width against the viewport.

The frozen card baseline hashes are recorded in `design-qa.md`. Compare its desktop/mobile front, back, and mobile navigation against a fresh pre-change baseline when modifying other portfolio pages.

## GitHub Pages domain setup

1. Keep this repository configured as a user site (`Nakarin010.github.io`).
2. In the repository’s Pages settings, select the deployment branch/folder currently used by the site.
3. Add `nakarinph.com` as the custom domain if GitHub does not detect `CNAME` automatically.
4. At the domain registrar, point the apex domain to GitHub Pages using GitHub’s current published A records and point `www` to `Nakarin010.github.io` with a CNAME if you want the `www` variant.
5. Enable HTTPS after DNS finishes propagating.

The HTML uses `nakarinph.com` as the canonical URL while relative asset links keep the GitHub Pages mirror functional.
