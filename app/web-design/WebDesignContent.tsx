"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import MagneticButton from "../components/MagneticButton";
import DotGrid from "../components/DotGrid";
import WebsiteBuildScroll from "../components/WebsiteBuildScroll";
import ArgoComparison from "../components/ArgoComparison";

const CALENDLY_URL = "https://calendly.com/harry-argosystems/callcatch-demo";

/* ───── Data ───── */

const howItWorksSteps = [
  {
    number: "01",
    title: "Book a Call",
    description: "Tell us about your business, your customers, and what you want from your website. We'll handle the rest.",
    icon: (
      <svg className="h-7 w-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Build It",
    description: "We design and develop your site, keeping you in the loop with previews along the way. No surprises.",
    icon: (
      <svg className="h-7 w-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Go Live",
    description: "We launch your site, set up hosting, and make sure everything's running smoothly. You're online.",
    icon: (
      <svg className="h-7 w-7" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

// Node appear times: 01 = 0s, 02 = 1.5s (first line done), 03 = 2.7s (second line done)
const NODE_DELAYS = [0, 1.5, 2.7];

/* ───── Hero Animation Variants ───── */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
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

const wireframeContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.8 },
  },
};

const wireframeItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ───── Component ───── */

export default function WebDesignContent() {
  const headlineWords = ["A", "Professional", "Website", "For", "Your", "Business", "\u2014"];
  const amberWords = ["Without", "The", "Hassle"];

  const heroSectionRef = useRef<HTMLElement>(null);
  const howItWorksSectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (howItWorksSectionRef.current) {
      observer.observe(howItWorksSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ── Hero ── */}
      <section ref={heroSectionRef} className="paper-texture relative min-h-screen flex items-center py-20 overflow-hidden">
        <DotGrid sectionRef={heroSectionRef} />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left column */}
            <div>
              <motion.div
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-1.5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              >
                <span className="text-sm font-medium text-amber-700">Web Design for Local Businesses</span>
              </motion.div>

              <motion.h1
                className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-6xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={`h-${i}`}
                    className="inline-block mr-[0.25em] text-stone-900"
                    variants={wordVariant}
                  >
                    {word}
                  </motion.span>
                ))}
                {amberWords.map((word, i) => (
                  <motion.span
                    key={`a-${i}`}
                    className="inline-block mr-[0.25em] text-amber-600"
                    variants={wordVariant}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                className="mt-6 max-w-lg text-lg leading-relaxed text-stone-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              >
                Tell us what you need. We design, build, and launch your site — so you can focus on running your business.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              >
                <MagneticButton
                  href={CALENDLY_URL}
                  className="rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-amber-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
                >
                  Book a Free Call
                </MagneticButton>
                <a
                  href="#what-you-get"
                  className="rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
                >
                  Learn More
                </a>
              </motion.div>
            </div>

            {/* Right column — Animated Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative hidden md:block"
            >
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-amber-100/30 blur-2xl" />

              <div className="relative rounded-2xl bg-white shadow-warm-lg overflow-hidden border border-cream-200">
                {/* Browser top bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-cream-50 border-b border-cream-200">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="ml-3 flex-1 rounded-md bg-cream-100 px-3 py-1">
                    <span className="text-xs text-stone-400">yourbusiness.co.uk</span>
                  </div>
                </div>

                {/* Wireframe content */}
                <motion.div
                  className="p-6 bg-white"
                  variants={wireframeContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Nav bar */}
                  <motion.div className="flex items-center justify-between" variants={wireframeItem}>
                    <div className="h-3 w-20 rounded-full bg-stone-200" />
                    <div className="h-3 w-12 rounded-full bg-amber-200" />
                  </motion.div>

                  {/* Hero block */}
                  <motion.div className="h-28 rounded-xl bg-stone-100 mt-4 relative" variants={wireframeItem}>
                    <div className="absolute bottom-4 left-4 h-3 w-16 rounded-full bg-amber-300" />
                  </motion.div>

                  {/* Three cards */}
                  <motion.div className="flex gap-3 mt-4" variants={wireframeItem}>
                    <div className="h-16 flex-1 rounded-lg bg-stone-100" />
                    <div className="h-16 flex-1 rounded-lg bg-stone-100" />
                    <div className="h-16 flex-1 rounded-lg bg-stone-100" />
                  </motion.div>

                  {/* Text lines */}
                  <motion.div className="space-y-2 mt-4" variants={wireframeItem}>
                    <div className="h-2 w-full rounded-full bg-stone-200" />
                    <div className="h-2 w-[85%] rounded-full bg-stone-200" />
                    <div className="h-2 w-[70%] rounded-full bg-stone-200" />
                    <div className="h-2 w-1/2 rounded-full bg-stone-200" />
                  </motion.div>

                  {/* Footer */}
                  <motion.div className="mt-4" variants={wireframeItem}>
                    <div className="h-3 w-full rounded-full bg-stone-200" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What You Get ── */}
      <section id="what-you-get" className="bg-cream-100" style={{ overflow: "clip" }}>
        <WebsiteBuildScroll />
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" ref={howItWorksSectionRef} className="paper-texture relative py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
              Simple as 1-2-3
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              From first call to live website &mdash; we handle every step so you don&apos;t have to.
            </p>
          </div>

          {/* Timeline */}
          <div className="mx-auto max-w-4xl">
            {/* Desktop: horizontal timeline with content aligned under nodes */}
            <div className="hidden md:block">
              {/* Two-segment line behind all nodes */}
              <div className="relative">
                <div className="pointer-events-none absolute left-[calc(100%/6)] right-[calc(100%/6)] top-8 -translate-y-1/2">
                  {/* Background track */}
                  <div className="h-0.5 w-full bg-cream-200" />
                  {/* First half: 01 → 02 */}
                  <div
                    className="absolute left-0 top-0 h-0.5 w-1/2 bg-amber-600 origin-left transition-transform duration-[1.2s] ease-out"
                    style={{
                      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: "0.3s",
                    }}
                  />
                  {/* Second half: 02 → 03 */}
                  <div
                    className="absolute left-1/2 top-0 h-0.5 w-1/2 bg-amber-600 origin-left transition-transform duration-[1.2s] ease-out"
                    style={{
                      transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: `${NODE_DELAYS[1]}s`,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {howItWorksSteps.map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    {/* Node */}
                    <div
                      className="relative z-10 mb-6"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "scale(1)" : "scale(0.5)",
                        transition: `opacity 0.5s ease-out ${NODE_DELAYS[i]}s, transform 0.5s ease-out ${NODE_DELAYS[i]}s`,
                      }}
                    >
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-warm transition-colors duration-500 ${
                          isVisible ? "border-amber-600" : "border-cream-200"
                        }`}
                        style={{ transitionDelay: `${NODE_DELAYS[i]}s` }}
                      >
                        <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-amber-600">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    {/* Content directly below node */}
                    <div
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(20px)",
                        transition: `opacity 0.5s ease-out ${NODE_DELAYS[i] + 0.3}s, transform 0.5s ease-out ${NODE_DELAYS[i] + 0.3}s`,
                      }}
                    >
                      <div className="mx-auto mb-3 flex justify-center text-amber-600">
                        {step.icon}
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
                        {step.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: vertical timeline */}
            <div className="md:hidden">
              <div className="relative pl-12">
                {/* Vertical track */}
                <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-cream-200" />

                {/* Animated fill line */}
                <div
                  className="absolute left-[19px] top-5 w-0.5 bg-amber-600 origin-top transition-transform duration-[2.5s] ease-out"
                  style={{
                    height: "calc(100% - 40px)",
                    transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                    transitionDelay: "0.3s",
                  }}
                />

                {howItWorksSteps.map((step, i) => (
                  <div
                    key={i}
                    className="relative pb-12 last:pb-0"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-16px)",
                      transition: `opacity 0.5s ease-out ${NODE_DELAYS[i]}s, transform 0.5s ease-out ${NODE_DELAYS[i]}s`,
                    }}
                  >
                    {/* Node on the line */}
                    <div
                      className={`absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white shadow-warm-sm transition-colors duration-500 ${
                        isVisible ? "border-amber-600" : "border-cream-200"
                      }`}
                      style={{ transitionDelay: `${NODE_DELAYS[i]}s` }}
                    >
                      <span className="font-[family-name:var(--font-display)] text-lg font-extrabold text-amber-600">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="rounded-2xl border border-cream-200 bg-white p-5 shadow-warm-sm">
                      <div className="mb-2 text-amber-600">
                        {step.icon}
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Argo ── */}
      <section id="why-argo" className="bg-cream-100">
        <ArgoComparison />
      </section>

      {/* ── Final CTA ── */}
      <section className="relative bg-cream-50 py-24 md:py-36 overflow-hidden">
        {/* Animated orange gradient */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          animate={{
            background: [
              "linear-gradient(120deg, rgba(251,191,36,0.15) 0%, rgba(249,115,22,0.20) 50%, rgba(251,191,36,0.10) 100%)",
              "linear-gradient(120deg, rgba(249,115,22,0.10) 0%, rgba(251,191,36,0.20) 50%, rgba(249,115,22,0.15) 100%)",
              "linear-gradient(120deg, rgba(251,191,36,0.20) 0%, rgba(249,115,22,0.10) 50%, rgba(251,191,36,0.15) 100%)",
              "linear-gradient(120deg, rgba(251,191,36,0.15) 0%, rgba(249,115,22,0.20) 50%, rgba(251,191,36,0.10) 100%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          {/* Amber accent line */}
          <ScrollReveal>
            <div className="mx-auto mb-8 h-0.5 w-12 rounded-full bg-amber-600" />
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
              Ready to get a website that works as hard as you do?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <p className="mx-auto mt-5 max-w-lg text-lg text-stone-600">
              No commitment. No tech jargon. Just a quick chat about what you need.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10">
              <MagneticButton
                href={CALENDLY_URL}
                className="inline-block rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white shadow-warm transition-all duration-300 hover:bg-amber-700 hover:shadow-warm-lg hover:-translate-y-0.5"
              >
                Book a Free Call
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-5 text-sm text-stone-500">
              or email us at{" "}
              <a
                href="mailto:harry@argosystems.co.uk"
                className="font-medium underline transition-colors hover:text-amber-600"
              >
                harry@argosystems.co.uk
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
