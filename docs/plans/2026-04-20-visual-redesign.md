# Visual Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update all existing components to match the retro-web prototype spec — centered header, rainbow dividers, restyled accordion, updated footer, and new kazoo sound.

**Architecture:** Pure CSS/JSX changes across 7 existing files. No new routes or components. `PhotoStrip` gains a `photoColor` prop. `sections.ts` gains `photoColor` and `accentColor` fields. A `RainbowDivider` inline element is added directly in `page.tsx`. All changes are visual only.

**Tech Stack:** Next.js (app router), Tailwind CSS v4, CSS custom properties, Web Audio API, Google Fonts (Press Start 2P, VT323)

---

### Task 1: globals.css — add blink animation + accent color vars

**Files:**
- Modify: `app/globals.css`

**Step 1: Add the blink keyframe and utility class**

Open `app/globals.css` and append after the existing `.accordion-content` block:

```css
@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.blink {
  animation: blink 1s step-start infinite;
}
```

**Step 2: Verify dev server has no CSS errors**

Run: `npm run dev`
Check: no build errors in terminal output

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add CSS blink animation"
```

---

### Task 2: sections.ts — add photoColor and accentColor fields

**Files:**
- Modify: `app/data/sections.ts`

**Step 1: Update the Section type**

Add two fields to the `Section` type:

```typescript
export type Section = {
  id: string;
  number: string;
  title: string;
  meta?: string;
  url?: string;
  description: string;
  tag: string;
  openColor: string;
  photoColor: string;   // background for photo placeholder boxes
  accentColor: string;  // eyebrow text + CTA tag border/text color
};
```

**Step 2: Add values to each section object**

```typescript
// smores
photoColor: "#f5c9a0",
accentColor: "#b06000",

// activations
photoColor: "#f5ef9a",
accentColor: "#8a7000",

// tpp
photoColor: "#9adbc0",
accentColor: "#1a7a4a",

// communications
photoColor: "#9acef5",
accentColor: "#1a5a9a",

// copywriting
photoColor: "#d09af5",
accentColor: "#6a1a9a",
```

**Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 4: Commit**

```bash
git add app/data/sections.ts
git commit -m "feat: add photoColor and accentColor to section data"
```

---

### Task 3: KazooButton.tsx — new sound + display

**Files:**
- Modify: `app/components/KazooButton.tsx`

**Step 1: Replace the entire file content**

The spec requires two oscillators (sawtooth 220Hz + square 440Hz), sawtooth frequency wobble 220→260→240→280 over 0.35s, gain attack 0.18s then exponential decay to 0.001 over 0.6s. Display as `♫ [kazoo]` in amber, VT323 font.

```tsx
"use client";

export default function KazooButton() {
  const playKazoo = () => {
    const ctx = new AudioContext();
    const now = ctx.currentTime;

    // Oscillator 1: sawtooth with frequency wobble
    const saw = ctx.createOscillator();
    saw.type = "sawtooth";
    saw.frequency.setValueAtTime(220, now);
    saw.frequency.linearRampToValueAtTime(260, now + 0.35 / 3);
    saw.frequency.linearRampToValueAtTime(240, now + (0.35 * 2) / 3);
    saw.frequency.linearRampToValueAtTime(280, now + 0.35);

    // Oscillator 2: square at 440Hz
    const square = ctx.createOscillator();
    square.type = "square";
    square.frequency.setValueAtTime(440, now);

    // Shared gain envelope
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    saw.connect(gain);
    square.connect(gain);
    gain.connect(ctx.destination);

    saw.start(now);
    square.start(now);
    saw.stop(now + 0.65);
    square.stop(now + 0.65);
  };

  return (
    <button
      onClick={playKazoo}
      className="font-vt323 text-xl hover:opacity-80 transition-opacity"
      style={{ color: "#e8c84a", background: "none", border: "none", cursor: "pointer" }}
      aria-label="Play kazoo sound"
    >
      ♫ [kazoo]
    </button>
  );
}
```

**Step 2: Test manually**

Run dev server, click `♫ [kazoo]` in footer. Verify a buzzy two-tone kazoo sound plays and fades over ~0.6s.

**Step 3: Commit**

```bash
git add app/components/KazooButton.tsx
git commit -m "feat: update kazoo to dual-oscillator sound with frequency wobble"
```

---

### Task 4: Header.tsx — full restyle

**Files:**
- Modify: `app/components/Header.tsx`

**Step 1: Replace the entire file**

Spec: centered everything; name in Press Start 2P ~24px `#ffff00` with `2px 2px #ff0000` text-shadow; tagline VT323 22px `#00ff00`; blinking `▌ available for work ▌` in white VT323; nav row `about | contact` cyan left, `** hire me **` yellow right.

```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 pt-10 pb-6 max-w-4xl mx-auto text-center">
      {/* Name */}
      <h1
        className="font-pixel mb-4 leading-relaxed"
        style={{
          fontSize: "24px",
          color: "#ffff00",
          textShadow: "2px 2px #ff0000",
        }}
      >
        ALEX MIZRAHI
      </h1>

      {/* Tagline */}
      <p
        className="font-vt323 mb-3"
        style={{ fontSize: "22px", color: "#00ff00" }}
      >
        Experiential producer. Communications strategist. Ideas man.
      </p>

      {/* Blinking availability */}
      <p
        className="font-vt323 blink mb-8"
        style={{ fontSize: "20px", color: "#ffffff" }}
      >
        ▌ available for work ▌
      </p>

      {/* Nav */}
      <nav className="flex items-center justify-between">
        <div className="flex gap-4">
          <Link
            href="/about"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff" }}
          >
            about
          </Link>
          <span className="font-vt323 text-xl" style={{ color: "#00ffff" }}>|</span>
          <a
            href="mailto:alexmiz@gmail.com"
            className="font-vt323 text-xl hover:opacity-75 transition-opacity"
            style={{ color: "#00ffff" }}
          >
            contact
          </a>
        </div>
        <a
          href="mailto:alexmiz@gmail.com"
          className="font-vt323 text-xl hover:opacity-75 transition-opacity"
          style={{ color: "#ffff00" }}
        >
          ** hire me **
        </a>
      </nav>
    </header>
  );
}
```

**Step 2: Verify visually**

Check: name is large yellow with red shadow; tagline is green; blinking line is white and animates; nav links are cyan left, yellow right.

**Step 3: Commit**

```bash
git add app/components/Header.tsx
git commit -m "feat: restyle header to match retro prototype"
```

---

### Task 5: PhotoStrip.tsx — accept photoColor prop

**Files:**
- Modify: `app/components/PhotoStrip.tsx`

**Step 1: Replace the entire file**

```tsx
interface PhotoStripProps {
  photoColor: string;
}

export default function PhotoStrip({ photoColor }: PhotoStripProps) {
  return (
    <div className="flex gap-3 py-2" style={{ overflowX: "auto" }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="shrink-0 flex items-center justify-center"
          style={{
            width: "calc(25% - 9px)",
            minWidth: "100px",
            height: "128px",
            backgroundColor: photoColor,
            border: "1px solid #2e2e5a",
          }}
        >
          <span
            className="font-pixel"
            style={{ fontSize: "8px", color: "#1a1a2e", opacity: 0.6 }}
          >
            photo {i}
          </span>
        </div>
      ))}
    </div>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/PhotoStrip.tsx
git commit -m "feat: PhotoStrip accepts photoColor prop, equal-width boxes"
```

---

### Task 6: Accordion.tsx — full restyle

**Files:**
- Modify: `app/components/Accordion.tsx`

**Step 1: Replace the entire file**

Key changes:
- Outer wrapper div: `border: 1px solid #2e2e5a`, `backgroundColor: #16213e` (always, open color applied to inner content only)
- Section number: Press Start 2P 8px `#4a4a7a`
- Title: VT323 28px `#c0c0e0` closed, `#e8c84a` open
- Indicator: `►` closed, `▼` open, right-aligned
- Open content: section's `openColor` bg, eyebrow (meta) in VT323 18px `accentColor`, body VT323 20px `#1a1a2e`
- CTA tag: bordered box using `accentColor`
- Pass `section.photoColor` to `PhotoStrip`

```tsx
"use client";

import { useState } from "react";
import { SECTIONS } from "../data/sections";
import PhotoStrip from "./PhotoStrip";

export default function Accordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pb-16 flex flex-col gap-0">
      {SECTIONS.map((section) => {
        const isOpen = openId === section.id;
        const isActivations = section.id === "activations";

        return (
          <div
            key={section.id}
            className={isActivations && isOpen ? "kazoo-cursor" : ""}
            style={{
              border: "1px solid #2e2e5a",
              backgroundColor: "#16213e",
              marginBottom: "4px",
            }}
          >
            {/* Trigger row */}
            <button
              onClick={() => toggle(section.id)}
              className="w-full text-left py-4 px-4 flex items-center justify-between gap-4"
              style={{ backgroundColor: "transparent" }}
              aria-expanded={isOpen}
            >
              <div className="flex flex-col gap-1 flex-1 min-w-0">
                <span
                  className="font-pixel"
                  style={{ fontSize: "8px", color: "#4a4a7a" }}
                >
                  {section.number}
                </span>
                <span
                  className="font-vt323"
                  style={{
                    fontSize: "28px",
                    color: isOpen ? "#e8c84a" : "#c0c0e0",
                    lineHeight: 1.1,
                  }}
                >
                  {section.title}
                  {section.meta && (
                    <span
                      className="font-vt323 ml-3"
                      style={{ fontSize: "18px", opacity: 0.6 }}
                    >
                      // {section.meta}
                    </span>
                  )}
                  {section.url && (
                    <span
                      className="font-vt323 ml-2"
                      style={{ fontSize: "18px", opacity: 0.6 }}
                    >
                      // {section.url}
                    </span>
                  )}
                </span>
              </div>
              <span
                className="font-vt323 shrink-0"
                style={{ fontSize: "20px", color: isOpen ? "#e8c84a" : "#c0c0e0" }}
              >
                {isOpen ? "▼" : "►"}
              </span>
            </button>

            {/* Content */}
            {isOpen && (
              <div
                className="py-6 px-4"
                style={{ backgroundColor: section.openColor }}
              >
                {section.meta && (
                  <p
                    className="font-vt323 mb-2"
                    style={{ fontSize: "18px", color: section.accentColor }}
                  >
                    {section.meta}
                  </p>
                )}
                <p
                  className="font-vt323 mb-6 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: "20px", color: "#1a1a2e" }}
                >
                  {section.description}
                </p>

                <PhotoStrip photoColor={section.photoColor} />

                {section.tag && (
                  <div
                    className="font-vt323 mt-6 inline-block px-3 py-1"
                    style={{
                      fontSize: "20px",
                      color: section.accentColor,
                      border: `1px solid ${section.accentColor}`,
                    }}
                  >
                    {section.tag}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
```

**Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors

**Step 3: Visual check**

- Closed items: dark navy bg, tiny number, large VT323 title in muted silver, `►` on right
- Open item: section-specific pastel bg, eyebrow in accent color, body in dark, `▼` on right, photo strip visible, CTA tag bordered

**Step 4: Commit**

```bash
git add app/components/Accordion.tsx
git commit -m "feat: restyle accordion to match retro prototype"
```

---

### Task 7: Footer.tsx — restyle

**Files:**
- Modify: `app/components/Footer.tsx`

**Step 1: Replace the entire file**

Spec: `#16213e` bg, `2px solid #2e2e5a` border-top, copyright in VT323 16px `#666699` left, `♫ [kazoo]` right (handled by `KazooButton`).

```tsx
import KazooButton from "./KazooButton";

export default function Footer() {
  return (
    <footer
      className="px-6 py-6 max-w-4xl mx-auto flex items-center justify-between"
      style={{
        backgroundColor: "#16213e",
        borderTop: "2px solid #2e2e5a",
      }}
    >
      <p
        className="font-vt323"
        style={{ fontSize: "16px", color: "#666699" }}
      >
        © 2025 alex mizrahi. all rights reserved. probably.
      </p>
      <KazooButton />
    </footer>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/Footer.tsx
git commit -m "feat: restyle footer with copyright and right-aligned kazoo"
```

---

### Task 8: page.tsx — add rainbow dividers and visitor line

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace the entire file**

The rainbow divider is a 4px horizontal bar with a `repeating-linear-gradient` in red/orange/yellow/green/blue/purple pixel blocks. The visitor line is centered VT323 `#666699`. Both appear between header and accordion; the divider is duplicated below the accordion.

```tsx
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

const RAINBOW_STYLE = {
  height: "4px",
  background:
    "repeating-linear-gradient(90deg, #ff0000 0px, #ff0000 30px, #ff6600 30px, #ff6600 60px, #ffff00 60px, #ffff00 90px, #00cc00 90px, #00cc00 120px, #0066ff 120px, #0066ff 150px, #9900cc 150px, #9900cc 180px)",
};

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1a2e" }}>
      <Header />

      {/* Rainbow divider */}
      <div style={RAINBOW_STYLE} />

      {/* Visitor counter line */}
      <p
        className="font-vt323 text-center py-2"
        style={{ fontSize: "16px", color: "#666699" }}
      >
        [ visitor #000247 ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;best viewed in netscape navigator 4.0
      </p>

      <Accordion />

      {/* Rainbow divider */}
      <div className="max-w-4xl mx-auto px-6">
        <div style={RAINBOW_STYLE} />
      </div>

      <Footer />
    </main>
  );
}
```

**Step 2: Visual check**

- Rainbow bar appears between header and visitor line
- Visitor counter text is centered in muted purple
- Second rainbow bar appears below the last accordion item

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add rainbow dividers and visitor counter line"
```

---

### Final: Full visual QA

Run `npm run dev`, open in browser, and verify:

- [ ] Name: large yellow, red shadow, centered
- [ ] Tagline: green VT323
- [ ] Blinking line: white, blinking (not pulsing — step-start)
- [ ] Nav: cyan left links, yellow `** hire me **` right
- [ ] Rainbow divider visible between header and visitor text
- [ ] Visitor counter line centered
- [ ] Each accordion closed: dark navy bg, tiny grey number, large silver title, `►`
- [ ] Each accordion open: correct pastel bg, accent eyebrow, dark body text, `▼`, photo strip with explicit `photoColor`, CTA tag bordered in accent color
- [ ] Rainbow divider below last accordion
- [ ] Footer: dark navy, copyright left, `♫ [kazoo]` right
- [ ] Kazoo plays dual-oscillator sound on click
