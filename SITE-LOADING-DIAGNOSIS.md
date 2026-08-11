# Site loading diagnosis

Checked: 2026-08-10 19:33 ICT

## Finding

The custom-domain certificate was still propagating when the original check ran. GitHub Pages has since issued a valid certificate for `nakarinph.com`; it became valid at 18:57 ICT on 2026-08-10. No DNS record change occurred between the failed and successful checks.

## Evidence

- `nakarinph.com` resolves to GitHub Pages' four documented A-record addresses.
- HTTP (`http://nakarinph.com/`) returns the portfolio page successfully.
- The initial HTTPS request reached a GitHub Pages edge presenting its default `*.github.io` certificate, which does not include `nakarinph.com`.
- A subsequent HTTPS request presents a Let's Encrypt certificate for `nakarinph.com`, valid through 2026-11-08.
- The portrait image at `https://cdn.nakarinph.com/82b2e3b197.jpeg` returns successfully. It is large (about 3.5 MB), which can slow the page after HTTPS is repaired but is not the cause of the connection failure.

## Resolution

The only remaining recommended action is to open **Settings → Pages** and enable **Enforce HTTPS**. The current GitHub Pages redirect still sends the repository address to `http://nakarinph.com/`, so enabling it will make visitors use the now-valid HTTPS address consistently.
