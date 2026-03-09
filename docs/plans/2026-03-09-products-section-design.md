# Enhanced Products Section Design

## Overview

Redesign the ArgoProducts section to make CallCatch the star with a live notification demo, while coming-soon products take a compact supporting role.

## Layout

- Two-column layout on desktop: CallCatch featured card (~65% left), two compact coming-soon cards stacked vertically (~35% right)
- Mobile: CallCatch full-width on top, coming-soon cards stack below

## CallCatch Featured Card

- Larger card with shadow-warm-lg, amber left border accent
- Top: "Live Now" badge with pulse dot, CallCatch title + description
- Middle: Animated lead notification demo triggered on scroll — fields populate one by one (Name, Needs, Urgency, Area) with staggered animation, followed by a "Ready to call back" status bar
- Bottom: "Learn more" link to /callcatch + "Book a Free Demo" MagneticButton

## Coming Soon Cards (x2)

- Compact, muted styling (opacity-70, stone-400 text)
- Icon + "In Development" title + one-line teaser + "Coming Soon" badge
- Subtle hover lift + opacity increase
- Stagger in after CallCatch card

## Animations

- Section header: ScrollReveal fade-up
- CallCatch card: ScrollReveal fade-up
- Notification demo: Intersection Observer at 30% viewport, fields stagger with 0.5s delays
- Coming-soon cards: stagger with 0.15s delay between them
