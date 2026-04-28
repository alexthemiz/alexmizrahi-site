# alexmizrahi-site — Notes

## What We've Built

### Visual Design
- Retro Windows 95 / early-web aesthetic throughout
- Page background: `#000080` (navy)
- Closed accordion headers: `#000040` (darker navy)
- Header: centered, Press Start 2P 24px yellow name with red text-shadow, VT323 green tagline, blinking availability line, cyan/yellow nav
- Rainbow pixel dividers above and below the accordion (repeating-linear-gradient, 30px blocks)
- Footer: `#000080` bg, `#c0c0c0` border, VT323 copyright left, Kazoo button right
- Visitor counter line + "best viewed in Netscape Navigator 4.0" gag text
- `@keyframes blink` with `step-start`, `prefers-reduced-motion` guard

### Kazoo Button
- Dual oscillator: sawtooth 220Hz (wobble) + square 440Hz
- Gain envelope: 0.18 attack → exponential decay → linear to 0 at 0.65s
- `AudioContext` closed on oscillator end (no leak)
- Displayed as `♫ [kazoo]` in VT323 yellow

### Accordion
- 5 sections: S'mores Lab, Activations, The Playa Provides, Communications, Copywriting
- VT323 titles, amber `#e8c84a` when open, `►` / `▼` indicators
- Each section has: eyebrow meta, description, photo strip, optional CTA tag
- Nested sub-accordions: dashed border, 22px VT323 title, pastel headers per section
  - Sub-header text/arrow: `#000060` closed, `#000040` open
  - Sub-header backgrounds per section (closed / open-darker):
    - S'mores: `#e8c4a0` / darkened
    - Activations: `#e8e0a0` / darkened
    - Communications: `#a0c4e8` / darkened
    - Copywriting: `#c8a0e8` / darkened
  - Only one sub-section open at a time; resets when parent closes

### IE Photo Strip
- Each photo wrapped in a retro IE browser frame (blue gradient title bar, URL bar, decorative scrollbar)
- Photos display at natural aspect ratio, no cropping; strip wraps into rows; frames bottom-aligned
- Lightbox on click: fixed overlay, 90vw/90vh, ESC or click-outside closes, scroll-lock
- Empty sections show "no photos yet" placeholder frame

### Data Layer
- `Photo` type: `{ src, caption? }`
- `SubSection` type: `{ id, title, description, photos, photoColor, accentColor, tag? }`
- `Section` type includes `subClosedColor?` for nested accordion header tinting
- All image files committed to `public/images/` and served via Vercel

---

## To Do

- [ ] Replace `►` and `▼` accordion arrows with something more fun/retro (TBD)
- [ ] Write About page copy
- [ ] Add captions to photos where relevant
- [ ] Wire up sub-section content (all placeholder for now)
- [ ] Finalize sub-section titles (currently working titles)
- [ ] Fix background color to `#000080` page / `#000040` accordion headers
- [ ] DNS switch from Squarespace to Vercel (pending — do last)
- [ ] Kazoo cursor on Activations section when open
- [ ] HuffPoSpoilers and other misc projects to live on About page
- [ ] Consider Instagram links for S'mores Lab and Lollakazooza
