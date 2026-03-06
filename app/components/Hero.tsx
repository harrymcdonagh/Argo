export default function Hero() {
  return (
    <section className="noise-bg relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-electric-500/8 blur-3xl" />
      <div className="pointer-events-none absolute top-20 -right-40 h-[400px] w-[400px] rounded-full bg-electric-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Live badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-electric-500/20 bg-electric-500/10 px-4 py-1.5">
            <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-electric-300">
              Live for local businesses in Essex
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            Stop Losing Leads
            <br />
            <span className="bg-gradient-to-r from-electric-400 to-electric-300 bg-clip-text text-transparent">
              While You&apos;re on the Job
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-text md:text-xl">
            Your phone rings while you&apos;re under a sink, up a ladder, or
            with a client. Our AI answers instantly — by text — qualifies the
            lead, and sends you the details. Fully done for you.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#book-demo"
              className="glow-blue inline-flex items-center gap-2 rounded-xl bg-electric-500 px-8 py-4 text-base font-bold text-white transition-all hover:bg-electric-400 hover:shadow-2xl hover:shadow-electric-500/30"
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
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-base font-medium text-slate-text transition-all hover:border-white/20 hover:text-white"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
