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

          {/* Card 3 — Social Media Management (coming soon) */}
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
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                  />
                </svg>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-400">
                Social Media Management
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-stone-400">
                Consistent, professional social media content that keeps your
                business visible to local customers.
              </p>
            </div>
          </motion.div>
        </StaggerGroup>
      </div>
    </section>
  );
}
