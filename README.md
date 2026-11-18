# IBC Web

Public website of Iglesia Bautista del Centro (IBC), a Baptist church in Eldorado, Misiones, Argentina. It tells a first-time visitor who the church is, when and where it meets, and what there is for each age.

Built with [Astro](https://astro.build) as a static site, with GSAP for scroll motion.

## Pages

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Home: visit cards, the week's gatherings, ministries, sermons, values, gallery |
| `/visitanos/` | `src/pages/visitanos.astro` | Days, venues, directions and what a first visit is like |
| `/ministerios/` | `src/pages/ministerios.astro` | Gatherings by age and the church's ministries |

## Development

Requires Node 22 or later.

```sh
npm install
npm run dev       # local server at http://localhost:4321
npm run build     # static site in ./dist
npm run preview   # serve the build locally
```

## Where things live

- `src/data/site.ts`: schedule, venues, contact details and links. Edit content here; publish only confirmed facts.
- `src/components/`: one Astro component per section.
- `src/assets/`: photos and the church's vector logos.
- `src/scripts/motion.ts`: scroll motion, loaded once from the layout.
- `PRODUCT.md`: who the site is for, what is confirmed and what is still missing.
- `DESIGN.md`: the design system (colours, type, components, motion). Read it before changing the look.
