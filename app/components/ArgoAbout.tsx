export default function ArgoAbout() {
  return (
    <section id="about" className="paper-texture relative py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Who We Are
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Built by Someone Who Gets It
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center gap-8 rounded-2xl border border-cream-200 bg-white p-8 shadow-warm md:flex-row md:items-start md:p-10">
            {/* Photo placeholder */}
            <div className="flex-shrink-0">
              <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200/50 shadow-warm-sm">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-amber-600">
                  HM
                </span>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
                Harry McDonagh
              </h3>
              <p className="mt-1 text-sm font-medium text-amber-600">
                Founder, Argo
              </p>
              <p className="mt-4 leading-relaxed text-stone-600">
                I&apos;m a computer science graduate who loves building
                automations that make businesses run smoother. I started Argo
                because I kept seeing the same problem — local tradespeople
                losing good work to missed calls, slow follow-ups, and
                admin that never gets done. I build the tools to fix that.
              </p>
              <p className="mt-3 leading-relaxed text-stone-600">
                Based in Essex. If you want to chat about what I&apos;m
                building, drop me a message — I&apos;m always happy to talk.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/447939939885"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream-200 px-4 py-2 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:shadow-warm-sm"
                >
                  <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:harrymcdonagh82@gmail.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream-200 px-4 py-2 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:shadow-warm-sm"
                >
                  <svg className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
