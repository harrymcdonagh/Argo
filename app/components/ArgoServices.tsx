"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import StaggerGroup, { staggerItem } from "./StaggerGroup";
import Link from "next/link";

export default function ArgoServices() {
  return (
    <section id="services" className="paper-texture py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Services That Grow Your Business
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Beyond our products, we offer hands-on services for local
              businesses.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 — Web Design (active) */}
          <motion.div variants={staggerItem}>
            <div className="rounded-2xl border border-cream-200 bg-white p-6 shadow-warm-sm md:p-8 h-full">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100 px-3 py-1">
                <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700">
                  Available Now
                </span>
              </div>

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
                  />
                </svg>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
                Web Design for Local Businesses
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-600">
                Need a professional website? We design, build, and launch it
                &mdash; you just tell us about your business.
              </p>

              <Link
                href="/web-design"
                className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
              >
                Learn more
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Card 2 — SEO & Marketing (coming soon) */}
          <motion.div variants={staggerItem}>
            <div className="rounded-2xl border border-cream-200 bg-white/60 p-6 opacity-70 hover:opacity-85 transition-all duration-300 hover:-translate-y-0.5 h-full">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-stone-300/30 bg-cream-100 px-3 py-1">
                <span className="text-xs font-semibold text-stone-400">
                  Coming Soon
                </span>
              </div>

              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cream-100 text-stone-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-400">
                SEO &amp; Marketing
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-400">
                Get found online with search optimisation, Google Business
                Profile setup, and local marketing.
              </p>
            </div>
          </motion.div>

          {/* Card 3 — More services coming */}
          <motion.div variants={staggerItem}>
            <div className="rounded-2xl border border-dashed border-cream-200 bg-cream-50/50 p-6 h-full flex flex-col items-center justify-center text-center">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-700">
                More Services Coming
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-500">
                We&apos;re building more services for local businesses — including SEO, marketing, and social media management.
              </p>
              <a
                href="mailto:harry@argosystems.co.uk?subject=Keep%20me%20updated%20on%20new%20services"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
              >
                Want to be first to know?
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </StaggerGroup>
      </div>
    </section>
  );
}
