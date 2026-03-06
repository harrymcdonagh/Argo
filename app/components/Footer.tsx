export default function Footer() {
  return (
    <footer className="paper-texture relative">
      {/* Amber accent line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-8">
        {/* Main footer content */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="#"
              className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-stone-900"
            >
              Automate<span className="text-amber-600">Local</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              Done-for-you missed call automation for local businesses across Essex and South East England.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                Navigate
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#how-it-works" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#demo" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    Live Demo
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                Get Started
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#book-demo" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    Book a Demo
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    View Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-200 pt-6 md:flex-row">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Automate Local. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Essex-based. Built for local businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
