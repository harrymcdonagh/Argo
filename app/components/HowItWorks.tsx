const steps = [
  {
    number: "01",
    title: "You Miss a Call",
    description:
      "You're on a job and can't pick up. No problem — your phone spots the missed call straight away.",
  },
  {
    number: "02",
    title: "They Get a Text Back in Seconds",
    description:
      "The caller receives a friendly text from your business within a minute. It asks what they need, how urgent it is, and where they are.",
  },
  {
    number: "03",
    title: "You Get the Full Details",
    description:
      "A notification lands on your phone with their name, what they need, and how urgent it is. You call back when you're ready — fully in the picture.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="paper-texture relative py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Simple as 1-2-3
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            From missed call to full job details in under 60 seconds.
            You don&apos;t lift a finger.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="pointer-events-none absolute top-10 right-[16.7%] left-[16.7%] hidden h-px bg-gradient-to-r from-cream-200 via-amber-600/30 to-cream-200 md:block" />

          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Large step number */}
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl border border-cream-200 bg-white shadow-warm">
                <span className="font-[family-name:var(--font-display)] text-3xl font-extrabold text-amber-600">
                  {step.number}
                </span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
