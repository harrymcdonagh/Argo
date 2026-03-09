"use client";

import { useState, useEffect } from "react";

export default function WebDesignNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-warm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-600 shadow-warm-sm">
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold text-white leading-none">
              A
            </span>
          </div>
          <span className="font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight text-stone-900">
            Argo
          </span>
        </a>

        <a
          href="https://calendly.com/harry-argosystems/callcatch-demo"
          className="rounded-lg bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-amber-700 shadow-warm-sm hover:shadow-warm"
        >
          Book a Free Call
        </a>
      </div>
    </nav>
  );
}
