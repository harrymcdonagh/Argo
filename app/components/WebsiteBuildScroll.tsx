"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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

/* ───── Browser Chrome ───── */

function BrowserChrome({ isPhone }: { isPhone: boolean }) {
  return (
    <div className="relative border-b border-cream-200 overflow-hidden">
      {/* Browser chrome */}
      <motion.div
        className="flex items-center gap-2 px-4 py-3 bg-cream-50"
        animate={{ opacity: isPhone ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-3 flex-1 rounded-md bg-cream-100 px-3 py-1">
          <span className="text-xs text-stone-400">yourbusiness.co.uk</span>
        </div>
      </motion.div>

      {/* Phone status bar */}
      <motion.div
        className="absolute inset-0 flex items-center justify-between px-5 py-2.5 bg-stone-900"
        animate={{ opacity: isPhone ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <span className="text-[10px] font-medium text-white/80">9:41</span>
        <div className="flex items-center gap-1.5">
          <div className="flex items-end gap-[2px]">
            <div className="h-1.5 w-[3px] rounded-sm bg-white/70" />
            <div className="h-2 w-[3px] rounded-sm bg-white/70" />
            <div className="h-2.5 w-[3px] rounded-sm bg-white/70" />
            <div className="h-3 w-[3px] rounded-sm bg-white/50" />
          </div>
          <div className="ml-1 h-2.5 w-5 rounded-sm border border-white/60 relative">
            <div className="absolute inset-[1.5px] rounded-[1px] bg-white/70" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ───── Wireframe Layer ───── */

function WireframeLayer({
  children,
  visible,
  className = "",
}: {
  children: React.ReactNode;
  visible: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ───── Browser Mockup ───── */

function BrowserMockup({ activeStage }: { activeStage: number }) {
  const isPhone = activeStage === 2; // Mobile Responsive stage

  return (
    <motion.div
      className="bg-white shadow-warm-lg overflow-hidden border border-cream-200 mx-auto"
      animate={{
        width: isPhone ? "60%" : "100%",
        borderRadius: isPhone ? 28 : 16,
      }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <BrowserChrome isPhone={isPhone} />
      <div className="p-4 bg-white">
        {/* Layer 1: Nav bar */}
        <WireframeLayer visible={activeStage >= 0}>
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 rounded-full bg-stone-200" />
            <div className="flex items-center gap-3">
              <div className="h-2 w-10 rounded-full bg-stone-200 hidden sm:block" />
              <div className="h-2 w-10 rounded-full bg-stone-200 hidden sm:block" />
              <div className="h-6 w-14 rounded-md bg-amber-300" />
            </div>
          </div>
        </WireframeLayer>

        {/* Layer 2: Hero */}
        <WireframeLayer visible={activeStage >= 1} className="mt-3">
          <div className="rounded-xl bg-stone-100 p-4">
            <div className="space-y-2 mb-3">
              <div className="h-2.5 w-3/4 rounded-full bg-stone-200" />
              <div className="h-2.5 w-1/2 rounded-full bg-stone-200" />
            </div>
            <div className="space-y-1.5 mb-4">
              <div className="h-1.5 w-full rounded-full bg-stone-200/60" />
              <div className="h-1.5 w-5/6 rounded-full bg-stone-200/60" />
            </div>
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-md bg-amber-300" />
              <div className="h-6 w-16 rounded-md bg-stone-200/80" />
            </div>
          </div>
        </WireframeLayer>

        {/* Layer 3: Content cards */}
        <WireframeLayer visible={activeStage >= 2} className="mt-3">
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-14 flex-1 rounded-lg bg-stone-100 relative overflow-hidden"
              >
                <div className="absolute top-2 left-2 h-3 w-3 rounded bg-amber-200" />
                <div className="absolute bottom-2 left-2 right-2 space-y-1">
                  <div className="h-1 w-3/4 rounded-full bg-stone-200" />
                  <div className="h-1 w-1/2 rounded-full bg-stone-200/60" />
                </div>
              </div>
            ))}
          </div>
        </WireframeLayer>

        {/* Layer 4: Footer */}
        <WireframeLayer visible={activeStage >= 3} className="mt-3">
          <div className="rounded-lg bg-stone-100 p-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-14 rounded-full bg-stone-200" />
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                <div className="h-2.5 w-2.5 rounded-full bg-stone-200" />
                <div className="h-2.5 w-2.5 rounded-full bg-stone-200" />
              </div>
            </div>
            <div className="mt-1.5 flex gap-3">
              <div className="h-1 w-10 rounded-full bg-stone-200/60" />
              <div className="h-1 w-10 rounded-full bg-stone-200/60" />
              <div className="h-1 w-10 rounded-full bg-stone-200/60" />
            </div>
          </div>
        </WireframeLayer>
      </div>
    </motion.div>
  );
}

/* ───── Stage Label (Desktop) ───── */

function StageLabel({
  stage,
  index,
  isActive,
  isCompleted,
}: {
  stage: (typeof buildStages)[number];
  index: number;
  isActive: boolean;
  isCompleted: boolean;
}) {
  return (
    <div className="relative pl-10">
      {/* Vertical connector */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
        {/* Dot */}
        <div className="relative h-6 w-6 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center shrink-0 mt-0.5">
          <motion.div
            className="h-3 w-3 rounded-full bg-amber-600"
            animate={{ scale: isActive || isCompleted ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>
        {/* Line to next */}
        {index < buildStages.length - 1 && (
          <div className="relative w-0.5 flex-1 bg-cream-200 mt-1">
            <motion.div
              className="absolute inset-x-0 top-0 bg-amber-600 origin-top"
              animate={{ height: isCompleted ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        )}
      </div>

      {/* Text */}
      <motion.div
        animate={{
          opacity: isActive ? 1 : 0.3,
          scale: isActive ? 1 : 0.97,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="origin-left"
      >
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-amber-600">
          {stage.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-stone-600 max-w-[260px]">
          {stage.description}
        </p>
      </motion.div>
    </div>
  );
}

/* ───── Stage Card (Mobile) ───── */

function MobileStageCard({
  stage,
  isActive,
  isCompleted,
}: {
  stage: (typeof buildStages)[number];
  isActive: boolean;
  isCompleted: boolean;
}) {
  return (
    <motion.div
      className="flex items-start gap-3"
      animate={{ opacity: isActive ? 1 : 0.35 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative mt-1 h-5 w-5 shrink-0 rounded-full border-2 border-cream-200 bg-white flex items-center justify-center">
        <motion.div
          className="h-2.5 w-2.5 rounded-full bg-amber-600"
          animate={{ scale: isActive || isCompleted ? 1 : 0 }}
          transition={{ duration: 0.3 }}
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
  const [activeStage, setActiveStage] = useState(-1);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible label in the trigger zone
        let bestIndex = -1;
        let bestRatio = 0;

        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-stage"));
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = index;
          }
        });

        if (bestIndex >= 0) {
          setActiveStage(bestIndex);
        }
      },
      {
        // Trigger zone: middle 30% of viewport
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    labelRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="what-you-get" className="bg-cream-100">
      {/* ── Title ── */}
      <div className="pt-20 md:pt-28 pb-10 md:pb-14">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Everything Included
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-stone-900 md:text-4xl">
            What You Get
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Every website we build comes with the essentials to help your
            business stand out online.
          </p>
        </div>
      </div>

      {/* ── Desktop: Two columns ── */}
      <div className="hidden md:block pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-[1fr_340px] gap-16 lg:grid-cols-[1fr_380px]">
            {/* Sticky browser */}
            <div className="relative">
              <div className="sticky top-1/2 -translate-y-1/2">
                {/* Glow */}
                <div className="absolute -inset-8 -z-10 rounded-3xl bg-amber-100/20 blur-3xl" />
                <BrowserMockup activeStage={activeStage} />
              </div>
            </div>

            {/* Flowing labels */}
            <div>
              {buildStages.map((stage, i) => (
                <div
                  key={stage.title}
                  ref={(el) => { labelRefs.current[i] = el; }}
                  data-stage={i}
                  className="flex items-center min-h-[70vh]"
                >
                  <StageLabel
                    stage={stage}
                    index={i}
                    isActive={activeStage === i}
                    isCompleted={activeStage > i}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: Stacked ── */}
      <div className="md:hidden pb-16">
        <div className="px-6">
          {/* Sticky browser at top */}
          <div className="sticky top-16 z-10 pb-4 bg-cream-100">
            <BrowserMockup activeStage={activeStage} />
          </div>

          {/* Flowing label cards */}
          <div className="space-y-2 pt-4">
            {buildStages.map((stage, i) => (
              <div
                key={stage.title}
                ref={(el) => { labelRefs.current[i] = el; }}
                data-stage={i}
                className="min-h-[40vh] flex items-center"
              >
                <MobileStageCard
                  stage={stage}
                  isActive={activeStage === i}
                  isCompleted={activeStage > i}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
