---
name: Trevisoft.dev
description: Home for Marco Trevisani's side projects, experiments, and useful weirdness.
colors:
  night-bg: "#020613"
  midnight-bg: "#040918"
  elevated-night: "#060d1f"
  control-night: "#080e1f"
  paper-light: "#f3f7ff"
  ink-light: "#111a33"
  text-primary: "#f7f8ff"
  text-muted: "#c1cae7"
  text-soft: "#8996bd"
  light-muted: "#405070"
  light-soft: "#6e7da0"
  brand-blue: "#377cff"
  brand-violet: "#7f3cff"
  brand-cyan: "#00d9ff"
  brand-green: "#24c871"
  brand-orange: "#f06c2f"
  brand-pink: "#f03b9c"
  brand-purple: "#8d45ff"
  line-dark: "#8d9fda42"
  line-light: "#3d52852e"
typography:
  display:
    fontFamily: '"Audiowide", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(3.25rem, 9vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "0"
  headline:
    fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "clamp(1.12rem, 2vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0"
  body:
    fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.98rem"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "0"
  label:
    fontFamily: '"IBM Plex Sans", ui-sans-serif, system-ui, sans-serif'
    fontSize: "0.76rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0"
rounded:
  card: "8px"
  control: "8px"
  pill: "999px"
spacing:
  xs: "0.35rem"
  sm: "0.5rem"
  md: "0.8rem"
  lg: "1.25rem"
  xl: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1rem"
    typography: "{typography.body}"
  button-secondary:
    backgroundColor: "{colors.control-night}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1rem"
    typography: "{typography.body}"
  project-card:
    backgroundColor: "{colors.elevated-night}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "1.15rem 1.4rem"
  badge:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.pill}"
    padding: "0.2rem 0.55rem"
    typography: "{typography.label}"
---

# Design System: Trevisoft.dev

## 1. Overview

**Creative North Star: "The Calibrated Side-Project Lab"**

Trevisoft already has a recognizable synth-lab identity: a luminous moustache mark, a dark technical stage, project cards with per-tool accents, and copy that treats side projects as useful weirdness. The system should preserve that pulse while tightening the craft. Future work should feel less like an effects demo and more like a sharp directory of shipped tools with a little electricity in the walls.

The page is a brand surface, not an app shell. It needs first-impression character for people discovering tools and enough polish for HR teams reviewing Marco's CV. Effects, gradients, glows, and easter eggs can stay only when they help the projects feel memorable and built by a real person.

**Key Characteristics:**

- Neon-lab identity carried by the moustache mark, grid atmosphere, and per-project accent colors.
- Compact 8px geometry, crisp borders, and direct calls to action.
- Dark mode as the primary theatrical stage, with a usable light theme rather than an afterthought.
- Playful details used sparingly so scanning and credibility remain intact.
- Project cards that prioritize utility, comparison, and action.

## 2. Colors

The palette is a full synth spectrum anchored by a near-black night stage and cooled light-theme neutrals.

### Primary

- **Signal Blue**: The main action and focus color. Use it for primary buttons, strong focus affordances, and the central brand glow.
- **Voltage Violet**: The companion identity color. Use it with Signal Blue in the moustache mark and controlled ambient effects.

### Secondary

- **Arc Cyan**: The highest-energy accent. Use for focus outlines, tiny highlights, and project accents that need a quick technical read.
- **Magenta Pink**: The creative-media accent. Use for VinylPNG-style creative tools and rare moments of warmth.

### Tertiary

- **Utility Green**: The game/planning success accent. Use for project identity, not generic success states unless a future flow needs them.
- **Batch Orange**: The media-processing accent. Use for audio or conversion tools where warmth helps distinguish the card.
- **Portal Purple**: The alternate purple for project identity. Use only when Violet and Blue would blur together.

### Neutral

- **Night Base**: The dark page background and primary stage.
- **Midnight Drift**: The darker gradient stop used to prevent flat black surfaces.
- **Elevated Night**: The dark card/control surface family.
- **Cool Paper**: The light-theme page background.
- **Ink Light**: The primary light-theme text color.
- **Text Primary, Text Muted, Text Soft**: The dark-theme text ramp. Muted text must remain readable and should not become decorative gray.

### Named Rules

**The Calibrated Glow Rule.** Glow is identity, not decoration. One dominant glow field per viewport is enough; avoid stacking wide glows on every card and control.

**The Project Accent Rule.** Project accent colors identify individual tools. Do not let every accent compete at once; the card list should still read as one collection.

## 3. Typography

**Display Font:** Audiowide with system sans fallback.
**Body Font:** IBM Plex Sans with system sans fallback.
**Label/Mono Font:** None.

**Character:** Audiowide gives the brand a retro software-lab signature; IBM Plex Sans keeps descriptions and actions practical. The pairing is already committed, so future work should refine scale and rhythm rather than introduce new type families casually.

### Hierarchy

- **Display** (400, `clamp(3.25rem, 9vw, 5.4rem)`, 0.95): Reserved for the Trevisoft wordmark and rare brand moments.
- **Headline** (700, `clamp(1.12rem, 2vw, 1.35rem)`, 1.1): Project names and compact section headings.
- **Title** (700, 1rem to 1.1rem, 1.1): Small component titles, footer headings, and labels with real hierarchy.
- **Body** (400 to 500, 0.98rem, 1.35): Project descriptions and explanatory text. Keep prose under 65 to 75 characters per line.
- **Label** (700, 0.76rem, 1): Badges and short metadata. Uppercase is allowed for project kind badges only.

### Named Rules

**The One Wordmark Rule.** Audiowide is strongest when it is scarce. Do not use it for every heading.

**The No Cramming Rule.** The brand can be compact, but text must never feel squeezed into the card. Increase rhythm before shrinking type.

## 4. Elevation

Trevisoft uses a hybrid of tonal layering, borders, and ambient glow. The current system leans dramatic: blurred translucent surfaces, radial backgrounds, and broad shadows. Future polish should reduce the number of simultaneous elevation cues while keeping the luminous brand edge.

### Shadow Vocabulary

- **Control Glow** (`0 7px 12px var(--shadow), inset 0 0 16px rgb(55 124 255 / 0.07)`): Use for header controls and important interactive controls only.
- **Card Ambient** (`0 8px 14px var(--shadow), inset 0 0 14px rgb(255 255 255 / 0.025)`): Use for project cards, but avoid increasing blur or opacity.
- **Hover Energy** (`0 0 14px color-mix(in srgb, var(--accent), transparent 72%)`): Use as a state response, not a resting decoration.

### Named Rules

**The One Cue Rule.** A surface may use a border, a glow, or a shadow as its main depth cue. Do not intensify all three at once.

## 5. Components

### Buttons

- **Shape:** Crisp rounded controls (8px radius).
- **Primary:** Saturated blue gradient, white text, medium padding, and a clear arrow cue.
- **Hover / Focus:** Lift by 1px, strengthen border or glow, and always keep a visible focus outline.
- **Secondary / Footer:** Secondary buttons use the dark control surface; footer buttons become low-chrome text rows with icons.

### Chips

- **Style:** Pill badges with bold 0.76rem text. Tags use a muted blue surface; kind badges use the project accent and may be uppercase.
- **State:** Badges are informational, not filters, so they should not look clickable unless behavior is added.

### Cards / Containers

- **Corner Style:** Crisp 8px rectangles.
- **Background:** Dark translucent elevated surfaces over the night stage, with a radial tint from the project accent.
- **Shadow Strategy:** Ambient at rest, energy on hover. Avoid turning every project row into a glowing sign.
- **Border:** Full border, never a side stripe.
- **Internal Padding:** Use 1.15rem to 1.4rem on desktop, tightened to 1rem on small screens.

### Inputs / Fields

Inputs are not part of the current surface. If added, they should inherit the 8px control geometry, strong focus outline, and high-contrast text ramp from buttons.

### Navigation

Navigation is minimal: a corner brand mark, a theme toggle, profile links, and footer link groups. Keep the top chrome quiet so the project list remains the center of gravity.

### Moustache Mark

The moustache is the signature component. Use it as a brand anchor, not a repeating decoration. The hidden dedication can remain, but it should never block navigation, scanning, or accessibility.

## 6. Do's and Don'ts

### Do:

- **Do** preserve the synth-lab identity through the moustache mark, dark stage, and controlled per-project accents.
- **Do** tighten spacing before adding new decoration.
- **Do** make project actions obvious and easy to compare.
- **Do** keep focus states visible and reduced-motion alternatives intact.
- **Do** use light theme as a real polished mode, not a washed-out inversion.

### Don't:

- **Don't** make Trevisoft feel like an overproduced neon arcade.
- **Don't** make Trevisoft feel like a generic AI landing page.
- **Don't** ship a noisy portfolio template, cramped card wall, or decorative effects demo.
- **Don't** let particles, glow, and gradients compete with the projects.
- **Don't** use side-stripe borders, gradient text, nested cards, or modal-first interactions.
- **Don't** add more HR-unfriendly inside jokes as the main read.
