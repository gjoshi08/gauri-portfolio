import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CaseFile } from "@/lib/cases";
import {
  SaarthiCover,
  BirdsCover,
  PaytmCover,
} from "@/Components/project-covers";

const projectCovers: Record<string, () => React.JSX.Element> = {
  saarthi: SaarthiCover,
  "birds-of-gujarat": BirdsCover,
  "paytm-chatbot": PaytmCover,
};

const paperColors = [
  "bg-[#eee4d0]",
  "bg-[#e8deca]",
  "bg-[#f1e7d5]",
];

function StackedProjectCard({
  project,
  index,
  total,
}: {
  project: CaseFile;
  index: number;
  total: number;
}) {
  const Cover = projectCovers[project.slug];

  return (
    <article
      className="sticky"
      style={{
  top: `${100 + index * 45}px`,
  zIndex: index + 10,
  marginBottom: index === total - 1 ? "0" : "24px",
}}
    >
      <div
        className={`relative overflow-hidden border border-[#80684d]/35 shadow-[0_8px_22px_rgba(48,35,23,0.10)] ${
          paperColors[index % paperColors.length]
        }`}
      >
        {/* Case-file tab */}
        <div className="absolute left-8 top-0 z-20 h-2.5 w-20 rounded-b-sm bg-[#80604a]" />

        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          {/* Project illustration */}
          <Link
            to="/cases/$slug"
            params={{ slug: project.slug }}
            aria-label={`Open case study: ${project.title}`}
            className="group relative block min-h-[230px] overflow-hidden border-b border-ink/10 md:min-h-[360px] md:border-b-0 md:border-r"
          >
            <div className="absolute left-5 top-6 z-10 type-typewriter text-[9px] uppercase tracking-[0.25em] text-ink-soft">
              Case File · {project.no}
            </div>

            <div className="absolute inset-0 flex items-center justify-center p-5 pt-12 md:p-8 md:pt-14">
              {Cover ? (
                <div className="h-full max-h-[300px] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                  <Cover />
                </div>
              ) : project.outcomeImage ? (
                <img
                  src={project.outcomeImage}
                  alt={`${project.title} project outcome`}
                  loading="lazy"
                  className="max-h-[280px] w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="type-serif text-3xl text-ink/60">
                  {project.title}
                </div>
              )}
            </div>

            <div className="absolute bottom-4 left-5 type-typewriter text-[9px] uppercase tracking-[0.2em] text-ink-soft">
              Evidence Exhibit · 0{index + 1}
            </div>
          </Link>

          {/* Project information */}
          <div className="flex flex-col justify-between p-6 md:p-9 lg:p-10">
            <div>
              <div className="flex items-center justify-between gap-4">
                <span className="type-typewriter text-[10px] uppercase tracking-[0.25em] text-[#963f34]">
                  {project.kicker}
                </span>

                <span className="shrink-0 type-typewriter text-[10px] text-ink-soft">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              <h3 className="type-serif mt-6 text-3xl leading-tight text-ink md:text-4xl lg:text-5xl">
                {project.title}
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="border border-ink/15 px-2.5 py-1.5 type-typewriter text-[9px] uppercase tracking-[0.12em] text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-end justify-between gap-4 border-t border-ink/15 pt-5">
              <div>
                <div className="type-typewriter text-[9px] uppercase tracking-[0.2em] text-ink-soft">
                  Investigation No. {project.no}
                </div>

                <div className="mt-1 type-serif text-lg text-ink">
                  {project.year} · {project.status}
                </div>
              </div>

              <Link
                to="/cases/$slug"
                params={{ slug: project.slug }}
                className="inline-flex shrink-0 items-center gap-2 border-b border-[#963f34] pb-1 type-typewriter text-[10px] uppercase tracking-[0.15em] text-[#963f34] transition-colors hover:text-ink"
              >
                Open File
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function StackedProjects({
  projects,
}: {
  projects: CaseFile[];
}) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progressWidth = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"],
  );

  if (projects.length === 0) return null;

  const visibleProjects = projects.slice(0, 3);

  return (
    <section
  ref={sectionRef}
  className="relative mx-auto max-w-7xl px-5 pb-8 md:px-8"
>
      {/* Section heading */}
      <div className="mb-12 flex flex-col justify-between gap-5 border-b border-ink/15 pb-7 md:flex-row md:items-end">
        <div>
          <div className="type-typewriter text-[10px] uppercase tracking-[0.35em] text-[#963f34]">
            The Archive · Selected Investigations
          </div>

          <h2 className="type-serif mt-4 text-4xl leading-tight text-ink md:text-6xl">
            Three cases.
            <br />
            <span className="italic">Three different questions.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
          Follow the evidence, examine the decisions, and discover how each
          investigation became a design outcome.
        </p>
      </div>

      {/* Scroll progress */}
      <div className="sticky top-[76px] z-50 mb-5 h-[2px] w-full bg-ink/10">
        <motion.div
          style={{ width: progressWidth }}
          className="h-full bg-[#963f34]"
        />
      </div>

      {/* Stacking cards */}
      <div className="relative">
        {visibleProjects.map((project, index) => (
          <StackedProjectCard
            key={project.slug}
            project={project}
            index={index}
            total={visibleProjects.length}
          />
        ))}
      </div>

      <div className="mt-10 text-center type-typewriter text-[9px] uppercase tracking-[0.25em] text-ink-soft">
        All evidence filed · End of selected investigations
      </div>
    </section>
  );
}