export default function FinalCTA() {
  return (
    <section
      id="book-demo"
      className="paper-texture relative overflow-hidden py-24 md:py-36"
    >
      {/* Subtle radial warmth behind the card */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/6 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        {/* The "notice" card */}
        <div className="relative rounded-3xl border border-cream-200 bg-white px-8 py-14 shadow-warm-xl md:px-16 md:py-20">
          {/* Top amber accent bar */}
          <div className="absolute top-0 left-10 right-10 h-1 rounded-b-full bg-gradient-to-r from-amber-600/0 via-amber-600 to-amber-600/0" />

          {/* Corner accents */}
          <div className="absolute top-5 left-5 h-5 w-5 border-t-2 border-l-2 border-amber-600/30 rounded-tl-lg" />
          <div className="absolute top-5 right-5 h-5 w-5 border-t-2 border-r-2 border-amber-600/30 rounded-tr-lg" />
          <div className="absolute bottom-5 left-5 h-5 w-5 border-b-2 border-l-2 border-amber-600/30 rounded-bl-lg" />
          <div className="absolute bottom-5 right-5 h-5 w-5 border-b-2 border-r-2 border-amber-600/30 rounded-br-lg" />

          <div className="text-center">
            {/* Small label */}
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Ready to start?
            </span>

            {/* Decorative line */}
            <div className="mx-auto mt-4 mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-cream-200" />
              <div className="h-1.5 w-1.5 rotate-45 bg-amber-600" />
              <div className="h-px w-12 bg-cream-200" />
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-snug tracking-tight text-stone-900 md:text-5xl md:leading-tight">
              Get Your System Live
              <br />
              in 7 Days
            </h2>

            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-600 md:text-lg">
              Stop losing jobs to missed calls. Book a free 15-minute demo and
              I&apos;ll show you exactly how it works for your business.
            </p>

            <div className="mt-10">
              <a
                href="#book-demo"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-amber-600 px-10 py-4 text-base font-bold text-white shadow-warm-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-warm-xl hover:-translate-y-0.5"
              >
                Book a Free Demo
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex flex-col items-center gap-1">
              <p className="text-sm text-stone-500">
                No commitment. No tech jargon. Just a quick chat.
              </p>
              <p className="text-sm text-stone-500">
                I&apos;m based in Essex — you can call or WhatsApp me directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
