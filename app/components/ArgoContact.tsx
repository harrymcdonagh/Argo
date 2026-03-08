export default function ArgoContact() {
  return (
    <section id="contact" className="relative bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl">
          <div className="relative rounded-3xl border border-cream-200 bg-white px-8 py-14 shadow-warm-xl md:px-16 md:py-20">
            {/* Top amber accent bar */}
            <div className="absolute top-0 left-10 right-10 h-1 rounded-b-full bg-gradient-to-r from-amber-600/0 via-amber-600 to-amber-600/0" />

            {/* Corner accents */}
            <div className="absolute top-5 left-5 h-5 w-5 border-t-2 border-l-2 border-amber-600/30 rounded-tl-lg" />
            <div className="absolute top-5 right-5 h-5 w-5 border-t-2 border-r-2 border-amber-600/30 rounded-tr-lg" />
            <div className="absolute bottom-5 left-5 h-5 w-5 border-b-2 border-l-2 border-amber-600/30 rounded-bl-lg" />
            <div className="absolute bottom-5 right-5 h-5 w-5 border-b-2 border-r-2 border-amber-600/30 rounded-br-lg" />

            <div className="text-center">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Get in Touch
              </span>

              <div className="mx-auto mt-4 mb-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-cream-200" />
                <div className="h-1.5 w-1.5 rotate-45 bg-amber-600" />
                <div className="h-px w-12 bg-cream-200" />
              </div>

              <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-snug tracking-tight text-stone-900 md:text-4xl">
                Want to Know More?
              </h2>

              <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-600 md:text-lg">
                Whether you&apos;re curious about CallCatch or want to talk about
                something custom for your business — drop me a message.
                No pressure, no sales pitch.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/447939939885?text=Hi%20Harry%2C%20I%20found%20Argo%20and%20wanted%20to%20ask%20about%20your%20products"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white shadow-warm-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-warm-xl hover:-translate-y-0.5"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Me
                </a>
                <a
                  href="mailto:harry@argosystems.co.uk?subject=Enquiry%20from%20Argo%20website"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
                >
                  <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send an Email
                </a>
              </div>

              <div className="mt-6 flex flex-col items-center gap-2">
                <a href="tel:07939939885" className="text-sm text-stone-500 hover:text-stone-700 transition-colors">
                  Or call directly: 07939 939 885
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
