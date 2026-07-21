import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Search, X, ArrowRight } from "lucide-react";
import walnutAsset from "@/public/walnut.jfif";
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

type NavKey = "cases" | "about" | "resume" | "gallery" | "contact" | "search";

type NavAction =
  | { type: "link"; href: string }
  | { type: "external"; href: string }
  | { type: "search" };

const NAV: Record<NavKey, { label: string; sub: string; action: NavAction }> = {
  cases:   { label: "Case Files",      sub: "Projects", action: { type: "link", href: "/cases" } },
  about:   { label: "The Notebook",    sub: "About",    action: { type: "link", href: "/about" } },
  resume:  { label: "MacBook",         sub: "Résumé",   action: { type: "external", href: "/resume.pdf" } },
  gallery: { label: "Field Photograph", sub: "Gallery",  action: { type: "external", href: "/gallery" } },
  contact: { label: "Voice Recorder",  sub: "Contact",  action: { type: "link", href: "/contact" } },
  search:  { label: "Magnifier",       sub: "Search",   action: { type: "search" } },
};

function Interactive({
  nav,
  onSearch,
  className,
  style,
  children,
  hoverLift = -4,
}: {
  nav: NavKey;
  onSearch: () => void;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  hoverLift?: number;
}) {
  const meta = NAV[nav];
  const inner = (
    <motion.div
      whileHover={{ y: hoverLift, transition: { duration: 0.35, ease: easeApple } }}
      className={`group absolute ${className ?? ""}`}
      style={style}
      title={`${meta.sub} — ${meta.label}`}
    >
      {children}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity type-typewriter text-[9px] uppercase tracking-[0.3em] text-paper/85 whitespace-nowrap flex items-center gap-1">
        {meta.sub} <ArrowRight className="h-3 w-3" />
      </div>
    </motion.div>
  );
  if (meta.action.type === "link") return <Link to={meta.action.href} className="contents">{inner}</Link>;
  if (meta.action.type === "external") return <a href={meta.action.href} target="_blank" rel="noopener noreferrer" className="contents">{inner}</a>;
  return <button type="button" onClick={onSearch} className="contents text-left">{inner}</button>;
}

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: easeApple },
});

export function DetectiveDesk() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const openSearch = () => setSearchOpen(true);

  return (
    <div className="relative w-full">
      <div
        className="relative w-full aspect-[16/10] rounded-md overflow-hidden shadow-object"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/walnut.jfif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Warm lamp pool from upper-right */}
        <div
          className="absolute inset-0 pointer-events-none flicker"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 78% 22%, oklch(0.95 0.09 78 / 0.42), transparent 60%)",
          }}
        />
        {/* Vignette + dark corners */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 50% 55%, transparent 55%, oklch(0.08 0.02 40 / 0.75) 100%)",
          }}
        />
        {/* Fine grain */}
        <div className="absolute inset-0 pointer-events-none grain-fine opacity-60" />

        {/* ============ CENTER — Large blueprint ============ */}
        <motion.div
          {...fadeIn(0.15)}
          className="absolute shadow-object grain-fine"
          style={{
            left: "26%", top: "22%", width: "48%", height: "58%",
            transform: "rotate(-2.5deg)",
            background:
              "repeating-linear-gradient(0deg, transparent 0 28px, oklch(0.55 0.11 240 / 0.55) 28px 29px), repeating-linear-gradient(90deg, transparent 0 28px, oklch(0.55 0.11 240 / 0.55) 28px 29px), linear-gradient(180deg, oklch(0.3 0.09 245), oklch(0.24 0.09 245))",
          }}
        >
          <div className="absolute top-3 left-4 type-typewriter text-[10px] uppercase tracking-[0.35em] text-paper/80">
            Blueprint · Sheet 04 / DIB
          </div>
          <div className="absolute bottom-3 right-4 type-typewriter text-[10px] uppercase tracking-widest text-paper/70">
            Scale 1:50 · Confidential
          </div>
          {/* Faint architectural lines */}
          <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 400 240" preserveAspectRatio="none">
            <rect x="60" y="50" width="180" height="130" fill="none" stroke="oklch(0.85 0.08 220)" strokeWidth="0.8" />
            <rect x="90" y="70" width="60" height="45" fill="none" stroke="oklch(0.85 0.08 220)" strokeWidth="0.6" />
            <rect x="160" y="90" width="70" height="80" fill="none" stroke="oklch(0.85 0.08 220)" strokeWidth="0.6" />
            <line x1="240" y1="50" x2="330" y2="50" stroke="oklch(0.85 0.08 220)" strokeWidth="0.6" strokeDasharray="3 3" />
            <line x1="240" y1="115" x2="330" y2="115" stroke="oklch(0.85 0.08 220)" strokeWidth="0.6" strokeDasharray="3 3" />
            <circle cx="290" cy="150" r="18" fill="none" stroke="oklch(0.85 0.08 220)" strokeWidth="0.6" />
          </svg>
        </motion.div>

        {/* Investigation paper overlapping blueprint */}
        <motion.div
          {...fadeIn(0.25)}
          className="absolute texture-paper grain-fine shadow-object"
          style={{ left: "42%", top: "40%", width: "22%", height: "26%", transform: "rotate(6deg)" }}
        >
          <div className="p-3 type-typewriter text-[9px] text-ink-soft leading-relaxed">
            <div className="stamp text-[9px] inline-block mb-1">Confidential</div>
            <div>Subject hesitates at step 03.</div>
            <div>Revise affordance. Retest Tues.</div>
            <div className="mt-2 opacity-60">— G.J.</div>
          </div>
        </motion.div>

        {/* Small torn note overlapping */}
        <motion.div
          {...fadeIn(0.3)}
          className="absolute texture-paper grain-fine shadow-object"
          style={{ left: "34%", top: "62%", width: "16%", height: "16%", transform: "rotate(-8deg)" }}
        >
          <div className="p-2 type-typewriter text-[9px] text-ink-soft">
            evidence log<br />— missing tap<br />— unclear label
          </div>
        </motion.div>

        {/* ============ UPPER LEFT — sticky, folder, pens, coffee ============ */}
        {/* Sticky note */}
        <motion.div
          {...fadeIn(0.2)}
          className="absolute p-3 shadow-object type-typewriter text-[11px]"
          style={{
            left: "3%", top: "4%", width: 118, height: 118,
            background: "oklch(0.88 0.14 95)",
            transform: "rotate(-7deg)",
            color: "var(--color-ink)",
          }}
        >
          "Users don't lie.<br />They confess<br />in behavior."
        </motion.div>

        {/* Folder — Cases (interactive) */}
        <Interactive nav="cases" onSearch={openSearch}
          className=""
          style={{ left: "12%", top: "20%", width: "22%", height: "26%", transform: "rotate(-6deg)" }}>
          <div className="relative w-full h-full shadow-object"
            style={{
              background: "linear-gradient(135deg, oklch(0.6 0.11 60), oklch(0.42 0.09 55))",
              border: "1px solid oklch(0.25 0.06 45)",
              borderRadius: "2px 8px 2px 2px",
            }}>
            <div className="absolute -top-2 left-6 h-4 w-24 rounded-t-md"
              style={{ background: "linear-gradient(135deg, oklch(0.58 0.11 60), oklch(0.4 0.09 55))" }} />
            <div className="absolute top-3 left-4 stamp text-[9px]">Case Files</div>
            <div className="absolute bottom-3 left-4 type-typewriter text-[10px] uppercase tracking-[0.3em] text-paper/85">
              Dossiers · 12
            </div>
            {/* peeking page */}
            <div className="absolute -bottom-1 right-3 h-8 w-16 texture-paper shadow-sm" style={{ transform: "rotate(4deg)" }} />
          </div>
        </Interactive>

        {/* Pens (crossed) */}
        <motion.div {...fadeIn(0.35)} className="absolute" style={{ left: "6%", top: "44%", width: 150, height: 8, transform: "rotate(28deg)" }}>
          <div className="w-full h-full rounded-full shadow-object"
            style={{ background: "linear-gradient(90deg, oklch(0.22 0.02 40) 0 12%, oklch(0.35 0.05 40) 12% 90%, oklch(0.75 0.14 70) 90%)" }} />
        </motion.div>
        <motion.div {...fadeIn(0.38)} className="absolute" style={{ left: "5%", top: "48%", width: 140, height: 7, transform: "rotate(-14deg)" }}>
          <div className="w-full h-full rounded-full shadow-object"
            style={{ background: "linear-gradient(90deg, oklch(0.55 0.15 25) 0 88%, oklch(0.85 0.02 90) 88% 96%, oklch(0.22 0.02 40) 96%)" }} />
        </motion.div>

        {/* Coffee mug (upper-left decorative) */}
        <motion.div {...fadeIn(0.4)}
          className="absolute rounded-full shadow-object flex items-center justify-center"
          style={{
            left: "20%", top: "50%", width: 72, height: 72,
            background: "radial-gradient(circle at 40% 35%, oklch(0.9 0.02 82), oklch(0.7 0.02 82) 70%, oklch(0.5 0.03 60) 100%)",
            border: "1px solid oklch(0.4 0.03 50)",
          }}>
          <div className="w-14 h-14 rounded-full"
            style={{ background: "radial-gradient(circle at 45% 40%, oklch(0.32 0.06 40), oklch(0.15 0.04 30) 80%)" }} />
        </motion.div>
        {/* coffee stain ring */}
        <div className="absolute rounded-full pointer-events-none"
          style={{ left: "23%", top: "72%", width: 90, height: 20, border: "3px solid oklch(0.35 0.08 40 / 0.35)", borderRadius: "50%", transform: "rotate(-8deg)" }} />

        {/* ============ UPPER RIGHT — leather notebook, lamp, laptop, photos ============ */}
        {/* Lamp glow disc (top-right corner) */}
        <motion.div {...fadeIn(0.15)}
          className="absolute rounded-full shadow-object"
          style={{
            right: "4%", top: "3%", width: 90, height: 90,
            background: "radial-gradient(circle at 50% 50%, oklch(0.95 0.14 85), oklch(0.72 0.16 75) 55%, oklch(0.4 0.1 60) 100%)",
            boxShadow: "0 0 60px 20px oklch(0.9 0.12 80 / 0.45)",
          }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ right: "7%", top: "10%", width: 60, height: 60, background: "radial-gradient(circle, oklch(1 0.05 85 / 0.6), transparent 70%)" }} />

        {/* Laptop — Resume (interactive) */}
        <Interactive nav="resume" onSearch={openSearch}
          style={{ right: "18%", top: "8%", width: "22%", height: "22%", transform: "rotate(4deg)" }}>
          <div className="relative w-full h-full rounded-md shadow-object"
            style={{
              background: "linear-gradient(135deg, oklch(0.82 0.006 250), oklch(0.62 0.006 250))",
              border: "1px solid oklch(0.4 0.006 250)",
            }}>
            <div className="absolute inset-2 rounded-sm"
              style={{ background: "linear-gradient(180deg, oklch(0.12 0.02 250), oklch(0.06 0.02 250))" }}>
              <div className="p-2 type-typewriter text-[8px] text-paper/70 leading-tight">
                <div>&gt; gauri --resume</div>
                <div>loading dossier…</div>
                <div className="opacity-60">// 2019 → present</div>
              </div>
            </div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-ink/40" />
          </div>
        </Interactive>

        {/* Leather notebook — About (interactive) */}
        <Interactive nav="about" onSearch={openSearch}
          style={{ right: "3%", top: "34%", width: "20%", height: "26%", transform: "rotate(-5deg)" }}>
          <div className="relative w-full h-full rounded-sm shadow-object grain-fine"
            style={{
              background: "linear-gradient(135deg, oklch(0.32 0.06 40), oklch(0.2 0.05 35))",
              border: "1px solid oklch(0.12 0.03 35)",
            }}>
            <div className="absolute inset-2 border border-paper/20 rounded-sm" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="type-typewriter text-[9px] uppercase tracking-[0.35em] text-paper/70">Chief Investigator</div>
              <div className="type-serif italic text-paper text-2xl mt-2">Gauri</div>
              <div className="type-typewriter text-[10px] text-paper/60 mt-1">— Notebook —</div>
            </div>
            {/* elastic band */}
            <div className="absolute top-0 bottom-0 right-6 w-[3px] bg-ink/60" />
          </div>
        </Interactive>

        {/* Photographs stack — Gallery (interactive) */}
        <Interactive nav="gallery" onSearch={openSearch}
          style={{ right: "22%", top: "32%", width: 150, height: 170 }}>
          {/* back photo */}
          <div className="absolute inset-0 bg-paper p-2 pb-5 shadow-object" style={{ transform: "rotate(-10deg)" }}>
            <div className="w-full aspect-square" style={{ background: "radial-gradient(circle at 30% 30%, oklch(0.6 0.08 40), oklch(0.2 0.03 30))" }} />
            <div className="type-typewriter text-[9px] text-ink-soft mt-1 text-center">Field · 01</div>
          </div>
          {/* front photo */}
          <div className="absolute inset-0 bg-paper p-2 pb-5 shadow-object" style={{ transform: "rotate(8deg) translate(12px, 8px)" }}>
            <div className="w-full aspect-square" style={{ background: "radial-gradient(circle at 55% 40%, oklch(0.7 0.1 80), oklch(0.28 0.05 40))" }} />
            <div className="type-typewriter text-[9px] text-ink-soft mt-1 text-center">Field · 03</div>
          </div>
        </Interactive>

        {/* paper clip near photos */}
        <div className="absolute rounded-md border-[2.5px] border-slate-300/70 pointer-events-none"
          style={{ right: "20%", top: "30%", width: 20, height: 38, transform: "rotate(22deg)" }} />

        {/* ============ BOTTOM LEFT — voice recorder + papers ============ */}
        {/* Papers */}
        <motion.div {...fadeIn(0.3)}
          className="absolute texture-paper grain-fine shadow-object"
          style={{ left: "4%", bottom: "6%", width: "20%", height: "30%", transform: "rotate(-4deg)" }}>
          <div className="p-3 type-typewriter text-[9px] text-ink-soft leading-relaxed">
            <div className="uppercase tracking-widest">Transcript · 07</div>
            <div className="mt-2 opacity-70">
              — could not find the button<br />
              — thought it was disabled<br />
              — gave up after 40s<br />
              — returned via search
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeIn(0.35)}
          className="absolute texture-paper grain-fine shadow-object"
          style={{ left: "14%", bottom: "10%", width: "16%", height: "22%", transform: "rotate(6deg)" }}>
          <div className="p-2 type-typewriter text-[9px] text-ink-soft">
            <div className="stamp text-[9px] inline-block mb-1">Reviewed</div>
            <div>notes · session 12</div>
          </div>
        </motion.div>

        {/* Voice recorder — Contact (interactive) */}
        <Interactive nav="contact" onSearch={openSearch}
          style={{ left: "22%", bottom: "8%", width: 110, height: 160, transform: "rotate(-14deg)" }}>
          <div className="relative w-full h-full rounded-md shadow-object"
            style={{
              background: "linear-gradient(180deg, oklch(0.32 0.02 250), oklch(0.18 0.02 250))",
              border: "1px solid oklch(0.1 0.02 250)",
            }}>
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-10 rounded-sm"
              style={{ background: "linear-gradient(180deg, oklch(0.7 0.09 140), oklch(0.4 0.08 140))" }}>
              <div className="p-1 type-typewriter text-[8px] text-ink">REC · 00:42</div>
            </div>
            <div className="absolute top-16 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_oklch(0.6_0.2_25)]" />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 grid grid-cols-3 gap-1">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-sm" style={{ background: "oklch(0.5 0.01 250)" }} />
              ))}
            </div>
            <div className="absolute top-1/2 -right-1 w-1 h-10 rounded-full bg-paper/30" />
          </div>
        </Interactive>

        {/* Rubber stamp */}
        <motion.div {...fadeIn(0.45)}
          className="absolute rounded-sm shadow-object"
          style={{ left: "30%", bottom: "4%", width: 46, height: 60, transform: "rotate(18deg)",
            background: "linear-gradient(180deg, oklch(0.42 0.08 40) 0 55%, oklch(0.28 0.06 40) 55% 65%, oklch(0.75 0.06 60) 65%)" }}>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 type-typewriter text-[7px] text-ink/70">DIB</div>
        </motion.div>

        {/* ============ BOTTOM RIGHT — magnifier, calculator, notebook, coffee ============ */}
        {/* Small notebook */}
        <motion.div {...fadeIn(0.3)}
          className="absolute rounded-sm shadow-object"
          style={{ right: "20%", bottom: "8%", width: 140, height: 100, transform: "rotate(-6deg)",
            background: "linear-gradient(135deg, oklch(0.35 0.08 25), oklch(0.22 0.06 25))",
            border: "1px solid oklch(0.12 0.04 25)" }}>
          <div className="absolute inset-2 border border-paper/15 rounded-sm" />
          <div className="absolute bottom-2 left-3 type-typewriter text-[9px] text-paper/60 uppercase tracking-widest">Field Log</div>
        </motion.div>

        {/* Calculator */}
        <motion.div {...fadeIn(0.35)}
          className="absolute rounded-sm shadow-object p-1.5"
          style={{ right: "6%", bottom: "22%", width: 78, height: 108, transform: "rotate(8deg)",
            background: "linear-gradient(180deg, oklch(0.32 0.02 250), oklch(0.2 0.02 250))",
            border: "1px solid oklch(0.1 0.02 250)" }}>
          <div className="w-full h-6 rounded-sm mb-1 flex items-center justify-end px-1 type-typewriter text-[9px] text-ink"
            style={{ background: "oklch(0.75 0.09 140)" }}>1,204.50</div>
          <div className="grid grid-cols-4 gap-[3px]">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="aspect-square rounded-[2px]" style={{ background: "oklch(0.55 0.01 250)" }} />
            ))}
          </div>
        </motion.div>

        {/* Ruler */}
        <motion.div {...fadeIn(0.4)}
          className="absolute shadow-object"
          style={{ right: "18%", bottom: "30%", width: 180, height: 14, transform: "rotate(24deg)",
            background: "linear-gradient(180deg, oklch(0.88 0.1 90), oklch(0.72 0.12 85))",
            border: "1px solid oklch(0.45 0.08 60)" }}>
          <div className="absolute inset-0 flex justify-between px-1 items-end pb-0.5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-px h-2 bg-ink/60" />
            ))}
          </div>
        </motion.div>

        {/* Coffee cup (bottom-right) */}
        <motion.div {...fadeIn(0.42)}
          className="absolute rounded-full shadow-object flex items-center justify-center"
          style={{
            right: "3%", bottom: "6%", width: 66, height: 66,
            background: "radial-gradient(circle at 40% 35%, oklch(0.88 0.02 82), oklch(0.66 0.02 82) 75%)",
            border: "1px solid oklch(0.4 0.03 50)",
          }}>
          <div className="w-12 h-12 rounded-full"
            style={{ background: "radial-gradient(circle at 45% 40%, oklch(0.3 0.06 40), oklch(0.14 0.04 30) 80%)" }} />
        </motion.div>

        {/* Paper clip bottom */}
        <div className="absolute rounded-md border-[2.5px] border-slate-300/70 pointer-events-none"
          style={{ right: "28%", bottom: "24%", width: 20, height: 36, transform: "rotate(-18deg)" }} />

        {/* Magnifier — Search (interactive) — placed atop notebook */}
        <Interactive nav="search" onSearch={openSearch} hoverLift={-6}
          style={{ right: "14%", bottom: "10%", width: 170, height: 170, transform: "rotate(20deg)" }}>
          {/* handle */}
          <div className="absolute bottom-3 right-3 w-24 h-3 rounded-full shadow-object"
            style={{ background: "linear-gradient(90deg, oklch(0.35 0.06 40), oklch(0.55 0.09 55))",
              transform: "rotate(38deg)", transformOrigin: "right center" }} />
          {/* ring */}
          <div className="absolute top-0 left-0 w-24 h-24 rounded-full shadow-object"
            style={{
              background: "radial-gradient(circle at 40% 35%, oklch(0.95 0.06 85 / 0.35), oklch(0.7 0.14 75 / 0.25) 60%, transparent 72%)",
              border: "6px solid oklch(0.55 0.14 65)",
              boxShadow: "inset 0 0 20px oklch(0.15 0.02 40 / 0.5), 0 6px 18px oklch(0.1 0.02 30 / 0.5)",
            }}>
            <div className="absolute inset-2 rounded-full" style={{
              background: "radial-gradient(circle at 35% 30%, oklch(1 0 0 / 0.45), transparent 55%)",
            }} />
            <Search className="absolute inset-0 m-auto h-6 w-6 text-paper/60" strokeWidth={1.2} />
          </div>
        </Interactive>
      </div>

      {/* Search modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeApple }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-ink/70 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 10, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: easeApple }}
              onClick={(e) => e.stopPropagation()}
              className="relative texture-paper grain-fine shadow-paper rounded-sm p-8 w-full max-w-lg"
            >
              <button
                type="button"
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="absolute top-3 right-3 p-2 text-ink-soft hover:text-wax transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">Search the Archive</div>
              <h3 className="type-serif text-3xl mt-3 text-ink">Look up a case file</h3>
              <div className="mt-6 flex items-center gap-3 border-b-2 border-ink/70 pb-2">
                <Search className="h-5 w-5 text-ink-soft" strokeWidth={1.4} />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a case name, tag, or keyword…"
                  className="flex-1 bg-transparent outline-none type-serif text-lg text-ink placeholder:text-ink-soft/60"
                />
              </div>
              <div className="mt-4 type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft">
                Press Esc or click outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
  <div className="type-typewriter text-[10px] uppercase tracking-[0.22em] text-cognac">
    {kicker}
  </div>

  <h3 className="type-serif text-2xl md:text-3xl mt-3 leading-[1.1] tracking-tight text-ink group-hover:text-wax transition-colors">
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
