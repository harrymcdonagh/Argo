export default function ArgoFooter() {
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
              href="/"
              className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-stone-900"
            >
              Argo
            </a>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
              Done-for-you tools for local trade businesses across
              Essex and South East England.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                Products
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="/callcatch" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    CallCatch
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-stone-400">
                Company
              </h4>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#about" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-stone-600 transition-colors hover:text-amber-600">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-200 pt-6 md:flex-row">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Argo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-stone-400">
              Registered in England &amp; Wales
            </p>
            <span className="text-xs text-stone-300">&middot;</span>
            <p className="text-xs text-stone-400">
              Essex-based. Built for local businesses.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
