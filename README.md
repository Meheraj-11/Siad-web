# Siad Khan — Cyber Security Enthusiast 🛡️

A premium, dark, purple-neon personal portfolio website.

**Stack:** Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS 4 · Lucide icons

## Features

- Sticky glass navigation with scroll-spy + working mobile hamburger menu
- Animated hero with circular portrait, neon gradient ring, rotating orbit rings, and floating glass chips
- About section with portrait, bio, and info cards
- Education timeline (SSC 2024 · HSC 2026 · Honours — currently pursuing)
- Cybersecurity interests section (fundamentals, ethics, continuous learning)
- Contact cards: Facebook, Instagram, Email, Telegram (real profile links), WhatsApp username (copy-to-clipboard with success/failure feedback — no fabricated profile URLs)
- Dynamic copyright year, back-to-top button, footer with social links
- Particle background, subtle animated rain layer, occasional purple lightning flashes, drifting purple glows, scroll-reveal animations
- Social Media Security & Account Recovery services section (official-platform guidance, Facebook & Instagram)
- Fully responsive (tested at 320 / 375 / 425 / 768 / 1024 / 1440 / 1920 px + real iPhone/Pixel/iPad emulation)
- Accessible: skip link, keyboard focus states, ARIA labels, `prefers-reduced-motion` support
- Zero environment variables, zero backend, fully static build

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

Other scripts:

```bash
npm run lint       # ESLint
```

## Deploy to Vercel (beginner-friendly)

**Option A — via GitHub (recommended)**

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Siad Khan portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → **Sign Up / Log In** (continue with GitHub).
3. Click **Add New… → Project**, find the repo, and click **Import**.
4. Vercel auto-detects Next.js — keep the defaults (Framework Preset: *Next.js*, Build Command `next build`, Output Directory `.next`).
5. Click **Deploy**. Wait ~1 minute. Done — you'll get a live `https://…vercel.app` URL.

Every future `git push` to `main` redeploys automatically.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel          # follow the prompts (confirm the auto-detected Next.js settings)
vercel --prod   # production deploy
```

## Project structure

```
siad-portfolio/
├── public/
│   └── siad.jpg                 # portrait (replace this file to change the photo)
└── src/
    ├── app/
    │   ├── layout.tsx           # fonts, metadata, theme color, global layers
    │   ├── page.tsx             # page composition
    │   ├── globals.css          # design tokens, keyframes, reduced-motion rules
    │   └── icon.svg             # shield favicon
    └── components/
        ├── Navbar.tsx           # sticky nav + mobile menu + scroll-spy
        ├── Hero.tsx             # hero with portrait + neon ring frame
        ├── About.tsx            # portrait + bio + info cards
        ├── Education.tsx        # timeline
        ├── Cybersecurity.tsx    # interest cards
        ├── Services.tsx           # social media account recovery services
        ├── Contact.tsx          # social cards (links + copy actions)
        ├── CopyButton.tsx       # clipboard with success/failure feedback
        ├── Footer.tsx           # footer + socials + dynamic year
        ├── BackToTop.tsx        # floating back-to-top button
        ├── ParticlesBackground.tsx  # lightweight canvas particles
        ├── RainBackground.tsx         # subtle canvas rain (batched rendering)
        ├── LightningBackground.tsx    # occasional purple lightning flashes (CSS)
        ├── AmbientBackground.tsx    # grid + drifting purple glows
        ├── CustomCursor.tsx     # desktop-only cursor glow (decorative)
        ├── Reveal.tsx           # scroll-reveal wrapper
        ├── SectionHeading.tsx   # reusable section heading
        ├── BrandIcons.tsx       # inline Facebook/Instagram SVGs
        └── Year.tsx             # dynamic current year
```

## Notes

- **Photo:** swap `public/siad.jpg` with any new portrait (square works best).
- **Telegram / WhatsApp:** Telegram uses the verified profile link (`https://t.me/siadx007`, username `@siadx007`). WhatsApp is shown as text with a copy button (username `@siadsax`) since no wa.me link was provided. Update `src/components/Contact.tsx` if details change.
- No API keys, no database, no environment variables required.
