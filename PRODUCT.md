# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (chosen by the owner). Static site, no CMS yet. Content lives in `src/data/site.ts`.

Domain: `iglesiabautistadelcentro.com.ar` (confirmed by the owner 2026-11-18), set as `site` in `astro.config.mjs`.

## Users

- Primary (inferred from the owner's brief, not formally confirmed): people in Eldorado, Misiones who do not attend IBC yet and want to know who the church is, when and where it meets, and what exists for their family. Mostly on a phone, often arriving from Instagram, Facebook, or a personal invitation.
- Secondary: current members looking for schedules, sermons, and events.
- The congregation is intergenerational, with many older adults and families.

## Product Purpose

The public website of Iglesia Bautista del Centro (IBC), a Baptist church in Eldorado, Misiones, Argentina, more than 55 years old. The site is the front door to the community: a first-time visitor should quickly understand who IBC is, where and when it meets, what there is for each age, and how to get in touch.

## Positioning

A real, local, intergenerational church family: "conocer, amar y seguir a Jesús" and "vivir como una familia". It also runs Octubrillante / Fiesta de la Luz, a children's event that celebrated its tenth anniversary in 2025 and received more than 6,000 attendees in 2024, with strong volunteer participation (all three confirmed in the owner's brief).

## Operating Context

- Weekly gatherings: Reunión General, Sunday 19:00; JIBE (youth), Friday 21:00; Adolescentes, Saturday 18:00; Pre-adolescentes, Saturday 16:00, all at Auditorio Bautista, La Rioja 1402, Km 9. Prayer meeting, Wednesday 20:15, at Templo Bautista, Paraguay y Congreso.
- Two venues that must never be confused.
- Channels: Facebook (`idelcentroeldorado`), Instagram (`ibc.eldorado`), YouTube (`@ibc.eldorado`, sermons; confirmed by the owner 2026-11-18), YouVersion. Fiesta de la Luz has its own Instagram (`fiestadelaluz.ibc`, confirmed by the owner 2026-11-18).

## Capabilities and Constraints

- Confirmed from the church's Instagram highlights (2026-11-13): "Encuentros 4G" at the Auditorio Bautista: Ministerio de Niños, up to 9 years, Sundays 19:00; Pre-adolescentes, 10 to 12, Saturdays 16:00; Adolescentes, 13 to 17, Saturdays 18:00; Jóvenes, 18 and over, Fridays 21:00. "Grupos de vida" exist for women, men, teens, youth and mixed groups, on several weekdays across Eldorado.
- Decided by the owner (2026-11-13): Fiesta de la Luz has its own visual style and will get its own website soon. This site carries no Fiesta de la Luz page; it keeps only the home panel, which links to the event's own Instagram. Do not build a Fiesta page here unless the owner asks.
- Privacy: the Grupos de vida highlight lists leaders' names, home addresses and personal phone numbers. None of that is published on the site; the page sends people to the church's contact channels instead. Publishing the list needs the owner's explicit decision.
- Ministries known: Alabanza, Multimedia, JIBE, Adolescentes, Pre-adolescentes, Oración, Niños, Parejas, Mujeres, Grupos de vida (also called "células"; one name must be chosen), Instituto Bautista del Centro (the church's own school, confirmed by the owner 2026-11-13: nivel inicial, primario and secundario; website https://institutobautistadelcentro.com/, which does not answer on `www`; linked from a home panel and the footer; its white logo and two photos were downloaded from that website with the owner's permission into `src/assets/logos/instituto-white.svg` and `src/assets/photos/instituto-*.webp`).
- Undecided or missing: official mission, vision, and statement of faith; founding year; pastoral team roles and bios; institutional email; giving methods; official typefaces.
- Decided by the owner (2026-11-13): the Templo Bautista card carries no photo; it keeps the typographic day-and-time tile. Never place a photo taken at the Auditorio on Templo content.
- The church has no WhatsApp (owner, 2026-11-18). Never add a WhatsApp number or link; contact goes through the phone, Instagram and Facebook.
- Content is edited in code for now.

## Brand Commitments

- Name: Iglesia Bautista del Centro (IBC). Logo: two figures with "IGLESIA BAUTISTA DEL CENTRO" in condensed capitals; the owner supplied vector files (stacked and horizontal, black and white) in `src/assets/logos/`, plus the Fiesta de la Luz event logo.
- Palette supplied by the owner: IBC Blue #1B4F8C, Blue Hover #2E6BB5, Dark Blue #0C2A4A, Light Blue #E6EFF9, Gold #C9973A, Light Gold #DDB96A, Dark #111111, Gray #999999, Dark Gray #1A1A1A.
- Direction pinned by the owner (2026-11-13, second round): follow vouschurch.com closely in structure and tone. Warm gray ground, near-black ink, white cards, quiet medium-weight headings, monospaced uppercase labels, pill buttons, numbered card rows, black inset panels, black-and-white section photos. The first attempt (giant condensed capitals over blue and gold fields) was rejected by the owner as generic. The supplied blue and gold palette is not used on the home for now; blue remains only for focus rings.
- Never copy the reference's code, images, video, logo, or copy. Only its layout language is followed, with IBC's own content.
- Voice: warm, close, familiar, not formal, Argentine Spanish (voseo), few or no emojis. Hashtag: #YoAmoMiIglesia.

## Evidence on Hand

- Sixteen photos downloaded from the church's Facebook page: `src/assets/photos/`. The owner gave standing permission (2026-11-13) to keep sourcing photos from that page. The four `fiesta-*` photos come from the Octubrillante 2021 and 2019 albums. Each carries the church watermark; originals in higher quality are pending.
- Approved institutional description (written for YouVersion).
- Public contact on Facebook: phone 03751 60-9688.
- Do not fabricate: testimonials, attendance figures beyond Octubrillante, doctrine, pastor bios, giving details.

## Product Principles

1. A visitor finds when and where within seconds.
2. Real people from the congregation, never stock imagery.
3. Every age finds its place.
4. Warm before impressive.
5. Publish only confirmed facts.

## Accessibility & Inclusion

Many older adults: generous text size, strong contrast, large tap targets, no motion required to read content.
