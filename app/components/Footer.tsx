export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-950 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <a
              href="#"
              className="font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-white"
            >
              Automate<span className="text-electric-400">Local</span>
            </a>
            <p className="mt-1 text-sm text-slate-muted">
              Essex-based. Built for local businesses.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#how-it-works"
              className="text-sm text-slate-muted transition-colors hover:text-white"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-sm text-slate-muted transition-colors hover:text-white"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-sm text-slate-muted transition-colors hover:text-white"
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-slate-muted">
            &copy; {new Date().getFullYear()} Automate Local. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
