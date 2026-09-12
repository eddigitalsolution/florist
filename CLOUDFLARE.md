# Cloudflare Deployment Quick Reference Guide

## 1. Security Headers File (`public/_headers`)
```http
/*
  Content-Security-Policy: default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' blob: https:; worker-src 'self' blob: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
```

## 2. HTML CSP Tag (`index.html`)
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' blob: https:; worker-src 'self' blob: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;" />
```

## 3. Deployment Configuration (`wrangler.jsonc`)

### For Cloudflare Pages (Git Deployment)
```json
{
  "name": "florist-app",
  "compatibility_date": "2026-09-07",
  "pages_build_output_dir": "./dist"
}
```

### For Cloudflare Workers + Static Assets (`npx wrangler deploy`)
```json
{
  "name": "florist-app",
  "compatibility_date": "2026-09-07",
  "assets": {
    "directory": "./dist",
    "not_found_handling": "single-page-application"
  }
}
```

## 4. Package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "postbuild": "node -e \"const fs = require('fs'); fs.copyFileSync('dist/index.html', 'dist/200.html'); ['dist/_redirects','dist/.assetsignore','dist/wrangler.json'].forEach(f => { try { fs.unlinkSync(f); } catch(_) {} });\"",
    "deploy": "npm run build"
  }
}
```
