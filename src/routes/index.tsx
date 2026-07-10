import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { DetectiveDesk, EvidenceFolder } from "@/Components/bureau";
import {SealedEnvelope} from "@/Components/envelope";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";
import { cases } from "@/lib/cases";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/")({
  component: Home,
});


function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="min-h-screen texture-paper grain-fine">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="intro"
            exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
            transition={{ duration: 0.9, ease: easeApple }}
            className="min-h-screen flex items-center justify-center px-6 py-20"
          >
            <SealedEnvelope onOpened={() => setOpened(true)} />
          </motion.section>
        ) : (
          <motion.div
            key="bureau"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.9, ease: easeApple }}
          >
            <BureauNav current="/" />

            <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
              <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-end">
                <div>
                  <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">
                    Chief Investigator's Desk
                  </div>
                  <h1 className="type-serif text-5xl md:text-7xl leading-[0.95] mt-4 text-ink">
                    Welcome to the<br/><span className="italic">Design Investigation Bureau.</span>
                  </h1>
                </div>
                <p className="type-serif text-lg leading-relaxed text-ink-soft border-l-2 border-gold pl-6">
                  Pick up an object. The notebook holds the investigator's story. The folders contain closed cases. The recorder is how you request a new investigation.
                </p>
              </div>
            </section>

            <section className="mx-auto max-w-7xl px-6">
              <DetectiveDesk />
              <div className="mt-4 flex items-center justify-between type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                <span>Fig. 01 · Overhead view · Chief Investigator's desk</span>
                <span>Hover · Examine · Click to open</span>
              </div>
            </section>

            {/* Case Files */}
            <section className="mx-auto max-w-7xl px-6 mt-32">
              <div className="flex items-end justify-between flex-wrap gap-6">
                <div>
                  <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">The Archive</div>
                  <h2 className="type-serif text-4xl md:text-6xl mt-4 text-ink">Closed Case Files</h2>
                </div>
                <Link to="/cases" className="type-typewriter uppercase text-xs tracking-[0.3em] border-b-2 border-ink pb-1 flex items-center gap-2 hover:text-wax hover:border-wax transition-colors">
                  Enter the Archive <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((c) => (
                  <EvidenceFolder key={c.slug} caseNo={c.no} title={c.title} kicker={c.kicker} tags={c.tags} href={`/cases/${c.slug}`} status={c.status} />
                ))}
              </div>
            </section>

            {/* Philosophy strip */}
            <section className="mx-auto max-w-5xl px-6 mt-40 text-center">
              <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">Standing Order · No. 1</div>
              <blockquote className="type-serif italic text-3xl md:text-5xl leading-tight mt-6 text-ink">
                "Design without research is a suspect walking free.<br/>
                Research without design is a case that never closes."
              </blockquote>
              <div className="mt-8 type-typewriter text-xs uppercase tracking-[0.3em] text-ink-soft">
                — Filed by the Chief Investigator
              </div>
            </section>

            {/* Request Investigation CTA */}
            <section className="mx-auto max-w-7xl px-6 mt-32">
              <div className="relative texture-leather grain rounded-md p-12 md:p-20 overflow-hidden">
                <div className="absolute top-6 right-6 stamp text-[10px]" style={{ color: "oklch(0.92 0.03 82)" }}>
                  Accepting Cases
                </div>
                <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-center relative z-10">
                  <div>
                    <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-gold">
                      Request Investigation
                    </div>
                    <h2 className="type-serif text-4xl md:text-6xl mt-4 text-paper leading-[1]">
                      Need help solving a<br/><span className="italic text-gold">complex user problem?</span>
                    </h2>
                    <p className="mt-6 text-paper/70 max-w-lg leading-relaxed">
                      Submit a new investigation. Every intake is read personally. Every reply comes on the record.
                    </p>
                  </div>
                  <div className="flex md:justify-end">
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-paper text-ink px-8 py-4 type-typewriter uppercase text-xs tracking-[0.3em] hover:bg-gold transition-colors shadow-object">
                      File a Case <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <BureauFooter />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
