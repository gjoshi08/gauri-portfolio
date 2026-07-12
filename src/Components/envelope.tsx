import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
<img
  src="/seal.png"
  alt="Wax Seal"
/>;

const easeApple = [0.22, 1, 0.36, 1] as const;

type Stage =
  | "front"
  | "flipping"
  | "back"
  | "cracking"
  | "flapOpening"
  | "done";

/**
 * Cinematic sealed envelope opening experience.
 * Sequence:
 *  1. front — user sees the addressed front of the envelope
 *  2. flipping (700ms) — tap flips envelope in 3D
 *  3. back (300ms pause) — wax seal visible, prompts user to break
 *  4. cracking (700ms) — wax shatters
 *  5. flapOpening (800ms) — flap rotates up
 *  6. done — 500ms pause then onOpened()
 */
export function SealedEnvelope({ onOpened }: { onOpened: () => void }) {
  const [stage, setStage] = useState<Stage>("front");
  const reduce = useReducedMotion();
  const t = (ms: number) => (reduce ? 0 : ms);

  const handleFlip = () => {
    if (stage !== "front") return;
    setStage("flipping");
    setTimeout(() => setStage("back"), t(700));
  };

  const handleBreak = () => {
    if (stage !== "back") return;
    setStage("cracking");
    setTimeout(() => setStage("flapOpening"), t(700));
    setTimeout(() => setStage("done"), t(700 + 800));
    setTimeout(() => onOpened(), t(700 + 800 + 500));
  };

  const showingBack =
    stage === "back" ||
    stage === "cracking" ||
    stage === "flapOpening" ||
    stage === "done";
  const flapOpen = stage === "flapOpening" || stage === "done";

  const rotateY = showingBack ? 180 : stage === "flipping" ? 90 : 0;

  return (
    <div
      className="relative w-full flex items-center justify-center"
      style={{ perspective: 1800 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: easeApple }}
        className="relative"
        style={{ width: "min(560px, 92vw)", transformStyle: "preserve-3d" }}
      >
        {/* Flippable envelope */}
        <motion.div
          animate={{ rotateY: showingBack ? 180 : 0 }}
          transition={{ duration: 0.7, ease: easeApple }}
          onClick={handleFlip}
          className="relative"
          style={{
            aspectRatio: "1 / 0.62",
            transformStyle: "preserve-3d",
            cursor: stage === "front" ? "pointer" : "default",
          }}
        >
          {/* FRONT of envelope */}
          <div
            className="absolute inset-0 rounded-sm shadow-object grain-fine"
            style={{
              backfaceVisibility: "hidden",
              background:
                "linear-gradient(135deg, oklch(0.945 0.022 84), oklch(0.905 0.03 82))",
              border: "1px solid oklch(0.78 0.03 72)",
              boxShadow:
                "0 30px 60px -20px oklch(0.2 0.02 60 / 0.35), 0 8px 20px -8px oklch(0.2 0.02 60 / 0.25), inset 0 0 0 1px oklch(1 0 0 / 0.35)",
            }}
          >
            {/* Paper fibres */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, oklch(0.75 0.04 70 / 0.15), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.7 0.05 60 / 0.18), transparent 45%)",
              }}
            />

            {/* Bureau mark */}
            <div className="absolute top-5 left-6 right-6 flex items-start justify-between">
              <div>
                <div className="type-typewriter text-[9px] uppercase tracking-[0.4em] text-ink-soft">
                  Design Investigation Bureau
                </div>
                <div className="type-typewriter text-[9px] tracking-[0.3em] text-ink-soft/70 mt-0.5">
                  File No. DIB · 001 — Confidential Dossier
                </div>
              </div>
              <div className="stamp text-[10px]">Confidential</div>
            </div>

            {/* Addressing block */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-10 grid grid-cols-2 gap-6 text-ink">
              <div>
                <div className="type-typewriter text-[9px] uppercase tracking-[0.35em] text-ink-soft">To</div>
                <div className="type-serif italic text-xl leading-tight mt-1">The Reviewer</div>
                <div className="type-typewriter text-[9px] uppercase tracking-[0.3em] text-ink-soft mt-4">Subject</div>
                <div className="type-serif text-sm mt-0.5">Candidate Evaluation</div>
              </div>
              <div className="text-right">
                <div className="type-typewriter text-[9px] uppercase tracking-[0.35em] text-ink-soft">From</div>
                <div className="type-serif italic text-xl leading-tight mt-1">Gauri Joshi</div>
                <div className="type-typewriter text-[9px] uppercase tracking-[0.3em] text-ink-soft mt-0.5">Chief Investigator</div>
                <div className="mt-4 inline-block border border-wax/60 text-wax type-typewriter text-[9px] uppercase tracking-[0.3em] px-2 py-0.5">
                  Status · Unopened
                </div>
              </div>
            </div>

            {/* Postmark ring */}
            <div
              className="absolute bottom-5 right-6 w-24 h-24 rounded-full border border-ink-soft/40 flex items-center justify-center rotate-[-8deg] opacity-60"
              aria-hidden
            >
              <div className="type-typewriter text-[7px] uppercase tracking-[0.25em] text-ink-soft text-center leading-tight">
                DIB<br/>001
              </div>
            </div>
          </div>

          {/* BACK of envelope */}
          <div
            className="absolute inset-0 rounded-sm shadow-object grain-fine"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              background:
                "linear-gradient(135deg, oklch(0.945 0.022 84), oklch(0.905 0.03 82))",
              border: "1px solid oklch(0.78 0.03 72)",
              boxShadow:
                "0 30px 60px -20px oklch(0.2 0.02 60 / 0.35), 0 8px 20px -8px oklch(0.2 0.02 60 / 0.25), inset 0 0 0 1px oklch(1 0 0 / 0.35)",
            }}
          >
            <div
              className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, oklch(0.75 0.04 70 / 0.15), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.7 0.05 60 / 0.18), transparent 45%)",
              }}
            />
            {/* Diagonal fold seams */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top right, transparent 49.6%, oklch(0.72 0.03 70 / 0.55) 49.8%, oklch(0.72 0.03 70 / 0.55) 50.2%, transparent 50.4%), linear-gradient(to top left, transparent 49.6%, oklch(0.72 0.03 70 / 0.55) 49.8%, oklch(0.72 0.03 70 / 0.55) 50.2%, transparent 50.4%)",
                clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            {/* Triangular flap */}
            <motion.div
              initial={false}
              animate={{ rotateX: flapOpen ? -165 : 0 }}
              transition={{ duration: 0.8, ease: easeApple }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-3"
              style={{
                aspectRatio: "1 / 0.31",
                transformStyle: "preserve-3d",
                zIndex: 4,
              }}
            >
              <div
                className="absolute inset-0 grain-fine"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(0.955 0.02 84), oklch(0.9 0.03 82))",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  boxShadow:
                    "0 12px 20px -12px oklch(0.2 0.02 60 / 0.45), inset 0 1px 0 oklch(1 0 0 / 0.5)",
                  borderLeft: "1px solid oklch(0.78 0.03 72)",
                  borderRight: "1px solid oklch(0.78 0.03 72)",
                }}
              />
              <div
                className="absolute inset-x-0 top-0 h-4 pointer-events-none"
                style={{
                  background: "linear-gradient(180deg, oklch(0.2 0.02 60 / 0.18), transparent)",
                }}
              />
            </motion.div>

            {/* Wax seal — anchored at flap tip */}
            <div
              className="absolute left-1/2"
              style={{
                top: "51%)",
                transform: "translate(-50%,60%)",
                width: 150,
                height: 150,
                zIndex: 5,
                pointerEvents: stage === "back" ? "auto" : "none",
              }}
            >
              <WaxSeal
                broken={stage === "cracking" || stage === "flapOpening" || stage === "done"}
                onClick={handleBreak}
                disabled={stage !== "back"}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Instruction caption */}
      <AnimatePresence mode="wait">
        {stage === "front" && (
          <motion.div
            key="front-prompt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center pointer-events-none"
          >
            <div className="type-typewriter text-[10px] uppercase tracking-[0.45em] text-ink-soft">
              Tap the envelope to turn it over
            </div>
          </motion.div>
        )}
        {stage === "back" && (
          <motion.div
            key="back-prompt"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: easeApple }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center pointer-events-none"
          >
            <div className="type-typewriter text-[10px] uppercase tracking-[0.45em] text-wax">
              Break the seal to open your dossier
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WaxSeal({
  broken,
  onClick,
  disabled,
}: {
  broken: boolean;
  onClick: () => void;
  disabled: boolean;
}) {
  const reduce = useReducedMotion();

  const shards = [
    { x: -56, y: -28, r: -80, d: 0 },
    { x: 50, y: -36, r: 55, d: 0.02 },
    { x: -38, y: 40, r: -35, d: 0.05 },
    { x: 58, y: 34, r: 70, d: 0.04 },
    { x: -12, y: -52, r: 20, d: 0.03 },
    { x: 16, y: 54, r: -25, d: 0.06 },
    { x: -62, y: 10, r: -50, d: 0.05 },
    { x: 64, y: -6, r: 40, d: 0.03 },
  ];

  return (
    <button
      onClick={onClick}
      aria-label="Break the wax seal to open the dossier"
      disabled={disabled || broken}
      className="relative w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-wax rounded-full"
      style={{ cursor: broken || disabled ? "default" : "pointer" }}
    >
      {/* Realistic contact shadow on paper */}
      <motion.div
        initial={false}
        animate={{ opacity: broken ? 0 : 1 }}
        transition={{ duration: 0.4, ease: easeApple }}
        className="absolute rounded-full pointer-events-none"
        style={{
          inset: "8%",
          transform: "translate(3px, 8px)",
          background: "oklch(0.15 0.02 40 / 0.45)",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      />

      {/* Wax seal image */}
      <motion.img
        src={"/seal.png"}
        alt=""
        aria-hidden
        draggable={false}
        initial={false}
        animate={
          broken
            ? { scale: 1.15, opacity: 0, rotate: -6 }
            : { scale: 1, opacity: 1, rotate: 0 }
        }
        transition={{ duration: 0.7, ease: easeApple }}
        className="relative w-full h-full select-none"
        style={{
          objectFit: "contain",
          filter:
            "drop-shadow(0 3px 2px oklch(0.15 0.05 25 / 0.55)) drop-shadow(0 6px 8px oklch(0.15 0.05 25 / 0.35))",
        }}
      />

      {/* Shards */}
      <AnimatePresence>
        {broken && !reduce &&
          shards.map((s, i) => (
            <motion.span
              key={i}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
              animate={{
                x: s.x,
                y: s.y + 28,
                rotate: s.r,
                opacity: 0,
                scale: 0.8,
              }}
              transition={{ duration: 0.7, ease: easeApple, delay: s.d }}
              className="absolute top-1/2 left-1/2"
              style={{
                width: 14 + (i % 3) * 4,
                height: 10 + (i % 2) * 6,
                marginLeft: -7,
                marginTop: -5,
                background:
                  "linear-gradient(135deg, oklch(0.42 0.15 25), oklch(0.24 0.09 25))",
                clipPath:
                  i % 2 === 0
                    ? "polygon(0 20%, 40% 0, 100% 30%, 80% 100%, 20% 90%)"
                    : "polygon(10% 0, 90% 10%, 100% 70%, 50% 100%, 0 60%)",
                boxShadow: "inset 0 -2px 3px oklch(0.15 0.05 25 / 0.6)",
              }}
            />
          ))}
      </AnimatePresence>
    </button>
  );
}