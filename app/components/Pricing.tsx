const tiers = [
  {
    name: "Starter",
    monthly: "150",
    setup: "400",
    description: "Perfect for sole traders who want to stop losing jobs to missed calls.",
    features: [
      "Missed call text-back within 60 seconds",
      "3-4 questions to find out what they need",
      "You get a notification with full details",
      "Every enquiry saved and logged for you",
      "30 days of monitoring after launch",
      "Live in 5-7 working days",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Standard",
    monthly: "250",
    setup: "900",
    description:
      "For businesses that want follow-up texts and weekly reports too.",
    features: [
      "Everything in Starter",
      "3-touch follow-up text sequence",
      "Booking link sent to the caller",
      "Weekly report of all your leads",
      "Day 7 follow-up for stale enquiries",
      "Priority setup and support",
    ],
    cta: "Get Started",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-cream-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Pricing
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            One missed emergency call costs you &pound;300+. CallCatch pays for itself
            with a single recovered lead.
          </p>
        </div>

        {/* ROI anchoring */}
        <div className="mx-auto mb-14 max-w-lg text-center">
          <p className="text-sm text-stone-500">
            The average emergency plumbing job is worth &pound;200-500.
            How many missed calls are you getting per month?
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border bg-white p-8 shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-0.5 ${
                tier.featured
                  ? "border-amber-600/30 ring-2 ring-amber-600/10"
                  : "border-cream-200"
              }`}
            >
              {/* Dashed top accent for invoice feel */}
              <div className={`absolute top-0 left-6 right-6 h-px ${tier.featured ? "bg-amber-600" : "border-t border-dashed border-cream-200"}`} />

              {tier.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-amber-600 px-3 py-1 text-xs font-bold text-white shadow-warm-sm">
                  Recommended
                </div>
              )}

              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-stone-600">{tier.description}</p>

              <div className="mt-6 border-t border-dashed border-cream-200 pt-6">
                {/* Monthly price leads */}
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-stone-900">
                    &pound;{tier.monthly}
                  </span>
                  <span className="text-sm text-stone-500">/month</span>
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-sm text-stone-500">
                    + &pound;{tier.setup} one-time setup
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-stone-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/447939939885?text=Hi%20Harry%2C%20I%27m%20interested%20in%20the%20CallCatch%20"
                className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-bold transition-all ${
                  tier.featured
                    ? "bg-amber-600 text-white hover:bg-amber-700 shadow-warm-sm hover:shadow-warm"
                    : "border border-cream-200 text-stone-900 hover:border-stone-400 hover:bg-cream-50"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Early client note */}
        <div className="mx-auto mt-8 max-w-lg text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-2">
            <svg
              className="h-4 w-4 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
              />
            </svg>
            <span className="text-sm font-medium text-amber-800">
              Reduced setup fee for early clients — you get the full system,
              we get a case study
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
