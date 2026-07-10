import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Notebook, Camera, FolderClosed, Laptop, Mic, Search, ArrowRight } from "lucide-react";
import { useState } from "react";

const easeApple = [0.22, 1, 0.36, 1] as const;

export function WaxSeal({ onBreak }: { onBreak: () => void }) {
  const [broken, setBroken] = useState(false);
  const reduce = useReducedMotion();
  return (
    <button
      aria-label="Break the wax seal to open the case file"
      onClick={() => {
        if (broken) return;
        setBroken(true);
        setTimeout(onBreak, reduce ? 0 : 1100);
      }}
      className="relative group focus:outline-none"
    >
      <motion.div
        initial={false}
        animate={broken ? { scale: 1.05, rotate: -8 } : { scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: easeApple }}
        className="relative"
      >
        <div className="w-28 h-28 rounded-full flex items-center justify-center shadow-object relative overflow-hidden"
          style={{
            background: "radial-gradient(circle at 35% 30%, oklch(0.55 0.18 25), oklch(0.32 0.14 25) 65%, oklch(0.22 0.1 25) 100%)",
          }}>
          <span className="type-serif italic text-paper text-2xl leading-none drop-shadow">GJ</span>
          <div className="absolute inset-0 rounded-full" style={{
            background: "radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.35), transparent 40%)",
          }} />
        </div>
        <AnimatePresence>
          {broken && !reduce && (
            <>
              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                return (
                  <motion.span
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                    animate={{ x: Math.cos(angle) * 80, y: Math.sin(angle) * 80 + 20, opacity: 0, rotate: 180 }}
                    transition={{ duration: 0.9, ease: easeApple }}
                    className="absolute top-1/2 left-1/2 w-4 h-4 rounded-sm"
                    style={{ background: "oklch(0.35 0.14 25)" }}
                  />
                );
              })}
            </>
          )}
        </AnimatePresence>
      </motion.div>
      <div className="mt-6 text-center type-typewriter uppercase text-xs tracking-[0.35em] text-ink-soft group-hover:text-wax transition-colors">
        {broken ? "Opening…" : "Break Seal · Open File"}
      </div>
    </button>
  );
}

export function CaseFile({ onOpen }: { onOpen: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: easeApple }}
      className="relative texture-paper grain-fine shadow-paper max-w-2xl w-full p-10 md:p-14 rounded-sm"
      style={{ transform: "rotate(-0.4deg)" }}
    >
      <div className="absolute top-4 left-4 stamp text-[10px]">Confidential</div>
      <div className="absolute top-4 right-4 type-typewriter text-[10px] tracking-widest text-ink-soft">
        FILE No. 001 · DIB
      </div>

      <div className="mt-14 border-y-2 border-double border-ink/70 py-6">
        <div className="type-typewriter uppercase text-xs tracking-[0.4em] text-ink-soft">
          Design Investigation Bureau
        </div>
        <div className="type-typewriter uppercase text-[11px] tracking-[0.3em] text-ink-soft mt-1">
          Chief Investigator
        </div>
        <h1 className="type-serif font-black text-5xl md:text-7xl leading-[0.95] mt-3 text-ink">
          Gauri<br />Joshi
        </h1>
      </div>

      <div className="mt-6 flex items-baseline justify-between flex-wrap gap-3">
        <div>
          <div className="type-typewriter uppercase text-[11px] tracking-[0.3em] text-ink-soft">Status</div>
          <div className="type-serif italic text-xl text-ink mt-1">Available for new cases</div>
        </div>
        <div className="type-typewriter text-[11px] text-ink-soft">
          Est. 2019 · Bengaluru · Remote
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center">
        <div className="type-typewriter text-xs uppercase tracking-[0.3em] text-ink-soft mb-4">
          — Sealed by the Investigator —
        </div>
        <WaxSeal onBreak={onOpen} />
      </div>

      <div className="pointer-events-none absolute -top-3 left-8 h-6 w-24 bg-paper-deep/70 rotate-[-3deg] shadow-sm" />
      <div className="pointer-events-none absolute -top-2 right-10 h-5 w-20 bg-paper-deep/60 rotate-[4deg] shadow-sm" />
    </motion.div>
  );
}

type DeskObject = {
  key: string;
  label: string;
  sub: string;
  href: string;
  icon: typeof Notebook;
  x: string; // left
  y: string; // top
  rotate: number;
  tone: "paper" | "leather" | "metal" | "wood";
};

const deskObjects: DeskObject[] = [
  { key: "cases", label: "Case Files", sub: "Projects", href: "/cases", icon: FolderClosed, x: "12%", y: "18%", rotate: -6, tone: "paper" },
  { key: "about", label: "The Notebook", sub: "About", href: "/about", icon: Notebook, x: "62%", y: "12%", rotate: 5, tone: "leather" },
  { key: "camera", label: "Field Camera", sub: "Gallery", href: "/cases", icon: Camera, x: "78%", y: "44%", rotate: -8, tone: "metal" },
  { key: "resume", label: "MacBook", sub: "Résumé", href: "/about", icon: Laptop, x: "38%", y: "50%", rotate: 2, tone: "metal" },
  { key: "contact", label: "Voice Recorder", sub: "Request Investigation", href: "/contact", icon: Mic, x: "10%", y: "62%", rotate: 8, tone: "metal" },
  { key: "search", label: "Magnifier", sub: "Search Files", href: "/cases", icon: Search, x: "70%", y: "72%", rotate: -14, tone: "wood" },
];

function toneStyles(tone: DeskObject["tone"]) {
  switch (tone) {
    case "paper":
      return { background: "linear-gradient(135deg, oklch(0.94 0.03 82), oklch(0.88 0.045 78))", color: "var(--color-ink)", border: "1px solid oklch(0.75 0.04 70)" };
    case "leather":
      return { background: "linear-gradient(135deg, oklch(0.32 0.06 45), oklch(0.24 0.05 45))", color: "oklch(0.92 0.03 82)", border: "1px solid oklch(0.15 0.03 45)" };
    case "metal":
      return { background: "linear-gradient(135deg, oklch(0.85 0.01 250), oklch(0.68 0.008 250))", color: "var(--color-ink)", border: "1px solid oklch(0.55 0.008 250)" };
    case "wood":
      return { background: "linear-gradient(135deg, oklch(0.5 0.08 55), oklch(0.35 0.07 50))", color: "oklch(0.95 0.03 82)", border: "1px solid oklch(0.25 0.05 45)" };
  }
}

export function DetectiveDesk() {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] texture-desk grain rounded-md overflow-hidden shadow-object">
        {/* Light pool from lamp */}
        <div className="absolute inset-0 pointer-events-none flicker" style={{
          background: "radial-gradient(ellipse 60% 55% at 42% 40%, oklch(0.95 0.05 85 / 0.28), transparent 70%)",
        }} />

        {/* Coffee ring */}
        <div className="absolute z-0" style={{ left: "48%", top: "22%" }}>
          <div className="w-24 h-24 rounded-full border-4 border-cognac/40 opacity-40" />
        </div>

        {/* Blueprint sheet under */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute rounded-sm shadow-object grain-fine"
          style={{
            left: "28%", top: "28%", width: "44%", height: "48%",
            background: "repeating-linear-gradient(0deg, oklch(0.32 0.08 240) 0, oklch(0.32 0.08 240) 24px, oklch(0.38 0.09 240) 25px), repeating-linear-gradient(90deg, transparent 0, transparent 24px, oklch(0.38 0.09 240 / 0.6) 25px), oklch(0.28 0.09 240)",
            transform: "rotate(-3deg)",
          }}
        >
          <div className="absolute bottom-3 right-4 type-typewriter text-[9px] uppercase tracking-widest text-paper/70">
            Wireframe · Sheet 04
          </div>
        </motion.div>

        {/* Sticky notes */}
        <motion.div
          initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, ease: easeApple, duration: 0.6 }}
          className="absolute p-3 shadow-object type-typewriter text-[11px]"
          style={{ left: "5%", top: "8%", width: 130, height: 130, background: "oklch(0.88 0.14 95)", transform: "rotate(-8deg)", color: "var(--color-ink)" }}
        >
          "Users don't lie.<br/>They confess in behavior."
        </motion.div>

        {/* Polaroid */}
        <motion.div
          initial={{ opacity: 0, rotate: 20 }} animate={{ opacity: 1, rotate: 12 }} transition={{ delay: 0.7, duration: 0.7, ease: easeApple }}
          className="absolute bg-paper p-2 pb-6 shadow-object"
          style={{ right: "6%", top: "6%", width: 140 }}
        >
          <div className="w-full aspect-square" style={{
            background: "radial-gradient(circle at 40% 35%, oklch(0.65 0.08 40), oklch(0.28 0.04 40))",
          }} />
          <div className="type-typewriter text-[10px] text-ink-soft mt-1 text-center">Crime Scene · 03</div>
        </motion.div>

        {/* Desk objects (navigation) */}
        {deskObjects.map((obj, i) => {
          const Icon = obj.icon;
          return (
            <Link key={obj.key} to={obj.href}>
              <motion.div
                initial={{ opacity: 0, y: 12, rotate: obj.rotate }}
                animate={{ opacity: 1, y: 0, rotate: obj.rotate }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.7, ease: easeApple }}
                whileHover={{ y: -6, rotate: obj.rotate * 0.4, scale: 1.03, transition: { duration: 0.3, ease: easeApple } }}
                className="absolute group cursor-pointer"
                style={{ left: obj.x, top: obj.y, ...toneStyles(obj.tone), width: 148, borderRadius: 6 }}
              >
                <div className="p-4 shadow-object rounded-[inherit] flex items-center gap-3" style={toneStyles(obj.tone)}>
                  <Icon className="h-6 w-6 shrink-0" strokeWidth={1.4} />
                  <div>
                    <div className="type-typewriter uppercase text-[9px] tracking-[0.25em] opacity-70">{obj.sub}</div>
                    <div className="type-serif text-base leading-tight">{obj.label}</div>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 left-1/2 -translate-x-1/2 type-typewriter text-[10px] uppercase tracking-widest text-paper/80 whitespace-nowrap flex items-center gap-1">
                  Examine <ArrowRight className="h-3 w-3" />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function EvidenceFolder({
  caseNo, title, kicker, status = "Case Closed", tags, href,
}: { caseNo: string; title: string; kicker: string; status?: string; tags: string[]; href: string; }) {
  return (
    <Link to={href} className="block group">
      <motion.article
        whileHover={{ y: -6, rotate: 0 }}
        transition={{ duration: 0.4, ease: easeApple }}
        className="relative texture-paper grain-fine shadow-paper rounded-sm p-8 h-full"
        style={{ transform: "rotate(-0.3deg)" }}
      >
        <div className="absolute -top-3 left-8 h-6 w-32 bg-cognac/70 rounded-sm shadow-sm" />
        <div className="flex items-center justify-between">
          <div className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft">
            Case No. {caseNo}
          </div>
          <div className="stamp text-[9px]">{status}</div>
        </div>

        <div className="mt-8">
          <div className="type-typewriter text-xs uppercase tracking-[0.25em] text-cognac">{kicker}</div>
          <h3 className="type-serif text-3xl md:text-4xl mt-3 leading-tight text-ink group-hover:text-wax transition-colors">
            {title}
          </h3>
        </div>

        <div className="mt-8 border-t border-ink/15 pt-4 flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            {tags.map(t => (
              <span key={t} className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft border border-ink/30 px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
          <ArrowRight className="h-4 w-4 text-ink group-hover:translate-x-1 transition-transform" />
        </div>
      </motion.article>
    </Link>
  );
}
