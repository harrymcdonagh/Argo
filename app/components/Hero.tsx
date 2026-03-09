export default function Hero() {
  return (
    <section className="paper-texture relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28">
      {/* Subtle warm gradient */}
      <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-[300px] w-[300px] rounded-full bg-amber-600/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Copy */}
          <div>
            {/* Live badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-100 px-4 py-1.5">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Live for local businesses in Essex
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              Never Miss a Customer{" "}
              <span className="text-amber-600">Because You Were Busy</span>
            </h1>

            {/* Punchy tagline */}
            <p className="mt-4 text-xl font-medium text-stone-700">
              CallCatch texts your missed callers back in under 10 seconds — so you never
              lose a job while you&apos;re on one.
            </p>

            <p className="mt-4 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg">
              Your phone rings while you&apos;re under a sink, up a ladder, or with a
              client. You can&apos;t answer — but <strong>CallCatch</strong> texts them
              back within seconds, finds out what they need, and sends you the details.
              Fully done for you.
            </p>

            {/* Mobile-only notification card (compact) */}
            <div className="mt-6 md:hidden">
              <div className="rounded-2xl border border-cream-200 bg-white p-4 shadow-warm">
                <div className="flex items-start gap-3 rounded-xl bg-cream-50 p-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-stone-900">
                      New Enquiry Received
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      <span className="text-xs text-stone-500">Sarah Mitchell</span>
                      <span className="text-xs text-stone-500">
                        Leaking tap — kitchen
                      </span>
                      <span className="text-xs font-medium text-amber-600">
                        This week
                      </span>
                      <span className="text-xs text-stone-500">SS7 1AB</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 rounded-lg bg-emerald-100 px-3 py-1.5 text-center">
                  <span className="text-xs font-semibold text-emerald-700">
                    Ready to call back
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://calendly.com/harry-argosystems/callcatch-demo"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-amber-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
              >
                Book a Free Demo
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
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
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right: Visual element — lead notification card (desktop only) */}
          <div className="relative mx-auto hidden w-full max-w-xs md:block md:mx-0 md:ml-auto">
            <div className="rounded-3xl border border-cream-200 bg-white p-5 shadow-warm-xl transition-all duration-500 hover:shadow-warm-xl hover:-translate-y-1">
              {/* Simulated notification */}
              <div className="mb-4 rounded-xl bg-cream-50 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">
                      New Enquiry Received
                    </p>
                    <p className="mt-0.5 text-xs text-stone-500">
                      Just now &middot; via CallCatch
                    </p>
                  </div>
                </div>
              </div>

              {/* Lead details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg bg-cream-50 px-4 py-3">
                  <span className="text-xs font-medium text-stone-500">Name</span>
                  <span className="text-sm font-semibold text-stone-900">
                    Sarah Mitchell
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-cream-50 px-4 py-3">
                  <span className="text-xs font-medium text-stone-500">Needs</span>
                  <span className="text-sm font-semibold text-stone-900">
                    Leaking tap — kitchen
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-cream-50 px-4 py-3">
                  <span className="text-xs font-medium text-stone-500">Urgency</span>
                  <span className="text-sm font-semibold text-amber-600">This week</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-cream-50 px-4 py-3">
                  <span className="text-xs font-medium text-stone-500">Area</span>
                  <span className="text-sm font-semibold text-stone-900">SS7 1AB</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-emerald-100 px-4 py-2.5 text-center">
                <span className="text-sm font-semibold text-emerald-700">
                  Ready to call back
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-3 -right-3 h-16 w-16 rounded-2xl border border-amber-500/20 bg-amber-50"
              style={{ zIndex: -1 }}
            />
            <div
              className="absolute -bottom-3 -left-3 h-12 w-12 rounded-xl border border-cream-200 bg-cream-100"
              style={{ zIndex: -1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
