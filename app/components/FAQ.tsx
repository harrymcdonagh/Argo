"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import StaggerGroup from "./StaggerGroup";
import { staggerItem } from "./StaggerGroup";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What type of businesses is this for?",
    answer:
      "Any local service business that relies on phone calls for new work. Plumbers, electricians, cleaners, landscapers, locksmiths, roofers, mobile mechanics — if you miss calls while working, this is built for you. We tailor the text messages and questions for your specific trade.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "5-7 working days from sign-up. We handle everything — connecting to your phone system, writing the text messages, and testing the full flow. You get a walkthrough before we switch it on, and we're on hand to tweak anything.",
  },
  {
    question: "Does it work with my existing phone number?",
    answer:
      "Yes. CallCatch connects to your current business number — you don't need to change it or get a new one. If you don't have a dedicated business number yet, we can set one up for you as part of the setup.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Just access to your business phone number (or we can set one up for you) and 15 minutes for a quick call where we learn about your business. That's it. We handle all the setup and configuration. You don't need to install anything or learn any software.",
  },
  {
    question: "What if the caller doesn't reply to the text?",
    answer:
      "You still get notified that you missed a call from that number, so you can call them back yourself. On the Standard plan, we also send follow-up texts to re-engage them. Most people do reply though — the text is friendly, relevant, and arrives within seconds of their call.",
  },
  {
    question: "How much does it cost per text?",
    answer:
      "Nothing extra. Your monthly fee covers everything — all texts sent, all replies received, all notifications to you. There are no per-text charges or hidden usage fees. The price you see is the price you pay.",
  },
  {
    question: "Can I see the conversations?",
    answer:
      "Yes. Every conversation is logged and you can review the full text exchange at any time. You get a summary notification for each enquiry, and access to the complete history whenever you need it.",
  },
  {
    question: "What if I want to cancel?",
    answer:
      "You can cancel anytime with 30 days' notice. No lock-in contracts, no cancellation fees. We're confident the system pays for itself — one recovered emergency job per month more than covers the fee.",
  },
];

export default function FAQ() {
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
            <motion.div variants={staggerItem} key={i}>
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
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
