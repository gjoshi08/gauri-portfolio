import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import {
  BureauNav,
  BureauFooter,
} from "@/Components/bureau-chrome";

import { cases } from "@/lib/cases";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const project = cases.find(
      (item) => item.slug === params.slug
    );

    if (!project) {
      throw notFound();
    }

    return { project };
  },

  component: CaseDetail,
});

function CaseDetail() {
  const { project: c } = Route.useLoaderData();

  const idx = cases.findIndex((item) => item.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <div className="min-h-screen texture-paper grain-fine">
      <BureauNav current="/cases" />

      {/* BACK TO ARCHIVE */}
      <section className="mx-auto max-w-6xl px-6 pt-8 md:pt-6">
        <Link
          to="/cases"
          className="type-typewriter inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-ink-soft transition-colors hover:text-wax"
        >
          <ArrowLeft className="h-3 w-3" />
          Back to Archive
        </Link>

       {/* CASE FILE HERO */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: easeApple }}
  className="relative texture-paper shadow-paper mt-4 p-3 md:p-4 lg:p-5 rounded-sm"
>
  {/* FILE TAB */}
  <div className="absolute -top-3 left-8 z-10 h-7 w-32 rounded-sm bg-cognac/70 shadow-sm sm:left-12 sm:w-40 md:left-16 md:w-48" />

  {/* CASE HEADER AND TITLE */}
  <div className="p-6 sm:p-8 md:p-10 lg:p-12">
    {/* CASE NUMBER + STATUS */}
    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
      <p className="type-typewriter text-[10px] uppercase tracking-[0.2em] text-ink-soft sm:text-[11px] sm:tracking-[0.3em]">
        Case No. {c.no} · Filed {c.year}
      </p>

      <div className="stamp shrink-0">{c.status}</div>
    </div>

    {/* PROJECT CATEGORY */}
    <p className="type-typewriter uppercase text-xs tracking-[0.25em] text-cognac mt-7">
      {c.kicker}
    </p>

    {/* PROJECT TITLE */}
    <h1 className="type-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] mt-3 text-ink max-w-5xl">
      {c.title}
    </h1>

    {/* PROJECT SUMMARY */}
    <p className="type-serif italic text-lg md:text-xl mt-5 text-ink-soft border-l-2 border-gold pl-6 max-w-4xl leading-relaxed">
      {c.summary}
    </p>
  </div>

  {/* CLIENT, ROLE AND TAGS */}
  <div className="grid min-w-0 grid-cols-1 border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
    {/* CLIENT */}
    <div className="min-w-0 border-b border-ink/15 px-5 py-3 sm:border-r sm:px-6 md:px-7 lg:border-b-0">
      <p className="type-typewriter text-[10px] uppercase tracking-[0.15em] text-ink-soft">
        Client
      </p>

      <span className="mt-2 inline-block max-w-full break-words border border-ink/25 px-3 py-2 type-typewriter text-[10px] uppercase leading-relaxed tracking-wide text-ink">
        {c.client}
      </span>
    </div>

    {/* ROLE */}
    <div className="min-w-0 border-b border-ink/15 px-5 py-3 sm:border-b-0 lg:border-r lg:px-8 md:lg:px-10">
      <p className="type-typewriter text-[10px] uppercase tracking-[0.15em] text-ink-soft">
        Role
      </p>

      <span className="mt-2 inline-block max-w-full break-words border border-ink/25 px-3 py-2 type-typewriter text-[10px] uppercase leading-relaxed tracking-wide text-ink">
        {c.role}
      </span>
    </div>

    {/* TAGS */}
    <div className="min-w-0 px-5 py-3 sm:col-span-2 lg:col-span-1 lg:px-8 md:lg:px-10">
      <p className="type-typewriter text-[10px] uppercase tracking-[0.15em] text-ink-soft">
        Tags
      </p>

      <div className="mt-2 flex flex-wrap gap-2">
        {c.tags.map((tag) => (
          <span
            key={tag}
            className="max-w-full break-words border border-ink/25 px-2 py-2 type-typewriter text-[9px] uppercase leading-relaxed tracking-wide text-ink"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
</motion.div>
      </section>

      {/* INVESTIGATION */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        {/* SECTION HEADING */}
        <div>
          <p className="type-typewriter text-[11px] uppercase tracking-[0.35em] text-wax">
            The Investigation
          </p>

          <h2 className="type-serif mt-3 text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            What we discovered.
          </h2>
        </div>

       {/* INVESTIGATION METRICS */}
<div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
  {(c.metrics ?? []).slice(0, 4).map((metric) => (
    <div
      key={metric.label}
      className="flex min-h-[145px] flex-col justify-between border border-ink/15 px-6 py-6 md:min-h-[150px] md:px-7 md:py-7"
    >
      <p className="type-typewriter text-[10px] uppercase leading-relaxed tracking-[0.08em] text-wax md:text-[11px]">
        {metric.label}
      </p>

      <p className="type-serif text-4xl leading-none text-ink md:text-5xl">
        {metric.value}
      </p>
    </div>
  ))}
</div>

        {/* PROBLEM, INSIGHT AND DESIGN */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {/* PROBLEM */}
          <article className="min-w-0 border-t-2 border-ink pt-5">
            <div className="flex items-center justify-between gap-3">
              <p className="type-typewriter text-[10px] uppercase tracking-[0.2em] text-wax">
                Problem
              </p>

              <span className="type-typewriter text-[10px] text-ink-soft">
                01
              </span>
            </div>

            <p className="type-serif mt-5 text-lg leading-relaxed text-ink-soft">
              {c.problem}
            </p>
          </article>

          {/* INSIGHT */}
          <article className="min-w-0 border-t-2 border-ink pt-5">
            <div className="flex items-center justify-between gap-3">
              <p className="type-typewriter text-[10px] uppercase tracking-[0.2em] text-wax">
                Insight
              </p>

              <span className="type-typewriter text-[10px] text-ink-soft">
                02
              </span>
            </div>

            <p className="type-serif mt-5 text-lg leading-relaxed text-ink-soft">
              {c.insight}
            </p>
          </article>

          {/* DESIGN */}
          <article className="min-w-0 border-t-2 border-ink pt-5">
            <div className="flex items-center justify-between gap-3">
              <p className="type-typewriter text-[10px] uppercase tracking-[0.2em] text-wax">
                Design
              </p>

              <span className="type-typewriter text-[10px] text-ink-soft">
                03
              </span>
            </div>

            <p className="type-serif mt-5 text-lg leading-relaxed text-ink-soft">
              {c.design}
            </p>
          </article>
        </div>
      </section>

      {/* OUTCOME */}
<section className="mx-auto max-w-6xl px-6 pt-12">
  {/* SECTION HEADING */}
  <div className="mb-8">
    <p className="type-typewriter text-[11px] uppercase tracking-[0.35em] text-wax">
      The Outcome
    </p>

    <h2 className="type-serif mt-3 text-4xl text-ink md:text-6xl">
      The solution.
    </h2>
  </div>

  {/* OUTCOME PRESENTATION FRAME */}
  <div className="texture-paper overflow-hidden border border-ink/15 shadow-paper">
    <div className="grid lg:grid-cols-[minmax(0,1fr)_260px]">
      {/* IMAGE */}
      <div className="min-w-0 bg-black/[0.03] p-3 sm:p-5">
        <div className="flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-black/[0.04]">
          {c.outcomeImage ? (
            <img
              src={c.outcomeImage}
              alt={`${c.title} — final design`}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          ) : (
            <div className="px-6 text-center">
              <p className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                {c.kicker}
              </p>

              <p className="type-serif mt-3 text-xl text-ink-soft sm:text-2xl">
                Final product visual
              </p>
            </div>
          )}
        </div>
      </div>

      {/* CAPTION */}
      <aside className="flex min-w-0 flex-col justify-between border-t border-ink/15 p-6 sm:p-8 lg:border-l lg:border-t-0">
        <div>
          <p className="type-typewriter text-[10px] uppercase tracking-[0.25em] text-wax">
            Final Design
          </p>

          <h3 className="type-serif mt-4 text-2xl leading-snug text-ink">
            {c.title}
          </h3>

          <p className="type-serif mt-4 text-base leading-relaxed text-ink-soft">
            {c.outcome ?? c.summary}
          </p>
        </div>

        <p className="type-typewriter mt-8 border-t border-ink/15 pt-4 text-[10px] uppercase tracking-[0.2em] text-ink-soft">
          Case No. {c.no} · Final Evidence
        </p>
      </aside>
    </div>
  </div>
</section>

      {/* FULL INVESTIGATION */}
      <section className="mx-auto max-w-6xl px-6 pt-12 pb-20 text-center">
        <div className="border-t border-ink/15 pt-20 sm:pt-24">
          <p className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-wax sm:text-[11px] sm:tracking-[0.35em]">
            Want the full investigation?
          </p>

          <h2 className="type-serif mt-4 text-4xl tracking-tight text-ink sm:text-5xl md:text-6xl">
            Read the complete case study.
          </h2>

          <p className="type-serif mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">
            Research, evidence, iterations, design decisions and the complete
            investigation are documented in the full case study.
          </p>

          {/* CASE STUDY LINKS */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {c.pdfResearch && (
              <a
                href={c.pdfResearch}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#7C1D1D] px-7 py-4 type-typewriter text-xs uppercase tracking-[0.2em] text-[#7C1D1D] transition-all duration-300 hover:bg-[#7C1D1D] hover:text-[#F7F2EA]"
              >
                Research Investigation File
                <ExternalLink className="ml-2 h-3.5 w-3.5" />
              </a>
            )}

            {c.website && (
              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#7C1D1D] px-7 py-4 type-typewriter text-xs uppercase tracking-[0.2em] text-[#F7F2EA] transition-all duration-300 hover:bg-[#5f1515]"
              >
                View Full Case Study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* NEXT CASE */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-ink/20 pt-10">
          <p className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft sm:text-[11px]">
            Next in the archive
          </p>

          <Link
            to="/cases/$slug"
            params={{ slug: next.slug }}
            className="group min-w-0 text-right"
          >
            <p className="type-typewriter text-[10px] uppercase tracking-widest text-wax">
              Case No. {next.no}
            </p>

            <span className="type-serif mt-2 inline-flex items-center justify-end gap-3 text-xl text-ink transition-colors group-hover:text-wax sm:text-2xl md:text-3xl">
              {next.title}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </span>
          </Link>
        </div>
      </section>

      <BureauFooter />
    </div>
  );
}