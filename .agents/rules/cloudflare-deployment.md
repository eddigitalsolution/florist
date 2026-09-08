# Cloudflare Deployment Project Rules

This rule enforces production deployment standards for Cloudflare Pages and Cloudflare Workers.

## 1. Deployment Models
- **Cloudflare Pages**: Leave dashboard **Deploy command** completely BLANK. Set `pages_build_output_dir: "./dist"` in `wrangler.jsonc`. Do NOT add `assets` block.
- **Cloudflare Workers**: Set dashboard **Deploy command** to `npx wrangler deploy`. Set `assets: { directory: "./dist", not_found_handling: "single-page-application" }` in `wrangler.jsonc`.

## 2. Security Headers & CSP
- Create `public/_headers` with Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, and Referrer-Policy.
- Include matching CSP `<meta>` tag in `index.html`.

## 3. Build & Environment Settings
- Set `NODE_VERSION=20` in Cloudflare build environment variables.
- Include postbuild script in `package.json` for SPA fallback (`200.html`).
