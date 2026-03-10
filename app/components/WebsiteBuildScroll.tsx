"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

/* ───── Data ───── */

const buildStages = [
  {
    title: "Custom Design",
    description:
      "A unique site designed around your business, not a cookie-cutter template.",
  },
  {
    title: "Mobile Responsive",
    description:
      "Looks great on every device — phones, tablets, and desktops.",
  },
  {
    title: "Fast & Reliable",
    description:
      "Built with modern tech for fast load times and 99.9% uptime.",
  },
  {
    title: "SEO Ready",
    description:
      "Found on Google from day one with proper structure and metadata.",
  },
];

/* ───── Helpers ───── */

/** Returns a MotionValue that fades from 0→1 over a short scroll range. */
function useFadeIn(progress: MotionValue<number>, start: number) {
  return useTransform(progress, [start, start + 0.05], [0, 1]);
}

/** Returns a MotionValue that slides from 12→0 over a short scroll range. */
function useSlideUp(progress: MotionValue<number>, start: number) {
  return useTransform(progress, [start, start + 0.08], [12, 0]);
}

/* ───── Browser Mockup Layers ───── */

function BrowserChrome() {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-cream-50 border-b border-cream-200">
      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
      <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
      <div className="ml-3 flex-1 rounded-md bg-cream-100 px-3 py-1">
        <span className="text-xs text-stone-400">yourbusiness.co.uk</span>
      </div>
    </div>
  );
}

function NavLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, 0);
  const y = useSlideUp(progress, 0);

  return (
    <motion.div
      className="flex items-center justify-between"
      style={{ opacity, y }}
    >
      <div className="h-3 w-20 rounded-full bg-stone-200" />
      <div className="flex items-center gap-3">
        <div className="h-2 w-10 rounded-full bg-stone-200 hidden sm:block" />
        <div className="h-2 w-10 rounded-full bg-stone-200 hidden sm:block" />
        <div className="h-6 w-14 rounded-md bg-amber-300" />
      </div>
    </motion.div>
  );
}

function HeroLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, 0.25);
  const y = useSlideUp(progress, 0.25);

  return (
    <motion.div
      className="mt-4 rounded-xl bg-stone-100 relative overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="p-5 sm:p-6">
        {/* Headline lines */}
        <div className="space-y-2 mb-4">
          <div className="h-3 w-3/4 rounded-full bg-stone-200" />
          <div className="h-3 w-1/2 rounded-full bg-stone-200" />
        </div>
        {/* Subtext */}
        <div className="space-y-1.5 mb-5">
          <div className="h-2 w-full rounded-full bg-stone-200/60" />
          <div className="h-2 w-5/6 rounded-full bg-stone-200/60" />
        </div>
        {/* CTA buttons */}
        <div className="flex gap-2">
          <div className="h-7 w-20 rounded-lg bg-amber-300" />
          <div className="h-7 w-20 rounded-lg bg-stone-200/80" />
        </div>
      </div>
    </motion.div>
  );
}

function ContentLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, 0.5);
  const y = useSlideUp(progress, 0.5);

  return (
    <motion.div className="mt-4 space-y-3" style={{ opacity, y }}>
      {/* Three cards row */}
      <div className="flex gap-3">
        <div className="h-16 sm:h-20 flex-1 rounded-lg bg-stone-100 relative overflow-hidden">
          <div className="absolute top-3 left-3 h-4 w-4 rounded bg-amber-200" />
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <div className="h-1.5 w-3/4 rounded-full bg-stone-200" />
            <div className="h-1.5 w-1/2 rounded-full bg-stone-200/60" />
          </div>
        </div>
        <div className="h-16 sm:h-20 flex-1 rounded-lg bg-stone-100 relative overflow-hidden">
          <div className="absolute top-3 left-3 h-4 w-4 rounded bg-amber-200" />
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <div className="h-1.5 w-3/4 rounded-full bg-stone-200" />
            <div className="h-1.5 w-1/2 rounded-full bg-stone-200/60" />
          </div>
        </div>
        <div className="h-16 sm:h-20 flex-1 rounded-lg bg-stone-100 relative overflow-hidden">
          <div className="absolute top-3 left-3 h-4 w-4 rounded bg-amber-200" />
          <div className="absolute bottom-3 left-3 right-3 space-y-1">
            <div className="h-1.5 w-3/4 rounded-full bg-stone-200" />
            <div className="h-1.5 w-1/2 rounded-full bg-stone-200/60" />
          </div>
        </div>
      </div>
      {/* Text block */}
      <div className="space-y-2 px-1">
        <div className="h-2 w-full rounded-full bg-stone-200/70" />
        <div className="h-2 w-[85%] rounded-full bg-stone-200/70" />
        <div className="h-2 w-[70%] rounded-full bg-stone-200/70" />
      </div>
    </motion.div>
  );
}

function FooterLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, 0.75);
  const y = useSlideUp(progress, 0.75);

  return (
    <motion.div
      className="mt-4 rounded-lg bg-stone-100 p-3 sm:p-4"
      style={{ opacity, y }}
    >
      <div className="flex items-center justify-between">
        <div className="h-2.5 w-16 rounded-full bg-stone-200" />
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-stone-200" />
          <div className="h-3 w-3 rounded-full bg-stone-200" />
          <div className="h-3 w-3 rounded-full bg-stone-200" />
        </div>
      </div>
      <div className="mt-2 flex gap-4">
        <div className="h-1.5 w-12 rounded-full bg-stone-200/60" />
        <div className="h-1.5 w-12 rounded-full bg-stone-200/60" />
        <div className="h-1.5 w-12 rounded-full bg-stone-200/60" />
      </div>
    </motion.div>
  );
}

/* ───── Label with Progress Line ───── */

function StageLabel({
  stage,
  index,
  progress,
}: {
  stage: (typeof buildStages)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const threshold = index * 0.25;
  const nextThreshold = (index + 1) * 0.25;

  // Active when scroll is in this stage's range
  const opacity = useTransform(
    progress,
    [
      Math.max(0, threshold - 0.05),
      threshold,
      nextThreshold - 0.02,
      nextThreshold + 0.03,
    ],
    [0.35, 1, 1, 0.35]
  );

  const scale = useTransform(
    progress,
    [
      Math.max(0, threshold - 0.05),
      threshold,
      nextThreshold - 0.02,
      nextThreshold + 0.03,
    ],
    [0.97, 1, 1, 0.97]
  );

  // Amber dot fill — fills when active
  const dotScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.02), threshold + 0.02],
    [0, 1]
  );

  // Progress line between labels
  const lineScaleY = useTransform(
    progress,
    [threshold, nextThreshold],
    [0, 1]
  );

  return (
    <div className="relative pl-8">
      {/* Vertical connector dot + line */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        {/* Outer ring */}
        <div className="relative h-5 w-5 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center mt-1">
          {/* Inner fill dot */}
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-amber-600"
            style={{ scale: dotScale }}
          />
        </div>
        {/* Connecting line to next label */}
        {index < buildStages.length - 1 && (
          <div className="relative w-0.5 flex-1 min-h-[3rem] bg-cream-200 mt-1">
            <motion.div
              className="absolute inset-x-0 top-0 bottom-0 bg-amber-600 origin-top"
              style={{ scaleY: lineScaleY }}
            />
          </div>
        )}
      </div>

      {/* Text */}
      <motion.div style={{ opacity, scale }} className="origin-left pb-8">
        <motion.h3
          className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900"
          style={{ opacity }}
        >
          {stage.title}
        </motion.h3>
        <motion.p
          className="mt-1 text-sm leading-relaxed text-stone-600"
          style={{ opacity }}
        >
          {stage.description}
        </motion.p>
      </motion.div>
    </div>
  );
}

/* ───── Mobile Stage Card ───── */

function MobileStageCard({
  stage,
  index,
  progress,
}: {
  stage: (typeof buildStages)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const threshold = index * 0.25;
  const nextThreshold = (index + 1) * 0.25;

  const opacity = useTransform(
    progress,
    [
      Math.max(0, threshold - 0.05),
      threshold,
      nextThreshold - 0.02,
      nextThreshold + 0.03,
    ],
    [0.4, 1, 1, 0.4]
  );

  const dotScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.02), threshold + 0.02],
    [0, 1]
  );

  return (
    <motion.div
      className="flex items-start gap-3"
      style={{ opacity }}
    >
      {/* Dot */}
      <div className="relative mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center">
        <motion.div
          className="h-2 w-2 rounded-full bg-amber-600"
          style={{ scale: dotScale }}
        />
      </div>
      {/* Text */}
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-stone-900">
          {stage.title}
        </h3>
        <p className="mt-0.5 text-sm leading-relaxed text-stone-600">
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ───── Main Component ───── */

export default function WebsiteBuildScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] md:h-[300vh]"
    >
      {/* Sticky centered container */}
      <div className="sticky top-1/2 -translate-y-1/2 mx-auto max-w-6xl px-6">
        {/* ── Desktop: Two-column layout ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_320px] md:gap-12 lg:grid-cols-[1fr_360px] lg:gap-16 items-center">
          {/* Browser mockup */}
          <div className="relative">
            {/* Glow behind browser */}
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-amber-100/20 blur-3xl" />

            <div className="rounded-2xl bg-white shadow-warm-lg overflow-hidden border border-cream-200">
              <BrowserChrome />
              <div className="p-5 sm:p-6 bg-white min-h-[320px]">
                <NavLayer progress={scrollYProgress} />
                <HeroLayer progress={scrollYProgress} />
                <ContentLayer progress={scrollYProgress} />
                <FooterLayer progress={scrollYProgress} />
              </div>
            </div>
          </div>

          {/* Labels column */}
          <div className="py-4">
            {buildStages.map((stage, i) => (
              <StageLabel
                key={stage.title}
                stage={stage}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile: Stacked layout ── */}
        <div className="md:hidden">
          {/* Smaller browser mockup */}
          <div className="relative mb-6">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-amber-100/20 blur-2xl" />

            <div className="rounded-xl bg-white shadow-warm overflow-hidden border border-cream-200">
              <BrowserChrome />
              <div className="p-4 bg-white min-h-[220px]">
                <NavLayer progress={scrollYProgress} />
                <HeroLayer progress={scrollYProgress} />
                <ContentLayer progress={scrollYProgress} />
                <FooterLayer progress={scrollYProgress} />
              </div>
            </div>
          </div>

          {/* Labels as cards below */}
          <div className="space-y-3">
            {buildStages.map((stage, i) => (
              <MobileStageCard
                key={stage.title}
                stage={stage}
                index={i}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
