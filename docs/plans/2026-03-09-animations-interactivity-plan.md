# Animations & Interactivity Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add Framer Motion-powered animations and interactivity across the entire Argo website — subtle scroll-reveals globally, bold moments at heroes/pricing/CTAs.

**Architecture:** Three reusable animation components (ScrollReveal, MagneticButton, AnimatedCounter) applied across all existing page sections. Both hero sections become full-viewport with animated text + floating parallax accents. No structural changes to page routing or data.

**Tech Stack:** Framer Motion (new dependency), React 19, Next.js 16, Tailwind CSS 4, TypeScript

---

### Task 1: Install Framer Motion

**Files:**
- Modify: `package.json`

**Step 1: Install the dependency**

Run: `npm install framer-motion`

**Step 2: Verify installation**

Run: `npm ls framer-motion`
Expected: `framer-motion@` version listed without errors

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add framer-motion dependency"
```

---

### Task 2: Create ScrollReveal Component

**Files:**
- Create: `app/components/ScrollReveal.tsx`

**Step 1: Create the component**

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.5,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Create the stagger wrapper for groups**

Create `app/components/StaggerGroup.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const container = {
  hidden: {},
  show: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StaggerGroup({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerGroupProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      custom={staggerDelay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Step 3: Verify dev server starts without errors**

Run: `npm run dev`
Expected: Compiles successfully

**Step 4: Commit**

```bash
git add app/components/ScrollReveal.tsx app/components/StaggerGroup.tsx
git commit -m "feat: add ScrollReveal and StaggerGroup animation components"
```

---

### Task 3: Create MagneticButton Component

**Files:**
- Create: `app/components/MagneticButton.tsx`

**Step 1: Create the component**

```tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  magneticStrength?: number;
}

export default function MagneticButton({
  children,
  href,
  className = "",
  magneticStrength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * magneticStrength);
    y.set((e.clientY - centerY) * magneticStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/MagneticButton.tsx
git commit -m "feat: add MagneticButton component with magnetic cursor effect"
```

---

### Task 4: Create AnimatedCounter Component

**Files:**
- Create: `app/components/AnimatedCounter.tsx`

**Step 1: Create the component**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  className = "",
  duration = 1.5,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
```

**Step 2: Commit**

```bash
git add app/components/AnimatedCounter.tsx
git commit -m "feat: add AnimatedCounter component for scroll-triggered number animation"
```

---

### Task 5: Update ArgoHero — Full Viewport + Animations

**Files:**
- Modify: `app/components/ArgoHero.tsx`

**Step 1: Rewrite ArgoHero with full-viewport, text stagger, and floating accents**

Convert to `"use client"` component. Key changes:
- Section becomes `min-h-screen` with flex centering
- Headline words stagger in using Framer Motion variants
- Floating gradient blobs animate with slow drift + subtle mouse tracking via `useMotionValue`
- Badge fades in first, then headline, then subtext, then CTAs
- Replace static CTA `<a>` tags with `MagneticButton` for the primary CTA

The section className changes from:
```
paper-texture relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28
```
to:
```
paper-texture relative overflow-hidden min-h-screen flex items-center py-20
```

The floating blobs get `motion.div` with:
- `animate={{ y: [0, -20, 0], x: [0, 10, 0] }}` with `duration: 8` and `repeat: Infinity`
- Mouse tracking: track mouse position, apply subtle parallax offset (divide by 50)

Headline animation: wrap each word in `motion.span` with stagger container. Use `clipPath` reveal: `inset(0 100% 0 0)` → `inset(0 0% 0 0)`.

**Step 2: Verify visually**

Run: `npm run dev`, navigate to `/`
Expected: Full-viewport hero, words animate in on load, blobs drift slowly, primary CTA has magnetic effect

**Step 3: Commit**

```bash
git add app/components/ArgoHero.tsx
git commit -m "feat: full-viewport ArgoHero with text stagger and floating accents"
```

---

### Task 6: Update CallCatch Hero — Full Viewport + Animations

**Files:**
- Modify: `app/components/Hero.tsx`

**Step 1: Rewrite Hero with full-viewport, text stagger, and floating accents**

Same animation approach as ArgoHero but preserving the existing two-column layout (copy left, notification card right on desktop, card above CTAs on mobile).

The section className changes from:
```
paper-texture relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28
```
to:
```
paper-texture relative overflow-hidden min-h-screen flex items-center py-20
```

Add `"use client"` directive. Add mouse tracking for floating blobs. Stagger headline words. The notification card on the right should `animate` in with a slide-up + fade after the headline completes (delay ~0.8s). Replace primary CTA `<a>` with `MagneticButton`.

**Step 2: Verify visually**

Run: `npm run dev`, navigate to `/callcatch`
Expected: Full-viewport hero, words animate in, notification card slides up, blobs drift, primary CTA magnetic

**Step 3: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "feat: full-viewport CallCatch Hero with text stagger and floating accents"
```

---

### Task 7: Add ScrollReveal to Homepage Sections

**Files:**
- Modify: `app/components/ArgoProducts.tsx`
- Modify: `app/components/ArgoAbout.tsx`
- Modify: `app/components/ArgoContact.tsx`
- Modify: `app/components/ArgoFAQ.tsx`

**Step 1: Wrap ArgoProducts**

Add `"use client"` to ArgoProducts. Wrap the section header (span + h2 + p) in `<ScrollReveal>`. Wrap the `.grid` of 3 cards in `<StaggerGroup className="grid gap-6 md:grid-cols-3">`, and wrap each card in `<motion.div variants={staggerItem}>` (import `staggerItem` from StaggerGroup). Replace the outer `<div className="grid ...">` with the StaggerGroup.

**Step 2: Wrap ArgoAbout**

Wrap section header in `<ScrollReveal>`. Wrap the about card in `<ScrollReveal delay={0.2}>`.

**Step 3: Wrap ArgoContact**

Wrap the entire inner card in `<ScrollReveal>`.

**Step 4: Wrap ArgoFAQ**

ArgoFAQ is already `"use client"`. Wrap the header in `<ScrollReveal>`. Wrap the FAQ list container in `<StaggerGroup>`, each FAQ item in `<motion.div variants={staggerItem}>`.

**Step 5: Verify visually**

Run: `npm run dev`, navigate to `/`, scroll down
Expected: Each section fades up as it enters viewport. Card groups stagger in sequentially.

**Step 6: Commit**

```bash
git add app/components/ArgoProducts.tsx app/components/ArgoAbout.tsx app/components/ArgoContact.tsx app/components/ArgoFAQ.tsx
git commit -m "feat: add scroll-reveal animations to all homepage sections"
```

---

### Task 8: Add ScrollReveal to CallCatch Page Sections

**Files:**
- Modify: `app/components/Problem.tsx`
- Modify: `app/components/WhatYouGet.tsx`
- Modify: `app/components/FinalCTA.tsx`
- Modify: `app/components/FAQ.tsx`

**Step 1: Wrap Problem**

Add `"use client"`. Wrap header in `<ScrollReveal>`. Wrap the 3-card grid in `<StaggerGroup className="grid gap-6 md:grid-cols-3">`, each card in `<motion.div variants={staggerItem}>`. Wrap the transition line at bottom in `<ScrollReveal delay={0.3}>`.

**Step 2: Wrap WhatYouGet**

Add `"use client"`. Wrap header in `<ScrollReveal>`. Wrap the 2-col grid in `<StaggerGroup className="grid gap-5 sm:grid-cols-2">`, each feature card in `<motion.div variants={staggerItem}>`.

**Step 3: Wrap FinalCTA**

Add `"use client"`. Wrap the entire inner card in `<ScrollReveal>`. Replace primary CTA `<a>` with `MagneticButton`.

**Step 4: Wrap FAQ (CallCatch)**

FAQ at `app/components/FAQ.tsx` — same approach as ArgoFAQ. Add `<ScrollReveal>` on header, `<StaggerGroup>` on FAQ items.

**Step 5: Verify visually**

Run: `npm run dev`, navigate to `/callcatch`, scroll through all sections
Expected: All sections animate in on scroll

**Step 6: Commit**

```bash
git add app/components/Problem.tsx app/components/WhatYouGet.tsx app/components/FinalCTA.tsx app/components/FAQ.tsx
git commit -m "feat: add scroll-reveal animations to all CallCatch page sections"
```

---

### Task 9: Update Pricing with Animated Counters + Card Hover

**Files:**
- Modify: `app/components/Pricing.tsx`

**Step 1: Add animated counters and enhanced cards**

Add `"use client"`. Replace the static price text `£{tier.monthly}` with `<AnimatedCounter value={parseInt(tier.monthly)} prefix="£" />`. Same for setup fee: `<AnimatedCounter value={parseInt(tier.setup)} prefix="£" />`.

Wrap the section header in `<ScrollReveal>`. Wrap the pricing grid in `<StaggerGroup>`, each tier card in `<motion.div variants={staggerItem}>`.

For the featured (recommended) tier card, add a subtle animated glow: use `motion.div` with `animate={{ boxShadow: ["0 0 0 0 rgba(217,119,6,0)", "0 0 20px 4px rgba(217,119,6,0.15)", "0 0 0 0 rgba(217,119,6,0)"] }}` on a 3s infinite loop.

Replace the CTA `<a>` inside each tier with `MagneticButton`.

**Step 2: Verify visually**

Run: `npm run dev`, navigate to `/callcatch#pricing`
Expected: Prices count up from 0. Cards stagger in. Featured card has subtle glow pulse. CTA buttons have magnetic effect.

**Step 3: Commit**

```bash
git add app/components/Pricing.tsx
git commit -m "feat: animated price counters, stagger cards, and magnetic CTAs in Pricing"
```

---

### Task 10: Replace Remaining CTA Buttons with MagneticButton

**Files:**
- Modify: `app/components/ArgoContact.tsx`
- Modify: `app/components/StickyMobileCTA.tsx`

**Step 1: Update ArgoContact primary CTA**

The "Book a Free Demo" `<a>` in ArgoContact becomes `<MagneticButton>` with the same className and href.

**Step 2: Update StickyMobileCTA**

Read StickyMobileCTA first. If it has a primary CTA link, replace with MagneticButton (note: magnetic effect is mainly for desktop, but the scale-on-tap still works nicely on mobile).

**Step 3: Verify visually**

Run: `npm run dev`, check both pages
Expected: All primary "Book a Free Demo" buttons have magnetic + scale effect on hover

**Step 4: Commit**

```bash
git add app/components/ArgoContact.tsx app/components/StickyMobileCTA.tsx
git commit -m "feat: apply MagneticButton to remaining CTAs"
```

---

### Task 11: Build Verification

**Step 1: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors. Check for any "use client" boundary warnings.

**Step 2: Run lint**

Run: `npm run lint`
Expected: No lint errors

**Step 3: Fix any issues found**

If build or lint fails, fix the issues.

**Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build/lint issues from animation additions"
```
