# T&H WebWorks - Cursor Context

Run the live server for website preview using this command:

npm run dev -- -H 0.0.0.0 -p 3000

This repository is a marketing-focused agency website and internal starter template.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Project Goal
This site is our primary sales walkthrough.
It should be clear, fast, and consistent.

## Wireframes (source of truth)
Wireframes live in `.cursor/wireframes/`:
- homepage1.png, homepage2.png
- pricing1.png, pricing2.png, pricing3.png
- services1.png, services2.png

## Visual System (use these exact colors)
- Orange (primary CTA, active/current): #e65c01
- Blue (secondary accents, outlines, links): #0099ff
- Dark Black (primary background): #050505
- "Light" Black (panel surfaces): #1a1a1a
- Grey Text (muted copy): #b2b2b2

## Wireframe Authority
Wireframes in `.cursor/wireframes/` are the source of truth for:
- layout, spacing, hierarchy, and visual tone

Rules:
- Homepage uses a DARK theme by default
- Primary background: #050505
- Section panels: #1a1a1a
- Text: white and #b2b2b2
- Primary CTA: #e65c01
- Secondary accents/outline: #0099ff
- Hero section MUST be full viewport height (min-h-screen) and feel like a full-screen block
- No light backgrounds on the homepage unless explicitly shown in the wireframes

Interpret wireframes structurally, not literally:
- Respect section order, hierarchy, and intent
- Typography scale and spacing matter more than placeholder copy
- Favor bold, high-contrast, high-agency layouts

Do NOT introduce light themes, gradients, or visual styles not present in the wireframes.

Use the wireframes to drive:
- Section order
- Layout and spacing
- Background colors and contrast
- Button styling and accent color usage
- Any “scroll behavior” notes

## Homepage scope (ONLY homepage right now)
Do not build the /services page yet.
When building “What we deliver” on the homepage, treat it as a homepage section only.

## Homepage section order
Homepage is composed of sections in this order:
1) Hero
2) Deliver (homepage “What we deliver” block)
3) Stats
4) Projects
5) Process
6) CTA

## Interaction notes from wireframe
- Projects: horizontal scroll / carousel feel
- Process: large numbered cards (01–04). Horizontal scroll through steps on scroll if feasible.
Keep it clean and simple before adding fancy motion.

## Architectural Rules
- One homepage section = one component in `components/sections`
- `app/page.tsx` only composes sections (no big JSX blocks)
- Layout components live in `components/layout`
- Shared UI primitives live in `components/ui`
- Copy and structured content live in `/content`
- No backend, database, auth, or APIs unless explicitly requested

## Styling Rules
- Tailwind CSS only
- Use shared `Container` for max-width and horizontal padding
- Keep spacing + typography consistent across sections
- Prefer semantic HTML + accessibility
- Never use hex colors. Always reference CSS variables via var(--*) for colors, borders, shadows, and radius.

## Change Philosophy
- Make the smallest change necessary
- Preserve existing structure and naming
- Do not introduce new libraries without asking
- If unsure, choose the simpler approach