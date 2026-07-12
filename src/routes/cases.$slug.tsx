import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";
import { getCase, cases, type CaseFile } from "@/lib/cases";
import { ArrowLeft, ArrowRight } from "lucide-react";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/cases/$slug")({
  loader: ({ params }): CaseFile => {
    const c = getCase(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — Case ${loaderData.no}` },
      { name: "description", content: loaderData.summary },
      { property: "og:title", content: `${loaderData.title} — DIB` },
      { property: "og:description", content: loaderData.summary },
    ] : [{ title: "Case File" }],
  }),
  component: CaseDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center texture-paper">
      <div className="text-center">
        <div className="stamp mb-4">Cold Case</div>
        <p className="type-typewriter">This file is not in the archive.</p>
        <Link to="/cases" className="mt-6 inline-block type-typewriter uppercase text-xs tracking-[0.3em] border-b-2 border-gold pb-1">Back to Archive</Link>
      </div>
    </div>
  ),
});

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: easeApple }}
      className="mt-20"
    >
      <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">{label}</div>
      <h2 className="type-serif text-3xl md:text-5xl mt-3 leading-tight text-ink">{title}</h2>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}

function CaseDetail() {
  const c = Route.useLoaderData() as CaseFile;
  const idx = cases.findIndex(x => x.slug === c.slug);
  const next = cases[(idx + 1) % cases.length];

  return (
    <div className="min-h-screen texture-paper grain-fine">
      <BureauNav current="/cases" />

      {/* Folder header */}
      <section className="mx-auto max-w-5xl px-6 pt-16">
        <Link to="/cases" className="type-typewriter uppercase text-[11px] tracking-[0.3em] text-ink-soft hover:text-wax transition-colors inline-flex items-center gap-2">
          <ArrowLeft className="h-3 w-3" /> Back to Archive
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeApple }}
          className="relative texture-paper grain-fine shadow-paper mt-6 p-10 md:p-16 rounded-sm"
        >
          <div className="absolute -top-3 left-16 h-6 w-40 bg-cognac/70 rounded-sm shadow-sm" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="type-typewriter uppercase text-[11px] tracking-[0.3em] text-ink-soft">
              Case No. {c.no} · Filed {c.year}
            </div>
            <div className="stamp">{c.status}</div>
          </div>
          <div className="type-typewriter uppercase text-xs tracking-[0.25em] text-cognac mt-8">{c.kicker}</div>
          <h1 className="type-serif text-4xl md:text-6xl leading-[1] mt-4 text-ink">{c.title}</h1>
          <p className="type-serif italic text-xl mt-8 text-ink-soft border-l-2 border-gold pl-6 max-w-3xl leading-relaxed">
            {c.summary}
          </p>
          <div className="mt-10 grid sm:grid-cols-3 gap-6 border-t border-ink/15 pt-6">
            <div>
              <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Client</div>
              <div className="type-serif mt-1">{c.client}</div>
            </div>
            <div>
              <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Role</div>
              <div className="type-serif mt-1">{c.role}</div>
            </div>
            <div>
              <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Tags</div>
              <div className="mt-1 flex flex-wrap gap-2">
                {c.tags.map(t => <span key={t} className="type-typewriter text-[10px] uppercase tracking-widest border border-ink/30 px-2 py-0.5">{t}</span>)}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <Section label="I · Investigation Timeline" title="How the case unfolded.">
          <ol className="relative border-l-2 border-ink/20 pl-8 space-y-6">
            {c.timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-wax border-4 border-paper" />
                <div className="type-typewriter text-[10px] uppercase tracking-widest text-wax">{t.phase}</div>
                <div className="type-serif text-lg mt-1">{t.note}</div>
              </li>
            ))}
          </ol>
        </Section>

        <Section label="II · Witness Statements" title="What users actually said.">
          <div className="grid md:grid-cols-3 gap-6">
            {c.witnesses.map((w, i) => (
              <figure key={i} className="p-6 bg-paper-deep/50 border-l-4 border-cognac shadow-paper">
                <blockquote className="type-serif italic text-lg leading-snug">"{w.quote}"</blockquote>
                <figcaption className="mt-4 type-typewriter text-[11px] uppercase tracking-widest text-ink-soft">— {w.who}</figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section label="III · Collected Evidence" title="The research on file.">
          <ul className="grid sm:grid-cols-2 gap-3">
            {c.evidence.map((e, i) => (
              <li key={i} className="flex items-start gap-3 p-4 border border-ink/15">
                <span className="type-typewriter text-[11px] text-wax mt-1">EX-{String(i + 1).padStart(2, "0")}</span>
                <span className="type-serif">{e}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="IV · Prime Suspects" title="The pain points, lined up.">
          <div className="space-y-4">
            {c.suspects.map((s, i) => (
              <div key={i} className="grid md:grid-cols-[auto_1fr] gap-6 items-start p-6 bg-paper-deep/40 shadow-paper">
                <div className="type-typewriter text-[11px] uppercase tracking-widest text-wax">Suspect {String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="type-serif text-2xl">{s.name}</div>
                  <p className="mt-2 text-ink-soft">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section label="V · Crime Scene Analysis" title="The current experience.">
          <p className="type-serif text-xl leading-relaxed text-ink-soft">{c.scene}</p>
        </Section>

        <Section label="VI · Hypothesis" title="The theory of the case.">
          <p className="type-serif italic text-2xl leading-relaxed border-l-2 border-gold pl-6">{c.hypothesis}</p>
        </Section>

        <Section label="VII · Experiments" title="What we tested.">
          <ul className="space-y-3">
            {c.experiments.map((e, i) => (
              <li key={i} className="flex gap-4 p-4 border-b border-ink/15">
                <span className="type-typewriter text-wax">0{i + 1}</span>
                <span className="type-serif text-lg">{e}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label="VIII · Final Verdict" title="Case closed.">
          <div className="flex flex-wrap gap-4 mt-8">

  {c.pdfResearch && (
    <a
      href={c.pdfResearch}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-[#7C1D1D] bg-[#F7F2EA] px-5 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#7C1D1D] hover:text-[#F7F2EA]"
    >
      🗃️ Research Investigation File
    </a>
  )}

  {c.pdfUI && (
    <a
      href={c.pdfUI}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-[#7C1D1D] bg-[#F7F2EA] px-5 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#7C1D1D] hover:text-[#F7F2EA]"
    >
      📱 UI Design Investigation
    </a>
  )}

  {c.website && (
    <a
      href={c.website}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-md border border-[#7C1D1D] bg-[#F7F2EA] px-5 py-3 text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#7C1D1D] hover:text-[#F7F2EA]"
    >
      🌍 Visit Live Investigation
    </a>
  )}
</div>
          <div className="relative p-10 md:p-14 texture-leather grain rounded-sm">
            <div className="absolute top-6 right-6 stamp" style={{ color: "oklch(0.92 0.03 82)" }}>Case Closed</div>
            <p className="type-serif italic text-2xl md:text-3xl leading-snug text-paper max-w-3xl">
              {c.verdict}
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-6 border-t border-paper/20 pt-8">
              {c.metrics.map(m => (
                <div key={m.label}>
                  <div className="type-typewriter text-[10px] uppercase tracking-widest text-gold">{m.label}</div>
                  <div className="type-serif text-4xl text-paper mt-2">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Next case */}
        <div className="mt-32 border-t border-ink/20 pt-10 flex items-center justify-between flex-wrap gap-6">
          <div className="type-typewriter uppercase text-[11px] tracking-[0.3em] text-ink-soft">Next in the archive</div>
          <Link to="/cases/$slug" params={{ slug: next.slug }} className="group text-right">
            <div className="type-typewriter text-[10px] uppercase tracking-widest text-wax">Case No. {next.no}</div>
            <div className="type-serif text-2xl md:text-3xl group-hover:text-wax transition-colors flex items-center gap-3">
              {next.title} <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>

      <BureauFooter />
    </div>
  );
}
