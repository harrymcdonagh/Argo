"use client";

import { useEffect, useRef, useState } from "react";

const messages = [
  {
    from: "business",
    text: "Hi! You just tried calling Essex PlumbPro. Sorry we couldn't pick up \u2014 we're probably on a job. Can I grab your name and find out what you need over text?",
    time: "14:32",
  },
  {
    from: "customer",
    text: "Hi, it's Sarah Mitchell. I've got a leaking tap in my kitchen that needs fixing",
    time: "14:33",
  },
  {
    from: "business",
    text: "Thanks Sarah! We deal with leaking taps all the time. Just a couple of quick questions so we can get you sorted. How urgent is this? Is it dripping or actively leaking?",
    time: "14:33",
  },
  {
    from: "customer",
    text: "It's a steady drip, getting worse though. Would like it sorted this week if possible",
    time: "14:34",
  },
  {
    from: "business",
    text: "Got it. And what's your postcode so we can check you're in our service area?",
    time: "14:34",
  },
  {
    from: "customer",
    text: "SS7 1AB",
    time: "14:35",
  },
  {
    from: "business",
    text: "Perfect, you're right in our area. I've passed everything to the team. Someone will call you back within the hour to book a time. Is there anything else you need?",
    time: "14:35",
  },
  {
    from: "customer",
    text: "No that's great, thanks!",
    time: "14:36",
  },
];

const MSG_DELAY = 0.35; // seconds between each message

// Maps: after which message index does each lead field populate?
// Fields populate in card order (name, needs, urgency, area) as the conversation progresses
const FIELD_TRIGGERS = {
  name: 1,     // customer says "it's Sarah Mitchell"
  needs: 1,    // same message: "leaking tap in my kitchen"
  urgency: 3,  // customer says "this week"
  area: 5,     // customer says "SS7 1AB"
} as const;

export default function DemoSMS() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [revealedFields, setRevealedFields] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Set up timers to reveal lead fields in sync with message animations
  useEffect(() => {
    if (!isVisible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    // Stagger fields that share the same trigger message
    const fieldStagger: Record<string, number> = { name: 0, needs: 0.5 };

    for (const [field, msgIndex] of Object.entries(FIELD_TRIGGERS)) {
      const extra = fieldStagger[field] || 0;
      const delayMs = (0.3 + msgIndex * MSG_DELAY + 0.4 + extra) * 1000;
      const timer = setTimeout(() => {
        setRevealedFields((prev) => new Set([...prev, field]));
      }, delayMs);
      timers.push(timer);
    }

    return () => timers.forEach(clearTimeout);
  }, [isVisible]);

  const allRevealed = revealedFields.size === Object.keys(FIELD_TRIGGERS).length;

  return (
    <section id="demo" ref={sectionRef} className="paper-texture relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Live Demo
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Here&apos;s exactly what happens when someone calls Essex PlumbPro
            and nobody picks up. The caller gets a text, answers a few
            questions, and the owner gets the full details.
          </p>
        </div>

        <div className="mx-auto max-w-3xl md:flex md:items-start md:gap-8">
          {/* Phone mockup */}
          <div className="mx-auto max-w-sm md:mx-0">
            <div className="rounded-[2.5rem] border-2 border-stone-900 bg-white p-2 shadow-warm-xl">
              {/* Phone body */}
              <div className="relative rounded-[2rem] bg-cream-50 pb-6">
                {/* Status bar */}
                <div className="flex items-center justify-between px-8 pt-4 pb-3">
                  <span className="text-xs font-medium text-stone-700">14:32</span>
                  <div className="mx-auto h-5 w-20 rounded-full bg-stone-900" />
                  <div className="flex items-center gap-1">
                    <div className="flex gap-0.5">
                      <div className="h-2 w-0.5 rounded-full bg-stone-700" />
                      <div className="h-2.5 w-0.5 rounded-full bg-stone-700" />
                      <div className="h-3 w-0.5 rounded-full bg-stone-700" />
                      <div className="h-3.5 w-0.5 rounded-full bg-stone-400" />
                    </div>
                    <svg className="ml-1 h-3 w-3 text-stone-700" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17 3H3a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                </div>

                {/* Chat header */}
                <div className="flex items-center gap-3 border-b border-cream-200 px-5 pb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                    EP
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">Essex PlumbPro</p>
                    <p className="text-xs text-emerald-600">Text Message</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-3 px-4 py-4" style={{ maxHeight: "480px", overflowY: "auto" }}>
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.95)",
                        transition: `opacity 0.4s ease-out ${0.3 + i * MSG_DELAY}s, transform 0.4s ease-out ${0.3 + i * MSG_DELAY}s`,
                      }}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                          msg.from === "customer"
                            ? "rounded-br-md bg-amber-600 text-white"
                            : "rounded-bl-md bg-white text-stone-900 shadow-warm-sm"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                        <p
                          className={`mt-1 text-right text-[10px] ${
                            msg.from === "customer"
                              ? "text-white/60"
                              : "text-stone-400"
                          }`}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Live-updating lead capture card */}
          <div className="mt-8 md:mt-0 md:flex-1">
            <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-amber-600 md:text-left">
              Meanwhile, you get this:
            </p>

            <div className="rounded-2xl border border-cream-200 bg-white p-5 shadow-warm-lg">
              {/* Notification header */}
              <div className="mb-4 rounded-xl bg-cream-50 p-4">
                <div className="flex items-start gap-3">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-500 ${
                    allRevealed
                      ? "bg-amber-100 text-amber-600"
                      : "bg-stone-100 text-stone-400"
                  }`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">
                      {allRevealed ? "New Lead Captured" : "Lead in Progress"}
                    </p>
                    <p className="mt-0.5 text-xs text-stone-500">
                      {allRevealed ? "Just now \u00b7 via CallCatch" : "Gathering details\u2026"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lead details — each row animates from placeholder to real data */}
              <div className="space-y-2.5">
                <LeadField
                  label="Name"
                  value="Sarah Mitchell"
                  revealed={revealedFields.has("name")}
                />
                <LeadField
                  label="Needs"
                  value="Leaking tap — kitchen"
                  revealed={revealedFields.has("needs")}
                />
                <LeadField
                  label="Urgency"
                  value="This week"
                  revealed={revealedFields.has("urgency")}
                  valueClassName="text-amber-600"
                />
                <LeadField
                  label="Area"
                  value="SS7 1AB"
                  revealed={revealedFields.has("area")}
                />
              </div>

              {/* Status badge — red → green */}
              <div className={`mt-4 rounded-lg px-4 py-2.5 text-center transition-colors duration-500 ${
                allRevealed
                  ? "bg-emerald-100"
                  : "bg-red-50"
              }`}>
                <span className={`text-sm font-semibold transition-colors duration-500 ${
                  allRevealed
                    ? "text-emerald-700"
                    : "text-red-500"
                }`}>
                  {allRevealed ? "Ready to call back" : "Waiting for details\u2026"}
                </span>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-stone-500 md:text-left">
              You finish the job, check your phone, and call them back — fully in the picture.
            </p>
          </div>
        </div>

        {/* Caption */}
        <p className="mt-10 text-center text-sm text-stone-500">
          This exact system works for plumbers, electricians, heating engineers,
          roofers, locksmiths, and any other trade business that takes jobs over the phone.
        </p>
      </div>
    </section>
  );
}

function LeadField({
  label,
  value,
  revealed,
  valueClassName,
}: {
  label: string;
  value: string;
  revealed: boolean;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-cream-50 px-4 py-3">
      <span className="text-xs font-medium text-stone-500">{label}</span>
      <span
        className={`text-sm font-semibold transition-all duration-500 ${
          revealed
            ? valueClassName || "text-stone-900"
            : "text-stone-300"
        }`}
      >
        {revealed ? value : "Gathering\u2026"}
      </span>
    </div>
  );
}
