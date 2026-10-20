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

      {/* ABOUT — INVESTIGATOR PROFILE */}
<section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
  <div className="relative border border-ink/15 bg-[#eee4d0] p-6 shadow-[0_8px_24px_rgba(47,30,18,0.08)] md:p-12 lg:p-16">

    {/* TWO-COLUMN PROFILE LAYOUT */}
    <div className="grid items-center gap-10 md:grid-cols-[260px_minmax(0,1fr)] md:gap-14">

      {/* LEFT COLUMN — PINNED PHOTOGRAPH */}
      <div className="relative mx-auto w-full max-w-[260px] translate-y-6 rotate-[-3deg] transition-transform duration-300 hover:rotate-0 md:translate-y-6">

        {/* Photograph backing */}
        <div className="relative border border-[#c9b695] bg-[#eee3cc] p-3 pb-8 shadow-[3px_8px_16px_rgba(47,30,18,0.18)]">

          {/* Red pushpin */}
          <div className="absolute left-1/2 top-[-9px] z-20 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-[#c9a78a] bg-[#963f34] shadow-[1px_3px_4px_rgba(47,30,18,0.3)]">
            <div className="absolute left-[4px] top-[3px] h-1 w-1 rounded-full bg-white/60" />
          </div>

          {/* Evidence label */}
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#963f34]">
              Exhibit 01
            </span>

            <span className="font-mono text-[8px] uppercase tracking-widest text-[#75583c]">
              Subject
            </span>
          </div>

          {/* Portrait */}
          <div className="aspect-[4/5] overflow-hidden border-[5px] border-white bg-[#d8c7a8] shadow-inner">
            <img
              src="/gauri-portrait.jpg"
              alt="Gauri Joshi — Chief Investigator"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — PROFILE INFORMATION */}
      <div className="relative">

        {/* Design clearance stamp */}
        <div className="mb-8 flex justify-end">
          <div className="rotate-[-6deg] border border-[#963f34] p-1">
            <div className="border border-[#963f34]/60 px-4 py-2 type-typewriter text-[9px] uppercase tracking-[0.2em] text-[#963f34]">
              PROFILE VERIFIED
            </div>
          </div>
        </div>

        {/* Section label */}
        <p className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-red-800">
          Chief Investigator's Profile
        </p>

        {/* Name */}
        <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Gauri <em>Joshi</em>
        </h1>

        {/* Introduction */}
        <p className="mt-5 max-w-xl font-serif text-lg italic leading-relaxed text-ink sm:text-xl">
          UX designer who treats every project as an unsolved case and
          refuses to close the file until the user's problem is genuinely gone.
        </p>

        {/* Divider */}
        <div className="my-8 border-t border-ink/20" />

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">

          <div>
            <p className="type-typewriter text-[8px] uppercase tracking-[0.12em] text-ink-soft sm:text-[10px]">
              Cases Closed
            </p>

            <p className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
              6+
            </p>
          </div>

          <div>
            <p className="type-typewriter text-[8px] uppercase tracking-[0.12em] text-ink-soft sm:text-[10px]">
              Design Tools
            </p>

            <p className="mt-2 font-serif text-3xl text-ink sm:text-4xl">
              8+
            </p>
          </div>

          <div>
            <p className="type-typewriter text-[8px] uppercase tracking-[0.12em] text-ink-soft sm:text-[10px]">
              Current Role
            </p>

            <p className="mt-2 font-serif text-xl leading-tight text-ink sm:text-2xl">
              UX Designer
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      <div className="mx-auto max-w-5xl px-6 -mt-8">
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
          Research design · Interviewing · Journey mapping · Information architecture · Interaction design · Prototyping · Design systems
        </Block>

        <Block label="VI · Instruments" title="Standard kit.">
          Figma · Framer · Adobe Photoshop · Adobe Illustrator · Adobe Indesign · Autocad · Sketchup · Enscape · a good notebook and a decent pen.
        </Block>

        <Block label="VII · Fun Facts" title="Off the record.">
          Watches three detective movies a month. Drinks her coffee black. Believes the best design critique happens on a long walk.
        </Block>
      
      </div>

      <BureauFooter />
    </div>
  );
}
