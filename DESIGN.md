# Trevisoft design

Trevisoft is Marco Trevisani’s personal software collection. The November 2026 brief explicitly asks for a dramatic, animated developer identity. The page should feel authored, with a memorable brand scene and a distinct visual for every project.

## Identity

The moustache is the hero: a blue/cyan silhouette over a soft radial field and one fine orbit, without an enclosing frame. Keep the original 30-tap Papone dedication and timed dismissal. Audiowide is reserved for the wordmark; Urbanist carries expressive headings and readable copy; DM Mono identifies categories and technical details.

Dark mode uses near-black #080c11, slate #10171f, pale ink #f1f5f6 and cyan #63dce8. Light mode uses #f2f5f6, white, ink #111c25 and deep teal #08758a. The hero scene and product illustrations retain their art direction in both themes. Official product logos keep their original colours.

## Composition

The hero pairs a large category headline with the brand scene and linked DropHunter and VinylPNG satellites. A lower navigation rail leads to Create, Play and Extend. Media tools have four equally sized illustrated cards in a two-column grid, with aligned artwork heights and bottom actions. Gaming has two wide image-and-copy panels, with the second reversed on wide screens. Extensions have three compact cards. The footer stays compact: no oversized decorative wordmark. The user explicitly rejected asymmetrical media cards and a giant footer signature. Tablet extensions become horizontal cards; phone cards stack.

The shared wrap is at most 1312px, with equal 64px desktop, 40px tablet and 22px phone gutters. All project sections use natural content height with compact spacing. Never clip descriptions or hide project links to force a viewport measurement.

## Product visuals

ProjectVisual renders six original generated editorial artworks: a vinyl sleeve, photographic prints, cinema film, copper waveform, expedition scene and tactical equipment workbench. HTML format labels and route/callout overlays remain crisp. These are conceptual illustrations, not product screenshots, official game artwork, exact equipment previews or measured results. WebP assets have 1536px and 768px sources with responsive sizes and lazy loading. The three extension/skill projects keep their HTML illustrations. No invented customer counts, testimonials or commercial claims. All nine projects and their original destinations remain in site.json.

## Motion

The final polish follows the user’s request for denser sections and animated scrolling. Project sections and the footer use natural content height instead of fixed 900–1800px canvases. Section spacing and artwork heights are reduced, and card actions align without padded description placeholders. This deliberately supersedes the skill’s full-screen section recipe.

CSS scroll timelines animate section headings, project artwork and card content with restrained translation, scale and opacity. Text never drops below 70% opacity. A 3px reading-progress rail tracks document scroll. Motion is gated by browser support and reduced-motion preference; unsupported browsers retain the fully visible static layout. Focused card content bypasses scroll animation. No scroll listeners, new dependencies or scroll hijacking are used.

One shared IntersectionObserver activates project illustrations at 25% visibility and resets them on exit. Scene reveals, light sweeps, skill beacons, audio bars and progress illustrations all finish within five seconds; hover replays light sweeps. Motion uses transform/opacity with no per-frame React updates, and reduced motion disables it. The observer disconnects on unmount and has a regression test.

The taste-skill motion layer provides entry and pointer feedback. The hero now uses a static blue backdrop without WebGL or a pause control. The moustache plays a finite 1.6-second greeting when at least half of it enters the viewport, then rests. Returning to the hero replays the greeting. Reduced motion keeps it still; the footer keeps its liquid-type pointer moment.

The default preview uses public/assets/logo-papone-morbido.webp, selected from proposal 02. The alternative is public/assets/logo-segno-pennello.webp, proposal 10. Both have transparent backgrounds and animate as one connected image without a mouth or metallic treatment. The header uses the same mark at 44px desktop / 36px phone, preserving its proportions. The hero silhouette carries a blue/cyan gradient through its alpha mask, with a finite light sweep on entry and hover. The header is cyan on dark surfaces and teal on light. No chrome, gray fill or perpetual loop. The source family photograph is not copied into the project or public assets. Pointer hover moves the whole hero mark; the dedication stays on the stationary button.

Local development supports ?logo=pennello for the alternative; the default and ?logo=papone show Papone morbido. This comparison is development-only and introduces no visitor-facing selector. Final choice remains pending.

The hero satellites link to VinylPNG and DropHunter. No audio, new animation dependency, perpetual ambient loop or custom cursor. Never edit vendored kit files to satisfy checks.

## Accessibility and maintenance

Preserve skip navigation, focus rings, theme persistence, email handling, semantic headings, prerendered HTML and project schema data. Illustrations are decorative; the card’s adjacent name and description provide the information. The button inside LogoMark retains the accessible image and dedication semantics.

For a new project, add both its content and its ProjectVisual illustration; the project-list test checks that every published entry has a visual. Browser checks must include desktop, tablet, phone, both themes and reduced motion. Real-device GPU performance requires a separate device recording.

## Intro refinement

The hero mark occupies 66% of its scene (67% on phones), with 28px separation above its wordmark (22px on phones). VinylPNG and DropHunter use matching dark panels and theme-aware light panels; no peach background. Removed the arched border, grid, extra orbit and decorative coordinate label. Header wordmark is 25px, 20px on phones and 18px below 361px.

The headline uses the motion layer's supported data-enter-whole option. Its single static border underline avoids clone/restore replay from the vendor word-masking entrance. Vendor files remain untouched.
