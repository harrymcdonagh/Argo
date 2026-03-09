"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const notificationFields: { label: string; value: string; highlight?: boolean }[] = [
  { label: "Name", value: "Sarah Mitchell" },
  { label: "Needs", value: "Leaking tap \u2014 kitchen" },
  { label: "Urgency", value: "This week", highlight: true },
  { label: "Area", value: "SS7 1AB" },
];

export default function ArgoProducts() {
  const demoRef = useRef(null);
  const demoInView = useInView(demoRef, { once: true, amount: 0.3 });

  return (
    <section id="products" className="relative bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
              Our Products
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Tools That Work While You Do
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              We build done-for-you tools for local businesses.
              No tech skills needed — we handle everything.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-5">
          {/* CallCatch — featured card (left ~65%) */}
          <ScrollReveal className="md:col-span-3">
            <div className="rounded-2xl border-l-4 border-l-amber-600 border border-cream-200 bg-white p-8 md:p-10 shadow-warm-lg h-full">
              {/* Top row: badge + icon */}
              <div className="flex items-start justify-between mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100 px-3 py-1">
                  <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-700">Live Now</span>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
              </div>

              {/* Title + description */}
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900">
                CallCatch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Missed call recovery. Texts your callers back in under 10 seconds,
                finds out what they need, and sends you the details.
              </p>

              {/* Mini notification demo */}
              <div
                ref={demoRef}
                className="mt-6 rounded-xl border border-cream-200 bg-cream-50 p-4"
              >
                {/* Notification header */}
                <div className="flex items-center gap-2 mb-3">
                  <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                  <div>
                    <span className="text-sm font-semibold text-stone-900">New Enquiry Received</span>
                    <span className="ml-2 text-xs text-stone-400">Just now · via CallCatch</span>
                  </div>
                </div>

                {/* Animated field rows */}
                <div className="space-y-2">
                  {notificationFields.map((field, i) => (
                    <motion.div
                      key={field.label}
                      initial={{ opacity: 0 }}
                      animate={demoInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.4, delay: i * 0.4 + 0.3, ease: "easeOut" as const }}
                      className="flex items-center justify-between rounded-lg bg-white px-3 py-2"
                    >
                      <span className="text-xs text-stone-500">{field.label}</span>
                      <motion.span
                        initial={{ opacity: 0, x: 8 }}
                        animate={demoInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: i * 0.4 + 0.5, ease: "easeOut" as const }}
                        className={`text-sm font-semibold ${
                          field.highlight ? "text-amber-600" : "text-stone-900"
                        }`}
                      >
                        {field.value}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

                {/* Ready to call back status bar */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={demoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 2.0, ease: "easeOut" as const }}
                  className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-emerald-100 px-3 py-2"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  <span className="text-xs font-semibold text-emerald-700">Ready to call back</span>
                </motion.div>
              </div>

              {/* Bottom row: links */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="/callcatch"
                  className="group inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <MagneticButton
                  href="https://calendly.com/harry-argosystems/callcatch-demo"
                  className="inline-flex items-center rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700"
                >
                  Book a Free Demo
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>

          {/* Coming Soon cards (right ~35%) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Coming soon card 1 */}
            <ScrollReveal delay={0.2} className="flex-1">
              <div className="rounded-2xl border border-cream-200 bg-white/60 p-6 opacity-70 hover:opacity-85 transition-all duration-300 hover:-translate-y-0.5 h-full">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-300/30 bg-cream-100 px-3 py-1">
                  <span className="text-xs font-semibold text-stone-400">Coming Soon</span>
                </div>

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cream-100 text-stone-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-400">
                  In Development
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-400">
                  More tools for local businesses. We&apos;re building
                  the next one now.
                </p>
              </div>
            </ScrollReveal>

            {/* Coming soon card 2 */}
            <ScrollReveal delay={0.35} className="flex-1">
              <div className="rounded-2xl border border-cream-200 bg-white/60 p-6 opacity-70 hover:opacity-85 transition-all duration-300 hover:-translate-y-0.5 h-full">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-300/30 bg-cream-100 px-3 py-1">
                  <span className="text-xs font-semibold text-stone-400">Coming Soon</span>
                </div>

                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cream-100 text-stone-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>

                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-400">
                  In Development
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-400">
                  Another tool to help your business run smoother.
                  Stay tuned.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
