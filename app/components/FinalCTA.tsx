export default function FinalCTA() {
  return (
    <section
      id="book-demo"
      className="relative overflow-hidden bg-cream-100 py-24 md:py-36"
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

            {/* Founder mini-intro */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">
              <img
                src="/profile.jpg"
                alt="Harry McDonagh"
                className="h-14 w-14 rounded-full border border-amber-200/50 object-cover"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-stone-900">Harry McDonagh</p>
                <p className="text-xs text-stone-500">Founder, Argo &middot; Based in Essex</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://calendly.com/harry-argosystems/callcatch-demo"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-600 px-10 py-4 text-base font-bold text-white shadow-warm-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-warm-xl hover:-translate-y-0.5"
              >
                Book a Free Demo
              </a>
              <a
                href="mailto:harry@argosystems.co.uk?subject=CallCatch%20Demo%20Request"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
              >
                <svg className="h-5 w-5 text-amber-600" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Send an Email
              </a>
            </div>

            {/* Phone number */}
            <div className="mt-6">
              <a href="tel:07939939885" className="text-sm text-stone-500 transition-colors hover:text-stone-700">
                Or call directly: 07939 939 885
              </a>
            </div>

            {/* Trust line */}
            <p className="mt-4 text-sm text-stone-500">
              No commitment. No tech jargon. Just a quick chat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
