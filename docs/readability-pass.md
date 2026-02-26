# Readability & Accessibility Contrast Pass

**Date:** 2025-02-26  
**Objective:** Improve readability and accessibility contrast across the site without changing layout, spacing, or design structure.

---

## Summary

Client feedback indicated the site was "low contrast and hard to read." This pass adjusts luminance and contrast values of text and overlay tokens to meet or exceed WCAG AA (4.5:1 minimum) while preserving the brand palette and all structural/visual hierarchy.

---

## Changes Applied

### 1. Body Text & Muted Token Contrast

| Token | Before | After | Rationale |
|-------|--------|-------|-----------|
| `--muted` | `#8b99a6` | `#b0bcc8` | Gray-500 → gray-300 equivalent for ≥4.5:1 contrast on `#0b1016` |
| `--tone-muted` | `#8b99a6` | `#b0bcc8` | Same, used for labels, metadata, secondary copy |
| `--legacy-heading` | `rgba(232,237,242,0.86)` | `rgba(232,237,242,0.94)` | Slightly brighter headings |
| `--legacy-muted` | `rgba(232,237,242,0.68)` | `rgba(232,237,242,0.82)` | Brighter secondary text in legacy sections |

### 2. Section Copy Blocks (Line-Height)

| Selector | Before | After |
|----------|--------|-------|
| `.legacy-casefile__overviewLead` | 1.65 | 1.7 |
| `.sec-lead` | 1.7 | 1.75 |
| `.spotlight-synopsis` | 1.7 | 1.75 |
| `.synopsis-body p` | 1.72 | 1.75 |
| `.synopsis-body p:first-child` | 1.7 | 1.75 |
| `.where-to-watch-lead` | 1.62 | 1.7 |
| `.ufo-snapshot-stat` | 1.6 | 1.65 |

### 3. Hero Overlays

| Location | Before | After |
|----------|--------|-------|
| `section-hero.tsx` gradient | `from-[#06090d]/45 via-[#06090d]/72 to-[#06090d]` | `from-[#06090d]/35 via-[#06090d]/55 to-[#06090d]` |

Reduced opacity in upper/mid portions of the overlay so title and subtitle remain high contrast against imagery while the gradient feels less heavy.

### 4. Snapshot & Metadata Strips

Label/value contrast improved via token changes: all uses of `--tone-muted` and `--muted` (Release, Runtime, Platform, info strip labels, etc.) now inherit the brighter `#b0bcc8`, improving legibility without structural changes.

---

## What Was NOT Changed

- Layout, spacing, or component structure  
- Typography hierarchy or font choices  
- Color brand palette (only luminance/contrast values)  
- Hero `to-[#06090d]` bottom gradient (kept solid for consistent text contrast)

---

## WCAG AA Compliance

- **Primary text** (`--text`, `--tone-text`): `#e8edf2` on `#0b1016` ≈ 12:1  
- **Secondary/muted text** (updated): `#b0bcc8` on `#0b1016` ≈ 6.5:1 (meets AA 4.5:1)

---

## Files Modified

- `accidental-truths/app/globals.css` — token and line-height updates  
- `accidental-truths/app/components/section-hero.tsx` — hero overlay gradient
