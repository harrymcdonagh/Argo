const tiers = [
  {
    name: "Starter",
    setup: "400",
    monthly: "150",
    description: "Perfect for sole traders who want to stop missing leads.",
    features: [
      "Missed call text-back",
      "AI lead qualifier (3 questions)",
      "Owner notification per lead",
      "CRM lead logging",
      "Setup & launch in 7 days",
      "Email support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Standard",
    setup: "900",
    monthly: "250",
    description:
      "For growing businesses that want full follow-up and reporting.",
    features: [
      "Everything in Starter",
      "Automated follow-up sequences",
      "Weekly lead & performance reports",
      "Multi-step SMS nurturing",
      "Priority setup & onboarding",
      "Priority support",
    ],
    cta: "Get Started",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-navy-800 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-electric-400">
            Pricing
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-text">
            One-time setup fee, then a flat monthly rate. No hidden costs.
            Cancel anytime.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                tier.featured
                  ? "glow-blue border-electric-500/30 bg-navy-900"
                  : "border-white/5 bg-navy-900/60"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-electric-500 px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-slate-text">{tier.description}</p>

              <div className="mt-6 border-t border-white/5 pt-6">
                <div className="flex items-baseline gap-1">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold text-white">
                    &pound;{tier.setup}
                  </span>
                  <span className="text-sm text-slate-text">setup</span>
                </div>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-lg font-semibold text-white/80">
                    + &pound;{tier.monthly}
                  </span>
                  <span className="text-sm text-slate-text">/month</span>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric-400"
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
                    <span className="text-sm text-slate-text">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#book-demo"
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-bold transition-all ${
                  tier.featured
                    ? "bg-electric-500 text-white hover:bg-electric-400 hover:shadow-lg hover:shadow-electric-500/25"
                    : "border border-white/10 text-white hover:border-white/20 hover:bg-white/5"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Pilot pricing note */}
        <div className="mx-auto mt-8 max-w-md text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2">
            <svg
              className="h-4 w-4 text-amber-400"
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
            <span className="text-sm font-medium text-amber-300">
              Pilot pricing available for our first 5 clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
