"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

const projects = [
  {
    title: "Angus Coulson — Journalist Portfolio",
    description:
      "A dark, editorial portfolio for a broadcast journalism postgrad. Designed to showcase published work from the Daily Mail and The Spurs Web with a premium, magazine-style feel.",
    url: "https://angus-coulson-portfolio.vercel.app",
    image: "/angus-coulson-preview.png",
    tags: ["Portfolio", "Next.js", "Dark Theme"],
    features: [
      "Custom dark editorial design",
      "Responsive across all devices",
      "Fast load times on Vercel",
      "SEO-optimised structure",
    ],
  },
  {
    title: "George Marsden — Journalist Portfolio",
    description:
      "A bold, editorial portfolio for a journalism MA student at Sheffield. Brings together features, reviews, radio work and a CV in one clean, easy-to-browse site.",
    url: "https://george-marsden-portfolio.vercel.app",
    image: "/george-marsden-preview.png",
    tags: ["Portfolio", "Astro", "Editorial"],
    features: [
      "Striking typographic design",
      "Writing, broadcast & CV sections",
      "Responsive across all devices",
      "SEO-optimised structure",
    ],
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-warm transition-all duration-300 hover:shadow-warm-lg">
      {/* Browser chrome + screenshot */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-cream-50 border-b border-cream-200">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <div className="ml-3 flex-1 rounded-md bg-cream-100 px-3 py-1">
            <span className="text-xs text-stone-400">
              {project.url.replace("https://", "")}
            </span>
          </div>
        </div>

        {/* Screenshot */}
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={1200}
            height={750}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 560px"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-stone-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-stone-900 shadow-warm">
              Visit Site
            </span>
          </div>
        </div>
      </a>

      {/* Details */}
      <div className="flex flex-1 flex-col p-5 md:p-6 lg:p-8">
        {/* Tags — horizontal scroll on mobile, wrap on desktop */}
        <div className="mb-3 flex gap-2 overflow-x-auto md:flex-wrap scrollbar-none">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 rounded-full border border-amber-600/20 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 md:text-2xl">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-stone-600 md:mt-3 md:text-base">
          {project.description}
        </p>

        <ul className="mt-5 hidden space-y-2 md:block">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-stone-600"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 flex-shrink-0 text-amber-600"
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
              {feature}
            </li>
          ))}
        </ul>

        {/* Pinned to the bottom so buttons line up across cards */}
        <div className="mt-auto pt-6">
          <MagneticButton
            href={project.url}
            className="block w-full rounded-xl border border-cream-200 px-6 py-3.5 text-center text-sm font-bold text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm md:inline-block md:w-auto md:py-3"
          >
            View Live Site →
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous project" : "Next project"}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-200 bg-white text-stone-900 shadow-warm-sm transition-colors hover:border-stone-400"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={direction === "prev" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"}
        />
      </svg>
    </button>
  );
}

export default function WebDesignPortfolio() {
  const [active, setActive] = useState(0);
  const go = (step: number) =>
    setActive((i) => (i + step + projects.length) % projects.length);

  return (
    <section id="portfolio" className="paper-texture relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-amber-600">
              Our Work
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
              Built by Argo
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Real websites we&apos;ve designed and built — not templates, not
              mockups.
            </p>
          </div>
        </ScrollReveal>

        {/* Tablet & desktop: side by side */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={project.url} delay={0.1 * (i + 1)} className="h-full">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile: one at a time, click through */}
        <ScrollReveal delay={0.1} className="md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={projects[active]} />
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <ArrowButton direction="prev" onClick={() => go(-1)} />
            <div className="flex gap-2">
              {projects.map((project, i) => (
                <button
                  key={project.url}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${project.title}`}
                  aria-current={i === active}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-amber-600" : "w-2.5 bg-cream-200"
                  }`}
                />
              ))}
            </div>
            <ArrowButton direction="next" onClick={() => go(1)} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
