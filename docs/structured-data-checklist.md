# Structured Data Checklist

Use this checklist when validating or updating structured data (JSON-LD) for the site.

## Release Messaging (Centralized)

**Release status is centralized in `lib/release.ts`.** Update `releaseStatus` there to change messaging sitewide (UI, metadata, structured data). When `precision` is `"year"`, `datePublished` is omitted from the Movie schema to avoid implying a month/day. See [How to update release messaging](#how-to-update-release-messaging) below.

## Movie Schema

- Location: `app/components/FilmStructuredData.tsx`
- `datePublished`: Omitted when precision is `"year"`; added when precision is `"month"` or `"day"` via `getReleaseSchemaDate()`
- If validators require a full ISO date, set `releaseStatus.isoDate` to a placeholder (e.g. `"2026-01-01"`) with comment: placeholder for schema compliance only, exact date not announced

## How to Update Release Messaging

Change `releaseStatus` in `lib/release.ts`. Update `label`, `year`, `precision`, and optionally `isoDate` / `lastUpdated`. All UI, metadata, and structured data read from this single source.
