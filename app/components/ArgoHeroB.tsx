"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import DotGrid from "./DotGrid";

/* ── copy ── */
const headlineWords = [
  "Making",
  "Sure",
  "Your",
  "Business",
  "Runs",
  "Smoothly",
];
const amberWords = ["Even", "When", "You\u2019re", "Busy"];

/* ── animation variants ── */
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

/* ── stat card data ── */
const statCards = [
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    value: "8s",
    label: "Avg Response",
    position: "top-[14%] left-[12%] md:left-[14%]",
    drift: { x: [0, 14, -10, 0], y: [0, -18, -6, 0] },
    driftDuration: 8,
    delay: 0.8,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    value: "94%",
    label: "Recovery Rate",
    position: "top-[18%] right-[10%] md:right-[13%]",
    drift: { x: [0, -16, 8, 0], y: [0, 12, -14, 0] },
    driftDuration: 9.5,
    delay: 1.0,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    value: "24/7",
    label: "Always On",
    position: "top-[46%] left-[8%] md:left-[11%]",
    drift: { x: [0, 12, -14, 0], y: [0, -15, 16, 0] },
    driftDuration: 10,
    delay: 1.2,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    value: "3.2x",
    label: "ROI Average",
    position: "top-[42%] right-[6%] md:right-[10%]",
    drift: { x: [0, -12, 15, 0], y: [0, 16, -10, 0] },
    driftDuration: 8.5,
    delay: 1.1,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    value: "100%",
    label: "Done For You",
    position: "bottom-[14%] left-[14%] md:left-[18%]",
    drift: { x: [0, -15, 10, 0], y: [0, 14, -12, 0] },
    driftDuration: 11,
    delay: 1.3,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    value: "£0",
    label: "Hidden Fees",
    position: "bottom-[12%] right-[10%] md:right-[14%]",
    drift: { x: [0, 10, -16, 0], y: [0, -14, 12, 0] },
    driftDuration: 9,
    delay: 1.4,
  },
];

/* ── component ── */
export default function ArgoHeroB() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="paper-texture relative overflow-hidden min-h-screen flex items-center py-20"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      {/* ── dot-grid canvas ── */}
      <DotGrid sectionRef={sectionRef} />

      {/* ── floating stat cards ── */}
      {statCards.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute ${card.position} z-20 hidden 2xl:block`}
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: card.delay,
            ease: "easeOut",
          }}
        >
          <motion.div
            className="rounded-xl bg-white px-4 py-3 shadow-warm"
            animate={{
              x: card.drift.x,
              y: card.drift.y,
            }}
            transition={{
              duration: card.driftDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                {card.icon}
              </div>
              <div>
                <p className="text-lg font-bold leading-none text-stone-900">
                  {card.value}
                </p>
                <p className="mt-0.5 text-xs text-stone-500">{card.label}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* ── foreground hero text ── */}
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

          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-6xl"
            style={{ textShadow: "0 1px 8px rgba(250,248,245,0.7)" }}
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

          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            We build done-for-you tools and services for local businesses. No tech skills needed
            — we handle everything.
          </motion.p>

          {/* Mobile stat strip */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-2 2xl:hidden"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
          >
            {[
              { value: "8s", label: "Avg Response" },
              { value: "94%", label: "Recovery Rate" },
              { value: "24/7", label: "Always On" },
              { value: "£0", label: "Hidden Fees" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 rounded-full border border-cream-200 bg-white/80 px-3.5 py-1.5 shadow-warm-sm"
              >
                <span className="text-sm font-bold text-stone-900">{stat.value}</span>
                <span className="text-xs text-stone-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>

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
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
            >
              See Our Services
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
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
