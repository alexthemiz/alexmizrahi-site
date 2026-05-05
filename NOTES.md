# alexmizrahi.com — Project Notes

## Status
Live at alexmizrahi.com (DNS switched from Squarespace to Vercel — May 2025)
Also accessible at alexmizrahi-site.vercel.app

## To Do

### Content
- [ ] Write About page bio (TK)
- [ ] Add photos of Alex to /public/images/about/
- [ ] Upload resume PDFs to /public/resumes/ (events-resume.pdf and comms-resume.pdf)
- [ ] Send About page HTML with all links to CC to build the full page
- [ ] Fill in sub-accordion content (all sections currently placeholder)
- [ ] Add copywriting work samples to Copywriting sub-accordions
- [ ] Continue adding photos section by section

### Design & Features
- [ ] Build pinwheel/punwheel feature in header (puns.ts is ready)
- [ ] Confirm kazoo cursor working on Activations section when open
- [ ] Confirm IE browser frame working across all photo sections
- [ ] Confirm favicon showing correctly in browser tab
- [ ] Max-width fix for full browser width (accordions too wide on large screens)
- [ ] Replace accordion arrows ► ▼ with something more fun/retro (TBD)
- [ ] Refine nested accordion sub-header colors and text

### Infrastructure
- [ ] Cancel Squarespace once site confirmed stable on new domain
- [ ] Verify alexmizrahi.com domain in Resend after Squarespace cancelled (for hello@ sender address)
- [ ] Update NOTES.md as tasks are completed

## Design Decisions
- Background: #000080 (classic Windows navy)
- Accordion headers: #000040
- Fonts: Press Start 2P (name, section numbers), VT323 (everything else)
- Active/open accent: #e8c84a (amber)
- Open accordion colors: S'mores Lab = #ffe5cc (peach), Activations = #fffacc (lemon), TPP = #ccf0e0 (mint), Communications = #cce8ff (pale blue), Copywriting = #e8ccff (lavender)
- Sub-accordion closed backgrounds: darker versions of parent pastel
- Sub-accordion text: #000060 closed, #000040 open
- Rainbow pixel divider: above and below accordion list
- IE browser frame wrapper on all photos
- Rubber chicken easter egg in footer (chicken.png + rubberchicken.mp3)
- Kazoo cursor on Activations section when open
- Punwheel in header (pinwheel SVG, "Spun for a pun.", pun popup in carnival/game show style)
- Max-width: 900px centered for main content area
- Footer: "All work conceived, produced, and occasionally eaten by Alex Mizrahi."

## Pun popup design
- Outer box: #ffff00 background, 2px solid #000000 border, max-width 320px
- Red header bar (#ff0000) with pun title in VT323 22px #ffff00
- X close button on right in header bar
- Definition in VT323 17px #000000 below header
- Data source: /data/puns.ts (export const PUNS, fields: pun, definition)

## Structure
- Single page (index): header + 5 accordions + footer
- /about: bio + photos + resumes + Writings & Press accordion + Community & Service accordion
- /contact: retro guestbook with Resend email integration
- /puns: TBD (concept not ready)

## Nested Accordion Structure
01 S'mores Lab → Corporate Events, Festivals & Cultural, Private Celebrations
02 Activations → Lollakazooza, Pop-Ups, Weddings & Private
03 The Playa Provides → no sub-sections
04 Communications → Open Society Foundations, The Assemblage, Blue State Digital
05 Copywriting → SapientRazorfish, ROAR Groupe

## File Structure Notes
- Photos: /public/images/[section-name]/[sub-section-name]/
- Sounds: /public/sounds/
- Resumes: /public/resumes/
- Puns data: /data/puns.ts
- Sections data: /data/sections.ts
