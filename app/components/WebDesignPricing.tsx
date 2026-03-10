"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import StaggerGroup, { staggerItem } from "./StaggerGroup";
import MagneticButton from "./MagneticButton";

const CALENDLY_URL = "https://calendly.com/harry-argosystems/free-web-design-consultation";

const tiers = [
  {
    name: "Starter Site",
    setup: "450",
    standardSetup: "600",
    description:
      "A clean, professional website that makes your business look the part online.",
    features: [
      "5-page site — Home, About, Services, Gallery, Contact",
      "Mobile-first design that works on every device",
      "Google-ready with basic SEO setup",
      "Custom design — no templates, no page builders",
      "Hosted on fast, reliable infrastructure",
      "Live within 2 weeks of kickoff",
    ],
    cta: "Get a Quote",
    featured: false,
  },
  {
    name: "Pro Site",
    setup: "750",
    standardSetup: "1,000",
    description:
      "For businesses that want their website to actively bring in work.",
    features: [
      "Everything in Starter",
      "Custom features tailored to your business",
      "Booking integration built in",
      "Lead capture form with notifications",
      "Priority build and support",
    ],
    cta: "Get a Quote",
    featured: true,
  },
];

export default function WebDesignPricing() {
  return (
    <section id="pricing" className="paper-texture relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-6 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
              Pricing
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              No WordPress, no page builders, no templates. A proper website built
              from scratch — you provide the details, we handle everything else.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mx-auto mb-14 max-w-lg text-center">
            <p className="text-sm text-stone-500">
              Most sites are live within 2 weeks. Setup fee covers design, build,
              copywriting, hosting setup, and launch.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGroup className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {tiers.map((tier) => {
            const card = (
              <div
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-0.5 ${
                  tier.featured
                    ? "border-amber-600/30 ring-2 ring-amber-600/10"
                    : "border-cream-200"
                }`}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-6 right-6 h-px ${tier.featured ? "bg-amber-600" : "border-t border-dashed border-cream-200"}`} />

                {tier.featured && (
                  <div className="absolute -top-3 right-6 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold text-white shadow-warm-sm">
                    Recommended
                  </div>
                )}

                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-stone-600">{tier.description}</p>

                <div className="mt-6 border-t border-dashed border-cream-200 pt-6">
                  {/* Early client price */}
                  <div className="flex items-baseline gap-1">
                    <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-stone-900">
                      from £{tier.setup}
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-sm text-stone-500">
                      One-time setup
                    </span>
                    <span className="ml-2 inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 border border-amber-600/20">
                      25% off — early client
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-xs text-stone-400 line-through">
                      Standard: from £{tier.standardSetup}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm text-stone-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  href={CALENDLY_URL}
                  className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-bold transition-all ${
                    tier.featured
                      ? "bg-amber-600 text-white hover:bg-amber-700 shadow-warm-sm hover:shadow-warm"
                      : "border border-cream-200 text-stone-900 hover:border-stone-400 hover:bg-cream-50"
                  }`}
                >
                  {tier.cta}
                </MagneticButton>
              </div>
            );

            return (
              <motion.div variants={staggerItem} key={tier.name} className="h-full">
                {tier.featured ? (
                  <motion.div
                    className="h-full rounded-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(217,119,6,0)",
                        "0 0 20px 4px rgba(217,119,6,0.15)",
                        "0 0 0 0 rgba(217,119,6,0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {card}
                  </motion.div>
                ) : (
                  card
                )}
              </motion.div>
            );
          })}
        </StaggerGroup>

        {/* Maintenance add-on */}
        <ScrollReveal delay={0.15}>
          <div className="mx-auto mt-8 max-w-4xl">
            <div className="rounded-2xl border border-cream-200 bg-white p-6 shadow-warm-sm md:p-8">
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div>
                  <h4 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900">
                    Ongoing Maintenance
                  </h4>
                  <p className="mt-1 text-sm text-stone-600">
                    Monthly updates, performance monitoring, and minor changes — so your site stays fresh.
                  </p>
                </div>
                <div className="text-center md:text-right flex-shrink-0">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-stone-900">
                    from £50
                  </span>
                  <span className="text-sm text-stone-500">/month</span>
                  <p className="mt-0.5 text-xs text-stone-400">Optional add-on</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Early client note */}
        <ScrollReveal delay={0.2}>
          <div className="mx-auto mt-8 max-w-lg text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-2">
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
              <span className="text-sm font-medium text-amber-800">
                25% off setup for our first 3 web design clients — you get a premium site, we get a case study
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
