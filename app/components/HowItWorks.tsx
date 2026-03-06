"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "You Miss a Call",
    description:
      "You're on a job and can't pick up. No problem — your phone spots the missed call straight away.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5a9 9 0 11-18 0 9 9 0 0118 0zm-7.5-5.25v-.75m0-3v-.75" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "They Get a Text Back in Seconds",
    description:
      "The caller receives a friendly text from your business within a minute. It asks what they need, how urgent it is, and where they are.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You Get the Full Details",
    description:
      "A notification lands on your phone with their name, what they need, and how urgent it is. You call back when you're ready — fully in the picture.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
];

// Node appear times: 01 = 0s, 02 = 1.5s (first line done), 03 = 2.7s (second line done)
const NODE_DELAYS = [0, 1.5, 2.7];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative bg-cream-100 py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Transition line */}
        <p className="mb-14 text-center text-lg font-medium text-stone-500">
          It&apos;s not a virtual receptionist. It&apos;s not an answering service. It&apos;s smarter.
        </p>

        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Simple as 1-2-3
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Here&apos;s how CallCatch turns a missed call into a qualified lead in under 60 seconds.
            You don&apos;t lift a finger.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto max-w-4xl">
          {/* Desktop: horizontal timeline with content aligned under nodes */}
          <div className="hidden md:block">
            {/* Two-segment line behind all nodes — each half synced to the next node */}
            <div className="relative">
              <div className="pointer-events-none absolute left-[calc(100%/6)] right-[calc(100%/6)] top-8 -translate-y-1/2">
                {/* Background track */}
                <div className="h-0.5 w-full bg-cream-200" />
                {/* First half: 01 → 02 */}
                <div
                  className="absolute left-0 top-0 h-0.5 w-1/2 bg-amber-600 origin-left transition-transform duration-[1.2s] ease-out"
                  style={{
                    transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                    transitionDelay: "0.3s",
                  }}
                />
                {/* Second half: 02 → 03 */}
                <div
                  className="absolute left-1/2 top-0 h-0.5 w-1/2 bg-amber-600 origin-left transition-transform duration-[1.2s] ease-out"
                  style={{
                    transform: isVisible ? "scaleX(1)" : "scaleX(0)",
                    transitionDelay: `${NODE_DELAYS[1]}s`,
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Node */}
                  <div
                    className="relative z-10 mb-6"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "scale(1)" : "scale(0.5)",
                      transition: `opacity 0.5s ease-out ${NODE_DELAYS[i]}s, transform 0.5s ease-out ${NODE_DELAYS[i]}s`,
                    }}
                  >
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white shadow-warm transition-colors duration-500 ${
                        isVisible ? "border-amber-600" : "border-cream-200"
                      }`}
                      style={{ transitionDelay: `${NODE_DELAYS[i]}s` }}
                    >
                      <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold text-amber-600">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content directly below node */}
                  <div
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateY(0)" : "translateY(20px)",
                      transition: `opacity 0.5s ease-out ${NODE_DELAYS[i] + 0.3}s, transform 0.5s ease-out ${NODE_DELAYS[i] + 0.3}s`,
                    }}
                  >
                    <div className="mx-auto mb-3 flex justify-center text-amber-600">
                      {step.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
                      {step.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-stone-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden">
            <div className="relative pl-12">
              {/* Vertical track — connects through center of first to last node */}
              <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-cream-200" />

              {/* Animated fill line */}
              <div
                className="absolute left-[19px] top-5 w-0.5 bg-amber-600 origin-top transition-transform duration-[2.5s] ease-out"
                style={{
                  height: "calc(100% - 40px)",
                  transform: isVisible ? "scaleY(1)" : "scaleY(0)",
                  transitionDelay: "0.3s",
                }}
              />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative pb-12 last:pb-0"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateX(0)" : "translateX(-16px)",
                    transition: `opacity 0.5s ease-out ${NODE_DELAYS[i]}s, transform 0.5s ease-out ${NODE_DELAYS[i]}s`,
                  }}
                >
                  {/* Node on the line */}
                  <div
                    className={`absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white shadow-warm-sm transition-colors duration-500 ${
                      isVisible ? "border-amber-600" : "border-cream-200"
                    }`}
                    style={{ transitionDelay: `${NODE_DELAYS[i]}s` }}
                  >
                    <span className="font-[family-name:var(--font-display)] text-lg font-extrabold text-amber-600">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="rounded-2xl border border-cream-200 bg-white p-5 shadow-warm-sm">
                    <div className="mb-2 text-amber-600">
                      {step.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-stone-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Competitive differentiation */}
        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-amber-600/20 bg-amber-50/50 p-6 text-center">
          <p className="text-sm leading-relaxed text-stone-600">
            <strong className="text-stone-900">Unlike a virtual receptionist,</strong> CallCatch
            doesn&apos;t just take a message — it qualifies the lead, finds out what they need,
            and gives you everything you need to call back and close the job. It only kicks in
            when you miss a call — it&apos;s not replacing your phone, it&apos;s catching what falls through.
          </p>
        </div>
      </div>
    </section>
  );
}
