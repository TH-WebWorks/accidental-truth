# Component: SectionShell

## Purpose
Provide a consistent section wrapper across TH WebWorks 3.0 for spacing, background, dividers, and optional atmospheric effects (grid, glow). Prevent style drift between sections.

## Used on
- All homepage sections
- Any full-width section on internal pages

## Ownership
SectionShell controls:
- Vertical spacing (padding)
- Background and subtle overlays (grid, glow)
- Section dividers
- Section max width wrapper usage (via children + Container component)

SectionShell does NOT control:
- Content layout inside (grids, typography choices, button placement)
- Page-level layout (header/footer)
- Business logic

## Props
| prop | type | required | default | notes |
|------|------|----------|---------|------|
| id | string | no | - | optional anchor id for nav |
| variant | "default" \| "grid" \| "gridGlow" | no | "default" | visual wrapper style |
| size | "md" \| "lg" | no | "lg" | vertical padding preset |
| divider | "none" \| "top" \| "bottom" \| "both" | no | "none" | subtle 1px divider lines |
| className | string | no | - | additional classes for wrapper |
| children | ReactNode | yes | - | section content |

## Visual tokens (must use CSS variables)
All colors, borders, radii, and shadows must reference tokens:
- Background: var(--bg)
- Surface: var(--bg-2)
- Text: var(--text)
- Muted text: var(--muted)
- Border: var(--border)
- Accent: var(--orange), var(--blue)
- Shadow: var(--shadow)
- Radius: var(--radius)

No hex colors in this component.

## Layout behavior
- Section is full width
- Content area is centered via existing <Container> usage inside children (SectionShell should not import Container by default unless the project standard requires it)
- Must support responsive vertical padding via `size`

## Variant definitions
### default
- Background: var(--bg)
- No overlays by default

### grid
- Background: var(--bg)
- Adds a very subtle grid overlay (low opacity, thin lines)
- Grid must not reduce text readability

### gridGlow
- Includes `grid` overlay
- Adds two subtle radial glows behind content:
  - orange glow: top-left bias
  - blue glow: bottom-right bias
- Glows must be low opacity and heavily blurred (atmosphere, not neon)

## Divider behavior
- Dividers are 1px lines using var(--border)
- Must be subtle on dark backgrounds
- top/bottom/both options

## Accessibility
- Does not interfere with focus styles of child elements
- Must respect reduced motion preferences (no required animation)

## Performance
- Overlays must be lightweight (no heavy SVG filters, no large images)
- Prefer CSS gradients for glow and grid

## Examples (intended usage)
- Wrap each homepage section in <SectionShell variant="default" divider="none">
- Use <SectionShell variant="gridGlow" divider="top"> for CTA or hero-adjacent sections
- Keep content layout decisions inside the section component, not in SectionShell

## Notes
- Goal is consistency and speed: new sections should look “on brand” by default.
- If a section needs unique visuals beyond this wrapper, it should implement them internally, not expand SectionShell responsibilities.