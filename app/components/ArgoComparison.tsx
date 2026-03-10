"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Provider = "Template Builder" | "Agency" | "Argo";

const providers: Provider[] = ["Template Builder", "Agency", "Argo"];

const comparisonData: Record<Provider, Record<string, string>> = {
  "Template Builder": {
    design: "Generic template",
    price: "~\u00a320/mo + your time",
    timeline: "Weeks of DIY",
    support: "You\u2019re on your own",
    technology: "Drag-and-drop builder",
  },
  Agency: {
    design: "Custom but slow",
    price: "\u00a35,000+",
    timeline: "6\u20138 weeks",
    support: "Account manager",
    technology: "Varies",
  },
  Argo: {
    design: "Custom, built for you",
    price: "Fair, transparent pricing",
    timeline: "5\u20137 working days",
    support: "Direct access to developer",
    technology: "Modern stack (Next.js)",
  },
};

const metricLabels: { key: string; label: string }[] = [
  { key: "design", label: "Design" },
  { key: "price", label: "Price" },
  { key: "timeline", label: "Timeline" },
  { key: "support", label: "Support" },
  { key: "technology", label: "Technology" },
];

const badges = ["Modern Technology", "Founder-Led", "Built for Local Business"];

export default function ArgoComparison() {
  const [selected, setSelected] = useState<Provider>("Argo");

  return (
    <section className="py-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Why Choose Us
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
            How Argo Compares
          </h2>
          <p className="text-stone-600 text-lg">
            See the difference for yourself.
          </p>
        </motion.div>

        {/* ── Mobile: Toggle view ── */}
        <div className="md:hidden">
          {/* Toggle bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <div className="relative inline-flex bg-stone-100 rounded-full p-1 gap-0.5">
              {providers.map((provider) => (
                <button
                  key={provider}
                  onClick={() => setSelected(provider)}
                  className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer ${
                    selected === provider
                      ? "text-white"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: selected === provider ? 1 : 1.04 }}
                    transition={{ duration: 0.15 }}
                  >
                    {provider}
                  </motion.span>
                  {selected === provider && (
                    <motion.div
                      layoutId="toggle-highlight"
                      className="absolute inset-0 bg-amber-600 rounded-full shadow-warm-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Mobile metric rows */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl shadow-warm border border-cream-200 overflow-hidden mb-8"
          >
            {metricLabels.map(({ key, label }, index) => (
              <div
                key={key}
                className={`flex flex-col px-5 py-4 ${
                  index !== metricLabels.length - 1
                    ? "border-b border-cream-100"
                    : ""
                } ${index % 2 === 0 ? "bg-cream-50/50" : "bg-white"}`}
              >
                <span className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-1">
                  {label}
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`${selected}-${key}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`text-base font-medium ${
                      selected === "Argo" ? "text-amber-600" : "text-stone-600"
                    }`}
                  >
                    {comparisonData[selected][key]}
                  </motion.span>
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Desktop: Full table ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="hidden md:block bg-white rounded-2xl shadow-warm border border-cream-200 overflow-hidden mb-8"
        >
          {/* Header row */}
          <div className="grid grid-cols-4 px-6 py-4 border-b border-cream-200 bg-cream-50/80">
            <div />
            {providers.map((provider) => (
              <div
                key={provider}
                className={`text-center text-base font-semibold ${
                  provider === "Argo" ? "text-amber-600" : "text-stone-700"
                }`}
              >
                {provider}
              </div>
            ))}
          </div>

          {/* Metric rows */}
          {metricLabels.map(({ key, label }, index) => (
            <div
              key={key}
              className={`grid grid-cols-4 items-center px-6 py-4 ${
                index !== metricLabels.length - 1
                  ? "border-b border-cream-100"
                  : ""
              } ${index % 2 === 0 ? "bg-cream-50/50" : "bg-white"}`}
            >
              <span className="text-sm font-semibold text-stone-500 uppercase tracking-wide">
                {label}
              </span>
              {providers.map((provider) => (
                <span
                  key={provider}
                  className={`text-center text-sm font-medium ${
                    provider === "Argo" ? "text-amber-600" : "text-stone-600"
                  }`}
                >
                  {comparisonData[provider][key]}
                </span>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Proof-point badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full text-sm font-medium bg-amber-50 text-amber-600"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
