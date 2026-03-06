export default function FinalCTA() {
  return (
    <section
      id="book-demo"
      className="relative overflow-hidden bg-navy-800 py-20 md:py-28"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-electric-500/5 to-transparent" />
      <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-electric-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-5xl">
          Get Your System Live
          <br />
          <span className="bg-gradient-to-r from-electric-400 to-electric-300 bg-clip-text text-transparent">
            in 7 Days
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-text">
          Stop losing leads to missed calls. Book a free 15-minute demo and
          we&apos;ll show you exactly how the system works for your business.
        </p>
        <div className="mt-10">
          <a
            href="#book-demo"
            className="glow-blue inline-flex items-center gap-2 rounded-xl bg-electric-500 px-10 py-4 text-base font-bold text-white transition-all hover:bg-electric-400 hover:shadow-2xl hover:shadow-electric-500/30"
          >
            Book a Free Demo
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
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-muted">
          No commitment. No tech jargon. Just a quick chat about your business.
        </p>
      </div>
    </section>
  );
}
