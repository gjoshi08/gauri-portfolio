import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Fingerprint } from "lucide-react";

const easeApple = [0.22, 1, 0.36, 1] as const;

export function BureauNav({ current }: { current?: string }) {
  const items = [
    { href: "/", label: "HQ" },
    { href: "/cases", label: "Case Files" },
    { href: "/about", label: "Investigator" },
    { href: "/contact", label: "Request Investigation" },
  ];
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: easeApple }}
      className="sticky top-0 z-40 border-b border-ink/10 backdrop-blur-md"
      style={{ background: "oklch(0.955 0.018 85 / 0.85)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Fingerprint className="h-5 w-5 text-wax" strokeWidth={1.4} />
          <div className="leading-tight">
            <div className="type-typewriter text-[9px] uppercase tracking-[0.35em] text-ink-soft">Design Investigation Bureau</div>
            <div className="type-serif italic text-sm">Gauri Joshi</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {items.map(i => (
            <Link key={i.href} to={i.href} className={`type-typewriter uppercase text-[11px] tracking-[0.3em] pb-1 border-b ${current === i.href ? "border-wax text-wax" : "border-transparent text-ink-soft hover:text-ink"}`}>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}

export function BureauFooter() {
  return (
    <footer className="mt-32 border-t border-ink/15 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4">
        <div className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft">
          © Design Investigation Bureau · All files confidential
        </div>
        <div className="type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft">
          Filed by Gauri Joshi · Case Log v.001
        </div>
      </div>
    </footer>
  );
}
