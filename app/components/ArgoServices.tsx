import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

export default function ArgoServices() {
  return (
    <section id="services" className="paper-texture py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Services
            </h2>
            <p className="mt-4 text-stone-600">
              Beyond our products, we offer hands-on services for local
              businesses.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl bg-white p-6 shadow-warm-sm md:p-8">
              {/* Icon */}
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900">
                Web Design for Local Businesses
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                Need a professional website? We design, build, and launch it
                &mdash; you just tell us about your business.
              </p>

              {/* Link */}
              <Link
                href="/web-design"
                className="group mt-5 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700"
              >
                Learn more
                <svg
                  aria-hidden="true"
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
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
