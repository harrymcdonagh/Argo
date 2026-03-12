# Argo Website — Development Guide

## Overview
Marketing website for Argo (argosystems.co.uk). Deployed on Vercel. See `D:\Argo\CLAUDE.md` for full business context.

## Tech Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom theme
- **Animations**: Framer Motion 12.35.2
- **Analytics**: Vercel Analytics
- **Linting**: ESLint with next config

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npx tsc --noEmit` — Type check

## Design System

### Typography
- **Body**: DM Sans (loaded via next/font/google, variable `--font-body`)
- **Display/Headings**: Fraunces (loaded via Google Fonts CDN, variable `--font-display`)
- Apply display font with: `font-[family-name:var(--font-display)]`

### Colour Palette
- Background: cream-50 `#FAF8F5`
- Surface: cream-100 `#F5F0EB`
- Border: cream-200 `#E7E0D8`
- Primary accent: amber-600 `#D97706`
- Text primary: stone-900 `#292524`
- Text secondary: stone-600
- Text muted: stone-400/500
- Success: emerald (used for "Live Now" badges)

### Shadows
Custom warm shadow system defined in globals.css:
- `shadow-warm-sm`, `shadow-warm`, `shadow-warm-lg`, `shadow-warm-xl`

### Patterns
- `paper-texture` class — subtle noise overlay for sections
- `pulse-dot` class — pulsing green dot for "Live Now" indicators

## Project Structure
```
app/
├── page.tsx                    # Homepage (Argo main site)
├── layout.tsx                  # Root layout, fonts, metadata, JSON-LD
├── globals.css                 # Tailwind config, custom shadows, animations
├── callcatch/page.tsx          # CallCatch product landing page
├── web-design/
│   ├── page.tsx                # Web design service landing page
│   └── WebDesignContent.tsx    # Web design page content
├── privacy/page.tsx            # Privacy policy
├── terms/page.tsx              # Terms of service
├── robots.ts                   # Robots.txt generation
├── sitemap.ts                  # Sitemap generation
└── components/
    # Homepage components (prefixed with Argo)
    ├── ArgoNav.tsx             # Main site navigation
    ├── ArgoHeroB.tsx           # Homepage hero (active version)
    ├── ArgoProducts.tsx        # Products section (CallCatch + coming soon)
    ├── ArgoServices.tsx        # Services section (web design + coming soon)
    ├── ArgoAbout.tsx           # About section
    ├── ArgoFAQ.tsx             # Homepage FAQ
    ├── ArgoContact.tsx         # Contact section
    ├── ArgoFooter.tsx          # Site footer
    ├── ArgoComparison.tsx      # Comparison section
    # CallCatch page components
    ├── Nav.tsx                 # CallCatch page nav
    ├── Hero.tsx                # CallCatch hero
    ├── Problem.tsx             # Problem statement
    ├── HowItWorks.tsx          # How CallCatch works
    ├── DemoSMS.tsx             # SMS conversation demo
    ├── VideoDemo.tsx           # Video demo section
    ├── WhatYouGet.tsx          # Features/benefits
    ├── Pricing.tsx             # CallCatch pricing cards
    ├── FAQ.tsx                 # CallCatch FAQ
    ├── FinalCTA.tsx            # Bottom CTA
    ├── Footer.tsx              # CallCatch page footer
    # Web design page components
    ├── WebDesignNav.tsx        # Web design page nav
    ├── WebDesignPricing.tsx    # Web design pricing
    ├── WebsiteBuildScroll.tsx  # Scroll animation showcase
    ├── StickyMobileCTA.tsx     # Mobile sticky CTA
    # Shared utility components
    ├── ScrollReveal.tsx        # Scroll-triggered fade-in wrapper
    ├── StaggerGroup.tsx        # Staggered animation container
    ├── MagneticButton.tsx      # Magnetic hover effect button/link
    ├── AnimatedCounter.tsx     # Number count-up animation
    └── DotGrid.tsx             # Decorative dot grid
```

## Component Conventions
- Use `"use client"` directive for components with interactivity/animations
- Wrap sections in `ScrollReveal` for scroll-triggered entrance animations
- Use `StaggerGroup` + `staggerItem` variants for lists of cards
- Use `MagneticButton` for CTAs (wraps `<a>` tags with magnetic hover effect)
- All external links to Calendly for booking: `https://calendly.com/harry-argosystems/callcatch-demo`
- WhatsApp contact: `https://wa.me/447939939885`
- Email: `harry@argosystems.co.uk`

## Coding Standards
- Tailwind utility classes for all styling (no inline styles)
- Responsive: mobile-first, use `md:` and `lg:` breakpoints
- Accessible: use semantic HTML, `aria-hidden` on decorative SVGs, skip-to-content link in layout
- Security headers configured in next.config.ts (X-Frame-Options, CSP, etc.)
- Keep components focused — one component per file, one clear purpose

## Current Pages & Status
| Page | Route | Status |
|------|-------|--------|
| Homepage | `/` | Live |
| CallCatch | `/callcatch` | Live |
| Web Design | `/web-design` | Live |
| Privacy | `/privacy` | Live |
| Terms | `/terms` | Live |

## Pricing (keep in sync with business plan)
### CallCatch (25% early-client discount)
- **Starter**: £150/mo (standard £200) + £400 setup (standard £535)
- **Standard**: £250/mo (standard £335) + £900 setup (standard £1,200)

### Web Design
- See `/web-design` page for current pricing

## Important Notes
- ArgoHero.tsx and ArgoHeroC.tsx exist but ArgoHeroB.tsx is the active hero component
- Never say "AI" or "automation" in customer-facing copy — describe what it does instead
- OG images exist in `/public/` for homepage, CallCatch, and web design pages
- JSON-LD structured data is in layout.tsx (LocalBusiness schema)
