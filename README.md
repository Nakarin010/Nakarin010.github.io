# Nakarin Phoorahong portfolio

This is a framework-free static portfolio designed to work on both `https://nakarinph.com` and the repository’s GitHub Pages URL.
<!--
## Run locally

Open `index.html` directly, or serve the repository folder:
-->
<!-- 
```bash
python3 -m http.server 8000
```


Then visit <http://localhost:8000>.
-->
## Structure

- `index.html` — focused homepage with identity, contact, and portrait reveal.
- `projects.html` — project index.
- `projects/` — stable project detail pages.
- `css/style.css` — white spectral-glass visual system and responsive layout.
- `js/main.js` — mobile navigation and portrait interaction.
- `CNAME` — GitHub Pages custom-domain configuration for `nakarinph.com`.

The Resume contact link opens the PDF in the visitor's browser viewer. The R2 object must serve `Content-Type: application/pdf` and `Content-Disposition: inline` for preview behavior.



## GitHub Pages domain setup

1. Keep this repository configured as a user site (`Nakarin010.github.io`).
2. In the repository’s Pages settings, select the deployment branch/folder currently used by the site.
3. Add `nakarinph.com` as the custom domain if GitHub does not detect `CNAME` automatically.
4. At the domain registrar, point the apex domain to GitHub Pages using GitHub’s current published A records and point `www` to `Nakarin010.github.io` with a CNAME if you want the `www` variant.
5. Enable HTTPS after DNS finishes propagating.

The HTML uses `nakarinph.com` as the canonical URL while relative asset links keep the GitHub Pages mirror functional.
