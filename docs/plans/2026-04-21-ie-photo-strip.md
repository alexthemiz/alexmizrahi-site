# IE Photo Strip Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace static placeholder photo boxes with a horizontally-scrollable strip of IE-framed real photos, with lightbox on click.

**Architecture:** Four tasks in dependency order: data layer first (sections.ts), then the new IEFrame presentational component, then PhotoStrip (upgraded to client component with lightbox state), then Accordion wiring. PhotoStrip owns all lightbox state — no prop drilling upward.

**Tech Stack:** Next.js 16 (app router), TypeScript, React useState/useEffect, CSS inline styles, Web APIs (KeyboardEvent)

---

### Task 1: sections.ts — add Photo type and wire up all images

**Files:**
- Modify: `app/data/sections.ts`

**Step 1: Add the Photo type and update the Section type**

At the top of `app/data/sections.ts`, add a new exported type and add `photos` to `Section`:

```typescript
export type Photo = { src: string; caption?: string };

export type Section = {
  id: string;
  number: string;
  title: string;
  meta?: string;
  url?: string;
  description: string;
  tag?: string;
  openColor: string;
  photoColor: string;
  accentColor: string;
  photos: Photo[];   // ← new
};
```

**Step 2: Wire up all images in each section's photos array**

Add the following `photos` fields to each section object. Use exact src paths — the component will call `encodeURI()` at render time so spaces in filenames are fine here.

```typescript
// smores section
photos: [
  { src: '/images/smores-lab/19.2.jpg' },
  { src: '/images/smores-lab/CAMP Smores.zip - 003.png' },
  { src: '/images/smores-lab/CAMP Smores.zip - 016(2).png' },
  { src: '/images/smores-lab/DSC_0316.JPG' },
  { src: '/images/smores-lab/DSC_0320.JPG' },
  { src: '/images/smores-lab/IMG_0750.jpg' },
  { src: '/images/smores-lab/IMG_5833.JPG' },
  { src: '/images/smores-lab/Lab 4 - NTSH.zip - 039 (2).png' },
  { src: '/images/smores-lab/Lab 5 - Aestival.zip - 479.png' },
  { src: '/images/smores-lab/ML Final.png' },
],

// activations section (IMG_2741.HEIC excluded — browser-incompatible)
photos: [
  { src: '/images/activations/1768334261570-c95dad8a-aad2-4c75-8ecd-6d1c41d302d6_1.jpg' },
  { src: '/images/activations/250913ShadowTrafficNightMarket0020.jpg' },
  { src: '/images/activations/250913ShadowTrafficNightMarket0055 (1).jpg' },
  { src: '/images/activations/Bunnyhana.png' },
  { src: '/images/activations/IMG_6018.jpg' },
  { src: '/images/activations/The Wimbleden.gif' },
  { src: '/images/activations/drz+team.webp' },
  { src: '/images/activations/lolla_v10.png' },
  { src: '/images/activations/wristlemania 2.png' },
],

// tpp section
photos: [],

// communications section
photos: [
  { src: '/images/communications/bluestate.avif' },
  { src: '/images/communications/osf_logo.png' },
],

// copywriting section
photos: [
  { src: '/images/copywriting/chase_ultimate_rewards.jpg' },
  { src: '/images/copywriting/mercedes-benz-logo-11521539785ghkyjiijah.png' },
],
```

**Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 4: Commit**

```bash
git add app/data/sections.ts
git commit -m "feat: add Photo type and wire up section images"
```

---

### Task 2: IEFrame.tsx — new presentational component

**Files:**
- Create: `app/components/IEFrame.tsx`

**Step 1: Create the file with the following complete content**

```tsx
import { type Photo } from "../data/sections";

interface IEFrameProps {
  photo: Photo;
  accentColor: string;
  onClick: () => void;
}

export default function IEFrame({ photo, accentColor, onClick }: IEFrameProps) {
  const filename = photo.src.split("/").pop() ?? "image";
  const encodedSrc = encodeURI(photo.src);

  return (
    <div
      onClick={onClick}
      style={{
        border: "2px solid #c0c0c0",
        cursor: "pointer",
        flexShrink: 0,
        display: "inline-flex",
        flexDirection: "column",
        userSelect: "none",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #0000aa, #1084d0)",
          height: "22px",
          display: "flex",
          alignItems: "center",
          padding: "0 4px",
          gap: "3px",
        }}
      >
        <div style={{ width: 10, height: 10, backgroundColor: "#ff5f57", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#febc2e", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#28c840", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            color: "#ffffff",
            marginLeft: "4px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            maxWidth: "140px",
            textOverflow: "ellipsis",
          }}
        >
          {filename}
        </span>
      </div>

      {/* URL bar */}
      <div
        style={{
          backgroundColor: "#d4d0c8",
          borderBottom: "1px solid #808080",
          borderTop: "1px solid #ffffff",
          padding: "2px 4px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <span style={{ fontSize: "10px" }}>🌐</span>
        <span
          style={{
            fontSize: "10px",
            fontFamily: "monospace",
            color: "#000080",
            flex: 1,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {`C:\\photos\\${filename}`}
        </span>
        <button
          style={{
            fontSize: "9px",
            fontFamily: "monospace",
            backgroundColor: "#d4d0c8",
            border: "1px solid #808080",
            padding: "0 4px",
            cursor: "default",
          }}
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          Go
        </button>
      </div>

      {/* Photo + decorative scrollbar */}
      <div style={{ display: "flex" }}>
        <img
          src={encodedSrc}
          alt={photo.caption ?? filename}
          style={{
            width: "200px",
            height: "160px",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Scrollbar */}
        <div
          style={{
            width: "16px",
            backgroundColor: "#d4d0c8",
            borderLeft: "1px solid #808080",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1px 0",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#c0c0c0",
              border: "1px solid #808080",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
            }}
          >
            ▲
          </div>
          <div
            style={{
              width: 14,
              height: 14,
              backgroundColor: "#c0c0c0",
              border: "1px solid #808080",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "8px",
            }}
          >
            ▼
          </div>
        </div>
      </div>

      {/* Caption — only rendered when truthy */}
      {photo.caption && (
        <div
          style={{
            backgroundColor: "#f0f0f0",
            borderTop: "1px solid #c0c0c0",
            padding: "2px 6px",
            fontFamily: "var(--font-vt323), monospace",
            fontSize: "12px",
            color: accentColor,
          }}
        >
          {photo.caption}
        </div>
      )}
    </div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 3: Commit**

```bash
git add app/components/IEFrame.tsx
git commit -m "feat: add IEFrame retro browser window component"
```

---

### Task 3: PhotoStrip.tsx — upgrade to client component with lightbox

**Files:**
- Modify: `app/components/PhotoStrip.tsx`

**Step 1: Replace the entire file**

```tsx
"use client";

import { useState, useEffect } from "react";
import { type Photo } from "../data/sections";
import IEFrame from "./IEFrame";

interface PhotoStripProps {
  photos: Photo[];
  photoColor: string;
  accentColor: string;
}

export default function PhotoStrip({ photos, photoColor, accentColor }: PhotoStripProps) {
  const [openPhoto, setOpenPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    if (!openPhoto) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPhoto(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPhoto]);

  return (
    <>
      <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "8px" }}>
        {photos.length === 0 ? (
          <PlaceholderFrame photoColor={photoColor} />
        ) : (
          photos.map((photo, i) => (
            <IEFrame
              key={i}
              photo={photo}
              accentColor={accentColor}
              onClick={() => setOpenPhoto(photo)}
            />
          ))
        )}
      </div>

      {openPhoto && (
        <div
          onClick={() => setOpenPhoto(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={encodeURI(openPhoto.src)}
            alt={openPhoto.caption ?? ""}
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
}

function PlaceholderFrame({ photoColor }: { photoColor: string }) {
  return (
    <div
      style={{
        border: "2px solid #c0c0c0",
        flexShrink: 0,
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #0000aa, #1084d0)",
          height: "22px",
          display: "flex",
          alignItems: "center",
          padding: "0 4px",
          gap: "3px",
        }}
      >
        <div style={{ width: 10, height: 10, backgroundColor: "#808080", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#808080", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <div style={{ width: 10, height: 10, backgroundColor: "#808080", border: "1px solid rgba(0,0,0,0.3)", flexShrink: 0 }} />
        <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#ffffff", marginLeft: "4px" }}>
          (no photos)
        </span>
      </div>
      {/* URL bar */}
      <div
        style={{
          backgroundColor: "#d4d0c8",
          borderBottom: "1px solid #808080",
          borderTop: "1px solid #ffffff",
          padding: "2px 4px",
          fontFamily: "monospace",
          fontSize: "10px",
          color: "#666666",
        }}
      >
        C:\photos\
      </div>
      {/* Photo area + scrollbar */}
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "200px",
            height: "160px",
            backgroundColor: photoColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-press-start), monospace",
              fontSize: "8px",
              color: "#1a1a2e",
              opacity: 0.6,
              textAlign: "center",
              padding: "8px",
            }}
          >
            no photos yet
          </span>
        </div>
        <div
          style={{
            width: "16px",
            backgroundColor: "#d4d0c8",
            borderLeft: "1px solid #808080",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1px 0",
          }}
        >
          <div style={{ width: 14, height: 14, backgroundColor: "#c0c0c0", border: "1px solid #808080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>▲</div>
          <div style={{ width: 14, height: 14, backgroundColor: "#c0c0c0", border: "1px solid #808080", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px" }}>▼</div>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 3: Commit**

```bash
git add app/components/PhotoStrip.tsx
git commit -m "feat: PhotoStrip with IE frames, lightbox, and empty state"
```

---

### Task 4: Accordion.tsx — pass photos and accentColor to PhotoStrip

**Files:**
- Modify: `app/components/Accordion.tsx`

**Step 1: Update the PhotoStrip call**

Find the existing `<PhotoStrip photoColor={section.photoColor} />` line (around line 101) and replace it with:

```tsx
<PhotoStrip
  photos={section.photos}
  photoColor={section.photoColor}
  accentColor={section.accentColor}
/>
```

**Step 2: Verify TypeScript compiles clean**

Run: `npx tsc --noEmit`
Expected: no errors (the old single-prop call was valid before; the new three-prop call must also type-check)

**Step 3: Run lint**

Run: `npm run lint`
Expected: no errors

**Step 4: Visual check**

Run: `npm run dev`, open http://localhost:3000, expand each accordion section and verify:
- [ ] smores-lab: 10 IE-framed photos in a horizontal scroll strip
- [ ] activations: 9 IE-framed photos (no HEIC)
- [ ] playa-provides: single placeholder frame with "no photos yet"
- [ ] communications: 2 IE-framed photos
- [ ] copywriting: 2 IE-framed photos
- [ ] Each frame: blue gradient title bar, colored squares, URL bar with `C:\photos\filename`, scrollbar chrome
- [ ] Clicking any photo opens lightbox overlay
- [ ] Clicking outside photo closes lightbox
- [ ] ESC key closes lightbox

**Step 5: Commit**

```bash
git add app/components/Accordion.tsx
git commit -m "feat: wire photos and accentColor through to PhotoStrip"
```
