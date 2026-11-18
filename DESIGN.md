---
name: Iglesia Bautista del Centro
description: Quiet, warm-gray public site for a church family in Eldorado, Misiones.
colors:
  ground: "#e8e6e3"
  ground-deep: "#dcd9d4"
  paper: "#ffffff"
  ink: "#131212"
  ink-soft: "#5a5855"
  ink-faint: "#757370"
  line: "rgb(19 18 18 / 0.18)"
  on-dark: "#e8e6e3"
  on-dark-soft: "#a9a6a1"
  blue: "#1b4f8c"
typography:
  title-l:
    fontFamily: "'Inter Tight Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 2.2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.012em"
  title:
    fontFamily: "'Inter Tight Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.5rem + 1vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.012em"
  title-s:
    fontFamily: "'Inter Tight Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.3rem + 0.4vw, 1.625rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.012em"
  numeral:
    fontFamily: "'Inter Tight Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(4rem, 3rem + 4vw, 5.5rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  text-l:
    fontFamily: "'Inter Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.4vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.4
  text:
    fontFamily: "'Inter Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  text-s:
    fontFamily: "'Inter Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "'Spline Sans Mono Variable', ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.06em"
  mono-text:
    fontFamily: "'Spline Sans Mono Variable', ui-monospace, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
  card: "2px"
  float: "14px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 0.5rem + 3.4vw, 3.75rem)"
  inset: "clamp(0rem, -6rem + 13vw, 6rem)"
  section: "clamp(4rem, 3rem + 5vw, 7.5rem)"
  head-gap: "clamp(1.75rem, 3vw, 2.5rem)"
  row-gap: "clamp(1rem, 2vw, 1.75rem)"
  card-pad: "1.75rem"
  stack: "1.25rem"
  max: "90rem"
  header: "3.75rem"
  tap: "2.75rem"
components:
  pill:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1.5rem"
    height: "2.875rem"
  pill-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  go-link:
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "0.5rem 0"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-pad}"
  card-float:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.float}"
    padding: "1.5rem 1.75rem 1.25rem"
  poster:
    backgroundColor: "{colors.ground-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.numeral}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
  poster-next:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.8rem"
  panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    padding: "clamp(2.5rem, 7vw, 6rem) clamp(1.5rem, 6vw, 5.5rem)"
  header-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.text-s}"
    height: "{spacing.header}"
  footer:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
---

# Design System: Iglesia Bautista del Centro

Recorded from the shipped home page (`src/pages/index.astro`, `src/styles/global.css`, `src/components/*.astro`) after its finish review. Tokens live as CSS custom properties on `:root` in `src/styles/global.css`; that file is the source of truth and the frontmatter above mirrors it.

## Overview

**Creative North Star: "The Quiet Front Door"**

(The name is the documenter's proposal, drawn from PRODUCT.md's "front door to the community"; the owner has not confirmed it.)

The site is calm on purpose. A warm gray ground, near-black ink and white paper carry everything; headings are medium weight and modest in size; labels are small monospaced capitals; the only filled surfaces are white cards and black panels. Restraint is the look. Warmth comes from the photographs of the real congregation and from the Spanish copy in voseo ("Hay un lugar para vos"), never from colour or from loud type.

The owner pinned this direction after rejecting a first version built on giant condensed capitals over blue and gold fields, which read as generic. That rejection is the system's main guardrail: nothing here should shout. The structure follows the layout language of a named reference (white header bar, full-bleed photo hero, numbered card rows, black inset panels, drifting gallery, white footer) with IBC's own content; none of the reference's code, images or copy is used.

The congregation includes many older adults, so body text is 17px, tap targets are at least 44px, contrast is strong, and no content depends on motion to be read.

**Key Characteristics:**
- Three neutrals do the work: warm gray ground, near-black ink, white paper.
- Headings are quiet: medium weight (500), never above 3rem, sentence case.
- Uppercase exists only in the monospaced label face.
- Depth is tonal (paper on ground, ink on ground). One shadow exists in the whole system.
- Corners are almost square (2px) on cards and square on photos and panels; full pills on controls.
- Section photos are black and white; the hero and the gallery are in colour.
- Large numerals are reserved for meeting times.

## Colors

A neutral, warm-leaning grayscale. No hue is used as a surface.

### Primary
- **Near-Black Ink** (`ink`, #131212): all primary text, pill borders, pill hover fill, the black inset panels, the "next gathering" poster, the mobile menu bars, text selection.

### Secondary
- **Church Blue** (`blue`, #1b4f8c): the keyboard focus ring on light surfaces and the text colour of the current page's link in the header navigation, and nothing else. It is the only trace of the church's supplied palette.

### Neutral
- **Warm Gray Ground** (`ground`, #e8e6e3): the page background. Also the empty-state fill behind card images.
- **Deep Ground** (`ground-deep`, #dcd9d4): poster tiles inside cards (day and time), and the placeholder fill behind gallery photos.
- **Paper** (`paper`, #ffffff): cards, the header bar, the mobile menu sheet, the footer, chips over photos, text on a hovered pill.
- **Soft Ink** (`ink-soft`, #5a5855): secondary copy, addresses, the small monospaced paragraphs. Passes body-size contrast on both ground and paper.
- **Faint Ink** (`ink-faint`, #757370): quiet section headings only (see the rule below), plus the scrollbar thumb.
- **Hairline** (`line`, 18% ink): 1px dividers in the mobile menu and above the footer base line.
- **On Dark** (`on-dark`, #e8e6e3): text on the hero photo and on black panels; also the focus ring colour there.
- **On Dark Soft** (`on-dark-soft`, #a9a6a1): secondary copy on black panels.

### Provisional, not part of the system
- The Fiesta de la Luz logo (`src/assets/logos/fiesta-de-la-luz.svg`) carries the event's own yellow (#fdbd10). That yellow exists only inside the logo file; there is no yellow token, and no other element may use it.
- `--line-on-dark` is declared but unused.

### Named Rules
**The No Colour Field Rule.** The only filled surfaces are paper, ground, deep ground and ink. Blue, gold or any other hue never fills a section, a card, a button or a heading.

**The Focus-and-Current Blue Rule.** Blue appears in two places only: as a 2px outline at 3px offset on `:focus-visible`, and as the text colour of the header link marked `aria-current="page"`. Inside the hero and inside any black panel the focus ring switches to the on-dark colour, because blue is too dark to see there. A new dark surface must opt into the same switch.

**The Faint-Is-Large Rule.** Faint ink is about 3.8:1 on the ground. It is allowed only on headings at the `title` size or larger. Body copy and labels use ink or soft ink.

## Typography

**Title Font:** Inter Tight Variable (fallback Helvetica Neue, Arial)
**Text Font:** Inter Variable (fallback Helvetica Neue, Arial)
**Label/Mono Font:** Spline Sans Mono Variable (fallback ui-monospace)

All three are self-hosted through `@fontsource-variable` and imported in `src/layouts/Base.astro`.

**Character:** A plain grotesque at medium weight for headings, the same family's wider cut for reading, and a monospaced face for labels and small notes. The mono face supplies the texture; the headings stay out of the way.

### Hierarchy
- **Title L** (500, clamp 2rem to 3rem, 1.1, -0.012em): the largest heading in the system. The hero `h1` ("Hay un lugar para vos") and statements inside black panels. The Fiesta de la Luz heading is the event logo image, not set type.
- **Title** (500, clamp 1.75rem to 2.25rem, 1.1): section headings ("Visitá IBC", "La semana en IBC", "Lo que nos mueve").
- **Title S** (500, clamp 1.375rem to 1.625rem, 1.15): card headings, the two-digit card and list numbers ("01"), the hero card's lead line.
- **Numeral** (500, clamp 4rem to 5.5rem, 0.9, -0.03em): meeting times on poster tiles ("19:00"). A smaller 3.5rem cut is used on the poster inside a visit card.
- **Text L** (400, clamp 1.1875rem to 1.375rem, 1.4): a lead sentence under a heading or opening a panel.
- **Text** (400, 1.0625rem / 17px, 1.5): body. This size is deliberate for older readers; do not reduce it.
- **Text S** (400 or 500, 0.9375rem, 1.5): header and footer links (500), schedule lines and venue lines inside cards.
- **Mono** (500, 0.8125rem, 0.06em, uppercase): labels and controls: pill buttons, arrow links, day names on posters, schedule notes ("Sábados 16:00"), the vertical rail words. Chips over photos and on posters use the same style at 0.75rem, the smallest text in the system.
- **Mono Text** (400, 0.9375rem, 1.6, soft ink, sentence case): short notes in the label face: who a meeting is for, addresses, value descriptions, the footer base line.

All titles use `text-wrap: balance`.

### Named Rules
**The Quiet Heading Rule.** Headings are weight 500, sentence case, and never larger than Title L (3rem). No condensed faces, no heavy weights, no all-caps headings.

**The Mono-Only Caps Rule.** Uppercase and positive letter-spacing belong to the Mono role alone. Titles and body copy are never uppercased or tracked out.

**The Numerals-Are-Times Rule.** The large numeral size is for meeting times on poster tiles. It is not a display size for words.

**The Quiet Section Title.** A section heading may take faint ink (`.title--quiet`) when it simply names the content directly beneath it; the home does this for "La semana en IBC", "IBC es para vos" and "La Palabra, cada domingo". Headings that open a section with a statement or an action stay in ink.

## Layout

- **Container:** content sits in a wrapper of `min(100% - 2 × gutter, 90rem)`, centred. The gutter runs from 1.25rem on phones to 3.75rem on wide screens.
- **Inset:** most sections add a second horizontal inset (0 on phones, up to 6rem) inside the wrapper, so text and panels sit narrower than the header bar. Black panels and the hero heading use the same inset.
- **Section rhythm:** sections take vertical padding of 4rem to 7.5rem (`--section`). Black panels are placed between sections without their own section padding. The gap from a section heading to its content is 1.75rem to 2.5rem.
- **Header:** fixed white bar, 3.75rem. Three-column grid: logo left, links centred, pill right. Links are Text S at weight 500, no underline; hovering one fades the others to 45% opacity. Current labels: "Visitanos", "Reuniones", "Ministerios", "Prédicas", "Fiesta de la Luz".
- **Horizontal rows:** card rows scroll sideways with mandatory snap and a hidden scrollbar. The row's side padding matches the wrapper edge, so the first card aligns with the text above and the last cards bleed off the viewport. Gap 1rem to 1.75rem. Card widths are fixed per row: `min(78vw, 22rem)` for visit cards, `min(76vw, 19.5rem)` for gathering cards. A row with more cards than fit gets a pair of arrow buttons below it; a row that fits is centred.
- **Split sections:** two columns in a 5:6 ratio (text and photo, or heading and text) with a gap of 2rem to 6rem; a 3:9 split for an intro beside a three-column numbered list.
- **Overlap:** on wide screens the ministries section sets a sticky black-and-white photo across columns 1 to 8 of a 12-column grid and lets a stack of white cards (columns 8 to 12) scroll over its right edge. On phones the cards pull up 2.5rem over the photo's bottom edge.
- **Breakpoints:** one main break at 56rem. Below it: the header links and CTA collapse into a menu, hero rails disappear, split sections stack with the photo first, the hero card takes the full width. A second break at 30rem takes the numbered list from two columns to one.
- **Stacks:** text groups use grid gaps of 1rem to 1.25rem; card interiors use 1.5rem to 1.75rem padding.
- **Tap targets:** icon buttons and menu controls are 2.75rem square; pills are at least 2.875rem tall.

## Elevation & Depth

Flat. Depth comes from tone: white paper on warm gray ground, deep-ground tiles inside paper, ink panels on ground, and cards overlapping a photograph. The header bar has no shadow and no border.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 18px 40px -18px rgb(19 18 18 / 0.5)`): the hero's "next gathering" card, which sits on top of a colour photograph. This is the only shadow in the system.

Photographs that carry text get a scrim instead of a shadow: the hero uses a bottom-up ink gradient (72% at the bottom, 8% at 55%, 18% at the top), plus soft side vignettes on wide screens for the rails; a photo inside a black panel is shown at 32% opacity over ink.

### Named Rules
**The One Shadow Rule.** A shadow is allowed only on a white card floating over a full-colour photograph. Cards on the ground, panels, the header and buttons are flat.

## Shapes

- **Cards:** almost square, 2px radius.
- **Photos, poster tiles, black panels:** square corners. Photos are clipped by their frame, never rounded.
- **Controls and chips:** full pills (999px) with a 1px border.
- **Floating card over a photo:** 14px radius. This softer corner belongs with the One Shadow Rule and is used once, in the hero.
- **Lines:** 1px hairlines at 18% ink; 1px vertical rules 4.5rem tall in the hero rails; 1px strokes on arrows.
- **Arrows:** long and thin. The link arrow is a 56×9 hairline with a small open head; row arrows are the same drawing at 22×9. Arrows are inline SVG in `currentColor`, never text glyphs.
- **Photo ratios:** 3:2 inside cards, 5:4 for section photos (4:3 for the ministries photo on phones), 4:5 in the gallery at three widths, 1:1 for gathering posters.

## Components

Every control is quiet at rest and answers with a small, soft movement. One easing is used everywhere: `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out`). Colour and opacity changes take 0.3s; position changes take 0.4s; image zoom takes 0.8s.

### Buttons
- **Pill (`.pill`):** transparent fill, 1px ink border, full pill, Mono label, minimum height 2.875rem, padding 0.5rem 1.5rem. Used for the main action of a section and for each gathering card's "Cómo llegar".
- **Hover:** fills with ink and the label turns paper, over 0.3s.
- **Focus:** the global ring (2px, 3px offset; blue on light, on-dark on dark surfaces).
- **Header variant:** the header's "Cómo llegar" pill is 2.5rem tall with 1.25rem side padding. It appears only on wide screens; do not use the compact size elsewhere.
- There is no filled primary button. The pill is the only button shape.

### Arrow link (`.go`)
Mono label followed by the long thin arrow, 1rem apart, no underline. On hover the arrow slides 0.5rem to the right over 0.4s. This is the secondary action everywhere: under the hero heading ("Planificá tu visita"), inside the hero card, under text blocks ("Ver prédicas en YouTube"), and on black panels where it inherits the on-dark colour.

### Cards / Containers
- **Paper card (`.card`):** white, 2px radius, no border, no shadow. Internal padding 1.5rem to 1.75rem.
- **Numbered card:** a two-digit number in Title S at the top ("01"), then a 3:2 frame (a black-and-white photo, or a deep-ground poster with a day and time), then a Title S name, schedule lines in Text S, and the address in Mono Text as a link. A small white chip sits at the lower left of the frame naming the action. On hover the photo zooms to 1.04. The numbers mark a real sequence of options; do not number things that have no order or count.
- **Gathering card:** a square poster on top, edge to edge (deep ground, day name in Mono at the top, time in Numeral at the bottom), then name, who it is for (Mono Text), venue in soft Text S, and a pill. The card for the next gathering turns its poster to ink with on-dark text and shows an outlined chip at the top right reading "Lo próximo" or "Ahora".
- **Ministry card:** a compact paper card with a Title S name, one soft sentence, and an optional Mono schedule line. Stacked with 0.75rem gaps over a photograph.
- **Floating card:** see Elevation. Title S lead line, two soft lines, an arrow link. The whole card is one link and lifts 4px on hover.

### Chips
- **On a photo or poster:** white fill, full pill, Mono at 0.75rem, padding 0.3rem 0.8rem.
- **Status flag:** transparent with a 1px `currentColor` border, same size; used for the next-gathering flag.

### Black inset panel (`.panel`)
An ink rectangle with square corners, set inside the wrapper at the inset width, with generous padding (2.5rem to 6rem vertical, 1.5rem to 5.5rem horizontal). Two forms exist: a centred Title L statement over a black-and-white photo at 32% opacity ("Buscamos algo simple: conocer, amar y seguir a Jesús."), and a two-column 5:6 panel with a Title L heading on the left and Text L, soft copy and an arrow link on the right. Text is on-dark; secondary copy is on-dark-soft. A page uses panels sparingly: the home has two, far apart.

### Navigation
- **Header:** fixed white bar, 3.75rem. Three-column grid: wordmark left, links centred, pill right. Links are Text S at weight 500, no underline; hovering one fades the others to 45% opacity. Current labels: "Visitanos", "Reuniones", "Ministerios", "Prédicas", "Fiesta de la Luz".
- **Mobile (below 56rem):** links and pill are replaced by a two-bar menu control (bars 2px thick, 1.75rem and 1.25rem wide) that turns into a cross when open. The menu is a white sheet under the bar with links in the title face at 1.75rem, separated by hairlines. Choosing a link closes it.
- **Logo:** the church's own vector logo, supplied by the owner, in `src/assets/logos/`. Header: horizontal black version at 2.5rem tall, linking home. Footer: stacked black version at 7rem tall. On photos or black surfaces use the white versions (`ibc-horizontal-white.svg`, `ibc-stacked-white.svg`). Never redraw, recolour, stretch or set the name in type as a substitute; no weight above 500 exists in the type system. The favicon is the two-figure mark in white on an ink square.
- **Skip link:** "Ir al contenido", ink on paper, appears at the top on focus.
- **Footer:** white. A row of Text S links, a row of pills ("Llamanos", "Instagram", "Facebook"), then a hairline and a base line with the stacked logo and Mono Text details.

### Row navigation
Two borderless 2.75rem buttons with the short thin arrows, placed under a scrolling row at the text edge. A button at the end of its travel drops to 30% opacity and is disabled.

### Hero rails (wide screens only)
Vertical rails at the photo's edges: social icons (22px inline SVG, 2.75rem targets), a 4.5rem hairline and a vertical Mono word ("Seguinos") on the left; a vertical Mono word ("Descubrí"), a hairline and a small triangle on the right, linking to the first section. Hidden below 56rem.

### Photography
- Real photographs of the congregation only; no stock imagery.
- The hero and the drifting gallery are in full colour. Every other photo is black and white through `.bw` (`grayscale(1) contrast(1.05)`).
- Photos fill their frame with `object-fit: cover`, with the focal point set per image through `object-position`, usually biased toward the top to keep faces.
- A photo with text over it always gets an ink scrim or sits at reduced opacity over ink.
- Every meaningful photo has a Spanish `alt` describing what is in it; a purely atmospheric photo behind text has an empty `alt`.
- **Fiesta de la Luz exception:** photos of the event stay in colour inside its black panel, because light and colour are the event's subject. Every other section photo stays black and white.

### Motion
- **On load (hero):** the photo settles from scale 1.06 over 2.2s; the heading and the card fade up 1rem over 1s, delayed 0.2s and 0.4s.
- **On scroll (GSAP, `src/scripts/motion.ts`):** scroll motion runs on GSAP with ScrollTrigger and SplitText, loaded once from the layout. There are four moves, each tied to one kind of element; a new page gets them by using the same class names, and no fifth move should be added without a reason:
  1. **Photos drift.** The hero photo falls 14% behind the page as it scrolls away; a framed section photo drifts 6% each way inside its frame. Scrubbed to the scrollbar, no easing.
  2. **Lists arrive as lists.** Visit cards, ministry cards and numbered items rise 28px and fade in when their row reaches 90% of the viewport, 0.8s, 0.07s apart, once.
  3. **Black panels open.** A `.panel` widens from `inset(10% 7%)` to full as it travels from 96% to 48% of the viewport (scrubbed); its Title L statement comes up line by line from a mask, 1s, 0.09s apart, once; a photo inside settles from scale 1.14.
  4. **The week lights up.** In a `.week` row the cards arrive in order, then the next gathering's poster turns from deep ground to ink and its flag appears. This is the site's one authored moment: it shows which gathering is next.
- **Motion rules:** easing is `expo.out` for arrivals (the same curve as `--ease-out`) and none for scrubbed moves. Initial states are set in script, so the page is complete without JavaScript. Section headings do not animate; only panel statements do.
- **Gallery:** two copies of the photo set drift left in a 70s linear loop and pause on hover.
- **Smooth scrolling** for anchor links.
- **Reduced motion:** the CSS animations are inside `prefers-reduced-motion: no-preference`, and the script reads the same preference through `gsap.matchMedia()`. With reduced motion nothing travels: lists fade in over 0.4s, the next gathering still turns black because that change carries meaning, panels and photos stay still, the gallery becomes a manually scrollable strip and smooth scrolling is off.

### Inner pages

- **Routes:** the home is `/`; inner pages live at their own path (`/visitanos/`, `/ministerios/`). Header and footer links are root-relative (`/visitanos/`, `/#semana`), so they work from any page.
- **Page hero (`PageHero.astro`):** full-bleed colour photo below the header, 72svh tall, with one Title L heading at the lower left on the inset edge. No rails and no floating card; those belong to the home hero only.
- **Section reuse:** the numbered visit cards (`Visit.astro`) take a heading, an id and an optional pill action, so the same cards serve the home and the visit page. The week row (`Week.astro`) is reused as is and also carries the row-arrow script.
- **Photo-and-logo black panel (`FeaturePanel.astro`):** photo on the left, and on the right a logo standing as the heading, a lead sentence, one quiet line and one arrow link. Used for the two bodies that have their own identity: Fiesta de la Luz (colour photo, its own logo) and the Instituto Bautista del Centro (black-and-white photo, white round logo at 9rem). Each logo appears only in its own panel.
- **Text-only black panel (`TextPanel.astro`):** Title L statement on the left; a lead sentence, quiet facts and one arrow link on the right; no photo. Use it when no honest photo of the place or group exists. `PrayerPanel.astro` and the "Grupos de vida" panel are built on it.
- **Week row layout:** from 75rem up, the week is a grid inside the content column with one card per column (`--n` columns), aligned with the section title, with no horizontal scroll and no arrows; the time numeral scales with its poster (`32cqi`). Below 75rem it is the snap-scrolling row with arrows. The whole week shows one card per time slot: a gathering marked `alongside` another (the children's ministry during the Sunday gathering) is named inside that card as "A la misma hora: …" instead of repeating the same day and time. Scrolling rows compute their side padding from `100%`, never `100vw`, so a visible scrollbar cannot push the cards out of line with the title.
- **Filtered week row:** `Week.astro` takes a heading, a lead sentence and an `only` list of gathering ids, shown in the order given. The ministries page uses it for "Encuentros 4G" (children, pre-teens, teens, youth, in age order).
- **Cards over a photo, reused:** `ForYou.astro` takes a heading, a list of ministries and a photo, so the same component lists every ministry on the home and the remaining ones on the ministries page.
- **Numbered steps (`FirstVisit.astro`):** the same three-column numbered list as the values, used when the order carries meaning.
- **Closing contact (`Contact.astro`):** centred Title, one lead sentence and the three contact pills.

### Live "next gathering"
The home computes the next gathering in Argentina time (`America/Argentina/Buenos_Aires`) from the schedule in `src/data/site.ts`, marks its card in the week row, and mirrors it in the hero card (flag, name, "Hoy, 21:00 h", venue, map link). A gathering counts as "Ahora" for 90 minutes from its start. The server-rendered default is the Sunday Reunión General, so the card is correct without JavaScript. Each gathering always shows its own venue; the two venues are never merged.

## Do's and Don'ts

### Do:
- **Do** build every new page from the same three neutrals: ground (#e8e6e3) for the page, paper for cards, header and footer, ink for text and panels.
- **Do** keep body text at 1.0625rem (17px) and tap targets at 2.75rem or more.
- **Do** set headings in Inter Tight at weight 500, sentence case, at Title S, Title or Title L.
- **Do** use the Mono role for labels, buttons, arrow links and short notes, and only there use uppercase.
- **Do** use the pill for a section's main action and the arrow link for secondary actions.
- **Do** show schedules as poster tiles: day in Mono, time in the Numeral size.
- **Do** treat section photos with `.bw`, and keep colour for a page's hero photo and the gallery.
- **Do** put an ink scrim or reduced opacity behind any text set over a photo.
- **Do** switch the focus ring to the on-dark colour on any new dark surface.
- **Do** wrap every animation in `prefers-reduced-motion: no-preference` and make sure the content reads without it.
- **Do** reuse `--ease-out` with 0.3s for colour and opacity, 0.4s for movement.
- **Do** take content from `src/data/site.ts` and publish only confirmed facts.

### Don't:
- **Don't** bring back the rejected look: giant condensed capitals over blue or gold fields.
- **Don't** set any heading above 3rem, in a condensed face, in a heavy weight, or in capitals.
- **Don't** fill a section, card, button or heading with blue, gold or any other hue. Blue is the focus ring and the current nav link only.
- **Don't** use the Fiesta yellow outside the Fiesta de la Luz logo, and don't place that logo anywhere but Fiesta de la Luz content.
- **Don't** add shadows to cards on the ground, to panels, to the header or to buttons. The single shadow belongs to a white card floating over a colour photo.
- **Don't** round photos or panels, and don't give ground-level cards more than the 2px radius.
- **Don't** add a filled or coloured button style; the outlined pill is the only button.
- **Don't** use faint ink for body copy or labels.
- **Don't** use the Numeral size for words, counts or decoration.
- **Don't** use stock imagery, and don't use colour photos inside sections.
- **Don't** use text glyphs or emoji as icons; icons and arrows are inline SVG.
- **Don't** copy the reference site's code, images, video, logo or copy.
