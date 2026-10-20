
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SealedEnvelope } from "@/Components/envelope";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";
import { cases } from "@/lib/cases";
import { PinnedEvidenceLinks } from "@/Components/PinnedEvidenceLinks";
import {
  ArrowRight,
  ArrowUpRight,
  Linkedin,
  FileText,
  Fingerprint,
  GraduationCap,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";
import { StackedProjects } from "@/Components/stacked-projects";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/")({
  component: Home,
});

/**
 * Compact pinboard.
 * The outer board is deliberately the same height as the Case Notes card.
 * Board-only typography and pinned items are reduced; Case Notes typography
 * remains unchanged.
 */
function InvestigationBoard() {
  return (
    <div className="relative h-[468px] w-full overflow-hidden rounded-[2px] border-[9px] border-[#69452f] bg-[#a98059] p-[7px] shadow-[0_7px_16px_rgba(47,30,18,0.13)] sm:border-[10px]">
      <div
        className="relative h-full w-full overflow-hidden border border-[#795637] bg-[#c5a078]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(94,62,37,.28) .7px, transparent 1px),
            radial-gradient(circle, rgba(255,235,199,.32) .8px, transparent 1px),
            linear-gradient(135deg, rgba(255,255,255,.08), transparent 45%, rgba(83,49,26,.08))
          `,
          backgroundPosition: "0 0, 5px 4px, 0 0",
          backgroundSize: "11px 10px, 13px 12px, 100% 100%",
        }}
      >
        {/* Red threads sit behind all pinned evidence. */}
        <svg
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
          viewBox="0 0 760 430"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <g
            fill="none"
            stroke="#9f3932"
            strokeWidth="1.35"
            strokeDasharray="5 4"
            opacity=".78"
          >
            <path d="M130 105 C220 125 250 175 345 190" />
            <path d="M345 190 C425 135 475 110 590 105" />
            <path d="M345 190 C285 260 220 300 145 335" />
            <path d="M345 190 C405 255 480 295 590 330" />
            <path d="M590 105 C620 180 620 245 590 330" />
            <path d="M130 105 C105 185 105 250 145 335" />
          </g>
          <g fill="#9f3932" stroke="#f0dfc1" strokeWidth="1">
            <circle cx="130" cy="105" r="3.5" />
            <circle cx="345" cy="190" r="3.5" />
            <circle cx="590" cy="105" r="3.5" />
            <circle cx="145" cy="335" r="3.5" />
            <circle cx="590" cy="330" r="3.5" />
          </g>
        </svg>

        {/* Board header */}
        <div className="absolute inset-x-0 top-0 z-[2] flex h-[58px] items-start justify-between border-b border-dashed border-[#78583c]/60 px-3 pt-2.5 sm:px-4">
          <div>
            <div className="flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.2em] text-[#503923] sm:text-[8px]">
              <Fingerprint size={11} />
              Design Investigation Bureau
            </div>
            <p className="mt-1 font-serif text-[11px] italic leading-none text-[#63472f] sm:text-xs">
              Personal dossier · Chief Investigator
            </p>
          </div>
          <div className="text-right font-mono text-[6px] uppercase tracking-[0.13em] text-[#63472f] sm:text-[7px]">
            <div>Dossier No. 001</div>
            <div className="mt-1">Subject: Gauri Joshi</div>
          </div>
        </div>

        {/* Subject photograph */}
        <div
          className="absolute left-[3%] top-[24%] z-[4] w-[27%] -rotate-[5deg] border border-[#d5c5a5] bg-[#eee3cc] p-[7px] shadow-[2px_4px_6px_rgba(55,35,20,.2)] sm:p-2"
        >
          <span className="absolute left-1/2 top-[-7px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#ead9b8] bg-[#a63d32] shadow-sm" />
          <div className="mb-1.5 font-mono text-[6px] uppercase tracking-[0.12em] text-[#a63d32] sm:text-[7px]">
            Exhibit 01 · Subject
          </div>
          <div className="flex aspect-[4/4.2] items-center justify-center overflow-hidden border-[4px] border-white bg-[#d8c7a8] text-[#76583c] sm:border-[5px]">
            <img
              src="/gauri-portrait.jpg"
              alt="Gauri Joshi"
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

          </div>
          <p className="mt-1.5 text-center font-mono text-[6px] uppercase tracking-[0.12em] text-[#75583c] sm:text-[7px]">
            Chief Investigator
          </p>
        </div>

        {/* Name card */}
        <Link
          to="/about"
          className="absolute left-[31%] top-[30%] z-[6] w-[34%] -rotate-[1.5deg] border border-[#d4c3a4] bg-[#f0e5ce] p-2 text-[#302219] shadow-[2px_5px_8px_rgba(55,35,20,.18)] transition-transform duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.03] sm:p-2.5"
        >
          <span className="absolute left-1/2 top-[-7px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#e9d6b3] bg-[#c3942e] shadow-sm" />
          <div className="font-mono text-[6px] uppercase tracking-[0.14em] text-[#a63d32] sm:text-[7px]">
            Personnel Record / 02
          </div>
          <h2 className="mt-2 font-serif text-[clamp(15px,1.55vw,23px)] italic leading-none sm:mt-2.5">
            Gauri Joshi
          </h2>
          <p className="mt-1.5 font-serif text-[9px] leading-tight text-[#75583c] sm:text-[11px]">
            UX &amp; Product Designer
          </p>
          <div className="mt-2 border-t border-dashed border-[#bba684] pt-1.5 font-serif text-[7px] leading-[1.35] text-[#63472f] sm:text-[8px]">
            Curious about people, patterns and the systems behind everyday experiences.
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[6px] uppercase tracking-[0.1em] text-[#a63d32] sm:text-[7px]">
            Personal file <ArrowUpRight size={10} />
          </div>
        </Link>

        {/* Vadodara map */}
        <Link
          to="/about"
          aria-label="Learn about Gauri's background in Vadodara"
          className="absolute right-[4%] top-[23%] z-[3] w-[27%] rotate-[5deg] border border-[#d4c3a4] bg-[#eee3ca] p-2 shadow-[2px_4px_7px_rgba(55,35,20,.17)] transition-transform duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.03] sm:p-2.5"
        >
          <span className="absolute left-1/2 top-[-7px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#e9d6b3] bg-[#4f7180] shadow-sm" />
          <div className="font-mono text-[6px] uppercase tracking-[0.12em] text-[#a63d32] sm:text-[7px]">
            Origin Point / 03
          </div>
          <svg className="mt-1.5 w-full" viewBox="0 0 180 95" aria-label="Map marking Vadodara">
            <rect width="180" height="95" fill="#e7d9b7" />
            <g fill="none" stroke="#c1aa7b" strokeWidth="1.2">
              <path d="M-5 15 L50 28 L84 10 L125 30 L185 12" />
              <path d="M-5 55 L40 42 L75 68 L120 51 L185 67" />
              <path d="M20 -5 L38 30 L26 65 L55 100" />
              <path d="M80 -5 L85 35 L70 70 L100 100" />
              <path d="M140 -5 L125 32 L150 65 L145 100" />
              <path d="M-5 83 L55 80 L105 85 L185 87" />
              <path d="M-5 42 C35 50 65 12 98 30 S145 70 185 45" stroke="#b9955e" strokeWidth="3" />
            </g>
            <circle cx="99" cy="43" r="7" fill="#a63d32" opacity=".15" />
            <circle cx="99" cy="43" r="3.5" fill="#a63d32" stroke="#f7ecd7" strokeWidth="1.5" />
            <path d="M99 43 L119 24" stroke="#a63d32" strokeWidth="1" />
            <rect x="113" y="14" width="61" height="15" fill="#f7ecd7" stroke="#a63d32" strokeWidth=".7" />
            <text x="117" y="24" fill="#8f362d" fontSize="7" fontFamily="monospace">VADODARA</text>
            <text x="5" y="89" fill="#78654c" fontSize="6.5" fontFamily="monospace">GUJARAT · INDIA</text>
          </svg>
          <h3 className="mt-1 font-serif text-[12px] italic leading-none text-[#3c2a1d] sm:text-sm">
            Where it began.
          </h3>
          <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.08em] text-[#75583c] sm:text-[7px]">
            Origin file · India
          </p>
        </Link>

        {/* Current study note */}
        <Link
          to="/about"
          className="absolute bottom-[7%] left-[35%] z-[5] w-[31%] rotate-[2deg] border border-[#d4c3a4] bg-[#e9d6a0] p-2 shadow-[2px_4px_7px_rgba(55,35,20,.17)] transition-transform duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.03] sm:p-2.5"
        >
          <span className="absolute left-1/2 top-[-7px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#e9d6b3] bg-[#a63d32] shadow-sm" />
          <div className="font-mono text-[6px] uppercase tracking-[0.12em] text-[#a63d32] sm:text-[7px]">
            Current Investigation / 04
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <GraduationCap size={13} />
            <h3 className="font-serif text-[11px] leading-tight sm:text-[13px]">
              Currently investigating.
            </h3>
          </div>
          <p className="mt-1 font-serif text-[8px] leading-tight text-[#63472f] sm:text-[9px]">
            M.Des in Intelligent User Experience Design.
          </p>
          <p className="mt-1 font-mono text-[6px] leading-tight text-[#75583c] sm:text-[7px]">
            Dhirubhai Ambani University
          </p>
        </Link>

        {/* Work history note */}
        <Link
          to="/about"
          className="absolute bottom-[9%] left-[5%] z-[3] w-[27%] rotate-[-3deg] border border-[#d4c3a4] bg-[#f0e5ce] p-2 shadow-[2px_4px_7px_rgba(55,35,20,.17)] transition-transform duration-300 hover:z-20 hover:rotate-0 hover:scale-[1.03] sm:p-2.5"
        >
          <span className="absolute left-1/2 top-[-7px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#e9d6b3] bg-[#c3942e] shadow-sm" />
          <div className="font-mono text-[6px] uppercase tracking-[0.12em] text-[#a63d32] sm:text-[7px]">
            Work History / 05
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <BriefcaseBusiness size={12} />
            <h3 className="font-serif text-[11px] leading-tight sm:text-[13px]">
              Design in practice.
            </h3>
          </div>
          <p className="mt-1 font-serif text-[8px] leading-tight text-[#63472f] sm:text-[9px]">
            UX design · Healthcare · AI storytelling
          </p>
          <p className="mt-1 font-mono text-[6px] leading-tight text-[#75583c] sm:text-[7px]">
            Altum Infotech
          </p>
        </Link>
        

        {/* Philosophy strip */}
        <div className="absolute right-[5%] bottom-[7%] z-[7] w-[27%] rotate-[4deg] border border-[#a63d32] bg-[#f2e4c9] px-2 py-2 shadow-[2px_4px_7px_rgba(55,35,20,.16)] sm:px-2.5">
          <span className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#e9d6b3] bg-[#a63d32] shadow-sm" />
          <p className="font-mono text-[6px] uppercase tracking-[0.12em] text-[#a63d32] sm:text-[7px]">
            A note to self / 06
          </p>
          <p className="mt-1.5 font-serif text-[11px] italic leading-tight text-[#3c2a1d] sm:text-[13px]">
            “Find the real problem before designing the solution.”
          </p>
        </div>

        {/* Bottom board label */}
        <div className="absolute inset-x-0 bottom-0 z-[8] flex h-5 items-center justify-between border-t border-dashed border-[#78583c]/60 bg-[#c5a078]/90 px-3 font-mono text-[5px] uppercase tracking-[0.13em] text-[#63472f] sm:text-[6px]">
          <span>D.I.B. · Personal dossier</span>
          <span>Follow the connections</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [opened, setOpened] = useState(
    () => typeof window !== "undefined" && sessionStorage.getItem("bureau-opened") === "true"
  );

  return (
    <div className="min-h-screen texture-paper grain-fine">
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.section
            key="intro"
            exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
            transition={{ duration: 0.9, ease: easeApple }}
            className="flex min-h-screen items-center justify-center px-6 py-20"
          >
            <SealedEnvelope
              onOpened={() => {
                sessionStorage.setItem("bureau-opened", "true");
                setOpened(true);
              }}
            />
          </motion.section>
        ) : (
          <motion.div
            key="bureau"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.9, ease: easeApple }}
          >
            <BureauNav current="/" />

            {/* HERO HEADING — preserved */}
            <section className="mx-auto max-w-7xl px-6 pb-7 pt-8 md:pb-8 md:pt-9">
              <div className="grid items-end gap-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
                <div>
                  <div className="type-typewriter uppercase text-[10px] tracking-[0.35em] text-wax md:text-[11px]">
                    Chief Investigator's Desk
                  </div>
                  <h1 className="type-serif w-full max-w-none whitespace-nowrap text-3xl leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
  Welcome to the{" "}
  <span className="italic">
    Design Investigation Bureau.
  </span>
</h1>
                </div>
              
              </div>
            </section>

           {/* BOARD + CASE NOTES */}
<section className="mx-auto max-w-7xl px-6">
  <div className="grid items-stretch gap-6 lg:grid-cols-[1.15fr_0.9fr] lg:gap-7">

    {/* LEFT: INVESTIGATION BOARD */}
    <div className="min-w-0">
      <InvestigationBoard />

      <div className="mt-2 flex items-center justify-between gap-3 font-mono text-[8px] uppercase tracking-[0.18em] text-ink-soft md:text-[9px]">
        <span>Fig. 01 · Personal dossier</span>
        <span>Examine the evidence</span>
      </div>
    </div>

    {/* RIGHT: CASE NOTES + EXTERNAL RECORDS */}
    <aside className="flex min-h-[468px] flex-col rounded-md border border-ink/10 bg-paper/70 p-6 shadow-[0_4px_10px_rgba(47,30,18,0.07)] md:p-8">

      {/* Case Notes heading */}
      <div className="type-typewriter mb-5 text-[10px] uppercase tracking-[0.28em] text-wax">
        Case Notes
      </div>

      {/* Existing Case Notes content */}
      <div className="space-y-5 text-ink-soft">

        <p className="type-serif text-2xl italic text-ink">
          The bureau keeps the records close and the stories honest.
        </p>

        <p className="leading-relaxed">
          Every object carries a trail, and every trail points back to the
          people, patterns, and decisions that shaped the work.
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {[
            "Pattern mapping",
            "User interviews",
            "System signals",
            "Evidence review",
          ].map((label) => (
            <span
              key={label}
              className="type-typewriter border border-ink/10 bg-ink/5 px-2 py-2 text-[9px] uppercase tracking-[0.2em]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Closing statement */}
      <div className="mt-7 border-t border-dashed border-ink/15 pt-5">

        <p className="type-serif flex items-start gap-3 text-lg italic text-ink-soft">
          <Fingerprint className="mt-1 h-5 w-5 shrink-0 text-wax" />
          “Look closer. Ask why. Design with intention.”
        </p>

        <Link
          to="/about"
          className="type-typewriter mt-4 inline-flex items-center gap-2 border-b border-wax pb-1 text-[10px] uppercase tracking-[0.22em] text-wax transition-colors hover:text-ink"
        >
          Meet the investigator <ArrowUpRight size={13} />
        </Link>
      </div>

      {/* EXTERNAL LINKS — LOGOS ONLY */}
<div className="mt-6 flex items-center gap-5 border-t border-dashed border-ink/20 pt-5">

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/gaurijoshi23"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    title="LinkedIn"
    className="text-ink-soft transition-all duration-200 hover:-translate-y-1 hover:text-[#0A66C2]"
  >
    <Linkedin size={21} strokeWidth={1.6} />
  </a>

  {/* Behance */}
  <a
    href="https://behance.net/gaurijoshi7"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Behance"
    title="Behance"
    className="font-sans text-lg font-bold text-ink-soft transition-all duration-200 hover:-translate-y-1 hover:text-[#1769FF]"
  >
    Be
  </a>

  {/* Resume */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Resume"
    title="Resume"
    className="text-ink-soft transition-all duration-200 hover:-translate-y-1 hover:text-wax"
  >
    <FileText size={21} strokeWidth={1.6} />
  </a>

</div>

    </aside>
  </div>
</section>

            <div className="mt-12 md:mt-16">
              <StackedProjects projects={cases.slice(0, 3)} />
            </div>

            {/* TESTIMONIALS — kept outside the InvestigationBoard */}
            <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32">
              <div className="mb-10 border-b border-ink/15 pb-6">
                <div className="type-typewriter text-[10px] uppercase tracking-[0.35em] text-wax">
                  Witness Statements · 001–003
                </div>
                <div className="mt-4 grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                  <h2 className="type-serif text-4xl leading-tight text-ink md:text-6xl">
                    The people<br />
                    <span className="italic">behind the evidence.</span>
                  </h2>
                  <p className="max-w-md leading-relaxed text-ink-soft">
                    Every investigation leaves an impression. These statements record the people
                    I've collaborated with and learned from along the way.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  {
                    number: "001",
                    role: "PROJECT COLLABORATOR",
                    quote: "What stood out about working with Gauri was how much thought she put into the experience behind the design. She was always willing to explore different directions, question our initial assumptions, and push the work beyond the obvious solution. Collaborating with her made the process more thoughtful and helped us look at the problem from different perspectives.",
                    name: "Riddhi Patel",
                  },
                  {
                    number: "002",
                    role: "INTERNSHIP SUPERVISOR",
                    quote: "During her internship at Altum Infotech, Gauri demonstrated a thoughtful approach to UI/UX design, with strong attention to detail and a willingness to learn. She was receptive to feedback, collaborated well with the team, and consistently worked to align her designs with project requirements. Her curiosity and commitment to improving her work made her a valuable part of the team.",
                    name: "Rajesh Vegad, Founder, Altum Infotech",
                  },
                  {
                    number: "003",
                    role: "FACULTY / MENTOR",
                    quote: "Gauri brings curiosity and a willingness to look beyond the surface of a design problem. She is interested not only in how an interface looks, but also in the reasoning behind the decisions that shape it. Her willingness to explore ideas, question assumptions, and refine her work reflects a growing maturity in her approach to design.",
                    name: "Professor Suraj Joshi",
                  },
                ].map((item, index) => (
                  <motion.article
                    key={item.number}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -4, rotate: index === 1 ? 0.4 : -0.4 }}
                    transition={{ duration: 0.35, ease: easeApple }}
                    className="relative flex min-h-[250px] flex-col border border-ink/15 bg-[#eee4d0] p-6 shadow-[0_5px_14px_rgba(47,30,18,0.06)] md:p-7"
                  >
                    <div className="absolute right-5 top-5 h-3 w-3 rounded-full border border-[#d5c4a5] bg-[#963f34] shadow-sm" />
                    <div className="type-typewriter text-[9px] uppercase tracking-[0.25em] text-wax">
                      Statement No. {item.number}
                    </div>
                    <div className="mt-5 font-serif text-4xl italic text-[#963f34]">“</div>
                    <blockquote className="font-serif text-base italic leading-[1.65] text-ink md:text-[17px]">
                      {item.quote}
                    </blockquote>
                    <div className="mt-auto border-t border-dashed border-ink/20 pt-5">
                      <div className="type-typewriter text-[9px] uppercase tracking-[0.15em] text-ink-soft">
                        {item.role}
                      </div>
                      <div className="mt-2 font-serif text-lg text-ink">{item.name}</div>
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="mt-4 text-right type-typewriter text-[9px] uppercase tracking-[0.2em] text-ink-soft">
                Statements recorded · Bureau archive
              </div>
            </section>

            {/* OTHER EXPLORATIONS — experimental work */}
            <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32">
              <div className="mb-10 border-b border-ink/15 pb-6">
                <div className="type-typewriter text-[10px] uppercase tracking-[0.35em] text-wax">
                  Other Explorations · Experimental Evidence
                </div>
                <div className="mt-4 grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                  <h2 className="type-serif text-4xl leading-tight text-ink md:text-6xl">
                    Not every question<br />
                    <span className="italic">becomes a case file.</span>
                  </h2>
                  <p className="max-w-md leading-relaxed text-ink-soft">
                    Experiments with emerging technology, immersive worlds, and interactions
                    that move beyond the conventional screen.
                  </p>
                </div>
              </div>

              {[
                {
                  number: "EXHIBIT 01",
                  title: "Worlds Beyond the Screen",
                  category: "IMMERSIVE EXPLORATION",
                  description: "An exploration of immersive experiences, spatial storytelling, and presence.",
                  video: "/videos/immersive-exploration.mp4",
                },
                {
                  number: "EXHIBIT 02",
                  title: "Reality, Reimagined",
                  category: "AUGMENTED REALITY",
                  description: "An experiment exploring how digital interactions can extend the physical world.",
                  video: "/videos/ar-exploration.mp4",
                },
                {
                  number: "EXHIBIT 03",
                  title: "When Light Becomes Interaction",
                  category: "LIGHT & ROBOTICS",
                  description: "An experimental project exploring movement, light, and responsive behaviour.",
                  video: "/videos/light-flowing-robot.mp4",
                },
              ].map((project, index) => (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.5, delay: index * 0.07, ease: easeApple }}
                  className={`relative mb-8 border border-ink/15 bg-[#eee4d0] shadow-[0_7px_18px_rgba(47,30,18,0.07)] ${index === 1 ? "md:ml-[8%]" : ""}`}
                >
                  <div className="absolute -top-3 left-7 z-10 border border-[#80684d]/30 bg-[#d8c4a3] px-4 py-1.5 type-typewriter text-[9px] uppercase tracking-[0.2em] text-ink">
                    {project.number}
                  </div>
                  <div className="grid md:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative min-w-0 border-b border-ink/10 bg-[#28231f] md:border-b-0 md:border-r">
                      <video
                        className="aspect-video w-full object-contain"
                        controls
                        playsInline
                        preload="metadata"
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                      <div className="pointer-events-none absolute left-4 top-4 bg-[#eee4d0]/90 px-3 py-2 type-typewriter text-[9px] uppercase tracking-[0.15em] text-ink">
                        Evidence recording
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-9">
                      <div className="type-typewriter text-[9px] uppercase tracking-[0.25em] text-wax">
                        {project.category}
                      </div>
                      <h3 className="type-serif mt-4 text-3xl leading-tight text-ink md:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-4 leading-relaxed text-ink-soft">{project.description}</p>
                      <div className="mt-7 flex items-center gap-3 border-t border-dashed border-ink/20 pt-5">
                        <Fingerprint className="h-5 w-5 shrink-0 text-wax" />
                        <span className="type-typewriter text-[9px] uppercase tracking-[0.16em] text-ink-soft">
                          Experimental evidence · Filed for observation
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-ink/15 pt-5">
                <span className="type-typewriter text-[9px] uppercase tracking-[0.2em] text-ink-soft">
                  Three experiments · One curious mind
                </span>
                <span className="type-typewriter text-[9px] uppercase tracking-[0.2em] text-wax">
                  End of experimental archive
                </span>
              </div>
            </section>

            {/* Philosophy strip */}
            <section className="mx-auto mt-20 max-w-5xl px-6 text-center md:mt-32">
              <div className="type-typewriter text-[11px] uppercase tracking-[0.35em] text-wax">
                Standing Order · No. 1
              </div>
              <blockquote className="type-serif mt-6 text-3xl italic leading-tight text-ink md:text-5xl">
                “Design without research is a suspect walking free.
                <br />
                Research without design is a case that never closes.”
              </blockquote>
              <div className="type-typewriter mt-8 text-xs uppercase tracking-[0.3em] text-ink-soft">
                — Filed by the Chief Investigator
              </div>
            </section>

            {/* Contact CTA */}
            <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32">
              <div className="relative overflow-hidden rounded-md texture-leather p-9 shadow-[0_5px_14px_rgba(47,30,18,0.08)] md:p-16">
                <div
                  className="stamp absolute right-5 top-5 text-[10px] md:right-6 md:top-6"
                  style={{ color: "oklch(0.92 0.03 82)" }}
                >
                  Accepting Cases
                </div>
                <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
                  <div>
                    <div className="type-typewriter text-[11px] uppercase tracking-[0.35em] text-gold">
                      Request Investigation
                    </div>
                    <h2 className="type-serif mt-4 text-4xl leading-none text-paper md:text-6xl">
                      Need help solving a
                      <br />
                      <span className="italic text-gold">complex user problem?</span>
                    </h2>
                    <p className="mt-6 max-w-lg leading-relaxed text-paper/70">
                      Submit a new investigation. Every intake is read personally. Every reply comes on the record.
                    </p>
                  </div>
                  <div className="flex md:justify-end">
                    <Link
                      to="/contact"
                      className="type-typewriter inline-flex items-center gap-3 bg-paper px-7 py-4 text-xs uppercase tracking-[0.3em] text-ink shadow-object transition-colors hover:bg-gold"
                    >
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
