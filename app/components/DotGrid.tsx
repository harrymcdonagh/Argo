"use client";

import { useRef, useEffect, useCallback } from "react";

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

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface DotGridProps {
  /** Ref to the parent section element for sizing and mouse tracking */
  sectionRef: React.RefObject<HTMLElement | null>;
}

export default function DotGrid({ sectionRef }: DotGridProps) {
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

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    },
    [sectionRef]
  );

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, []);

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
    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    function tick() {
      if (!ctx) return;
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

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

      ctx.lineWidth = 0.5;
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i];
        if (a.r <= MIN_RADIUS + 0.3) continue;
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
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [sectionRef, handleMouseMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
