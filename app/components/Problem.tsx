const problems = [
  {
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5a9 9 0 11-18 0 9 9 0 0118 0zm-7.5-5.25v-.75m0-3v-.75" />
      </svg>
    ),
    title: "Missing Calls While You Work",
    description:
      "You're with a customer, on a job, or driving. The phone rings and you can't answer. That caller moves on to the next business on Google.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Slow Response Loses the Job",
    description:
      "Even if you call back in an hour, the customer has already booked someone else. The first business to respond almost always gets the job.",
  },
  {
    icon: (
      <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "The Stress of Always Being \"On\"",
    description:
      "Constantly checking your phone between jobs, feeling guilty when you see missed calls, wondering how much work you've lost this week. It never switches off.",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            The Problem
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Sound Familiar?
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Every missed call is money walking out the door. Here&apos;s what&apos;s
            costing you jobs right now.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group rounded-2xl border-l-4 border-l-red-500 bg-white p-7 shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-0.5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-red-50 p-3 text-red-600">
                {problem.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
                {problem.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition line to next section */}
        <p className="mt-14 text-center text-lg font-medium text-stone-500">
          So what happens when you can&apos;t pick up? Let us show you.
        </p>
      </div>
    </section>
  );
}
