# Alex Mizrahi Personal Site Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build and deploy a single-page personal website at alexmizrahi.com with an 8-bit retro aesthetic, accordion work sections, and a /about page.

**Architecture:** Next.js 14 App Router with RSC by default; accordion and kazoo audio are client components. Tailwind for layout/spacing, inline styles for dynamic per-section colors. No backend, no database — pure static output.

**Tech Stack:** Next.js 14, Tailwind CSS, Google Fonts (VT323 + Press Start 2P via next/font/google), Web Audio API, Vercel

---

### Task 1: Scaffold Next.js project

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`

**Step 1: Initialize Next.js with Tailwind**

Run from `/c/Users/alexm/Documents/alexmizrahi-site`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

Accept all prompts. Choose No for Turbopack if asked (use default webpack).

**Step 2: Verify dev server runs**

```bash
npm run dev
```

Open `http://localhost:3000` — should show default Next.js page. Kill server (Ctrl+C).

**Step 3: Commit**

```bash
git init
git add -A
git commit -m "feat: scaffold Next.js 14 app with Tailwind"
```

---

### Task 2: Configure fonts and global styles

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

**Step 1: Update layout.tsx with Google Fonts and base metadata**

Replace entire `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { VT323, Press_Start_2P } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
});

export const metadata: Metadata = {
  title: "Alex Mizrahi",
  description: "Experiential producer. Communications strategist. Ideas man.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vt323.variable} ${pressStart2P.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Step 2: Replace app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #1a1a2e;
  --accent: #e8c84a;
  --muted: #9090b8;
  --text-dark: #1a1a2e;
}

body {
  background-color: var(--bg);
  color: var(--muted);
  font-family: var(--font-vt323), monospace;
}

.font-pixel {
  font-family: var(--font-press-start), monospace;
}

.font-vt323 {
  font-family: var(--font-vt323), monospace;
}

/* Kazoo cursor for Activations section */
.kazoo-cursor,
.kazoo-cursor * {
  cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ctext y='24' font-size='24'%3E🎺%3C/text%3E%3C/svg%3E") 0 0, auto;
}

/* Pixel border utility */
.pixel-border {
  box-shadow:
    -2px 0 0 0 var(--text-dark),
    2px 0 0 0 var(--text-dark),
    0 -2px 0 0 var(--text-dark),
    0 2px 0 0 var(--text-dark);
}

/* Accordion transition */
.accordion-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
}
```

**Step 3: Update tailwind.config.ts to expose font variables**

In `tailwind.config.ts`, inside `theme.extend`, add:

```ts
fontFamily: {
  pixel: ["var(--font-press-start)", "monospace"],
  vt323: ["var(--font-vt323)", "monospace"],
},
```

**Step 4: Verify build compiles**

```bash
npm run build
```

Expected: Build succeeds with no errors.

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: configure VT323 and Press Start 2P fonts, global CSS vars"
```

---

### Task 3: Build the Header component

**Files:**
- Create: `app/components/Header.tsx`

**Step 1: Create Header.tsx**

```tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 pt-10 pb-6 max-w-4xl mx-auto">
      {/* Name */}
      <h1
        className="font-pixel text-2xl md:text-3xl mb-4 leading-relaxed"
        style={{ color: "#e8c84a" }}
      >
        ALEX MIZRAHI
      </h1>

      {/* Tagline */}
      <p className="font-vt323 text-2xl mb-8" style={{ color: "#9090b8" }}>
        Experiential producer. Communications strategist. Ideas man.
      </p>

      {/* Nav */}
      <nav className="flex items-center justify-between">
        <Link
          href="/about"
          className="font-vt323 text-xl hover:text-yellow-300 transition-colors"
          style={{ color: "#9090b8" }}
        >
          About
        </Link>
        <span
          className="font-vt323 text-xl animate-pulse"
          style={{ color: "#e8c84a" }}
        >
          * available for work *
        </span>
      </nav>
    </header>
  );
}
```

**Step 2: Add Header to app/page.tsx**

Replace `app/page.tsx` with:

```tsx
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1a2e" }}>
      <Header />
      <div className="px-6 max-w-4xl mx-auto">
        <p className="font-vt323 text-xl" style={{ color: "#9090b8" }}>
          Accordion coming soon...
        </p>
      </div>
    </main>
  );
}
```

**Step 3: Verify dev server**

```bash
npm run dev
```

Check `http://localhost:3000` — header renders with name, tagline, nav.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Header component with nav"
```

---

### Task 4: Define accordion data

**Files:**
- Create: `app/data/sections.ts`

**Step 1: Create sections.ts**

```ts
export type Section = {
  id: string;
  number: string;
  title: string;
  meta?: string;
  url?: string;
  description: string;
  tag: string;
  openColor: string; // background when open
};

export const SECTIONS: Section[] = [
  {
    id: "smores",
    number: "01",
    title: "The S'mores Lab",
    meta: "ongoing project",
    url: "thesmoreslab.com",
    description:
      "Turned the traditional, humdrum s'mores bar into an interactive culinary and art experience where participants build never-before-s'mored creations from a vast range of ingredients, then give them full fashion-style photoshoots. Equal parts food science, participatory art, and campfire nostalgia.",
    tag: "make your next event sweeter  * available for booking *",
    openColor: "#ffe5cc",
  },
  {
    id: "activations",
    number: "02",
    title: "Activations",
    meta: "Communal Delights",
    description:
      "Lollakazooza. The Pickle Ball. The Decongestion Relief Zone. Bunnyhana. Wedding icebreakers. Festival surprises. Original experiences that encourage active participation rather than passive attendance. Each conceived, named, branded, and produced from scratch.",
    tag: "* let's make something *",
    openColor: "#fffacc",
  },
  {
    id: "tpp",
    number: "03",
    title: "The Playa Provides",
    meta: "in development",
    url: "theplayaprovides.com",
    description:
      "Peer-to-peer lending platform for the Burning Man community, and anyone who'd rather borrow than buy. Independently conceived and built as sole founder, handling everything: vibe coding, architecture, UX, branding, copy, and marketing strategy.",
    tag: "* in progress *",
    openColor: "#ccf0e0",
  },
  {
    id: "communications",
    number: "04",
    title: "Communications",
    meta: "A decade spanning philanthropy, hospitality, and advocacy.",
    description:
      "The Open Society Foundations: Senior Communications Specialist. Media intelligence reports, global intranet management, internal communications, content writing and editing, media monitoring.\n\nThe Assemblage: Director of Communications. Member, guest, and community engagement; media outreach; event marketing.",
    tag: "",
    openColor: "#cce8ff",
  },
  {
    id: "copywriting",
    number: "05",
    title: "Copywriting",
    description:
      "SapientRazorfish: Mercedes-Benz, smartUSA.\n\nROAR Groupe: JPMorgan Chase, Chase Freedom, Sapphire, Ultimate Rewards.\n\nBlue State Digital: US Olympic Committee, Be The Match, Purina.",
    tag: "",
    openColor: "#e8ccff",
  },
];
```

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add accordion section data"
```

---

### Task 5: Build the Accordion component

**Files:**
- Create: `app/components/Accordion.tsx`

**Step 1: Create Accordion.tsx**

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
    <div className="max-w-4xl mx-auto px-6 pb-16">
      {SECTIONS.map((section) => {
        const isOpen = openId === section.id;
        const isActivations = section.id === "activations";

        return (
          <div
            key={section.id}
            className={isActivations && isOpen ? "kazoo-cursor" : ""}
          >
            {/* Trigger row */}
            <button
              onClick={() => toggle(section.id)}
              className="w-full text-left py-4 border-b flex items-start justify-between gap-4 group"
              style={{
                borderColor: "#9090b8",
                backgroundColor: isOpen ? section.openColor : "transparent",
                color: isOpen ? "#1a1a2e" : "#9090b8",
              }}
              aria-expanded={isOpen}
            >
              <div className="flex items-baseline gap-4 flex-1 min-w-0">
                <span
                  className="font-pixel text-xs shrink-0"
                  style={{ color: isOpen ? "#1a1a2e" : "#e8c84a" }}
                >
                  {section.number}
                </span>
                <span className="font-pixel text-xs leading-relaxed">
                  {section.title}
                  {section.meta && (
                    <span className="font-vt323 text-lg ml-3 opacity-70">
                      // {section.meta}
                      {section.url && (
                        <span className="ml-2">// {section.url}</span>
                      )}
                    </span>
                  )}
                </span>
              </div>
              <span
                className="font-pixel text-xs shrink-0"
                style={{ color: isOpen ? "#1a1a2e" : "#e8c84a" }}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Content */}
            {isOpen && (
              <div
                className="py-6 px-4"
                style={{
                  backgroundColor: section.openColor,
                  color: "#1a1a2e",
                }}
              >
                <p className="font-vt323 text-xl mb-6 leading-relaxed whitespace-pre-line">
                  {section.description}
                </p>

                <PhotoStrip />

                {section.tag && (
                  <p className="font-pixel text-xs mt-6" style={{ color: "#1a1a2e" }}>
                    {section.tag}
                  </p>
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

**Step 2: Commit**

```bash
git add -A
git commit -m "feat: add Accordion component with open/close toggle"
```

---

### Task 6: Build the PhotoStrip component

**Files:**
- Create: `app/components/PhotoStrip.tsx`

**Step 1: Create PhotoStrip.tsx**

```tsx
export default function PhotoStrip() {
  return (
    <div className="flex gap-3 overflow-x-auto py-2">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="shrink-0 w-40 h-32 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.15)",
            border: "2px solid rgba(0,0,0,0.25)",
          }}
        >
          <span className="font-pixel text-xs opacity-40" style={{ color: "#1a1a2e" }}>
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
git add -A
git commit -m "feat: add PhotoStrip placeholder component"
```

---

### Task 7: Wire accordion into home page

**Files:**
- Modify: `app/page.tsx`

**Step 1: Update page.tsx**

```tsx
import Header from "./components/Header";
import Accordion from "./components/Accordion";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1a2e" }}>
      <Header />
      <Accordion />
    </main>
  );
}
```

**Step 2: Verify in browser**

```bash
npm run dev
```

- All 5 sections render collapsed
- Clicking a section opens it with correct color
- Activations section shows kazoo cursor when open
- Only one section open at a time
- Photo strip shows 4 placeholder slots

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: wire accordion into home page"
```

---

### Task 8: Build the Kazoo sound + Footer

**Files:**
- Create: `app/components/KazooButton.tsx`
- Create: `app/components/Footer.tsx`

**Step 1: Create KazooButton.tsx**

```tsx
"use client";

export default function KazooButton() {
  const playKazoo = () => {
    const ctx = new AudioContext();

    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    // Vibrato via LFO
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    lfo.frequency.value = 12; // 12Hz vibrato
    lfoGain.gain.value = 8;   // vibrato depth in Hz

    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);

    oscillator.type = "sawtooth";
    oscillator.frequency.value = 320;

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    lfo.start();
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.6);
    lfo.stop(ctx.currentTime + 0.6);
  };

  return (
    <button
      onClick={playKazoo}
      className="font-pixel text-xs px-3 py-2 hover:opacity-80 transition-opacity"
      style={{
        color: "#e8c84a",
        border: "2px solid #e8c84a",
        backgroundColor: "transparent",
      }}
      aria-label="Play kazoo sound"
    >
      * [kazoo] *
    </button>
  );
}
```

**Step 2: Create Footer.tsx**

```tsx
import KazooButton from "./KazooButton";

export default function Footer() {
  return (
    <footer
      className="border-t px-6 py-10 max-w-4xl mx-auto"
      style={{ borderColor: "#9090b8" }}
    >
      <p className="font-vt323 text-xl mb-6" style={{ color: "#9090b8" }}>
        All work conceived, produced, and occasionally eaten by Alex Mizrahi.
      </p>

      {/* Contact */}
      <div className="font-vt323 text-lg mb-6 space-y-1" style={{ color: "#9090b8" }}>
        <p>Brooklyn, NY · Los Angeles, CA</p>
        <p>
          <a
            href="mailto:alexmiz@gmail.com"
            className="hover:text-yellow-300 transition-colors"
          >
            alexmiz@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://linkedin.com/in/alexmizrahi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-colors"
          >
            linkedin.com/in/alexmizrahi
          </a>
        </p>
      </div>

      <KazooButton />
    </footer>
  );
}
```

**Step 3: Add Footer to app/page.tsx**

```tsx
import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1a2e" }}>
      <Header />
      <Accordion />
      <Footer />
    </main>
  );
}
```

**Step 4: Verify**

```bash
npm run dev
```

- Footer renders with tagline + contact info
- Clicking `* [kazoo] *` plays a buzzy kazoo sound

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Footer with contact info and Web Audio kazoo easter egg"
```

---

### Task 9: Build /about page

**Files:**
- Create: `app/about/page.tsx`

**Step 1: Create app/about/page.tsx**

```tsx
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#1a1a2e" }}>
      <Header />
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <p className="font-vt323 text-3xl" style={{ color: "#9090b8" }}>
          TK — letter from the editor.
        </p>
      </section>
      <Footer />
    </main>
  );
}
```

**Step 2: Verify**

```bash
npm run dev
```

- Navigate to `http://localhost:3000/about` — renders header, placeholder text, footer
- "About" link in nav goes to /about
- Back button returns to /

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add /about page with placeholder content"
```

---

### Task 10: Final polish pass

**Files:**
- Modify: `app/globals.css` (if needed)
- Modify: `app/components/Accordion.tsx` (if needed)

**Step 1: Verify all requirements against specs**

Checklist:
- [ ] Dark navy background `#1a1a2e` across all pages
- [ ] VT323 and Press Start 2P fonts rendering correctly
- [ ] Amber/yellow `#e8c84a` for accordion numbers, +/- toggle, "available for work"
- [ ] Muted blue-purple `#9090b8` for body text, nav, footer
- [ ] Each section opens to correct color (peach/lemon/mint/lavender/pale blue)
- [ ] Text goes dark `#1a1a2e` when section is open (readable on light bg)
- [ ] Photo strip: 4 placeholder slots visible in each open section
- [ ] Kazoo cursor on Activations when open
- [ ] Kazoo button in footer plays sound
- [ ] Nav: "About" links to /about, "* available for work *" right-aligned
- [ ] Footer: tagline + Brooklyn/LA + email + LinkedIn
- [ ] /about page: header + placeholder text + footer

**Step 2: Fix any issues found**

Address any visual or functional gaps discovered in Step 1.

**Step 3: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors. Note any warnings.

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: polish pass, verify all specs"
```

---

### Task 11: Deploy to Vercel

**Step 1: Push to GitHub**

Create a new GitHub repository named `alexmizrahi-site` (via github.com or gh CLI):

```bash
gh repo create alexmizrahi-site --public --source=. --remote=origin --push
```

**Step 2: Deploy via Vercel CLI**

```bash
npx vercel --yes
```

When prompted:
- Link to existing project? **No**
- Project name: `alexmizrahi-site`
- Framework: **Next.js** (auto-detected)
- Deploy

**Step 3: Note the preview URL**

Vercel will output a URL like `https://alexmizrahi-site.vercel.app`. Visit it and verify everything works in production.

**Step 4: Set production alias (when ready)**

When the Squarespace domain is pointed:
```bash
npx vercel alias set <preview-url> alexmizrahi.com
```

Or configure custom domain in Vercel dashboard under Settings > Domains.

**Step 5: Commit**

```bash
git add -A
git commit -m "chore: initial Vercel deployment"
```

---

## Summary

| Task | Component | Status |
|------|-----------|--------|
| 1 | Next.js scaffold | pending |
| 2 | Fonts + global CSS | pending |
| 3 | Header component | pending |
| 4 | Section data | pending |
| 5 | Accordion component | pending |
| 6 | PhotoStrip component | pending |
| 7 | Wire home page | pending |
| 8 | Kazoo + Footer | pending |
| 9 | /about page | pending |
| 10 | Polish + build verify | pending |
| 11 | Deploy to Vercel | pending |
