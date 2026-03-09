"use client";

import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ArgoAbout() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-100px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallax1X = useTransform(mouseX, (v) => v / 40);
  const parallax1Y = useTransform(mouseY, (v) => v / 40);
  const parallax2X = useTransform(mouseX, (v) => v / 50);
  const parallax2Y = useTransform(mouseY, (v) => v / 50);
  const parallax3X = useTransform(mouseX, (v) => v / 45);
  const parallax3Y = useTransform(mouseY, (v) => v / 45);
  const parallax4X = useTransform(mouseX, (v) => v / 55);
  const parallax4Y = useTransform(mouseY, (v) => v / 55);
  const parallax5X = useTransform(mouseX, (v) => v / 60);
  const parallax5Y = useTransform(mouseY, (v) => v / 60);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="paper-texture relative py-20 md:py-28"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
            Who We Are
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
            Built by Someone Who Gets It
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="mx-auto max-w-4xl" ref={gridRef}>
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Photo Column */}
            <div className="relative flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
                animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" as const }}
                className="relative"
              >
                <img
                  src="/profile.jpg"
                  alt="Harry McDonagh, Founder of Argo"
                  className="h-52 w-52 rounded-2xl border-2 border-amber-200/50 object-cover shadow-warm-lg mx-auto md:h-56 md:w-56"
                />
              </motion.div>

              {/* Floating accent 1: Top-right rotated square */}
              <motion.div
                className="absolute -top-4 -right-2 h-4 w-4 rotate-12 rounded-sm border-2 border-amber-600/20 bg-amber-50"
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: [0, -8, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: { delay: 0.4, duration: 0.5 },
                  y: { duration: 5, ease: "easeInOut" as const, repeat: Infinity, delay: 0.4 },
                }}
                style={{ x: parallax1X, y: parallax1Y }}
              />

              {/* Floating accent 2: Top-left circle */}
              <motion.div
                className="absolute -top-2 -left-4 h-3 w-3 rounded-full bg-amber-200"
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: [0, -8, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: { delay: 0.5, duration: 0.5 },
                  y: { duration: 6, ease: "easeInOut" as const, repeat: Infinity, delay: 0.5 },
                }}
                style={{ x: parallax2X, y: parallax2Y }}
              />

              {/* Floating accent 3: Bottom-right horizontal bar */}
              <motion.div
                className="absolute bottom-8 -right-6 h-0.5 w-8 rounded-full bg-amber-600/30"
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: [0, -8, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: { delay: 0.6, duration: 0.5 },
                  y: { duration: 7, ease: "easeInOut" as const, repeat: Infinity, delay: 0.6 },
                }}
                style={{ x: parallax3X, y: parallax3Y }}
              />

              {/* Floating accent 4: Bottom-left rotated square */}
              <motion.div
                className="absolute -bottom-3 left-4 h-3 w-3 rotate-45 rounded-sm border-2 border-amber-200"
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: [0, -8, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: { delay: 0.7, duration: 0.5 },
                  y: { duration: 5.5, ease: "easeInOut" as const, repeat: Infinity, delay: 0.7 },
                }}
                style={{ x: parallax4X, y: parallax4Y }}
              />

              {/* Floating accent 5: Mid-right circle */}
              <motion.div
                className="absolute top-1/2 -right-5 h-2 w-2 rounded-full bg-amber-600/20"
                initial={{ opacity: 0 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        y: [0, -8, 0],
                      }
                    : {}
                }
                transition={{
                  opacity: { delay: 0.8, duration: 0.5 },
                  y: { duration: 6.5, ease: "easeInOut" as const, repeat: Infinity, delay: 0.8 },
                }}
                style={{ x: parallax5X, y: parallax5Y }}
              />
            </div>

            {/* Bio Column */}
            <div>
              <motion.h3
                className="font-[family-name:var(--font-display)] text-2xl font-bold text-stone-900"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" as const }}
              >
                Harry McDonagh
              </motion.h3>

              <motion.p
                className="mt-1 text-sm font-medium text-amber-600"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" as const }}
              >
                Founder, Argo
              </motion.p>

              <motion.p
                className="mt-5 leading-relaxed text-stone-600"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" as const }}
              >
                I&apos;m a computer science graduate who loves building tools that
                make businesses run smoother. I started Argo because I kept seeing
                the same problem — local tradespeople losing good work to missed
                calls, slow follow-ups, and admin that never gets done. I build the
                tools to fix that.
              </motion.p>

              <motion.p
                className="mt-3 leading-relaxed text-stone-600"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" as const }}
              >
                Based in Essex. If you want to chat about what I&apos;m building,
                drop me a message — I&apos;m always happy to talk.
              </motion.p>

              <motion.div
                className="mt-6 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" as const }}
              >
                <a
                  href="https://wa.me/447939939885"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream-200 px-4 py-2 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:shadow-warm-sm"
                >
                  <svg
                    className="h-4 w-4 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="mailto:harry@argosystems.co.uk"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream-200 px-4 py-2 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:shadow-warm-sm"
                >
                  <svg
                    className="h-4 w-4 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Email
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
