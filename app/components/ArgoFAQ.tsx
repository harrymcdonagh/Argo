"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import StaggerGroup, { staggerItem } from "./StaggerGroup";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What does Argo actually do?",
    answer:
      "We build tools that help local businesses catch work they'd otherwise lose. Our first product, CallCatch, automatically texts back anyone who calls you and doesn't get an answer — it finds out what they need and sends you the details, so you can call them back ready to go.",
  },
  {
    question: "Who is this for?",
    answer:
      "Any local business that relies on phone calls for new work — plumbers, electricians, cleaners, landscapers, locksmiths, roofers, mobile mechanics, salons, dental practices. If you miss calls while you're working, we built this for you.",
  },
  {
    question: "Do I need to be good with tech?",
    answer:
      "Not at all. We handle everything — setup, configuration, testing. You don't need to install anything or learn any software. We just need 15 minutes on a call to learn about your business, then we do the rest.",
  },
  {
    question: "How much does it cost?",
    answer:
      "CallCatch starts at £150 per month. There's a one-time setup fee, and we're currently offering a reduced setup fee for early clients. No hidden costs — your monthly fee covers everything including all texts sent and received.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "You can cancel anytime with 30 days' notice. No lock-in contracts, no cancellation fees. We're confident the system pays for itself — one recovered job per month more than covers the fee.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free 15-minute demo and I'll show you exactly how it works for your business. No commitment, no pressure. If it's a good fit, we can have you live within a week.",
  },
];

export default function ArgoFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="paper-texture relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Common Questions
            </h2>
          </div>
        </ScrollReveal>

        <StaggerGroup className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={staggerItem}>
              <div
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  openIndex === i
                    ? "border-amber-600/30 shadow-warm-lg scale-[1.01]"
                    : "border-cream-200 shadow-warm-sm hover:shadow-warm hover:-translate-y-0.5"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                  className="group flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200"
                >
                  <span
                    className={`pr-4 font-[family-name:var(--font-display)] text-base font-semibold transition-colors duration-200 ${
                      openIndex === i
                        ? "text-amber-700"
                        : "text-stone-900 group-hover:text-amber-600"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      openIndex === i
                        ? "bg-amber-600 text-white rotate-180"
                        : "bg-cream-100 text-stone-500 group-hover:bg-amber-100 group-hover:text-amber-600"
                    }`}
                  >
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
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
