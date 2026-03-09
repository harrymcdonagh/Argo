"use client";

import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function ArgoContact() {
  return (
    <section id="contact" className="relative bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
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
                  <MagneticButton
                    href="https://calendly.com/harry-argosystems/callcatch-demo"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white shadow-warm-lg transition-all duration-300 hover:bg-amber-700 hover:shadow-warm-xl hover:-translate-y-0.5"
                  >
                    Book a Free Demo
                  </MagneticButton>
                  <a
                    href="mailto:harry@argosystems.co.uk?subject=Enquiry%20from%20Argo%20website"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
                  >
                    <svg className="h-5 w-5 text-amber-600" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
