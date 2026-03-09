"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useCallback } from "react";
import MagneticButton from "./MagneticButton";

/* ── copy ── */
const headlineWords = [
  "Making",
  "Sure",
  "Your",
  "Business",
  "Runs",
  "Smoothly",
];
const amberWords = ["Even", "When", "You\u2019re", "Busy"];

/* ── animation variants ── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ── stat card data ── */
const statCards = [
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    value: "8s",
    label: "Avg Response",
    position: "top-[18%] left-[8%] md:left-[10%]",
    parallax: 0.03,
    delay: 0.8,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    value: "94%",
    label: "Recovery Rate",
    position: "top-[14%] right-[6%] md:right-[10%]",
    parallax: 0.04,
    delay: 1.0,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    value: "47",
    label: "Calls Saved This Month",
    position: "bottom-[20%] left-[5%] md:left-[12%]",
    parallax: 0.025,
    delay: 1.2,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    value: "3.2x",
    label: "ROI Average",
    position: "bottom-[22%] right-[4%] md:right-[11%]",
    parallax: 0.035,
    delay: 1.1,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    value: "100%",
    label: "Done For You",
    position: "top-[42%] left-[3%] md:left-[6%]",
    parallax: 0.028,
    delay: 1.3,
  },
  {
    icon: (
      <svg
        className="h-5 w-5 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
    value: "£0",
    label: "Hidden Fees",
    position: "top-[44%] right-[2%] md:right-[7%]",
    parallax: 0.032,
    delay: 1.4,
  },
];

/* ── colours (hex → rgb for canvas) ── */
const DOT_DEFAULT_R = 214,
  DOT_DEFAULT_G = 211,
  DOT_DEFAULT_B = 209; // stone-300
const DOT_ACTIVE_R = 245,
  DOT_ACTIVE_G = 158,
  DOT_ACTIVE_B = 11; // amber-500
const LINE_R = 245,
  LINE_G = 158,
  LINE_B = 11; // amber-500

const GRID_SPACING = 40;
const PROXIMITY = 120;
const CONNECT_DIST = 80;
const MIN_RADIUS = 1.5;
const MAX_RADIUS = 3;
const LERP_SPEED = 0.08;

/* ── helper ── */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ── component ── */
export default function ArgoHeroB() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef<
    {
      x: number;
      y: number;
      r: number;
      cr: number;
      cg: number;
      cb: number;
      phase: number;
    }[]
  >([]);
  const rafRef = useRef<number>(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* parallax transforms for stat cards */
  const cardTransforms = statCards.map((card) => ({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    x: useTransform(mouseX, (v) => v * card.parallax),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    y: useTransform(mouseY, (v) => v * card.parallax),
  }));

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      mouseRef.current = { x: relX, y: relY };
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

  /* ── canvas setup & animation loop ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    function resize() {
      if (!canvas || !section || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      width = section.offsetWidth;
      height = section.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // rebuild dots
      const dots: typeof dotsRef.current = [];
      const cols = Math.ceil(width / GRID_SPACING) + 1;
      const rows = Math.ceil(height / GRID_SPACING) + 1;
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            x: col * GRID_SPACING,
            y: row * GRID_SPACING,
            r: MIN_RADIUS,
            cr: DOT_DEFAULT_R,
            cg: DOT_DEFAULT_G,
            cb: DOT_DEFAULT_B,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      dotsRef.current = dots;
    }

    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    function tick() {
      if (!ctx) return;
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // pre-pass: update dot state
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // ambient pulse
        const pulse =
          Math.sin(time * 1.5 + dot.phase) * 0.3 +
          Math.sin(time * 0.7 + dot.phase * 0.5) * 0.2;

        let targetR = MIN_RADIUS + pulse * 0.4;
        let targetCR = DOT_DEFAULT_R;
        let targetCG = DOT_DEFAULT_G;
        let targetCB = DOT_DEFAULT_B;

        if (dist < PROXIMITY) {
          const factor = 1 - dist / PROXIMITY;
          targetR = MIN_RADIUS + (MAX_RADIUS - MIN_RADIUS) * factor + pulse * 0.3;
          targetCR = DOT_DEFAULT_R + (DOT_ACTIVE_R - DOT_DEFAULT_R) * factor;
          targetCG = DOT_DEFAULT_G + (DOT_ACTIVE_G - DOT_DEFAULT_G) * factor;
          targetCB = DOT_DEFAULT_B + (DOT_ACTIVE_B - DOT_DEFAULT_B) * factor;
        }

        dot.r = lerp(dot.r, targetR, LERP_SPEED);
        dot.cr = lerp(dot.cr, targetCR, LERP_SPEED);
        dot.cg = lerp(dot.cg, targetCG, LERP_SPEED);
        dot.cb = lerp(dot.cb, targetCB, LERP_SPEED);
      }

      // draw connection lines between activated dots
      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (a.r <= MIN_RADIUS + 0.3) continue; // skip non-activated
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j];
          if (b.r <= MIN_RADIUS + 0.3) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const alpha = 0.2 * (1 - d / CONNECT_DIST);
            ctx.strokeStyle = `rgba(${LINE_R},${LINE_G},${LINE_B},${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw dots
      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        ctx.fillStyle = `rgb(${Math.round(dot.cr)},${Math.round(dot.cg)},${Math.round(dot.cb)})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, Math.max(dot.r, 0.5), 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="paper-texture relative overflow-hidden min-h-screen flex items-center py-20"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      {/* ── dot-grid canvas ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-0"
      />

      {/* ── floating stat cards ── */}
      {statCards.map((card, i) => (
        <motion.div
          key={i}
          className={`absolute ${card.position} z-20 hidden xl:block`}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: card.delay,
            ease: "easeOut",
          }}
          style={{ x: cardTransforms[i].x, y: cardTransforms[i].y }}
        >
          <motion.div
            className="rounded-xl bg-white px-4 py-3 shadow-warm"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50">
                {card.icon}
              </div>
              <div>
                <p className="text-lg font-bold leading-none text-stone-900">
                  {card.value}
                </p>
                <p className="mt-0.5 text-xs text-stone-500">{card.label}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* ── foreground hero text ── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-600/20 bg-amber-50 px-4 py-1.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <span className="text-sm font-medium text-amber-700">
              Based in Essex, built for local businesses
            </span>
          </motion.div>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-6xl"
            style={{ textShadow: "0 1px 8px rgba(250,248,245,0.7)" }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={wordVariant}
              >
                {word}
              </motion.span>
            ))}{" "}
            {amberWords.map((word, i) => (
              <motion.span
                key={`amber-${i}`}
                className="inline-block mr-[0.25em] text-amber-600"
                variants={wordVariant}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          >
            We build done-for-you tools for local businesses. No tech skills needed
            — we handle everything.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          >
            <MagneticButton
              href="#products"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-amber-700 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
            >
              See Our Products
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </MagneticButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream-200 bg-white px-8 py-4 text-base font-medium text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
