"use client";

const messages = [
  {
    from: "business",
    text: "Hi! You just tried calling Essex PlumbPro. Sorry we couldn't pick up \u2014 we're probably on a job. Can we help you over text? What do you need done?",
    time: "14:32",
    delay: "sms-delay-1",
  },
  {
    from: "customer",
    text: "Hi yeah, I've got a leaking tap in my kitchen that needs fixing",
    time: "14:33",
    delay: "sms-delay-2",
  },
  {
    from: "business",
    text: "No problem \u2014 we deal with leaking taps all the time. Just a couple of quick questions so we can get you sorted. How urgent is this? Is it dripping or actively leaking?",
    time: "14:33",
    delay: "sms-delay-3",
  },
  {
    from: "customer",
    text: "It's a steady drip, getting worse though. Would like it sorted this week if possible",
    time: "14:34",
    delay: "sms-delay-4",
  },
  {
    from: "business",
    text: "Got it. And what's your postcode so we can check you're in our service area?",
    time: "14:34",
    delay: "sms-delay-5",
  },
  {
    from: "customer",
    text: "SS7 1AB",
    time: "14:35",
    delay: "sms-delay-6",
  },
  {
    from: "business",
    text: "You're right in our area. Thanks for the details \u2014 I've passed everything to the team. Someone will call you back within the hour to book a time. Is there anything else you need?",
    time: "14:35",
    delay: "sms-delay-7",
  },
  {
    from: "customer",
    text: "No that's great, thanks!",
    time: "14:36",
    delay: "sms-delay-8",
  },
];

export default function DemoSMS() {
  return (
    <section id="demo" className="relative bg-cream-100 py-20 md:py-28">
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

        {/* Phone mockup */}
        <div className="mx-auto max-w-sm">
          <div className="rounded-[2.5rem] border border-cream-200 bg-white p-2 shadow-warm-xl">
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
                    className={`sms-bubble ${msg.delay} flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}
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

          {/* Caption below phone */}
          <p className="mt-6 text-center text-sm text-stone-500">
            This exact system can be adapted for any local business —
            electricians, cleaners, landscapers, salons, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
