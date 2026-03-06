"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What type of businesses is this for?",
    answer:
      "Any local service business that relies on phone calls for new leads. Plumbers, electricians, cleaners, landscapers, locksmiths, roofers, salons, mobile mechanics — if you miss calls while working, this is for you. We customise the qualifier questions and SMS flow for your specific trade.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "7 days from sign-up. We handle everything — setting up the automation, connecting to your phone system, writing the SMS scripts, and testing the full flow. You get a walkthrough before we switch it on, and we're on hand to tweak anything.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just access to your business phone system (or we can set one up for you) and 15 minutes for a setup call where we learn about your business. That's it. We handle all the technology, scripting, and configuration. You don't need to install anything or learn any software.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "You can cancel anytime with 30 days' notice. No lock-in contracts, no cancellation fees. We're confident the system pays for itself — most clients see ROI within the first month from leads they would have otherwise lost.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="noise-bg relative py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-electric-400">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/5 bg-navy-900/60 transition-colors hover:border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-[family-name:var(--font-display)] text-base font-semibold text-white">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-slate-text transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openIndex === i && (
                <div className="border-t border-white/5 px-6 pt-4 pb-5">
                  <p className="leading-relaxed text-slate-text">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
