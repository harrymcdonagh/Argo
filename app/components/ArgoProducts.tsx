export default function ArgoProducts() {
  return (
    <section id="products" className="relative bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Our Products
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Tools That Work While You Do
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            We build done-for-you automation tools for local trade businesses.
            No tech skills needed — we handle everything.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* CallCatch — active product */}
          <a
            href="/callcatch"
            className="group relative rounded-2xl border border-cream-200 bg-white p-8 shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-1"
          >
            {/* Live badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100 px-3 py-1">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700">Live Now</span>
            </div>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600 transition-colors group-hover:bg-amber-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
              CallCatch
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              Missed call recovery. Texts your callers back in under 60 seconds,
              finds out what they need, and sends you the details.
            </p>

            <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors group-hover:text-amber-700">
              Learn more
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </a>

          {/* Coming soon card 1 */}
          <div className="relative rounded-2xl border border-cream-200 bg-white/60 p-8 opacity-60">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300/30 bg-cream-100 px-3 py-1">
              <span className="text-xs font-semibold text-stone-400">Coming Soon</span>
            </div>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 text-stone-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-400">
              In Development
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">
              More automation tools for local businesses. We&apos;re building
              the next one now.
            </p>
          </div>

          {/* Coming soon card 2 */}
          <div className="relative rounded-2xl border border-cream-200 bg-white/60 p-8 opacity-60">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300/30 bg-cream-100 px-3 py-1">
              <span className="text-xs font-semibold text-stone-400">Coming Soon</span>
            </div>

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cream-100 text-stone-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>

            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-400">
              In Development
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">
              Another tool to help your business run smoother.
              Stay tuned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
