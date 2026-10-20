import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Fingerprint,
  FileText,
  MapPin,
  Search,
} from "lucide-react";

import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";
import { cases } from "@/lib/cases";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }) => {
    const project = cases.find((item) => item.slug === params.slug);

    if (!project) {
      throw notFound();
    }

    return { project };
  },
  component: CaseDetail,
});

function EvidenceLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#963f34] sm:text-[9px]">
      {children}
    </p>
  );
}

function PushPin({
  color = "#963f34",
}: {
  color?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 top-[-7px] z-20 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#8b382c] shadow-[1px_2px_3px_rgba(47,30,18,0.3)]"
      style={{ backgroundColor: color }}
    >
      <span className="absolute left-[3px] top-[2px] h-1 w-1 rounded-full bg-white/50" />
    </span>
  );
}

function EvidenceNote({
  number,
  label,
  children,
  className = "",
  pinColor,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  pinColor?: string;
}) {
  return (
    <article
      className={`relative min-w-0 border border-[#c9b38e] bg-[#f2e7cc] p-4 shadow-[2px_5px_8px_rgba(47,30,18,0.15)] ${className}`}
    >
      <PushPin color={pinColor} />

      <EvidenceLabel>
        Evidence / {number} · {label}
      </EvidenceLabel>

      <div className="mt-3 font-serif text-sm leading-relaxed text-[#49372a] sm:text-base">
        {children}
      </div>
    </article>
  );
}

function CaseDetail() {
  const { project: c } = Route.useLoaderData();

  const idx = cases.findIndex((item) => item.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];

  const metrics = (c.metrics ?? []).slice(0, 4);

  return (
    <div className="min-h-screen overflow-hidden bg-[#eee5d3] text-[#2c2119]">
      <BureauNav current="/cases" />

      {/* BACK TO ARCHIVE */}
      <div className="mx-auto w-full max-w-7xl px-5 pt-7 pb-6 sm:px-8 md:px-8">
        <Link
          to="/cases"
          className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#75583c] transition-colors hover:text-[#963f34]"
        >
          <ArrowLeft size={13} />
          Return to the archive
        </Link>
      </div>

      {/* ==========================================================
          THE OPEN INVESTIGATION FOLDER
          Both pages belong to one physical-looking folder.
         ========================================================== */}
      <main className="mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 md:px-8">
        {/* OUTER YELLOW FILE FOLDER */}
        <div className="relative rounded-[5px] border border-[#c7a052] bg-[#e6b957] p-2 shadow-[0_16px_35px_rgba(66,43,22,0.22)] sm:p-3 md:p-5">
          {/* Folder tab */}
          <div className="absolute -top-5 left-5 h-6 w-36 rounded-t-md border border-b-0 border-[#c7a052] bg-[#e6b957] sm:left-10 sm:w-48" />

          {/* Folder identification */}
          <div className="relative z-10 mb-3 flex flex-wrap items-center justify-between gap-3 px-2 py-2 sm:px-4">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#634627] sm:text-[9px]">
                D.I.B. · Evidence Division
              </p>

              <p className="mt-1 font-serif text-sm italic text-[#634627] sm:text-base">
                Investigation dossier
              </p>
            </div>

            <div className="text-right">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#634627]">
                File no. {c.no}
              </p>

              <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#634627]">
                Filed {c.year}
              </p>
            </div>
          </div>

          {/* THE TWO OPEN PAGES */}
          <div className="relative grid min-w-0 grid-cols-1 items-stretch bg-[#e4d7bc] shadow-[inset_0_0_0_1px_rgba(105,78,44,0.2)] lg:grid-cols-2">
            {/* CENTRE FOLD */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-20 hidden w-5 -translate-x-1/2 bg-gradient-to-r from-[#c8b18b]/20 via-[#9e8057]/20 to-[#f5ead2]/30 lg:block"
            />

            {/* =====================================================
                LEFT PAGE — INVESTIGATION & EVIDENCE
               ===================================================== */}
            <section className="relative min-w-0 border-b border-[#c4b18e] bg-[#f0e7d5] p-4 sm:p-6 md:p-8 lg:border-b-0 lg:border-r lg:border-[#c4b18e]">
              {/* Paper texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(#a78c62 0.55px, transparent 0.55px)",
                  backgroundSize: "7px 7px",
                }}
              />

              <div className="relative z-10">
                {/* PAGE HEADING */}
                <div className="flex items-start justify-between gap-3 border-b border-[#c4b18e] pb-4">
                  <div>
                    <EvidenceLabel>Page 01 · Investigation</EvidenceLabel>

                    <h2 className="mt-2 font-serif text-2xl italic sm:text-3xl">
                      The evidence.
                    </h2>
                  </div>

                  <Fingerprint
                    className="shrink-0 text-[#963f34]/70"
                    size={25}
                    strokeWidth={1.1}
                  />
                </div>

                {/* PROJECT RECORD */}
                <motion.article
                  initial={{ opacity: 0, y: 12, rotate: -1 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.6, ease: easeApple }}
                  className="relative mx-auto mt-7 max-w-md rotate-[-1deg] border border-[#c9b38e] bg-[#f8f0dd] p-5 shadow-[3px_6px_10px_rgba(47,30,18,0.13)] sm:p-6"
                >
                  <PushPin color="#b78d2e" />

                  <div className="flex items-center justify-between gap-3">
                    <EvidenceLabel>Personnel record / 01</EvidenceLabel>

                    <span className="font-mono text-[8px] text-[#75583c]">
                      {c.year}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl leading-tight sm:text-3xl">
                    {c.title}
                  </h3>

                  <p className="mt-3 font-serif text-sm italic leading-relaxed text-[#75583c]">
                    {c.summary}
                  </p>

      
                </motion.article>

                {/* METRICS */}
                {metrics.length > 0 && (
                  <div className="mt-8">
                    <EvidenceLabel>Collected data / 02</EvidenceLabel>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      {metrics.map((metric, index) => (
                        <motion.div
                          key={metric.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.07,
                          }}
                          className={`relative border border-[#c9b38e] p-4 shadow-sm ${
                            index % 2 === 0
                              ? "rotate-[-1deg] bg-[#f5e8bd]"
                              : "rotate-[1deg] bg-[#f8f0dd]"
                          }`}
                        >
                          <p className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.1em] text-[#75583c]">
                            {metric.label}
                          </p>

                          <p className="mt-3 font-serif text-3xl leading-none sm:text-4xl">
                            {metric.value}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PROBLEM EVIDENCE */}
                <div className="mt-8">
                  <EvidenceNote
                    number="03"
                    label="Problem identified"
                    className="rotate-[0.5deg]"
                  >
                    <p>{c.problem}</p>
                  </EvidenceNote>
                </div>

                {/* INSIGHT EVIDENCE */}
                <div className="ml-3 mt-6 sm:ml-8">
                  <EvidenceNote
                    number="04"
                    label="Key finding"
                    className="rotate-[-1deg] bg-[#e8d7a9]"
                    pinColor="#527b88"
                  >
                    <p>{c.insight}</p>
                  </EvidenceNote>
                </div>

                {/* HANDWRITTEN FIELD NOTE */}
                <div className="ml-auto mt-6 max-w-sm rotate-[1.5deg] border border-[#c9b38e] bg-[#f6e9cf] p-4 shadow-[2px_5px_8px_rgba(47,30,18,0.12)] sm:mr-4">
                  <div className="flex items-center gap-2">
                    <Search size={13} className="text-[#963f34]" />

                    <EvidenceLabel>Field note / 05</EvidenceLabel>
                  </div>

                  <p className="mt-3 font-serif text-base italic leading-relaxed text-[#49372a]">
                    “Understand the evidence before deciding on the solution.”
                  </p>
                </div>

                {/* PAGE FOOTER */}
                <div className="mt-9 flex items-end justify-between gap-3 border-t border-dashed border-[#c4b18e] pt-3">
                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#75583c]">
                    D.I.B. · Investigation record
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#75583c]">
                    Sheet 01
                  </span>
                </div>
              </div>
            </section>

            {/* =====================================================
                RIGHT PAGE — DESIGN & SOLUTION
               ===================================================== */}
            <section className="relative min-w-0 bg-[#f7f0e2] p-4 sm:p-6 md:p-8">
              {/* Paper texture */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#a78c62 0.55px, transparent 0.55px)",
                  backgroundSize: "8px 8px",
                }}
              />

              <div className="relative z-10">
                {/* PAGE HEADING */}
                <div className="flex items-start justify-between gap-3 border-b border-[#c4b18e] pb-4">
                  <div>
                    <EvidenceLabel>Page 02 · Findings</EvidenceLabel>

                    <h2 className="mt-2 font-serif text-2xl italic sm:text-3xl">
                      The resolution.
                    </h2>
                  </div>

                  <FileText
                    className="shrink-0 text-[#963f34]/70"
                    size={24}
                    strokeWidth={1.1}
                  />
                </div>

                {/* DESIGN DECISION */}
                <div className="mt-7">
                  <EvidenceNote
                    number="06"
                    label="Design direction"
                    className="rotate-[0.8deg] bg-[#f1e3bc]"
                    pinColor="#963f34"
                  >
                    <p>{c.design}</p>
                  </EvidenceNote>
                </div>

                {/* SOLUTION FILE */}
                <motion.article
                  initial={{ opacity: 0, y: 14, rotate: 1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease: easeApple }}
                  className="relative mt-8 border border-[#c9b38e] bg-[#fff9ed] p-5 shadow-[3px_6px_12px_rgba(47,30,18,0.12)] sm:p-7"
                >
                  <PushPin color="#b78d2e" />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <EvidenceLabel>Final evidence report</EvidenceLabel>

                    <span className="rotate-[-3deg] border border-[#963f34]/70 px-2 py-1 font-mono text-[7px] uppercase tracking-[0.15em] text-[#963f34] sm:text-[8px]">
                      Case resolved
                    </span>
                  </div>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[#963f34]">
  Case Findings · Final Record
</p>

                  <div className="my-5 h-px bg-[#c9b38e]" />

                  <p className="whitespace-pre-line font-serif text-base leading-[1.85] text-[#594838] sm:text-lg">
                    {c.outcome || c.summary}
                  </p>

                  <div className="mt-6 border-t border-dashed border-[#c4b18e] pt-4">
                    <EvidenceLabel>Resolution record</EvidenceLabel>

                    <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.13em] text-[#75583c]">
                      {c.status} · File {c.no}
                    </p>
                  </div>
                </motion.article>

                {/* PROJECT ROLE / CLIENT */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <EvidenceNote
                    number="07"
                    label="Assignment"
                    className="rotate-[-0.7deg]"
                    pinColor="#527b88"
                  >
                    <p className="font-serif text-lg">{c.role}</p>

                    <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.1em] text-[#75583c]">
                      Role on this case
                    </p>
                  </EvidenceNote>

                  <EvidenceNote
                    number="08"
                    label="Origin"
                    className="rotate-[0.8deg] bg-[#eee1c7]"
                    pinColor="#b78d2e"
                  >
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={14}
                        className="mt-1 shrink-0 text-[#963f34]"
                      />

                      <p>{c.client}</p>
                    </div>

                    <p className="mt-3 font-mono text-[8px] uppercase tracking-[0.1em] text-[#75583c]">
                      Project record
                    </p>
                  </EvidenceNote>
                </div>

                {/* PROJECT TAGS */}
                {c.tags?.length > 0 && (
                  <div className="mt-8">
                    <EvidenceLabel>Classification tags / 09</EvidenceLabel>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-[#c9b38e] bg-[#eee2cc] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-[#594838]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CASE STUDY LINKS */}
                {(c.pdfResearch || c.pdfUI || c.website || c.behance) && (
                  <div className="mt-8 border-t border-[#c4b18e] pt-5">
                    <EvidenceLabel>Attached documents</EvidenceLabel>

                    <div className="mt-4 space-y-2">
                      {c.pdfResearch && (
                        <a
                          href={c.pdfResearch}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 border-b border-dashed border-[#c9b38e] py-3 transition-colors hover:text-[#963f34]"
                        >
                          <span className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.1em]">
                            <FileText size={14} />
                            Research file
                          </span>

                          <ArrowUpRight
                            size={14}
                            className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      )}

                      {c.pdfUI && (
                        <a
                          href={c.pdfUI}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 border-b border-dashed border-[#c9b38e] py-3 transition-colors hover:text-[#963f34]"
                        >
                          <span className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.1em]">
                            <FileText size={14} />
                            Design documentation
                          </span>

                          <ArrowUpRight
                            size={14}
                            className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      )}

                      {c.website && (
                        <a
                          href={c.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-3 border-b border-dashed border-[#c9b38e] py-3 transition-colors hover:text-[#963f34]"
                        >
                          <span className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.1em]">
                            <ExternalLink size={14} />
                            Project link
                          </span>

                          <ArrowUpRight
                            size={14}
                            className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      )}

                      {c.behance && (
  <div className="flex flex-wrap gap-3">
    {(Array.isArray(c.behance)
      ? c.behance
      : [{ label: "View on Behance", url: c.behance }]
    ).map((link) => (
      <a
        key={link.url}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-ink/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-ink transition-colors hover:border-wax hover:bg-[#e9d09a]/20"
      >
        {link.label}
        <ArrowUpRight size={13} />
      </a>
    ))}
  </div>
)}
                    </div>
                  </div>
                )}

                {/* PAGE FOOTER */}
                <div className="mt-9 flex items-end justify-between gap-3 border-t border-dashed border-[#c4b18e] pt-3">
                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#75583c]">
                    Final report · D.I.B.
                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#75583c]">
                    Sheet 02
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* FOLDER BOTTOM EDGE */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-2 py-2 sm:px-4">
            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#634627] sm:text-[8px]">
              Design Investigation Bureau · Confidential working file
            </p>

            <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#634627] sm:text-[8px]">
              End of dossier
            </p>
          </div>
        </div>
      </main>

      {/* NEXT CASE */}
      <section className="mx-auto max-w-[1500px] px-4 pb-16 pt-5 sm:px-7 md:px-10 md:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#c4b18e] pt-7">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#75583c] transition-colors hover:text-[#963f34]"
          >
            <ArrowLeft size={13} />
            All case files
          </Link>

          <Link
            to="/cases/$slug"
            params={{ slug: next.slug }}
            className="group min-w-0 text-right"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#963f34]">
              Next investigation · {next.no}
            </p>

            <span className="mt-2 inline-flex items-center gap-3 font-serif text-xl text-[#2c2119] transition-colors group-hover:text-[#963f34] sm:text-2xl md:text-3xl">
              {next.title}
              <ArrowRight size={18} className="shrink-0" />
            </span>
          </Link>
        </div>
      </section>

      <BureauFooter />
    </div>
  );
}