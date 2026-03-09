# Animations & Interactivity Enhancement Design

## Overview

Enhance the Argo website with Framer Motion-powered animations and interactivity across both the homepage (`/`) and CallCatch product page (`/callcatch`). The approach is a **mix**: subtle scroll-reveals globally for professionalism, with bolder interactive moments at key conversion points (hero, pricing, CTAs).

## Tech Stack Addition

- **Framer Motion** — React animation library for declarative scroll-triggered animations, parallax, and micro-interactions

## Design Decisions

### 1. Hero Sections (Both Pages) — Full Viewport

- Both heroes expand to `100vh` (full viewport height)
- **Animated text reveal:** Headline words stagger in with clip/fade effect, subtext fades up after headline completes
- **Floating parallax accents:** 3-4 subtle gradient blobs/shapes that drift on scroll and track mouse movement slightly
- **CTA buttons** fade up last in the animation sequence

### 2. Global Scroll-Reveal System

- Reusable `<ScrollReveal>` wrapper component built with Framer Motion
- **Single elements:** Fade up 20-30px + opacity transition over ~0.5s
- **Groups** (product cards, benefits, FAQ items, pricing tiers): Staggered cascade with ~0.1s delay between items
- Triggered when element enters ~20% of the viewport
- Applied to every section on both pages

### 3. Pricing Section — Conversion Moment

- **Animated number counters:** Prices animate from 0 to final value when scrolled into view
- **Card hover:** Subtle lift (-4px translateY) + shadow elevation
- **Recommended plan:** Soft glow or border highlight to draw attention

### 4. CTA Buttons — Global Micro-Interactions

- **Magnetic effect:** Buttons shift slightly toward cursor when within ~50px proximity
- **Hover pulse:** Gentle scale bump (1.0 to 1.05) with warm shadow expansion
- Applied to all primary CTA buttons across both pages

### 5. Existing Animations — Preserved

All current animations remain untouched:
- SMS demo bubble stagger animation (DemoSMS.tsx)
- Timeline line-drawing animation (HowItWorks.tsx)
- FAQ accordion expand/collapse (ArgoFAQ.tsx, FAQ.tsx)
- Navigation backdrop blur on scroll (ArgoNav.tsx, Nav.tsx)
- Pulsing "Live Now" dot
- Hover lifts on links/cards

## Animation Style Guidelines

- **Subtle globally, bold at conversion points**
- Durations: 0.4-0.6s for entrances, 0.2-0.3s for hover interactions
- Easing: ease-out for entrances, spring for interactive elements
- No animation should block or delay content reading
- Mobile: reduce parallax/mouse-tracking, keep scroll-reveals

## Target Audience Consideration

Local tradespeople (plumbers, electricians, etc.) who are busy and may be skeptical of tech. Animations must build trust and feel professional, not flashy or overwhelming.
