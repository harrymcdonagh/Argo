"use client";

import { useState, useEffect } from "react";

export default function ArgoNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Products", href: "/#products" },
    { label: "About", href: "/#about" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-warm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 shadow-warm-sm">
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold text-white leading-none">
              A
            </span>
          </div>
          <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-stone-900">
            Argo
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-amber-700 shadow-warm-sm hover:shadow-warm"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span
            className={`h-0.5 w-6 bg-stone-900 transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-stone-900 transition-all ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-stone-900 transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-cream-200 bg-white md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-600 transition-colors hover:bg-cream-100 hover:text-stone-900"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-lg bg-amber-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-amber-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
