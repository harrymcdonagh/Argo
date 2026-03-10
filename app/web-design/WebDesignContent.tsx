"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";
import StaggerGroup, { staggerItem } from "../components/StaggerGroup";
import MagneticButton from "../components/MagneticButton";

const CALENDLY_URL = "https://calendly.com/harry-argosystems/callcatch-demo";

/* ───── SVG Icons ───── */

function PaintbrushIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-amber-600"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function SmartphoneIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-amber-600"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-amber-600"
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-amber-600"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ───── Data ───── */

const features = [
  {
    icon: <PaintbrushIcon />,
    title: "Custom Design",
    description:
      "A unique site designed around your business, not a cookie-cutter template.",
  },
  {
    icon: <SmartphoneIcon />,
    title: "Mobile Responsive",
    description:
      "Looks great on every device — phones, tablets, and desktops.",
  },
  {
    icon: <ZapIcon />,
    title: "Fast & Reliable",
    description:
      "Built with modern tech for fast load times and 99.9% uptime.",
  },
  {
    icon: <SearchIcon />,
    title: "SEO Ready",
    description:
      "Found on Google from day one with proper structure and metadata.",
  },
];

const steps = [
  {
    number: "1",
    title: "Book a Call",
    description:
      "Tell us about your business, your customers, and what you want from your website.",
  },
  {
    number: "2",
    title: "We Build It",
    description:
      "We design and develop your site, keeping you in the loop with previews along the way.",
  },
  {
    number: "3",
    title: "Go Live",
    description:
      "We launch your site, set up hosting, and make sure everything's running smoothly.",
  },
];

const whyArgo = [
  {
    icon: <CodeIcon />,
    title: "Modern Technology",
    description:
      "Your site is built with the same tech used by top startups — not a drag-and-drop builder.",
  },
  {
    icon: <UserIcon />,
    title: "Founder-Led",
    description:
      "You work directly with the person building your site. No handoffs, no miscommunication.",
  },
  {
    icon: <MapPinIcon />,
    title: "Built for Local Business",
    description:
      "We understand what local businesses need — clear info, easy contact, and a site that converts.",
  },
];

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
  const headlineWords = ["A", "Professional", "Website", "For", "Your", "Business", "—"];
  const amberWords = ["Without", "The", "Hassle"];

  return (
    <main>
      {/* ── Hero ── */}
      <section className="paper-texture min-h-screen flex items-center pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
                className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-5xl"
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
                <br />
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
                className="mt-8 flex flex-wrap items-center gap-3"
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
                  href="#how-it-works"
                  className="rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
                >
                  See How It Works
                </a>
              </motion.div>
            </div>

            {/* Right column — Animated Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative"
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
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-stone-900 md:text-4xl">
              What You Get
            </h2>
          </ScrollReveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="rounded-2xl bg-white p-6 shadow-warm-sm transition-all duration-300 hover:shadow-warm hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  {feature.icon}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="paper-texture py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-stone-900 md:text-4xl">
              How It Works
            </h2>
          </ScrollReveal>

          <div className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
            {/* Connecting line (desktop only) */}
            <div className="absolute top-5 left-0 right-0 hidden md:block">
              <div className="mx-auto" style={{ width: "60%"}}>
                <div className="h-px border-t-2 border-dashed border-amber-200" />
              </div>
            </div>
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-600 text-sm font-bold text-white md:mx-0">
                    {step.number}
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Argo ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-stone-900 md:text-4xl">
              Why Argo
            </h2>
          </ScrollReveal>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {whyArgo.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="rounded-2xl bg-white p-6 shadow-warm-sm transition-all duration-300 hover:shadow-warm hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-lg font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="paper-texture py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900 md:text-3xl">
              Ready to get a website that works as hard as you do?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-8">
              <MagneticButton
                href={CALENDLY_URL}
                className="inline-block rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-warm-sm transition-all hover:bg-amber-700 hover:shadow-warm"
              >
                Book a Free Call
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-4 text-sm text-stone-500">
              or email us at{" "}
              <a
                href="mailto:harry@argosystems.co.uk"
                className="underline transition-colors hover:text-amber-600"
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
