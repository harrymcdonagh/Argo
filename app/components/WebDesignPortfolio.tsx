"use client";

import Image from "next/image";
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
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-warm transition-all duration-300 hover:shadow-warm-lg">
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
            sizes="(max-width: 768px) 100vw, 768px"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-stone-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-stone-900 shadow-warm">
              Visit Site
            </span>
          </div>
        </div>
      </a>

      {/* Details — mobile: stacked & compact | desktop: 2-col grid */}
      <div className="p-5 md:p-8">
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

        {/* Title — shared between layouts */}
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-stone-900 md:text-2xl">
          {project.title}
        </h3>

        {/* Desktop: side-by-side description + features */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mt-3">
          <p className="text-base leading-relaxed text-stone-600">
            {project.description}
          </p>

          <div className="flex flex-col justify-center">
            <ul className="space-y-2">
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

            <div className="mt-5">
              <MagneticButton
                href={project.url}
                className="inline-block rounded-xl border border-cream-200 px-6 py-3 text-sm font-bold text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
              >
                View Live Site →
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Mobile: compact stacked layout */}
        <div className="md:hidden">
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            {project.description}
          </p>

          {/* Full-width CTA */}
          <div className="mt-5">
            <MagneticButton
              href={project.url}
              className="block w-full rounded-xl border border-cream-200 px-6 py-3.5 text-center text-sm font-bold text-stone-900 transition-all duration-300 hover:border-stone-400 hover:shadow-warm-sm"
            >
              View Live Site →
            </MagneticButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WebDesignPortfolio() {
  return (
    <section id="portfolio" className="paper-texture relative py-20 md:py-28">
      <div className="mx-auto md:max-w-xl px-6">
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

        <ScrollReveal delay={0.1}>
          <ProjectCard project={projects[0]} />
        </ScrollReveal>
      </div>
    </section>
  );
}
