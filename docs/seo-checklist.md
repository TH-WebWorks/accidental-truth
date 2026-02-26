# SEO Checklist

Use this checklist to validate core SEO endpoints and canonical handling.

## Release Messaging (Centralized)

Release status is centralized in `lib/release.ts`. Meta descriptions (default, OG, Twitter) and structured data use `getReleaseDescription()` / `getReleaseLabel()`. **To update release messaging sitewide:** edit `releaseStatus` in `lib/release.ts`; no other changes required.

## Direct URLs to Test

### Local (port 3001)

- Sitemap: http://localhost:3001/sitemap.xml
- Robots: http://localhost:3001/robots.txt
- Canonical tag: View source on http://localhost:3001/ and search for `rel="canonical"` — should resolve to `http://localhost:3001/` via `metadataBase`.

### Production

Replace `localhost:3001` with your canonical domain (e.g. `https://accidentaltruth.com`):

- Sitemap: https://accidentaltruth.com/sitemap.xml
- Robots: https://accidentaltruth.com/robots.txt
- Canonical tag: View source on https://accidentaltruth.com/ and confirm `<link rel="canonical" href="https://accidentaltruth.com/" />` (or equivalent).

## Quick Validation

### Sitemap

- Returns XML with root URL `/` and `lastModified` as an ISO date.
- URLs must be absolute in production (using `metadataBase` / `getMetadataBase()`).

### Robots

- **Production** (with `NEXT_PUBLIC_SITE_URL` set): `User-agent: *`, `Allow: /`, `Sitemap: <base>/sitemap.xml`.
- **Non-production or missing `NEXT_PUBLIC_SITE_URL`**: `User-agent: *`, `Disallow: /`.

### Canonical Tag

1. Open the homepage.
2. Right-click → View Page Source (or `Ctrl+U` / `Cmd+U`).
3. Search for `rel="canonical"` — the `href` should be the full canonical URL of the homepage.

## cURL Checks

```bash
# Local
curl -s http://localhost:3001/sitemap.xml
curl -s http://localhost:3001/robots.txt
curl -s http://localhost:3001/ | grep -E 'rel="canonical"|canonical'

# Production
curl -s https://YOUR_DOMAIN/sitemap.xml
curl -s https://YOUR_DOMAIN/robots.txt
curl -s https://YOUR_DOMAIN/ | grep -E 'rel="canonical"|canonical'
```
