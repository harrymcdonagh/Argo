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
    title: "Modern Technology",
    description:
      "Your site is built with the same tech used by top startups — not a drag-and-drop builder.",
  },
  {
    title: "Founder-Led",
    description:
      "You work directly with the person building your site. No handoffs, no miscommunication.",
  },
  {
    title: "Built for Local Business",
    description:
      "We understand what local businesses need — clear info, easy contact, and a site that converts.",
  },
];

/* ───── Component ───── */

export default function WebDesignContent() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="paper-texture pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <ScrollReveal>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-stone-900">
                A Professional Website For Your Business —{" "}
              </span>
              <span className="text-amber-600">Without The Hassle</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
              Tell us what you need. We design, build, and launch your site — so
              you can focus on running your business.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <MagneticButton
                href={CALENDLY_URL}
                className="inline-block rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-warm-sm transition-all hover:bg-amber-700 hover:shadow-warm"
              >
                Book a Free Call
              </MagneticButton>
            </div>
          </ScrollReveal>
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
                className="rounded-2xl bg-white p-6 shadow-warm-sm"
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
      <section className="paper-texture py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-bold text-stone-900 md:text-4xl">
              How It Works
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
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
                className="rounded-2xl bg-white p-6 shadow-warm-sm"
              >
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900">
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
