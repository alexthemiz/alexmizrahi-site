# IE Photo Strip Design

**Date:** 2026-04-21

## Goal

Replace the static placeholder photo strip in each accordion section with a real image display system: a horizontally scrollable strip of Internet Explorer-framed photos, with a lightbox on click.

## Decisions Made

- **Lightbox state:** Self-contained in `PhotoStrip` (`"use client"`). No prop drilling to Accordion.
- **HEIC files:** Skipped (browser-incompatible). `IMG_2741.HEIC` excluded from wiring.
- **Empty sections:** Show one placeholder IE frame with `photoColor` background and "no photos yet" text. (`playa-provides` starts empty.)
- **File paths with spaces:** Stored as-is in `sections.ts`; `encodeURI(src)` applied at render time.

## Data Layer

### New type

```typescript
export type Photo = { src: string; caption?: string };
```

Added to `Section`:

```typescript
photos: Photo[];
```

All 5 sections get a `photos` array wired to existing images in `/public/images/` with empty captions. `playa-provides` gets `photos: []`.

## Components

### `IEFrame` (new — `app/components/IEFrame.tsx`)

Pure presentational. Props: `src`, `caption?`, `accentColor`, `onClick`.

Structure (top to bottom):
1. **Title bar** — `linear-gradient(90deg, #0000aa, #1084d0)`, 22px tall. Three colored squares left (■ `#ff5f57` ■ `#febc2e` ■ `#28c840`). Filename in white VT323 10px.
2. **URL bar** — `#d4d0c8` background, `C:\photos\{filename}` in monospace 10px, `[Go]` button.
3. **Photo + scrollbar row** — `<img>` 200×160 `object-fit: cover` + 16px decorative scrollbar strip on right (▲/▼ arrows, gray track).
4. **Caption** — VT323 12px, `accentColor`, only rendered if `caption` is truthy.

Outer border: `2px solid #c0c0c0`. Whole frame is `shrink-0` in the strip. Click fires `onClick`.

Filename extracted via `src.split('/').pop()`.

### `PhotoStrip` (modified — `app/components/PhotoStrip.tsx`)

Becomes `"use client"`. New props:

```typescript
interface PhotoStripProps {
  photos: Photo[];
  photoColor: string;
  accentColor: string;
}
```

- `openPhoto: Photo | null` state, init `null`
- **Empty state** (`photos.length === 0`): one placeholder frame — IE chrome with `photoColor` bg in photo area, "no photos yet" in Press Start 2P 8px centered
- **Strip:** `display: flex`, `overflowX: auto`, `gap: 12px`, no wrap
- Each `IEFrame` click → `setOpenPhoto(photo)`
- **Lightbox** rendered when `openPhoto !== null`:
  - `position: fixed`, `inset: 0`, `z-index: 9999`, `background: rgba(0,0,0,0.85)`
  - Flex center. `<img>` `max-width: 90vw`, `max-height: 90vh`, `object-fit: contain`
  - `img` gets `onClick={e => e.stopPropagation()}`
  - Overlay click → `setOpenPhoto(null)`
  - `useEffect` adds ESC `keydown` listener, cleans up on unmount and when `openPhoto` changes

### `Accordion` (modified — `app/components/Accordion.tsx`)

Pass two additional props to `<PhotoStrip>`:

```tsx
<PhotoStrip
  photos={section.photos}
  photoColor={section.photoColor}
  accentColor={section.accentColor}
/>
```

## Image Inventory

### smores-lab (10 images)
- `19.2.jpg`
- `CAMP Smores.zip - 003.png`
- `CAMP Smores.zip - 016(2).png`
- `DSC_0316.JPG`
- `DSC_0320.JPG`
- `IMG_0750.jpg`
- `IMG_5833.JPG`
- `Lab 4 - NTSH.zip - 039 (2).png`
- `Lab 5 - Aestival.zip - 479.png`
- `ML Final.png`

### activations (9 images, 1 skipped)
- `1768334261570-c95dad8a-aad2-4c75-8ecd-6d1c41d302d6_1.jpg`
- `250913ShadowTrafficNightMarket0020.jpg`
- `250913ShadowTrafficNightMarket0055 (1).jpg`
- `Bunnyhana.png`
- `IMG_6018.jpg`
- `The Wimbleden.gif`
- `drz+team.webp`
- `lolla_v10.png`
- `wristlemania 2.png`
- ~~`IMG_2741.HEIC`~~ (skipped — browser-incompatible)

### playa-provides (0 images — placeholder shown)

### communications (2 images)
- `bluestate.avif`
- `osf_logo.png`

### copywriting (2 images)
- `chase_ultimate_rewards.jpg`
- `mercedes-benz-logo-11521539785ghkyjiijih.png`
