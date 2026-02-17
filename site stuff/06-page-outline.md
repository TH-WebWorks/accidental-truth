# Page Outline

**Project:** Accidental Truth
**Client:** Ron James
**Document Owner:** T&H WebWorks
**Last Updated:** 02/13/2026
**Version:** v1.0

---

## Purpose

Defines the single-page information architecture for initial launch. This outline translates approved scope and requirements into a build-ready section sequence, with content intent and implementation notes.

---

## Page Architecture (Top to Bottom)

| Order | Section | Primary Objective | Launch Priority |
|------:|---------|-------------------|-----------------|
| 1 | Hero / Header | Establish documentary identity and immediate context | Must Have |
| 2 | New Film Spotlight | Feature the newest film first with strongest CTA | Must Have |
| 3 | Original Film (Legacy Content) | Preserve and migrate core MUFON-era content | Must Have |
| 4 | Trailer / Media Block | Present key video content in an easy-watch format | Must Have |
| 5 | Merchandise | Support campaign monetization via embed | Must Have |
| 6 | Press / Credibility Highlights | Build trust through references and recognition | Should Have |
| 7 | About / Creator Context | Provide context for Ron James and project mission | Should Have |
| 8 | Footer | Provide credits, legal, and utility links | Must Have |

---

## Section Specifications

### 1) Hero / Header

**Goal:** Immediate orientation and thematic tone.

**Content:**
- Documentary title and/or lockup
- One-sentence value proposition/tagline
- Primary CTA (`Watch Trailer`, `Learn More`, or similar)
- Background key art (or fallback static image)

**Implementation Notes:**
- Keep message clarity first; avoid overcrowding hero copy.
- Ensure first viewport performs well on mobile.

---

### 2) New Film Spotlight

**Goal:** Promote the latest film as top-priority narrative block.

**Content:**
- Film title
- Synopsis (short + expandable long form if needed)
- Poster or still imagery
- Trailer/player embed
- Action CTA (watch, learn more, or external link)

**Implementation Notes:**
- This section sits directly below hero per requirement.
- Designed to accept pending assets without breaking layout.

---

### 3) Original Film (Legacy Content)

**Goal:** Preserve existing audience familiarity and historical context.

**Content:**
- Core descriptive copy from MUFON source page
- Legacy trailer/media links
- Supporting images or graphics from existing source

**Implementation Notes:**
- Maintain factual parity with source unless client requests edits.
- If source content is incomplete, display structured placeholders.

---

### 4) Trailer / Media Block

**Goal:** Centralize video engagement.

**Content:**
- Primary trailer embed
- Optional secondary clips/interviews
- Minimal captions for context

**Implementation Notes:**
- Prefer responsive 16:9 containers.
- Lazy-load non-critical embeds when feasible.

---

### 5) Merchandise

**Goal:** Provide lightweight purchase pathway without full store buildout.

**Content:**
- Short merchandise intro copy
- Shopify/WooCommerce embed module
- Optional featured products strip (if embed supports)

**Implementation Notes:**
- Keep embed styling consistent with site theme.
- Confirm embed code and account ownership in `04-contacts-access.md`.

---

### 6) Press / Credibility Highlights

**Goal:** Reinforce trust and external validation.

**Content:**
- Press mentions (titles + outbound links)
- Quote snippets or review lines (if approved)
- Optional recognition badges/logos

**Implementation Notes:**
- Section is optional for day-one if source assets are incomplete.
- Use concise cards/list format for scanability.

---

### 7) About / Creator Context

**Goal:** Humanize project and provide creator background.

**Content:**
- Ron James short bio
- Documentary mission/positioning statement
- Optional portrait or behind-the-scenes visual

**Implementation Notes:**
- Keep this concise and supportive of the main film narrative.

---

### 8) Footer

**Goal:** Close page with utility and compliance basics.

**Content:**
- Copyright line
- Distributor/partner credits
- Social and/or external resource links
- Privacy/terms links if available

**Implementation Notes:**
- Include canonical site identity and year.
- Use legal placeholders only when needed and mark follow-up tasks.

---

## Internal Linking and Navigation

- Keep navigation minimal for launch version (anchor links to major sections only).
- Recommended anchors: `#new-film`, `#original-film`, `#merchandise`, `#about`.
- Ensure anchor behavior is mobile-safe and accessible.

---

## Content Dependency Matrix

| Section | Depends On | Source Doc |
|---------|------------|------------|
| Hero / Header | Title, key visual, tagline | `05-content-inventory.md` |
| New Film Spotlight | Synopsis, trailer, poster, CTA copy | `05-content-inventory.md` |
| Original Film | MUFON copy/media pull | `03-requirements.md` |
| Merchandise | Embed code and ownership confirmation | `04-contacts-access.md` |
| Press / Credibility | Links, quotes, logos | `05-content-inventory.md` |
| Footer | Credits/legal text | `05-content-inventory.md` |

---

## Launch Readiness Criteria

- All Must Have sections populated with final or approved placeholder content.
- Trailer/media embeds render and scale correctly across viewport sizes.
- Merchandise embed is functional and visually integrated.
- Page performance and mobile checks pass for launch baseline.
