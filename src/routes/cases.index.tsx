import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";
import { EvidenceFolder } from "@/Components/bureau";
import { cases } from "@/lib/cases";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/cases/")({
  head: () => ({
    meta: [
      { title: "Case Files — Gauri Joshi" },
      { name: "description", content: "The archive of closed UX case files investigated by Gauri Joshi." },
      { property: "og:title", content: "Case Files — Gauri Joshi" },
      { property: "og:description", content: "Every project is a case. Every solution closes it." },
    ],
  }),
  component: CasesIndex,
});

function CasesIndex() {
  return (
    <div className="min-h-screen texture-paper grain-fine">
      <BureauNav current="/cases" />
      <motion.section
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeApple }}
        className="mx-auto max-w-7xl px-6 pt-20"
      >
        <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">The Archive · Room 04</div>
        <h1 className="type-serif text-5xl md:text-7xl mt-4 leading-[0.95] text-ink max-w-3xl">
          Closed <span className="italic">Case Files.</span>
        </h1>
        <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
          Every folder holds a real investigation — witnesses, evidence, suspects and verdict. Nothing is dramatized. Details are anonymized where a client's identity is confidential.
        </p>
      </motion.section>

      <section className="mx-auto max-w-7xl px-6 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c) => (
            <EvidenceFolder key={c.slug} caseNo={c.no} title={c.title} kicker={c.kicker} tags={c.tags} href={`/cases/${c.slug}`} status={c.status} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 mt-20 text-center">
        <Link to="/contact" className="type-typewriter uppercase text-xs tracking-[0.3em] border-b-2 border-ink pb-1 hover:text-wax hover:border-wax transition-colors">
          Don't see your problem here? File a new case →
        </Link>
      </div>
      <BureauFooter />
    </div>
  );
}
