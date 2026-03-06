const steps = [
  {
    number: "01",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
      </svg>
    ),
    title: "Missed Call Detected Instantly",
    description:
      "The moment a call goes unanswered, our system detects it in real time. No delay, no waiting. The lead capture starts immediately.",
  },
  {
    number: "02",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Caller Gets SMS + Qualifier Questions",
    description:
      "The caller receives a friendly text within seconds. Our AI asks 3 simple questions to understand what they need, their timeline, and their location.",
  },
  {
    number: "03",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    title: "You Get the Full Lead Summary",
    description:
      "A notification lands on your phone with the caller's name, what they need, and how urgent it is. You decide whether to call back — fully informed.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="noise-bg relative py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-electric-400">
            Simple as 1-2-3
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-text">
            From missed call to qualified lead in under 60 seconds.
            You don&apos;t lift a finger.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="pointer-events-none absolute top-16 right-[16.7%] left-[16.7%] hidden h-px bg-gradient-to-r from-electric-500/0 via-electric-500/30 to-electric-500/0 md:block" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Step circle */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-electric-500/20 bg-navy-800 text-electric-400 shadow-lg shadow-electric-500/5">
                {step.icon}
              </div>

              {/* Step number */}
              <span className="mb-2 block font-[family-name:var(--font-display)] text-sm font-bold text-electric-500">
                Step {step.number}
              </span>

              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-text">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
