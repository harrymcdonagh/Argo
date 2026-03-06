"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What type of businesses is this for?",
    answer:
      "Any local service business that relies on phone calls for new work. Plumbers, electricians, cleaners, landscapers, locksmiths, roofers, salons, mobile mechanics \u2014 if you miss calls while working, this is built for you. We tailor the text messages and questions for your specific trade.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "5-7 working days from sign-up. We handle everything \u2014 connecting to your phone system, writing the text messages, and testing the full flow. You get a walkthrough before we switch it on, and we're on hand to tweak anything.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just access to your business phone number (or we can set one up for you) and 15 minutes for a quick call where we learn about your business. That's it. We handle all the setup and configuration. You don't need to install anything or learn any software.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "You can cancel anytime with 30 days' notice. No lock-in contracts, no cancellation fees. We're confident the system pays for itself \u2014 one recovered emergency job per month more than covers the fee.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border bg-white transition-all duration-300 ${
                openIndex === i
                  ? "border-amber-600/30 shadow-warm-lg scale-[1.01]"
                  : "border-cream-200 shadow-warm-sm hover:shadow-warm hover:-translate-y-0.5"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200"
              >
                <span className={`pr-4 font-[family-name:var(--font-display)] text-base font-semibold transition-colors duration-200 ${
                  openIndex === i ? "text-amber-700" : "text-stone-900 group-hover:text-amber-600"
                }`}>
                  {faq.question}
                </span>
                <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  openIndex === i
                    ? "bg-amber-600 text-white rotate-180"
                    : "bg-cream-100 text-stone-500 group-hover:bg-amber-100 group-hover:text-amber-600"
                }`}>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </button>
              {openIndex === i && (
                <div className="accordion-content border-t border-cream-200 px-6 pt-4 pb-5">
                  <p className="leading-relaxed text-stone-600">
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
