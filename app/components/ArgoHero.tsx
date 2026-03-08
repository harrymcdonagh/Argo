export default function ArgoHero() {
  return (
    <section className="paper-texture relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28">
      {/* Subtle warm gradient */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-amber-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-1.5">
            <span className="text-sm font-medium text-amber-700">
              Based in Essex, built for local businesses
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
            Done-for-You Systems{" "}
            <span className="text-amber-600">
              for Local Trade Businesses
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl">
            We build tools that catch the work you&apos;re too busy to chase.
            You focus on the job — we make sure nothing slips through the cracks.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-amber-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
            >
              See Our Products
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
