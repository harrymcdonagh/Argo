"use client";

import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";
import MagneticButton from "./MagneticButton";

/* ─── Floating Badge Sub-component (allows hooks per-badge) ─── */
function FloatingBadge({
  mouseX,
  mouseY,
  icon,
  value,
  label,
  position,
  size,
  parallaxStrength,
  floatDuration,
  floatDelay,
  delay,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  icon: ReactNode;
  value: string;
  label: string;
  position: string;
  size: string;
  parallaxStrength: number;
  floatDuration: number;
  floatDelay: number;
  delay: number;
}) {
  const bx = useTransform(mouseX, (v) => v / parallaxStrength);
  const by = useTransform(mouseY, (v) => v / parallaxStrength);

  return (
    <motion.div
      className={`pointer-events-none absolute z-20 ${position}`}
      style={{ x: bx, y: by }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <motion.div
        className={`flex items-center gap-2 rounded-2xl bg-white ${size} shadow-warm border border-stone-100`}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: floatDuration,
          delay: floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="flex-shrink-0">{icon}</span>
        <div className="flex items-baseline gap-1">
          <span className="font-[family-name:var(--font-display)] text-sm font-bold text-stone-900">
            {value}
          </span>
          <span className="text-xs text-stone-500">{label}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Copy ─── */
const headlineWords = [
  "Making",
  "Sure",
  "Your",
  "Business",
  "Runs",
  "Smoothly",
];
const amberWords = ["\u2014", "Even", "When", "You\u2019re", "Busy"];

/* ─── Animation variants ─── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ─── Floating badge data ─── */
const floatingBadges = [
  {
    icon: (
      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "8s",
    label: "avg response",
    position: "top-[18%] left-[6%] md:left-[10%]",
    size: "px-3 py-2",
    parallaxStrength: 25,
    floatDuration: 7,
    floatDelay: 0,
    delay: 0.8,
  },
  {
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "94%",
    label: "recovery rate",
    position: "top-[14%] right-[6%] md:right-[12%]",
    size: "px-4 py-2.5",
    parallaxStrength: 20,
    floatDuration: 8,
    floatDelay: 1,
    delay: 1.0,
  },
  {
    icon: (
      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    value: "47",
    label: "calls saved",
    position: "bottom-[22%] left-[4%] md:left-[8%]",
    size: "px-3 py-2",
    parallaxStrength: 30,
    floatDuration: 6,
    floatDelay: 0.5,
    delay: 1.2,
  },
  {
    icon: (
      <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "£3.2k",
    label: "recovered",
    position: "bottom-[18%] right-[5%] md:right-[10%]",
    size: "px-4 py-3",
    parallaxStrength: 18,
    floatDuration: 9,
    floatDelay: 1.5,
    delay: 1.4,
  },
  {
    icon: (
      <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    value: "12",
    label: "jobs this week",
    position: "top-[42%] right-[3%] md:right-[7%]",
    size: "px-3 py-2",
    parallaxStrength: 22,
    floatDuration: 7.5,
    floatDelay: 2,
    delay: 1.1,
  },
];

/* ─── Dashboard metric cells ─── */
const dashboardMetrics = [
  { label: "Calls Recovered", value: "47", color: "text-amber-600" },
  { label: "Response Time", value: "8s", color: "text-stone-900" },
  { label: "Jobs This Week", value: "12", color: "text-stone-900" },
  { label: "Recovery Rate", value: "94%", color: "text-amber-600" },
];

/* ─── Component ─── */
export default function ArgoHeroC() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* Dashboard parallax — moves opposite to cursor */
  const dashTiltX = useTransform(mouseY, (v) => 12 + v / 80);
  const dashTiltY = useTransform(mouseX, (v) => -5 - v / 80);
  const dashX = useTransform(mouseX, (v) => -v / 60);
  const dashY = useTransform(mouseY, (v) => -v / 60);

  /* Blob parallax */
  const blob1X = useTransform(mouseX, (v) => v / 50);
  const blob1Y = useTransform(mouseY, (v) => v / 50);
  const blob2X = useTransform(mouseX, (v) => -v / 40);
  const blob2Y = useTransform(mouseY, (v) => -v / 40);
  const blob3X = useTransform(mouseX, (v) => v / 60);
  const blob3Y = useTransform(mouseY, (v) => v / 60);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="paper-texture relative overflow-hidden min-h-screen flex items-center py-20"
    >
      {/* ── Subtle grid pattern overlay ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(28,25,23,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(28,25,23,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Ambient gradient blobs ── */}
      <motion.div
        className="pointer-events-none absolute -top-32 right-[10%] h-[600px] w-[600px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.07) 0%, rgba(250,248,245,0) 70%)",
          x: blob1X,
          y: blob1Y,
        }}
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-10%] -left-32 h-[450px] w-[450px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.06) 0%, rgba(250,248,245,0) 70%)",
          x: blob2X,
          y: blob2Y,
        }}
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute top-[40%] left-[55%] h-[350px] w-[350px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.04) 0%, rgba(250,248,245,0) 70%)",
          x: blob3X,
          y: blob3Y,
        }}
        animate={{ y: [0, -15, 0], x: [0, -8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── 3D Dashboard Mockup (background layer) ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div style={{ perspective: "1200px" }} className="w-full flex justify-center">
          <motion.div
            className="w-[700px] max-w-[90vw] rounded-2xl border border-stone-200/60 bg-white/80 backdrop-blur-sm"
            style={{
              rotateX: dashTiltX,
              rotateY: dashTiltY,
              x: dashX,
              y: dashY,
              opacity: 0.17,
              boxShadow: "0 25px 60px -12px rgba(28,25,23,0.08), 0 12px 28px -8px rgba(28,25,23,0.05)",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.17, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            {/* Dashboard top bar */}
            <div className="flex items-center justify-between border-b border-stone-200/60 px-6 py-4">
              <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-stone-900">
                Argo Dashboard
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
              </div>
            </div>

            {/* Dashboard metrics grid */}
            <div className="grid grid-cols-2 gap-4 p-6">
              {dashboardMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl bg-[#FAF8F5] p-4"
                >
                  <p className="text-xs font-medium text-stone-500 mb-1">{m.label}</p>
                  <p className={`font-[family-name:var(--font-display)] text-2xl font-bold ${m.color}`}>
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Fake bottom bar */}
            <div className="border-t border-stone-200/60 px-6 py-3 flex items-center gap-2">
              <span className="h-1.5 w-12 rounded-full bg-amber-400/40" />
              <span className="h-1.5 w-8 rounded-full bg-stone-200" />
              <span className="h-1.5 w-16 rounded-full bg-stone-200" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Floating metric badges ── */}
      {floatingBadges.map((badge, i) => (
        <FloatingBadge key={i} mouseX={mouseX} mouseY={mouseY} {...badge} />
      ))}

      {/* ── Foreground hero text ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <span className="text-sm font-medium text-amber-700">
              Based in Essex, built for local businesses
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-6xl"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={wordVariant}
              >
                {word}
              </motion.span>
            ))}{" "}
            {amberWords.map((word, i) => (
              <motion.span
                key={`amber-${i}`}
                className="inline-block mr-[0.25em] text-amber-600"
                variants={wordVariant}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            We build done-for-you tools for local businesses. No tech skills needed
            — we handle everything.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <MagneticButton
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-amber-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
            >
              See Our Products
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
