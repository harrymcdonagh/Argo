"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { PortfolioShowcase } from "./WebDesignPortfolio";

export default function ArgoServices() {
  return (
    <section id="work" className="paper-texture py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
              My Work
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Sites I&apos;ve Built
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Real websites I&apos;ve designed and built for friends &mdash; no
              templates, no page builders.
            </p>
          </div>
        </ScrollReveal>

        <PortfolioShowcase />

        <ScrollReveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/web-design"
              className="group inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
            >
              How I build them
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
        </ScrollReveal>
      </div>
    </section>
  );
}
