"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

const headlineWords = [
  "Making",
  "Sure",
  "Your",
  "Business",
  "Runs",
  "Smoothly",
];
const amberWords = ["\u2014", "Even", "When", "You\u2019re", "Busy"];

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function ArgoHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const blob1X = useTransform(mouseX, (v) => v / 50);
  const blob1Y = useTransform(mouseY, (v) => v / 50);
  const blob2X = useTransform(mouseX, (v) => v / 50);
  const blob2Y = useTransform(mouseY, (v) => v / 50);

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
      {/* Subtle warm gradient */}
      <motion.div
        className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: blob1X, y: blob1Y }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-amber-600/5 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: blob2X, y: blob2Y }}
      />

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
            We build done-for-you tools for local businesses. No tech skills needed
            — we handle everything.
          </motion.p>

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
