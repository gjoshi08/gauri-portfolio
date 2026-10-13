import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Chief Investigator's Profile — Gauri Joshi" },
      { name: "description", content: "Mission, experience, philosophy and tools of UX Investigator Gauri Joshi." },
      { property: "og:title", content: "Chief Investigator's Profile — Gauri Joshi" },
      { property: "og:description", content: "The investigator behind the Design Investigation Bureau." },
    ],
  }),
  component: About,
});

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, ease: easeApple }}
      className="mt-20 grid md:grid-cols-[220px_1fr] gap-8"
    >
      <div>
        <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">{label}</div>
        <h2 className="type-serif text-3xl mt-3 leading-tight">{title}</h2>
      </div>
      <div className="type-serif text-lg leading-relaxed text-ink-soft">{children}</div>
    </motion.section>
  );
}

function About() {
  return (
    <div className="min-h-screen texture-paper grain-fine">
      <BureauNav current="/about" />

      {/* Dossier hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easeApple }}
          className="relative texture-paper grainfine shadow-paper p-10 md:p-16 rounded-sm"
        >
          <div className="absolute top-6 right-6 stamp text-[10px]">DESIGN CLEARANCE</div>
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
            <div className="w-40 aspect\[3/4] shadow-object relative overflow-hidden" style={{
              background: "linear-gradient(135deg, oklch(0.45 0.05 60), oklch(0.28 0.03 60))",
            }}>
              <div className="absolute inset-3 border border-paper/30" />
              <div className="absolute bottom-2 left-2 right-2 type-typewriter text-[9px] text-paper/70 uppercase tracking-widest">ID · 0001 · DIB</div>
            </div>
            <div>
              <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-ink-soft">
                Chief Investigator's Profile
              </div>
              <h1 className="type-serif text-5xl md:text-7xl leading-[0.95] mt-3">
                Gauri <span className="italic">Joshi</span>
              </h1>
              <p className="mt-6 type-serif italic text-xl text-ink-soft leading-relaxed max-w-lg">
                UX designer who treats every project as an unsolved case — and refuses to close the file until the user's problem is genuinely gone.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/15 pt-6 max-w-xl">
                <div>
                  <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Cases Closed</div>
                  <div className="type-serif text-3xl mt-1">6+</div>
                </div>
                <div>
                  <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Design Tools</div>
                  <div className="type-serif text-3xl mt-1">8+</div>
                </div>
                <div>
                  <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Current Role</div>
                  <div className="type-serif text-3xl mt-1">UX Designer</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-5xl px-6">
        <Block label="I · Mission" title="Investigate the user. Design the answer.">
          I believe every successful digital product begins by understanding people rather than assumptions.My process combines UX research, interaction design, service design and visual thinking to uncover real user needs and translate them into intuitive digital experiences.Every project is approached like an investigation where evidence guides every design decision.
        </Block>

        <Block label="II · Experience" title="Field Assignments.">
          <ul className="space-y-5 not-italic type-serif">
            <li className="grid grid-cols-[120px_1fr] gap-4">
              <span className="type-typewriter text-sm text-wax">Jun 2025 — Now</span>
              <span>
              <strong>UX Designer</strong><br/>
              Altum Infotech (Remote)<br/>
              Designed healthcare and AI-powered children's storytelling products from research through high-fidelity prototypes.
              </span>
              </li>
              </ul>
              </Block>

        <Block label="III · Education" title="Formal training on record.">
          M.Des · Intelligent User Experience Design, DAU · Gandhinagar<br />
          B.Des · Interior Design, Navrachna University
        </Block>

        <Block label="IV · Design Philosophy" title="Operating Principles">
          <ol className="list-decimal pl-6 space-y-3 not-italic type-serif">
            <li>Users reveal problems.Design reveals solutions.</li>
            <li>Research without design is a case that never closes.</li>
            <li>Every screen should answer three questions: where am I, what can I do, what happens next.</li>
            <li>Beauty is not decoration. It is trust, rendered.</li>
          </ol>
        </Block>

        <Block label="V · Strengths" title="Tools of the trade.">
          Research design · Interviewing · Journey mapping · Information architecture · Interaction design · Prototyping · Design systems · Accessibility (WCAG 2.2) · Workshop facilitation
        </Block>

        <Block label="VI · Instruments" title="Standard kit.">
          Figma · Framer · Adobe Photoshop · Adobe Illustrator · Adobe Indesign · a good notebook and a decent pen.
        </Block>

        <Block label="VII · Fun Facts" title="Off the record.">
          Watches three detective movies a month. Drinks her coffee black. Believes the best design critique happens on a long walk.
        </Block>
      </div>

      <BureauFooter />
    </div>
  );
}
