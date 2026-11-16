GATE: OPEN 17 (rounds used up)

# Trevisoft — animated redesign

The user explicitly rejected the restrained first pass and requested a radical, animated developer identity. Implemented a metallic treatment of the original moustache, an animated blue silk field, SVG orbits, large cyan-accented typography, nine distinct product illustrations and pointer interactions. Preserved projects, destinations, themes, email handling, prerendering and the Papone dedication. No new dependency.

## Direction

Kind: software. Original brand and collage foundation; Urbanist variable body/display, Audiowide wordmark, DM Mono metadata. Near-black/cyan with a separate light theme. Dealt effect: silk-folds. Existing dealt moment: liquid-type in the family close. No big scene. Logo/orbit ambient motion runs only while the runtime pause control is playing; reduced motion and phones stay still. Product artwork responds through transforms.

Voice: independent maker, concrete product capabilities. No invented users, revenue, testimonials or prices. Product panels are editorial illustrations, not screenshots or analytics. Official logos retained. No stand-in photos, missing client slots, coined names or assumed business facts. Existing contacts and canonical domain preserved.

## Verification

- Production build and TypeScript: pass; prerendered HTML retained.
- Six tests: pass. Project destinations, theme persistence, anchor targets and 30-tap/timed dedication; added coverage that every listed project renders an illustration.
- Scoped Biome and whitespace diff checks: pass. Full repository lint still includes pre-existing untracked skill bundles; they were not modified.
- Ten vendored runtime files byte-match the installed skill originals.
- Copy lint: 0 FAIL, 0 WARN.
- Full browser check at 1440, 1024, 820, 768 and 390, followed by three fix/gate rounds. Final gate has no focus-visible, hidden-content, text-collision, viewport-overflow or broken-asset failures. It does retain design-rule findings below: this is not a complete design-gate pass.
- Performance: 0 FAIL, 3 WARN. About 258 KiB transferred desktop / 255 KiB phone; 422.6 KiB parsed JavaScript; zero broken requests; zero long tasks measured with WebGL disabled; CLS 0.013 desktop / 0 phone. One live desktop WebGL context, zero retained on phone. CPU-headless timings do not establish real-device GPU performance. Warnings concern three intentional font families and intrinsic sizing of the scalable SVG moustache.

## Open findings and waivers

Several findings concern intentional illustration overlaps/rotation or the static-page recipe: HTML art is undercounted as imagery, the silk mask is treated as the containing card, the brand is centered in its illustration, and phone lists grow naturally rather than occupying exact viewport multiples. They remain open, not relabeled as passes. The four formal waivers and their reasons follow in the final gate output.

```text
gate: checking dist/index.html (software); this takes a few minutes on a CPU Chrome
gate: rounds used up; 17 FAIL open
  FAIL spill            div.hero__grid > div.hero__art.frame > div.signal-field > svg.signal-orbits "Trevisoft orb  [1440, 390]
       runs 42px past the top edge of the panel it sits on (div.hero__grid > div.hero__art.frame > div.signal-field > div.signal-silk)
       fix: keep the box inside the panel it starts on: shrink it, or grow the panel to hold it
  FAIL spill            div.wrap.hero-layout > div.hero__grid > div.hero__art.frame > div.orbit-project.orbit-proj  [1440, 390]
       runs 20px past the right edge of the panel it sits on (div.hero__grid > div.hero__art.frame > div.signal-field > div.signal-silk)
       fix: keep the box inside the panel it starts on: shrink it, or grow the panel to hold it
  FAIL spill            div.wrap.hero-layout > div.hero__grid > div.hero__art.frame > a.orbit-project.orbit-projec  [1440, 390]
       runs 16px past the left edge of the panel it sits on (div.hero__grid > div.hero__art.frame > div.signal-field > div.signal-silk)
       fix: keep the box inside the panel it starts on: shrink it, or grow the panel to hold it
  FAIL spill            li#pixbatch > div.project-visual.visual--pixbatch > div.image-stack > div.image-sheet.imag  [1440, 390]
       runs 91px past the right edge of the panel it sits on (li#pixbatch > div.project-visual.visual--pixbatch > div.image-stack > div.image-sheet.image-sheet--back)
       fix: keep the box inside the panel it starts on: shrink it, or grow the panel to hold it
  FAIL no-visual        section#projects "Media tools"  [1440, 390]
       pictures, effects and mocks cover 3% of this section; a feature section needs a visual (about 25% or more)
       fix: give the section a visual: a UI fragment on a ground, real icons, or a photograph that fits
  FAIL no-visual        section#extensions-and-skills-section "Extensions & agent skills"  [1440, 390]
       pictures, effects and mocks cover 4% of this section; a feature section needs a visual (about 25% or more)
       fix: give the section a visual: a UI fragment on a ground, real icons, or a photograph that fits
  FAIL cta              section#extensions-and-skills-section "Extensions & agent skills"  [1440, 390]
       the last section before the footer ends with no button
       fix: add the action: a button in the hero, one on every priced item, one in the closing section
  FAIL tilt             li#vinylpng > div.project-visual.visual--vinylpng > div.record-scene > div.record-sleeve "  [1440, 390]
       rotated -7.0° (and 1 more like it: "YOUR NEXT CUT BATCH VIDE")
       fix: set it straight
  FAIL tilt             li#pixbatch > div.project-visual.visual--pixbatch > div.image-stack > div.image-sheet.imag  [1440, 390]
       rotated 12.0° (and 1 more like it: "WEBP")
       fix: set it straight
  FAIL one-heading      h2#media-tools "Media tools"  [1440]
       headings of two sections show whole on one screen at 10 of 91 scroll positions (11%; at scroll 350, 400, 450, 500px), here with "Trevisoft": at most 3% on a desktop (SR-5)
       fix: make the sections one screen tall so their headings sit a screen apart and two never share one
  FAIL container-edges  div.site-shell > main > section.hero.hero--collage > div.wrap.hero-layout "Independent sof  [1440]
       the hero's .wrap holds 3 children, 0 of them .hero-text: one .hero-text and at most one strip (SR-6)
       fix: build the page as header.nav, a main of sections (each one in-flow .wrap plus background layers) and footer.closing
  FAIL container-edges  div.hero__grid > div.hero__art.frame > div.brand-lockup > span.brand-title "Trevisoft"  [1440]
       1 text block starts on a left line at x 921, 857px from the container's left: text starts on the container's left, or on one split line (x 621, 732, 843) (SR-6)
       fix: start the text on the container's left, or on the one split line every split shares
  FAIL split-pair       main > section.hero.hero--collage > div.wrap.hero-layout > div.hero__grid "A personal soft  [1440]
       the two columns of the split start 30px apart at the top: a split's columns are top-aligned, 8px either way (SR-8)
       fix: top-align both columns of the split (align-items: start)
  FAIL no-visual        section#game-tools-section "Game tools"  [390]
       pictures, effects and mocks cover 13% of this section; a feature section needs a visual (about 25% or more)
       fix: give the section a visual: a UI fragment on a ground, real icons, or a photograph that fits
  FAIL screen-height    #projects section.project-group.project-group--media-tools "01 / CREATEMedia toolsMake art  [390]
       2442px, 2.89 screens; a section is exactly one or two (--h), or on a phone at least one that its content fills
       fix: make the section exactly one or two screens (--h: 1 or 2)
  FAIL neighbour        #game-tools-section section.project-group.project-group--game-tools "02 / PLAYGame toolsPl  [390]
       framed, 90px of #extensions-and-skills-section section.project-group.project-group--extensions-and-skills "03 / EXTENDExtensions & agent sk" shows
       fix: keep the next section's heading and picture out of this screen
  FAIL screen-height    #extensions-and-skills-section section.project-group.project-group--extensions-and-skills   [390]
       1957px, 2.32 screens; a section is exactly one or two (--h), or on a phone at least one that its content fills
       fix: make the section exactly one or two screens (--h: 1 or 2)
  WAIVED container-edges div#root "Skip to projectsTrevisoftProjectsThe mak": The existing Vite/React application requires its root mount for prerendering and hydration. It contains the header, main and footer; removing it to match a static HTML shell would break the application.
  WAIVED menu-toggle div.site-shell > header.site-header.nav > div.wrap.header-inner > button.theme-t: This is the existing light/dark theme switch, not a collapsed navigation menu. Its accessible label states the next theme, and the page has direct anchor navigation. Adding aria-expanded would falsely describe its behavior.
  WAIVED hero-maxchars section.hero.hero--collage section.hero.hero--collage "Independent software by M: The final authored headline is fixed and fits the first viewport at the verified 1440 and 390 widths. This finding is for injected 48-character replacement text, not the published page.
  WAIVED hero-lines section.hero h1: The final fixed headline fits three lines on desktop and phone. This stress test substitutes longer copy that is not published; the authored headline remains readable and the main action stays visible.
  19 WARN (not blocking), first: no-visual section#game-tools-section "Game tools"; card-layout section#projects > div.wrap > ul.project; copy-headings h2#extensions-and-skills "Extensions & a; copy-buttons div.wrap.hero-layout > div.hero__grid > ; copy-actions (the page)
Stop fixing: put these open FAILs and the waivers in your report, then finish.
GATE: OPEN 17 (rounds used up)
```

## Limits

Not deployed or committed. No physical-phone GPU recording or Safari check. Pause, reduced-motion and shader fallback passed the full checker before the final geometry refinements. Final screenshot observations are appended below.

## Final visual review

Full-page screenshots inspected at 1440, 1024, 820, 768 and 390. The compact phone hero shows its headline, CTA, mark and category rail in the first screen. All nine illustrations and their actions remain visible; tablet extensions switch to horizontal cards. The 390 light-theme/reduced-motion capture was also inspected. No clipped project copy or missing art was observed. Tall tablets retain intentionally generous vertical space.

Artifacts: .taste-skill/shots/wow-desktop.png, wow-1024.png, wow-820.png, wow-768.png, wow-390.png and wow-light-reduced.png. The temporary light-preview HTML used to seed a saved light preference was removed from dist.

Final 1440px hero capture: .taste-skill/shots/wow-poster/first-1440.png; copied to both public/og/trevisoft-og.png and the built dist counterpart. Local Vite preview is running on 127.0.0.1:5173 and returned HTTP 200.

## Moustache interaction follow-up

Requested scope: clickable DropHunter and VinylPNG satellites, an unambiguous animation pause label, occasional fast moustache shakes and cursor hover response. Automatic gesture lasts 600ms within a 12-second cycle; hover uses a separate transform without React frame updates. The existing pause control pauses the automatic gesture; reduced motion and phone layouts remain still. Vendored runtime unchanged; no audio or dependency added.

Validation: 8 tests pass (including pointer movement/reset, preference changes, listener cleanup, satellite links and both dedication themes); production build, scoped Biome and git diff whitespace checks pass. Desktop 1440 and phone 390 reduced-motion screenshots inspected; both satellite links remain visible without overlap. Full-site design gate was not rerun for this scoped interaction change; the previous OPEN 17 composition findings above remain unresolved. No Safari or physical-device performance recording; no deployment.

## Natural moustache revision

User rejected splitting the mark and the chrome finish. Both removed. A generated transparent realistic-cartoon moustache with matte hair now renders as one WebP image; conversion preserves alpha. Original SVG remains available for the compact header mark. The complete image moves as one piece. A finite 1.6-second greeting replaces perpetual float and wiggle loops; intersection observation replays it on returning to the hero, with cleanup covered by a test. Static backdrop replaces the live shader, so there is no animation pause button. Fine-pointer hover and reduced-motion support remain.

Nine tests, production build and scoped formatting pass. No dependency added. Previous full-site design gate findings remain open; no fresh full gate, Safari or real-device performance recording.

## Selected logo comparison — 2026-11-16

User chose to try proposal 02 (Papone morbido), followed by 10 (Segno a pennello). Both have been prepared as transparent assets. Papone is the default local preview; ?logo=pennello switches both header and hero in development only, with matching treatment and existing interaction/dedication. No final publication requested. Ten tests, production build and scoped Biome pass. The broader composition gate remains as previously reported; no Safari or physical-device check.

Comparison refinements: user rejected white and muted sand fills. The current hero uses a blue/cyan alpha-masked gradient with separate finite entry and hover light sweeps; the smaller header is cyan/teal. Header widths are 44px desktop and 36px phone. Both proposals share this treatment. Reduced-motion preferences disable the sweeps. Prior desktop/phone composition findings remain; this is a visual comparison, not a deployment.

## Final rhythm and scroll polish — 2026-11-16

User requested fewer empty spaces and animated scrolling. Removed fixed project-section and footer heights, reduced section padding and artwork heights, aligned card actions using flex layout rather than long description placeholders. The desktop capture is now 4502px tall, down from 5400px, with all nine projects retained.

Added native CSS view-timeline entrances to headings, artwork and card content, plus a document-progress rail and scroll-cue hover response. Text stays visible throughout; focused card content bypasses its animation. All added movement is disabled with reduced motion; unsupported timeline implementations keep static readable content. No new dependency or JS scroll loop.

Validation: ten tests, production build, scoped Biome and whitespace checks pass. Layout checks run at 1440, 1024, 820, 768 and 390; no collision, horizontal overflow or spill findings. Natural section heights intentionally trigger the checker’s full-screen/neighbor rules, superseded by the user’s explicit request to remove whitespace. Existing hypothetical 48-character mobile headline stress findings remain; actual headline remains legible. Full-page desktop capture inspected. No full consistency gate rerun, Safari or physical-device performance recording; no deploy.

Final phone check: inspected the 390px light-theme capture with reduced motion enabled; all nine cards, actions and footer remain visible without clipped content. Temporary dist/light-preview.html removed. Artifact: .taste-skill/shots/final-light-reduced.png.

## Cinematic project showcase — 2026-11-16

GATE: OFF (no active build.json; reported by the unmodified gate). Dedicated layout, performance, copy and visual checks are run separately.

Research: Lusion (https://lusion.co/) for authored motion/visual storytelling; Bruno Simon (https://bruno-simon.com/) for direct visitor interaction; Linear (https://linear.app/) for product-first exposition. Primary sites inspected through the web connector; Active Theory and the Awwwards Lusion page were unavailable to text inspection. No reference-site assets or code copied.

Direction: preserve Papone and the approved header, introduce a stronger type hierarchy and arched brand stage, six original concept illustrations, cinematic wide gaming panels, and finite scene animations. At the user's mid-work correction, removed the oversized footer wordmark and replaced asymmetric media cards with an equal two-column collection. All nine projects and links remain intact. No new library.

Art provenance: six generated editorial illustrations listed in public/assets/LICENSES.md, not official game screenshots or literal product UI. Responsive 768/1536px WebP sources. Original family photo stays outside the repository.

Validation before the final media revision: five viewport checks; no collision/overflow/spill findings. Unmodified layout checker flags natural-height sections and hypothetical headline stress; dense natural-height sections are explicitly requested by the user. First performance run: 0 FAIL, 4 WARN (three brand fonts and image oversizing). Responsive sources added afterward to reduce phone image weight. Final checks follow below.

Final validation: 11 tests pass, production build passes, scoped Biome passes without warnings, git diff whitespace check passes. Copy lint: 0 FAIL / 0 WARN; anti-slop scanner: zero signals in the project descriptions (also read manually).

Layout inspected at 1440, 1024, 820, 768, 390 and 320. No collision, spill or horizontal-overflow findings. Media rows have matching image heights, title baselines and action baselines on desktop; stack normally on phones. Final desktop and 390px light/reduced-motion full-page screenshots inspected, including the compact footer. Moved the mobile DropHunter satellite below the brand title after visual review.

Open layout-check categories: screen-height/screen-short, neighbour/neighbour-ground (natural section height deliberately requested); hero-maxchars/hero-lines (synthetic 48-character headline); hero-fold at 768 and 320 (natural stacked content extends past a viewport), 390 (four pixels short); edge-left at 1024 and 820 (hero half-column uses its own 15px gap). These are not collision or overflow findings. Full logs: studio-layout.log.

Final performance: 0 FAIL, 4 WARN. Total transfer 828.6 KiB desktop, 606.5 KiB phone; no broken requests, zero layout shift and zero long tasks in the three-run local check. Warnings: three intentional brand fonts and oversized shared Papone source. New project images have responsive sources. CPU headless measurements are local checks, not field performance or real GPU benchmarks.

Artifacts: shots/studio-desktop.png, shots/studio-light-reduced.png and shots/studio/ (six widths). Temporary light-preview.html removed from dist. No deployment, Safari run, physical-device GPU recording or full consistency-gate rerun.

## Intro refinement — 2026-11-16
- Balanced the existing Papone mark against the Trevisoft wordmark; removed the heavy frame and excess ornament, retaining one subtle orbit and existing interactions.
- Unified VinylPNG and DropHunter satellite surfaces in dark and light themes; removed the peach override.
- Replaced the replaying creators pseudo-element underline with one static border. The heading uses the vendor-supported data-enter-whole flag to avoid cloning its content during entrance.
- Increased header wordmark size, with explicit phone sizing and navigation spacing.
- Validation: production build passed; all 11 tests passed; Biome passed; git diff --check passed. Headless layout checks at 1440, 820, 390 and 320 px found no overlap or horizontal overflow. Inspected dark desktop/phone and light phone screenshots.
- Layout checker still flags natural section heights and its synthetic 48-character headline stress test; at 390 px the actual hero is 849 px in an 844 px viewport. These are documented recipe deviations, not clipping or collision.
- Not deployed. Safari and physical devices were not checked in this revision.

## Coordinated intro entrance — 2026-11-16
- Replaced the generic hero entrance with one CSS sequence: title lines staggered 80ms, brand mark settling, wordmark and project satellites following, orbit opening and a finite light bloom.
- Only transform and opacity animate. No dependencies, timers, React frame updates, or infinite motion added. Existing moustache interaction remains on its separate inner elements.
- New entrance is gated by prefers-reduced-motion: no-preference; content defaults to visible. Longest new animation ends after 3.2 seconds.
- Build and 11 tests passed; Biome and diff whitespace checks passed. Desktop/phone layout checks found no collision or overflow. Existing natural-height and synthetic headline recipe deviations remain as documented above.
- No deployment or physical-device frame-rate measurement performed.
