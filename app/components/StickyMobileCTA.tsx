"use client";

import { useState, useEffect } from "react";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-cream-200 bg-white/95 backdrop-blur-sm px-4 py-3 md:hidden">
      <div className="flex gap-2">
        <a
          href="https://wa.me/447939939885?text=Hi%20Harry%2C%20I%27m%20interested%20in%20CallCatch"
          className="flex-1 rounded-lg bg-amber-600 py-3 text-center text-sm font-bold text-white transition-colors hover:bg-amber-700"
        >
          WhatsApp Us
        </a>
        <a
          href="mailto:harrymcdonagh82@gmail.com?subject=CallCatch%20Demo"
          className="flex-1 rounded-lg border border-cream-200 bg-white py-3 text-center text-sm font-bold text-stone-900 transition-colors hover:bg-cream-50"
        >
          Email Us
        </a>
      </div>
    </div>
  );
}
