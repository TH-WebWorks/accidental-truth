# Share Preview Checklist

Use this checklist to validate share previews (OG/Twitter cards) when the homepage is shared in iMessage, Slack, Discord, X, Facebook, LinkedIn.

## Direct URLs to Test

When running locally (`npm run dev`):

- Homepage: http://localhost:3000/
- OG image: http://localhost:3000/assets/og-poster.webp
- Favicon: http://localhost:3000/favicon.ico
- Apple touch icon: http://localhost:3000/apple-touch-icon.png
- Favicon 16×16: http://localhost:3000/favicon-16x16.png
- Favicon 32×32: http://localhost:3000/favicon-32x32.png
- **Preview tester (internal QA):** http://localhost:3000/preview

In production, replace `localhost:3000` with your canonical domain (e.g. `https://accidentaltruth.com`).

## Quick Validation

### View Source

1. Open the homepage in a browser.
2. Right-click → View Page Source (or `Ctrl+U` / `Cmd+U`).
3. Search for `og:image`, `og:title`, `og:description`, `twitter:image`, `twitter:card`.

### cURL Checks

```bash
# Fetch HTML and grep for OG/Twitter tags
curl -s https://YOUR_DOMAIN/ | grep -E 'og:|twitter:'

# Verify OG image returns 200
curl -sI https://YOUR_DOMAIN/assets/og-poster.webp | head -1

# Verify favicon
curl -sI https://YOUR_DOMAIN/favicon.ico | head -1
```

### Automated verification

Run the share-asset verification script (requires dev server or deployed site):

```bash
# Local: start dev server first, then in another terminal:
npm run verify:share

# Production:
BASE_URL=https://accidentaltruth.com npm run verify:share
```

In CI, run against the deployed URL after deployment.

## Platform-Specific Tools

### Facebook Sharing Debugger

1. Go to [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
2. Paste your canonical URL (e.g. `https://accidentaltruth.com`).
3. Click **Scrape Again** to refresh cached preview.
4. Confirm title, description, and image render correctly.

### LinkedIn Post Inspector

1. Go to [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)
2. Paste your URL.
3. Click **Inspect** to see how LinkedIn will render the preview.
4. Use **Request new crawl** if the preview is stale.

### X (Twitter) Card Validator

- Official validator: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) (may require X Developer account).
- Alternative: Share the link in a post and check the unfurled card preview.
- X caches aggressively; updates can take time to appear.

### iMessage / Apple

- iMessage and Safari Link Preview cache results. To force refresh:
  - Append a cachebuster querystring: `https://yoursite.com/?v=202602261200` (use current date/time for `v`).
  - **For testing only** — do not use cachebusters in production links.
- Allow time for propagation; previews may take minutes to update.

## Production Environment Variables

Set these in Vercel (or your host):

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes (for prod) | Full canonical URL, e.g. `https://accidentaltruth.com`. Must start with `https://`. |
| `VERCEL_URL` | Auto-set by Vercel | Used as fallback if `NEXT_PUBLIC_SITE_URL` is not set. |

**Important:** For correct OG/Twitter previews in production, set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://accidentaltruth.com`) in Vercel → Project → Settings → Environment Variables.
