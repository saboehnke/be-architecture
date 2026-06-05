---
name: BE Architecture & Landscape
description: A drafting-table portfolio where hand-built architectural drawings carry the brand.
colors:
  ink: "#17150F"
  ink-soft: "#4A463B"
  bone: "#EFE9DD"
  paper: "#F6F2EA"
  line: "#C9C0AD"
  line-soft: "#DBD3C2"
  blueprint: "#0E2A38"
  blueprint-2: "#123749"
  bp-line: "#9FC3D4"
  bp-ink: "#EAF3F7"
  accent: "#B4552D"
  accent-deep: "#8E3F1F"
  sage: "#6E7A5E"
typography:
  display:
    fontFamily: "Archivo Expanded, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 8.6vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Archivo Expanded, Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 7vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    textTransform: "uppercase"
  title:
    fontFamily: "Archivo Expanded, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.4vw, 1.2rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.01em"
    textTransform: "uppercase"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(15px, 1.05vw, 17px)"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.7rem"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.28em"
rounded:
  sm: "2px"
  pill: "40px"
spacing:
  xs: "0.6rem"
  sm: "1rem"
  md: "1.4rem"
  lg: "2.4rem"
  section: "clamp(4rem, 11vw, 9rem)"
  pad: "clamp(1.4rem, 5vw, 6rem)"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
  button-solid-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bone}"
  button-ghost:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  filter-chip:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.95rem"
  filter-chip-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bone}"
  plate-card:
    backgroundColor: "{colors.blueprint}"
    textColor: "{colors.bp-line}"
    rounded: "{rounded.sm}"
    padding: "1.1rem"
---

# Design System: BE Architecture & Landscape

## 1. Overview

**Creative North Star: "The Drafting Table"**

The site behaves like an architect's working sheet, not a marketing page. Every surface inherits the grammar of a drawing: a faint paper grid underfoot, title blocks pinned to the corners of each plate, dimension lines, north arrows, level markers, and sheet codes (PL-218, LS-094). The portfolio is not photographed, it is drafted: hand-built SVG floor plans, sections, elevations, site plans, and masterplans rendered as white linework on deep blueprint plates. The drawing is the hero; the chrome around it stays quiet so the linework can shout.

Drama comes from precision and scale, not effects. Display type is monumental: a heavy expanded grotesque set in uppercase, sized to fill the fold. The page opens and closes on blueprint-navy drenched bands (hero and contact) with a warm bone body between them, so the first and last impressions are the drawing table itself. That dark-to-bone-to-dark rhythm and the weight of the type are the whole show. The register is brand: this page exists to make twenty years of work browsable and to leave a strong impression of taste and rigor. It deliberately avoids the saturated editorial-typographic lane (display serif + italic + ruled columns) as much as the generic SaaS/AI template (card-grid sameness, purple gradients, hero-metric blocks), the cluttered real-estate aesthetic (stock photos, badges, loud CTAs), trend-chasing brutalism/Y2K, and safe corporate sterility. None of those respect the discipline being shown.

**Key Characteristics:**
- Drawings, not photos: SVG linework carries every visual.
- Navy-drenched hero and contact bookend a warm bone body: a dark/light/dark rhythm.
- Drafting authenticity: title blocks, dimensions, sheet codes, north arrows are real, not decorative.
- Monumental expanded-grotesque display in uppercase, against monospaced technical annotation.
- One accent (terracotta), used sparingly as a draftsman's red-pencil mark.

## 2. Colors

A warm-neutral working ground holding cool, dark blueprint plates, with a single terracotta accent doing all the pointing.

### Primary
- **Blueprint Navy** (#0E2A38): The plate surface. Every drawing lives on it (hero rail, portfolio cards, lightbox). This is where the work happens; it carries 30-50% of the viewport when browsing the archive. **Blueprint Navy Lift** (#123749) is its radial-gradient top, giving plates a faint vignette of depth.
- **Warm Ink** (#17150F): Near-black body text. The darkest value; reads as confident, not harsh.
- **Blueprint Deep** (#0b232f): The drenched ground for the hero and contact bands, base of their radial gradients (lifting to ~#17506a at the worklight corner). These bands bookend the page.

### Secondary
- **Terracotta** (#B4552D): The red-pencil accent. Eyebrows, the north-arrow needle, key dimension callouts, active link underlines, primary-button hover. **Terracotta Deep** (#8E3F1F) is its pressed/hover-deepen state. Rare by rule.

### Tertiary
- **Sage** (#6E7A5E): Reserved tag color for landscape-discipline work. Used only to distinguish landscape from architecture where a second category color earns its place.

### Neutral
- **Bone** (#EFE9DD): The body ground. Warm paper, the drafting table itself.
- **Paper** (#F6F2EA): A lighter surface for raised panels (mobile menu, hover sheets).
- **Line** (#C9C0AD) / **Line Soft** (#DBD3C2): Hairline rules, dividers, and the faint background grid.
- **Blueprint Line** (#9FC3D4): The cyan-grey linework printed on plates, plus annotations and mono labels on dark.
- **Blueprint Ink** (#EAF3F7): The brightest linework, reserved for the cut/primary line in a drawing (poche walls, roof ridge) and plate titles.

### Named Rules
**The Red-Pencil Rule.** Terracotta is the architect's correction pencil: it appears on roughly 10% of any screen and never as a fill behind text. If terracotta is carrying a background, it is being misused.

**The Two-Worlds Rule.** Two grounds only: warm bone (the body) and blueprint navy (plates, plus the drenched hero and contact bands). Drawings never sit on bone. Light type carries the navy bands (bone text, bp-line annotations, terracotta accent); dark type carries the bone body. Don't invent a third surface color.

**The Bookend Rule.** Navy drench is reserved for the first fold (hero) and the last (contact), with a worklight radial glow from one corner. The middle of the page stays bone. Don't drench an interior section; the dark/light/dark rhythm is the structure.

## 3. Typography

**Display Font:** Archivo Expanded (heavy, uppercase; with Archivo, system-ui, sans-serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, monospace)

**Character:** A contrast pairing by width and weight, not by serif-vs-sans. The display is a monumental expanded grotesque, set heavy (800-900) and uppercase, that reads as architectural signage and drawing-sheet titling. The body is a clean humanist grotesque kept light (300) for reading. The monospace is the technical voice of the drawing (codes, dimensions, locations). The expanded-vs-humanist width gap and the 800-vs-300 weight gap carry the hierarchy. This deliberately sidesteps the editorial display-serif lane.

### Hierarchy
- **Display** (800-900, uppercase): The hero centers the exact navbar brand lockup, scaled up: a monumental "BE" mark (Archivo Expanded 900, clamp(5rem, 20vw, 15rem)) beside a vertical-hairline-divided stacked mono descriptor (Architecture / & / Landscape, terracotta ampersand). The lockup rises and settles on load. Reserve this scale for the hero mark.
- **Headline** (800, clamp(2.6rem, 7vw, 5.6rem), 1.0, uppercase): Section titles ("The Archive", contact heading). The long studio statement is the one exception: same family/weight but sentence case for legibility.
- **Title** (700, clamp(1rem, 1.4vw, 1.2rem), uppercase): Project names on plates and in the lightbox; step headings.
- **Body** (300, clamp(15px, 1.05vw, 17px), 1.6): Prose. Capped at ~48ch in lede/studio copy so lines stay readable.
- **Label** (400, 0.7rem, 0.28em tracking, uppercase): Mono annotations: sheet codes, dimensions, ledger labels, filter chips, title blocks.

### Named Rules
**The Annotation Rule.** Anything that would be hand-lettered on a real drawing (codes, dimensions, locations, categories) is set in IBM Plex Mono, uppercase, widely tracked. Anything that is human voice is Archivo (headings) or Hanken (prose). Never blur the two.

**The Monumental Rule.** Display and headline type is always heavy expanded grotesque in uppercase, sized to dominate its fold. If a heading is timid (light weight, small, sentence case by default), it is off-brand. The one sanctioned exception is the long studio statement, which keeps the weight but drops the caps so a full sentence stays readable.

## 4. Elevation

Largely flat, with one deliberate exception. The bone page is a flat paper plane with a faint printed grid and a subtle grain multiply; there are no shadows between page-level sections. Depth exists only on the blueprint plates, which float above the paper to read as physical drawings laid on a table.

### Shadow Vocabulary
- **Plate rest** (`box-shadow: 0 18px 40px -28px rgba(14,42,56,.7)`): Portfolio cards and rail plates at rest. A soft navy-tinted drop, as if the sheet sits just above the table.
- **Plate hover** (`box-shadow: 0 30px 60px -30px rgba(14,42,56,.9)`): Deepens and lifts on hover, paired with a -6px translate.
- **Lightbox** (`box-shadow: 0 40px 90px -30px rgba(0,0,0,.7)`): The opened drawing, lifted clear of the dimmed field.
- **Inner frame** (inset `1px` line at `rgba(159,195,212,.22)`): Every plate carries a faint inset border, the drawing's own sheet edge. Not a shadow, but part of the plate's depth language.

### Named Rules
**The Paper-Is-Flat Rule.** The bone ground never casts or receives a shadow. Shadows belong to plates only. A shadowed section band or a floating bone card breaks the metaphor; the table is flat, the drawings sit on it.

## 5. Components

### Buttons
- **Shape:** Fully pill (40px radius), 1px solid ink border.
- **Solid:** Ink fill, bone text, mono-adjacent 0.06em tracking. Hover shifts the fill to terracotta, lifts -3px, casts a terracotta glow (`0 14px 30px -14px rgba(180,85,45,.7)`).
- **Ghost:** Transparent on bone with ink border; hover inverts to ink fill + bone text, lifts -3px.
- **Easing:** All transitions use the house ease `cubic-bezier(0.16,1,0.3,1)`.

### Chips (filters)
- **Style:** Mono uppercase, transparent with a 1px Line border, ink-soft text. Pill shape.
- **State:** Active = ink fill + bone text. Hover (inactive) tightens border to ink and darkens text. Filters the portfolio grid by discipline.

### Cards / Containers (Blueprint Plate)
- **Corner Style:** 2px radius (nearly square; a sheet, not an app card).
- **Background:** Blueprint Navy with a radial lift to Blueprint Navy Lift at the top.
- **Shadow Strategy:** Plate rest -> plate hover (see Elevation).
- **Border:** Inset 1px frame in `rgba(159,195,212,.22)` (the sheet edge). A category tag (mono, bp-line on a pill) pins top-left; a circular view affordance fades in top-right on hover.
- **Internal Padding:** 1.1-1.4rem around the drawing; meta row divided by a faint bp-line rule.

### Inputs / Fields
None in the current build. The contact action is a single heavy uppercase Archivo Expanded mailto link with a 2px terracotta underline that colors on hover, sitting on the drenched navy contact band; there is no form. If forms are added later, fields should be hairline-ruled (bottom border only), mono labels, terracotta focus underline, never boxed-and-shadowed.

### Navigation
- **Style:** Fixed. Over the navy hero it is light (bone text, bp-line descriptor); on scroll past 40px it gains a blurred bone background (`rgba(239,233,221,.85)` + backdrop-blur), a 1px Line bottom border, tighter padding, and flips to dark (ink) text.
- **Brand:** "BE" in heavy Archivo Expanded beside a mono two-line descriptor split by a hairline; the ampersand is terracotta. It is hidden at the top of the page (the hero carries the giant BE lockup) and fades in once the nav is scrolled past the hero.
- **Links:** Hanken, with an animated 1px `currentColor` underline growing left-to-right on hover. "Enquire" is a pill-outline CTA (current-color border) that inverts to fill on hover.
- **Mobile:** Below 900px links collapse to a burger that toggles a Paper-surfaced dropdown panel.

### Signature Component (The Drawing Plate)
The defining element: a parametric, seeded SVG architectural drawing (floor plan, site/landscape plan, elevation, section, or masterplan) rendered as Blueprint Line and Blueprint Ink strokes on a navy plate, complete with a title block (sheet code + type, bottom edge), a terracotta north arrow or level markers, and at least one dimension line. Each project's drawing is seeded from its own data so it is stable but distinct. This component carries the entire portfolio; photography is never substituted for it.

## 6. Do's and Don'ts

### Do:
- **Do** render every project as hand-built SVG linework on a blueprint plate. The drawing is the hero, always.
- **Do** keep drafting annotations authentic: real sheet codes, dimensions, north arrows, level markers, mono uppercase, widely tracked.
- **Do** drive drama through scale and the dark/light/dark rhythm (monumental Archivo Expanded uppercase display, navy-drenched hero and contact bands, dense plates), per "drama from scale and contrast."
- **Do** confine terracotta to ~10% of a screen as the red-pencil accent (eyebrows, north needle, one emphasis word, hover states).
- **Do** keep the bone ground flat; reserve shadows for plates so they read as sheets on a table.
- **Do** cap prose at ~48-75ch and keep body color at Warm Ink / Ink Soft for >=4.5:1 contrast; watch Blueprint Line on navy for the same.

### Don't:
- **Don't** ship the generic SaaS/AI template: no identical icon-heading-text card grids, no purple gradients, no tiny tracked eyebrows on every section, no hero-metric blocks.
- **Don't** drift toward the cluttered real-estate / agency look: no stock photography, no badges, no loud repeated CTAs, no dense listings.
- **Don't** chase brutalist / Y2K trends: no neon, no chaotic grids, no novelty fonts. It will date within a year.
- **Don't** drift into the editorial-typographic lane: no display serif (Fraunces/Playfair/Cormorant) headlines, no italic kickers, no ruled three-column metadata. The display voice is the monumental grotesque.
- **Don't** settle into corporate sterility: every screen needs the studio's point of view, never safe-and-stocky.
- **Don't** drench an interior section; navy is the hero and contact bookends only. Don't put a drawing on the bone ground. Honor the Two-Worlds and Bookend rules.
- **Don't** use terracotta as a fill behind text, and never use `border-left`/`border-right` >1px as a colored side-stripe accent or `background-clip:text` gradient text.
