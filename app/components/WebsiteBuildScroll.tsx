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
    title: "Fast & Reliable",
    description:
      "Built with modern tech for fast load times and 99.9% uptime.",
  },
  {
    title: "Mobile Responsive",
    description:
      "Looks great on every device — phones, tablets, and desktops.",
  },
  {
    title: "SEO Ready",
    description:
      "Found on Google from day one with proper structure and metadata.",
  },
];

/*
  Scroll zones (0–1 mapped across container height):
  0.00–0.20  Stage 1: Custom Design  → Nav layer fades in
  0.20–0.40  Stage 2: Fast & Reliable → Hero layer fades in
  0.40–0.60  Stage 3: Mobile Responsive → Content layer + browser morphs to phone
  0.60–0.80  Stage 4: SEO Ready → Footer layer + browser morphs back to desktop
  0.80–1.00  Buffer zone — everything stays, scroll out gracefully
*/

const STAGE_SIZE = 0.2;
const THRESHOLDS = [0, 0.2, 0.4, 0.6]; // start of each stage

/* ───── Helpers ───── */

function useFadeIn(progress: MotionValue<number>, start: number) {
  return useTransform(progress, [start, start + 0.06], [0, 1]);
}

function useSlideUp(progress: MotionValue<number>, start: number) {
  return useTransform(progress, [start, start + 0.1], [12, 0]);
}

/* ───── Browser / Phone Chrome ───── */

function BrowserChrome({ phoneOpacity }: { phoneOpacity: MotionValue<number> }) {
  // Browser chrome fades out as phone chrome fades in
  const browserOpacity = useTransform(phoneOpacity, [0, 1], [1, 0]);

  return (
    <div className="relative border-b border-cream-200 overflow-hidden">
      {/* Browser chrome */}
      <motion.div
        className="flex items-center gap-2 px-4 py-3 bg-cream-50"
        style={{ opacity: browserOpacity }}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 rounded-md bg-cream-100 px-3 py-1">
          <span className="text-xs text-stone-400">yourbusiness.co.uk</span>
        </div>
      </motion.div>

      {/* Phone status bar — overlaid, fades in */}
      <motion.div
        className="absolute inset-0 flex items-center justify-between px-5 py-2.5 bg-stone-900"
        style={{ opacity: phoneOpacity }}
      >
        <span className="text-[10px] font-medium text-white/80">9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal bars */}
          <div className="flex items-end gap-[2px]">
            <div className="h-1.5 w-[3px] rounded-sm bg-white/70" />
            <div className="h-2 w-[3px] rounded-sm bg-white/70" />
            <div className="h-2.5 w-[3px] rounded-sm bg-white/70" />
            <div className="h-3 w-[3px] rounded-sm bg-white/50" />
          </div>
          {/* Battery */}
          <div className="ml-1 h-2.5 w-5 rounded-sm border border-white/60 relative">
            <div className="absolute inset-[1.5px] rounded-[1px] bg-white/70" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ───── Mockup Content Layers ───── */

function NavLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, THRESHOLDS[0]);
  const y = useSlideUp(progress, THRESHOLDS[0]);

  return (
    <motion.div
      className="flex items-center justify-between"
      style={{ opacity, y }}
    >
      <div className="h-2 sm:h-3 w-16 sm:w-20 rounded-full bg-stone-200" />
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="h-1.5 sm:h-2 w-8 sm:w-10 rounded-full bg-stone-200 hidden sm:block" />
        <div className="h-1.5 sm:h-2 w-8 sm:w-10 rounded-full bg-stone-200 hidden sm:block" />
        <div className="h-5 sm:h-6 w-12 sm:w-14 rounded-md bg-amber-300" />
      </div>
    </motion.div>
  );
}

function HeroLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, THRESHOLDS[1]);
  const y = useSlideUp(progress, THRESHOLDS[1]);

  return (
    <motion.div
      className="mt-2 sm:mt-4 rounded-xl bg-stone-100 relative overflow-hidden"
      style={{ opacity, y }}
    >
      <div className="p-3 sm:p-6">
        <div className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-4">
          <div className="h-2 sm:h-3 w-3/4 rounded-full bg-stone-200" />
          <div className="h-2 sm:h-3 w-1/2 rounded-full bg-stone-200" />
        </div>
        <div className="space-y-1 sm:space-y-1.5 mb-3 sm:mb-5">
          <div className="h-1.5 sm:h-2 w-full rounded-full bg-stone-200/60" />
          <div className="h-1.5 sm:h-2 w-5/6 rounded-full bg-stone-200/60" />
        </div>
        <div className="flex gap-2">
          <div className="h-5 sm:h-7 w-16 sm:w-20 rounded-lg bg-amber-300" />
          <div className="h-5 sm:h-7 w-16 sm:w-20 rounded-lg bg-stone-200/80" />
        </div>
      </div>
    </motion.div>
  );
}

function ContentLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, THRESHOLDS[2]);
  const y = useSlideUp(progress, THRESHOLDS[2]);

  return (
    <motion.div className="mt-2 sm:mt-4 space-y-2 sm:space-y-3" style={{ opacity, y }}>
      <div className="flex gap-2 sm:gap-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-10 sm:h-20 flex-1 rounded-lg bg-stone-100 relative overflow-hidden">
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 h-3 w-3 sm:h-4 sm:w-4 rounded bg-amber-200" />
            <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 space-y-1">
              <div className="h-1 sm:h-1.5 w-3/4 rounded-full bg-stone-200" />
              <div className="h-1 sm:h-1.5 w-1/2 rounded-full bg-stone-200/60" />
            </div>
          </div>
        ))}
      </div>
      <div className="space-y-1.5 sm:space-y-2 px-1">
        <div className="h-1.5 sm:h-2 w-full rounded-full bg-stone-200/70" />
        <div className="h-1.5 sm:h-2 w-[85%] rounded-full bg-stone-200/70" />
        <div className="h-1.5 sm:h-2 w-[70%] rounded-full bg-stone-200/70" />
      </div>
    </motion.div>
  );
}

function FooterLayer({ progress }: { progress: MotionValue<number> }) {
  const opacity = useFadeIn(progress, THRESHOLDS[3]);
  const y = useSlideUp(progress, THRESHOLDS[3]);

  return (
    <motion.div
      className="mt-2 sm:mt-4 rounded-lg bg-stone-100 p-2 sm:p-4"
      style={{ opacity, y }}
    >
      <div className="flex items-center justify-between">
        <div className="h-2 sm:h-2.5 w-12 sm:w-16 rounded-full bg-stone-200" />
        <div className="flex gap-1.5 sm:gap-2">
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-stone-200" />
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-stone-200" />
          <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-stone-200" />
        </div>
      </div>
      <div className="mt-1.5 sm:mt-2 flex gap-3 sm:gap-4">
        <div className="h-1 sm:h-1.5 w-10 sm:w-12 rounded-full bg-stone-200/60" />
        <div className="h-1 sm:h-1.5 w-10 sm:w-12 rounded-full bg-stone-200/60" />
        <div className="h-1 sm:h-1.5 w-10 sm:w-12 rounded-full bg-stone-200/60" />
      </div>
    </motion.div>
  );
}

/* ───── Stage Label ───── */

function StageLabel({
  stage,
  index,
  progress,
}: {
  stage: (typeof buildStages)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const threshold = THRESHOLDS[index];
  const nextThreshold = threshold + STAGE_SIZE;

  const opacity = useTransform(
    progress,
    [
      Math.max(0, threshold - 0.04),
      threshold,
      nextThreshold - 0.02,
      Math.min(1, nextThreshold + 0.04),
    ],
    [0.3, 1, 1, 1]
  );

  const scale = useTransform(
    progress,
    [
      Math.max(0, threshold - 0.04),
      threshold,
      nextThreshold - 0.02,
      Math.min(1, nextThreshold + 0.04),
    ],
    [0.97, 1, 1, 1]
  );

  const dotScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.02), threshold + 0.02],
    [0, 1]
  );

  const lineScaleY = useTransform(
    progress,
    [threshold, nextThreshold],
    [0, 1]
  );

  return (
    <div className="relative pl-8">
      {/* Vertical connector */}
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <div className="relative h-5 w-5 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center mt-1">
          <motion.div
            className="h-2.5 w-2.5 rounded-full bg-amber-600"
            style={{ scale: dotScale }}
          />
        </div>
        {index < buildStages.length - 1 && (
          <div className="relative w-0.5 flex-1 min-h-[3rem] bg-cream-200 mt-1">
            <motion.div
              className="absolute inset-x-0 top-0 bottom-0 bg-amber-600 origin-top"
              style={{ scaleY: lineScaleY }}
            />
          </div>
        )}
      </div>

      <motion.div style={{ opacity, scale }} className="origin-left pb-8">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-amber-600">
          {stage.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-600">
          {stage.description}
        </p>
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
  const threshold = THRESHOLDS[index];
  const nextThreshold = threshold + STAGE_SIZE;

  const opacity = useTransform(
    progress,
    [
      Math.max(0, threshold - 0.04),
      threshold,
      nextThreshold - 0.02,
      Math.min(1, nextThreshold + 0.04),
    ],
    [0.4, 1, 1, 1]
  );

  const dotScale = useTransform(
    progress,
    [Math.max(0, threshold - 0.02), threshold + 0.02],
    [0, 1]
  );

  return (
    <motion.div className="flex items-start gap-3" style={{ opacity }}>
      <div className="relative mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center">
        <motion.div
          className="h-2 w-2 rounded-full bg-amber-600"
          style={{ scale: dotScale }}
        />
      </div>
      <div>
        <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-amber-600">
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
    offset: ["start start", "end end"],
  });

  // Phone morph: ramps up during stage 3 (Mobile Responsive: 0.40–0.60), back down during stage 4
  const phoneProgress = useTransform(
    scrollYProgress,
    [0.38, 0.46, 0.56, 0.64],
    [0, 1, 1, 0]
  );

  // Browser frame width: 100% → 55% for phone, back to 100%
  const frameWidth = useTransform(
    scrollYProgress,
    [0.38, 0.46, 0.56, 0.64],
    ["100%", "55%", "55%", "100%"]
  );

  // Mobile: phone maxWidth — consistent percentage units
  const mobileMaxWidth = useTransform(
    scrollYProgress,
    [0.38, 0.46, 0.56, 0.64],
    ["100%", "60%", "60%", "100%"]
  );

  // Border radius morphs to more rounded for phone
  const frameBorderRadius = useTransform(
    scrollYProgress,
    [0.38, 0.46, 0.56, 0.64],
    [16, 28, 28, 16]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[180vh] md:h-[250vh] py-8 md:py-20"
    >
      {/* Sticky centered container */}
      <div className="sticky mx-auto max-w-6xl px-6 [top:8vh] md:[top:18vh]">
        {/* Section title */}
        <div className="text-center mb-4 md:mb-6">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Everything Included
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 md:text-3xl">
            What You Get
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm md:text-base text-stone-600">
            Every website we build comes with the essentials to help your business stand out online.
          </p>
        </div>

        {/* ── Desktop: Two-column layout ── */}
        <div className="hidden md:grid md:grid-cols-[1fr_320px] md:gap-12 lg:grid-cols-[1fr_360px] lg:gap-16 items-start">
          {/* Browser / Phone mockup */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-amber-100/20 blur-3xl" />

            <motion.div
              className="w-full rounded-2xl bg-white shadow-warm-lg overflow-hidden border border-cream-200"
              style={{
                width: frameWidth,
                borderRadius: frameBorderRadius,
              }}
            >
              <BrowserChrome phoneOpacity={phoneProgress} />
              <div className="p-5 sm:p-6 bg-white min-h-[320px]">
                <NavLayer progress={scrollYProgress} />
                <HeroLayer progress={scrollYProgress} />
                <ContentLayer progress={scrollYProgress} />
                <FooterLayer progress={scrollYProgress} />
              </div>
            </motion.div>
          </div>

          {/* Labels column */}
          <div className="pt-2">
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
          {/* Mockup */}
          <div className="relative mb-6 flex justify-center">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-amber-100/20 blur-2xl" />

            <motion.div
              className="w-full rounded-2xl bg-white shadow-warm overflow-hidden border border-cream-200"
              style={{
                maxWidth: mobileMaxWidth,
                borderRadius: frameBorderRadius,
              }}
            >
              <BrowserChrome phoneOpacity={phoneProgress} />
              <div className="p-2 bg-white min-h-[90px]">
                <NavLayer progress={scrollYProgress} />
                <HeroLayer progress={scrollYProgress} />
                <ContentLayer progress={scrollYProgress} />
                <FooterLayer progress={scrollYProgress} />
              </div>
            </motion.div>
          </div>

          {/* Labels */}
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
