import { createFileRoute, Link } from "@tanstack/react-router";
import {
motion,
  AnimatePresence,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, useState } from "react";

import { EvidenceFolder } from "@/Components/bureau";
import { SealedEnvelope } from "@/Components/envelope";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";
import { cases } from "@/lib/cases";

import {
  ArrowRight,
  ArrowUpRight,
  Fingerprint,
  GraduationCap,
  BriefcaseBusiness,
  UserRound,
  Move,
} from "lucide-react";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/cases/$slug")({
  component: Home,
});

/* =========================================================
   PINBOARD
   ========================================================= */

function InvestigationBoard() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [lensDragged, setLensDragged] = useState(false);

  return (
    <div className="min-w-0">
      <div
        ref={boardRef}
        className="relative isolate overflow-hidden rounded-sm border-[9px] border-[#68462f] bg-[#b18a62] p-2 shadow-[0_6px_14px_rgba(50,35,20,0.10)] sm:border-[12px] sm:p-3"
      >
        {/* Cork texture */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle, #795638 0.7px, transparent 1px),
              radial-gradient(circle, #f1d8b1 0.8px, transparent 1px)
            `,
            backgroundSize: "11px 10px",
            backgroundPosition: "0 0, 5px 4px",
          }}
        />

        <div className="pointer-events-none absolute inset-2 z-0 border border-[#e0bd91]/60" />

      <div className="relative z-10 min-h-[590px] overflow-hidden sm:min-h-[640px]">

          {/* Board header */}
          <div className="relative z-20 flex items-start justify-between gap-3 border-b border-dashed border-[#78583c]/50 px-3 py-3 sm:px-5 sm:py-4">
            <div>
              <div className="flex items-center gap-2 type-typewriter text-[8px] uppercase tracking-[0.18em] text-[#493524] sm:text-[9px] sm:tracking-[0.24em]">
                <Fingerprint size={13} />
                Design Investigation Bureau
              </div>

              <p className="mt-1 type-serif text-sm italic text-[#604831] sm:text-base">
                Personal dossier · Chief Investigator
              </p>
            </div>

            <div className="text-right type-typewriter text-[7px] uppercase leading-relaxed tracking-wider text-[#604831] sm:text-[8px]">
              Dossier No. 001
              <br />
              Subject: Gauri Joshi
            </div>
          </div>

          {/* Red investigation threads */}
          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
            viewBox="0 0 700 620"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="#a33c32"
              strokeWidth="1.7"
              strokeDasharray="5 5"
              opacity="0.85"
            >
              <path d="M120 190 C210 130 270 230 345 220" />
              <path d="M345 220 C430 160 485 180 575 215" />
              <path d="M345 220 C270 300 170 340 125 420" />
              <path d="M345 220 C400 315 470 330 520 415" />
              <path d="M125 420 C230 470 320 455 400 510" />
              <path d="M520 415 C485 470 455 495 400 510" />
              <path d="M575 215 C610 295 575 360 520 415" />
            </g>

            <g fill="#a33c32" stroke="#e5c9a4" strokeWidth="2">
              <circle cx="120" cy="190" r="4" />
              <circle cx="345" cy="220" r="4" />
              <circle cx="575" cy="215" r="4" />
              <circle cx="125" cy="420" r="4" />
              <circle cx="520" cy="415" r="4" />
              <circle cx="400" cy="510" r="4" />
            </g>
          </svg>

          {/* Subject photograph */}
        <motion.div
          initial={{ opacity: 0, rotate: -8, y: 15 }}
          animate={{ opacity: 1, rotate: -5, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute left-[3%] top-[20%] z-10 w-[39%] max-w-[225px] bg-[#f1e7d4] p-2 shadow-[0_4px_8px_rgba(40,25,15,0.13)] sm:p-3"
          >
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#e5c9a4] bg-[#a64035] shadow-sm" />

            <div className="type-typewriter text-[7px] uppercase tracking-wider text-[#a64035] sm:text-[8px]">
              Exhibit 01 · Subject
            </div>

            <div className="relative mt-2 aspect-[4/5] overflow-hidden border-[4px] border-white bg-[#d7c5a7]">
              <img
                src="/gauri-portrait.jpg"
                alt="Gauri Joshi"
            className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="flex h-full w-full items-center justify-center text-[#78583c]">
                <UserRound size={34} strokeWidth={1} />
              </div>
            </div>

            <p className="mt-2 text-center type-typewriter text-[7px] uppercase tracking-wider text-[#78583c] sm:text-[8px]">
              Chief Investigator
            </p>
          </motion.div>

          {/* Personal record */}
          <motion.div
            initial={{ opacity: 0, rotate: 6, y: 20 }}
            animate={{ opacity: 1, rotate: 3, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="absolute left-[34%] top-[28%] z-20 w-[43%] max-w-[265px] bg-[#f5ecd9] p-3 shadow-[0_5px_10px_rgba(40,25,15,0.13)] sm:p-4"
          >
            <span className="absolute -top-2 left-[48%] h-4 w-4 rounded-full border-2 border-[#e5c9a4] bg-[#c49a39] shadow-sm" />

            <div className="type-typewriter text-[7px] uppercase tracking-wider text-[#a64035] sm:text-[8px]">
              Personnel Record / 02
            </div>

            <h2 className="type-serif mt-3 text-xl italic leading-tight text-[#2d2119] sm:text-2xl">
              Gauri Joshi
            </h2>

            <p className="mt-1 type-serif text-xs text-[#78583c] sm:text-sm">
              UX & Product Designer
            </p>

            <div className="my-3 border-t border-dashed border-[#a88a66]" />

            <p className="text-[9px] leading-relaxed text-[#604831] sm:text-[10px]">
              Curious about people, patterns and the systems
              behind everyday experiences.
            </p>

            <Link
              to="/about"
              className="mt-3 flex items-center justify-between type-typewriter text-[7px] uppercase tracking-wider text-[#a64035] sm:text-[8px]"
            >
              Personal file
              <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        {/* Vadodara map */}
        <motion.div
          initial={{ opacity: 0, rotate: 9, y: 15 }}
          animate={{ opacity: 1, rotate: 6, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute right-[4%] top-[21%] z-10 w-[34%] max-w-[205px] bg-[#f0e5cd] p-3 shadow-[0_4px_8px_rgba(40,25,15,0.12)] sm:p-4"
        >
          <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#e5c9a4] bg-[#4f7890] shadow-sm" />

            <div className="type-typewriter text-[7px] uppercase tracking-wider text-[#a64035] sm:text-[8px]">
              Origin Point / 03
          </div>

          <svg
              viewBox="0 0 220 145"
              className="mt-2 w-full border border-[#c6b18b]"
              role="img"
              aria-label="Illustrated map of Vadodara, Gujarat"
            >
              <rect width="220" height="145" fill="#e5d7b8" />

              <g fill="none" stroke="#b9a27a" strokeWidth="1.2">
                <path d="M-10 30 L60 55 L110 20 L180 55 L230 25" />
                <path d="M-10 80 L50 65 L90 105 L155 85 L230 110" />
                <path d="M25 -10 L45 55 L35 100 L70 155" />
                <path d="M100 -10 L115 45 L95 100 L130 155" />
                <path d="M175 -10 L160 45 L195 90 L180 155" />
                <path d="M-10 125 L80 115 L145 130 L230 135" />
              </g>

              <g fill="none" stroke="#c09d6a" strokeWidth="4">
                <path d="M-10 70 C45 85 70 35 110 55 S180 105 230 70" />
                <path d="M75 -10 C85 35 145 60 135 155" />
              </g>

              <circle cx="112" cy="67" r="12" fill="#a64035" opacity="0.15" />
              <circle
                cx="112"
                cy="67"
                r="4"
                fill="#a64035"
                stroke="#fff7e8"
                strokeWidth="2"
              />

              <path d="M112 67 L140 43" stroke="#a64035" strokeWidth="1.3" />

              <rect
                x="135"
                y="27"
                width="76"
                height="22"
                fill="#f5ecd8"
                stroke="#a64035"
              />

              <text
                x="140"
                y="41"
                fill="#8f362d"
                fontSize="8"
                fontFamily="monospace"
              >
                VADODARA
              </text>

              <text
                x="8"
                y="136"
                fill="#78654c"
                fontSize="8"
                fontFamily="monospace"
              >
                GUJARAT · INDIA
              </text>
            </svg>

          <h3 className="mt-2 type-serif text-base italic text-[#2d2119] sm:text-lg">
              Where it began.
            </h3>

            <p className="mt-1 type-typewriter text-[7px] uppercase tracking-wider text-[#78583c] sm:text-[8px]">
            Origin file · India
            </p>
          </motion.div>

          {/* Education note */}
          <motion.div
            initial={{ opacity: 0, rotate: -3, y: 20 }}
            animate={{ opacity: 1, rotate: -2, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-[12%] left-[7%] z-20 w-[42%] max-w-[240px] bg-[#f4e5a7] p-3 shadow-[0_4px_8px_rgba(40,25,15,0.12)] sm:p-4"
          >
            <span className="absolute -top-2 right-[25%] h-4 w-4 rounded-full border-2 border-[#e5c9a4] bg-[#a64035] shadow-sm" />

            <div className="type-typewriter text-[7px] uppercase tracking-wider text-[#8f362d] sm:text-[8px]">
              Field Notes / 04
            </div>

          <div className="mt-3 flex items-start gap-2">
              <GraduationCap size={18} className="shrink-0 text-[#78583c]" />

              <div>
                <h3 className="type-serif text-sm text-[#2d2119] sm:text-base">
                  Currently investigating.
                </h3>

                <p className="mt-1 text-[9px] leading-relaxed text-[#604831] sm:text-[10px]">
                  M.Des in Intelligent User Experience Design.
                </p>

                <p className="mt-2 type-typewriter text-[7px] uppercase tracking-wider text-[#78583c] sm:text-[8px]">
                  Dhirubhai Ambani University
                </p>
              </div>
            </div>
          </motion.div>

          {/* Ideology note */}
          <motion.div
            initial={{ opacity: 0, rotate: 5, y: 20 }}
            animate={{ opacity: 1, rotate: 4, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-[7%] right-[5%] z-20 w-[39%] max-w-[225px] bg-[#f3ead9] p-3 shadow-[0_4px_8px_rgba(40,25,15,0.13)] sm:p-4"
>
              <span className="absolute -top-2 left-[42%] h-4 w-4 rounded-full border-2 border-[#e5c9a4] bg-[#c49a39] shadow-sm" />

            <div className="type-typewriter text-[7px] uppercase tracking-wider text-[#a64035] sm:text-[8px]">
                A Note to Self / 05
            </div>

            <p className="mt-3 type-serif text-base italic leading-snug text-[#2d2119] sm:text-lg">
              &ldquo;Find the real problem before designing
              the solution.&rdquo;
            </p>

            <div className="mt-3 text-right type-serif text-xs italic text-[#78583c]">
              — G.J.
            </div>
          </motion.div>

          {/* Experience slip */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, y: 20 }}
            animate={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute right-[5%] top-[51%] z-[15] w-[38%] max-w-[210px] bg-[#eee1ca] p-3 shadow-[0_4px_8px_rgba(40,25,15,0.11)] sm:p-4"
          >
            <span className="absolute -top-2 right-[35%] h-4 w-4 rounded-full border-2 border-[#e5c9a4] bg-[#a64035] shadow-sm" />

            <div className="type-typewriter text-[7px] uppercase tracking-wider text-[#a64035] sm:text-[8px]">
              Work History / 06
            </div>

            <div className="mt-3 flex items-start gap-2">
              <BriefcaseBusiness size={17} className="shrink-0 text-[#78583c]" />

            <div>
              <h3 className="type-serif text-sm text-[#2d2119] sm:text-base">
                  Design in practice.
                </h3>

                <p className="mt-2 text-[9px] leading-relaxed text-[#604831] sm:text-[10px]">
                  Healthcare experiences and children's storytelling.
                </p>

              <p className="mt-2 type-typewriter text-[7px] uppercase tracking-wider text-[#78583c] sm:text-[8px]">
                Altum Infotech
              </p>
</div>
            </div>
</motion.div>

          {/* Evidence stamp */}
          <div className="absolute left-[43%] top-[52%] z-30 rotate-[-7deg] border border-[#a64035] bg-[#f1e5d0] px-2 py-1 type-typewriter text-[7px] uppercase tracking-wider text-[#a64035] sm:text-[8px]">
            People · Patterns · Systems
          </div>
        
          {/* Draggable magnifying glass */}
          <motion.div
            drag
            dragConstraints={boardRef}
            dragElastic={0.08}
            dragMomentum={false}
            onDragStart={() => setLensDragged(true)}
            className="absolute right-[1%] top-[3%] z-40 flex cursor-grab touch-none flex-col items-center active:cursor-grabbing"
            title="Drag the magnifying glass"
          >
            <div className="h-8 w-px bg-[#6f4a2e] sm:h-10" />

            <div className="relative h-[66px] w-[66px] rounded-full border-[6px] border-[#68452d] bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.65),rgba(210,190,155,0.18)_45%,rgba(110,75,45,0.35)_100%)] shadow-[inset_0_0_5px_rgba(40,25,15,0.4),0_3px_5px_rgba(40,25,15,0.2)] sm:h-[78px] sm:w-[78px]">
              <div className="absolute inset-[5px] rounded-full border border-white/50 bg-white/10" />
              <div className="absolute left-[15%] top-[14%] h-4 w-7 rotate-[-35deg] rounded-full bg-white/50 blur-[1px]" />
            </div>

            <div className="relative -mt-1 h-[58px] w-[13px] rotate-[-35deg] rounded-full border border-[#5c3924] bg-gradient-to-r from-[#6b4329] via-[#a8784c] to-[#55341f] shadow-[2px_3px_4px_rgba(40,25,15,0.25)] sm:h-[68px]">
              <div className="absolute inset-y-2 left-[3px] w-px bg-[#d4a879]/70" />
            </div>

            {!lensDragged && (
              <div className="absolute right-full top-8 mr-2 w-24 border border-[#ad8a61] bg-[#f5ecd9] p-2 type-typewriter text-[7px] uppercase leading-relaxed tracking-wider text-[#604831]">
                <Move size={12} className="mb-1" />
                Drag to examine
              </div>
            )}
          </motion.div>

        {/* Board footer */}
          <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between gap-2 border-t border-dashed border-[#78583c]/50 bg-[#b18a62]/90 px-3 py-2 type-typewriter text-[7px] uppercase tracking-wider text-[#604831] sm:px-5 sm:text-[8px]">
            <span>D.I.B. · Personal dossier</span>
            <span>Follow the connections</span>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 type-typewriter text-[9px] uppercase tracking-[0.2em] text-ink-soft">
        <span>Fig. 01 · Chief Investigator</span>
        <span>Examine the evidence</span>
      </div>
    </div>
  );
}

/* =========================================================
   STACKED CASE FILES
   ========================================================= */

function StackedCaseFiles() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const projects = cases.slice(0, 3);

  const rotations = [-3, 2.5, -1.2];
  const offsets = [0, 28, 56];

  return (
    <section
      ref={sectionRef}
      className="relative min-w-0"
    >
      {/* Section heading */}

      <div className="mb-7 border-b border-ink/15 pb-5">
        <div className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-wax">
          Selected investigations
        </div>

        <h2 className="type-serif mt-3 text-3xl leading-tight text-ink sm:text-4xl">
          Three cases.
          <br />
          <span className="italic">Three questions.</span>
        </h2>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          Every investigation begins with a question.
          Follow the evidence, uncover the problem, and
          discover the thinking behind the solution.
        </p>
      </div>

      {/* Stack animation area */}

      <div className="relative">
        {projects.map((project, index) => (
          <StackedCaseCard
            key={project.slug}
            project={project}
            index={index}
            scrollProgress={scrollYProgress}
            rotation={rotations[index]}
            offset={offsets[index]}
          />
        ))}
      </div>

      <div className="mt-20 flex items-center justify-between gap-4 border-t border-ink/15 pt-5">
        <span className="type-typewriter text-[9px] uppercase tracking-[0.2em] text-ink-soft">
          End of selected evidence
        </span>

        <Link
          to="/cases"
          className="inline-flex items-center gap-2 border-b border-ink pb-1 type-typewriter text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:border-wax hover:text-wax"
        >
          Full archive
          <ArrowRight size={13} />
        </Link>
      </div>
    </section>
  );
}

type StackedCaseCardProps = {
  project: (typeof cases)[number];
  index: number;
  scrollProgress: MotionValue<number>;
  rotation: number;
  offset: number;
};

function StackedCaseCard({
  project,
  index,
  scrollProgress,
  rotation,
  offset,
}: StackedCaseCardProps) {
  const start = index * 0.22;
  const end = start + 0.42;

  const y = useTransform(
    scrollProgress,
    [start, end],
    [100 + index * 35, offset],
    { clamp: true }
  );

  const opacity = useTransform(
    scrollProgress,
    [start, start + 0.12, end],
    [0, 1, 1],
    { clamp: true }
  );

  const scale = useTransform(
    scrollProgress,
    [start, end],
    [0.94, 1 - index * 0.015],
    { clamp: true }
  );

  return (
    <motion.div
      style={{
        y,
        opacity,
        scale,
        rotate: rotation,
        zIndex: index + 1,
        position: "relative",
        marginTop: index === 0 ? 0 : -95,
      }}
      whileHover={{
        y: offset - 12,
        rotate: 0,
        scale: 1.015,
        zIndex: 20,
        transition: {
          duration: 0.25,
          ease: easeApple,
        },
      }}
      className="group"
    >
      <Link
        to="/cases/$slug"
        params={{ slug: project.slug }}
        className="relative block border border-[#b9a98f] bg-[#f4ecdc] p-5 shadow-[0_4px_9px_rgba(50,35,20,0.10)] transition-shadow duration-300 hover:shadow-[0_12px_22px_rgba(50,35,20,0.16)] sm:p-6"
      >
        {/* Folder tab */}
        <div
          className={`absolute -top-[9px] left-8 h-[13px] w-[76px] rounded-t-[3px] ${
            index === 1 ? "bg-[#a77a42]" : "bg-[#805b43]"
          }`}
        />

        {/* Pin */}
        <span
          className={`absolute -top-[7px] right-8 h-3.5 w-3.5 rounded-full border-2 border-[#e8ddc8] shadow-sm ${
            index === 1 ? "bg-[#c39a35]" : "bg-[#a64035]"
          }`}
        />

        {/* File metadata */}
        <div className="flex items-start justify-between gap-3">
          <span className="type-typewriter text-[9px] uppercase tracking-[0.18em] text-ink-soft">
            Case No. {project.no}
          </span>

          <span className="stamp text-[8px]">
            {project.status}
          </span>
        </div>

        <div className="mt-5 type-typewriter text-[9px] uppercase leading-relaxed tracking-[0.16em] text-[#76533b]">
          {project.kicker}
        </div>

        <h3 className="type-serif mt-2 text-2xl leading-tight text-ink transition-colors duration-200 group-hover:text-wax sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border border-ink/15 bg-[#eae0ce] px-2 py-1 type-typewriter text-[8px] uppercase leading-relaxed tracking-wider text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-ink/10 pt-3">
          <span className="type-typewriter text-[9px] uppercase tracking-[0.16em] text-wax">
              Examine case file
            </span>

            <ArrowUpRight
            size={16}
            className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
          </div>

          {/* File edge detail */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[3px] bg-[#d4c2a4]" />
      </Link>
        </motion.div>
  );
}

/* =========================================================
   HOME PAGE
   ========================================================= */

function Home() {
  const [opened, setOpened] = useState(() => {
    if (typeof window === "undefined") return false;

    return (
      window.sessionStorage.getItem("bureau-opened") === "true"
    );
  });

  const handleEnvelopeOpened = () => {
    window.sessionStorage.setItem("bureau-opened", "true");
    setOpened(true);
  };

  return (
    <div className="min-h-screen texture-paper grain-fine">
      <AnimatePresence mode="wait">
            {!opened ? (
          <motion.section
            key="intro"
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: "blur(6px)",
            }}
            transition={{
              duration: 0.9,
              ease: easeApple,
            }}
            className="flex min-h-screen items-center justify-center px-6 py-20"
          >
            <SealedEnvelope onOpened={handleEnvelopeOpened} />
          </motion.section>
        ) : (
          <motion.div
            key="bureau"
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0)",
}}
            transition={{
              duration: 0.9,
              ease: easeApple,
            }}
          >
            <BureauNav current="/" />

            {/* WELCOME HERO */}

            <section className="mx-auto max-w-7xl px-6 pb-8 pt-10 md:pb-10 md:pt-14">
              <div className="grid items-end gap-8 md:grid-cols-[1.2fr_1fr] md:gap-10">
                <div>
            <div className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-wax sm:text-[11px] sm:tracking-[0.35em]">
Chief               Investigator's Desk
            </div>

            <h1 className="type-serif mt-4 text-5xl leading-[0.95] text-ink sm:text-6xl md:text-7xl">
                    Welcome to the
                    <br />
                    <span className="italic">
                      Design Investigation
                      <br className="hidden xl:block" />
                      {" "}Bureau.
                    </span>
                  </h1>
                </div>

                <p className="type-serif border-l-2 border-gold pl-5 text-lg leading-relaxed text-ink-soft md:mb-1 md:pl-6">
                  Every designer has a story. This is mine:
                  the people I observe, the questions I ask,
                  and the systems I want to make better.
                </p>
              </div>
            </section>

            {/* PINBOARD + STACKED PROJECTS */}

            <section className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <InvestigationBoard />
              <StackedCaseFiles />
            </section>

            {/* DESIGN PHILOSOPHY */}

            <section className="mx-auto mt-28 max-w-5xl px-6 text-center md:mt-40">
              <div className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-wax sm:text-[11px] sm:tracking-[0.35em]">
                Standing Order · No. 1
              </div>

              <blockquote className="type-serif mt-6 text-3xl italic leading-tight text-ink md:text-5xl">
                    &ldquo;Design without research is a suspect
                walking free.
                <br className="hidden md:block" />
                Research without design is a case that
                never closes.&rdquo;
                  </blockquote>

                  <div className="mt-8 type-typewriter text-[10px] uppercase tracking-[0.25em] text-ink-soft sm:text-xs sm:tracking-[0.3em]">
                — Filed by the Chief Investigator
              </div>
            </section>

            {/* CONTACT CTA */}

            <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32">
              <div className="relative overflow-hidden rounded-md texture-leather p-8 shadow-object sm:p-12 md:p-20">
                <div
                  className="stamp absolute right-5 top-5 text-[9px] sm:right-6 sm:top-6 sm:text-[10px]"
                  style={{ color: "oklch(0.92 0.03 82)" }}
                >
                  Accepting Cases
                </div>
              
                <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
                  <div>
                    <div className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-gold sm:text-[11px] sm:tracking-[0.35em]">
                      Request Investigation
            </div>
          
                    <h2 className="type-serif mt-4 text-4xl leading-none text-paper sm:text-5xl md:text-6xl">
                      Need help solving a
                      <br />
                      <span className="italic text-gold">
                        complex user problem?
                      </span>
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/70 sm:text-base">
                      Submit a new investigation. Every intake
                      is read personally. Every reply comes
                      on the record.
                    </p>
          </div>
        
                <div className="flex md:justify-end">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-paper px-6 py-4 type-typewriter text-[10px] uppercase tracking-[0.2em] text-ink shadow-object transition-colors hover:bg-gold sm:px-8 sm:text-xs sm:tracking-[0.3em]"
          >
            File a Case
                      <ArrowRight size={16} />
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