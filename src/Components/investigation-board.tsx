import type { CaseFile } from "@/lib/cases";

/**
 * Investigation board for case study pages.
 *
 * The problem → insight → design chain, pinned to a board and tied
 * together with a red thread. All text comes straight from the case
 * data — nothing invented. The thread is decorative and hidden on
 * small screens; the content is plain, readable HTML.
 */

const rotations = ["-1.4deg", "1deg", "-0.8deg"];

/** Wavy thread spanning the three card pins (desktop only, behind cards). */
function BoardThread() {
  return (
    <svg
      className="pointer-events-none absolute left-10 right-10 top[26px] z-0 hidden h-10 md:block"
      viewBox="0 0 900 40"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M140 18 Q 295 46 450 18 T 760 18"
        fill="none"
        stroke="var(--wax)"
        strokeOpacity="0.75"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A pinned paper scrap. */
function Scrap({
  label,
  text,
  rot,
}: {
  label: string;
  text: string;
  rot: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${rot})` }}
      className="relative z-10 border border-ink/20 bg-paper p-6 shadow-paper"
    >
      {/* Pin */}
      <span
        aria-hidden="true"
        className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-wax shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
      >
        <span className="absolute left[3px] top[3px] h-1.5 w-1.5 rounded-full bg-paper/50" />
      </span>
      <div className="eyebrow text-[10px] text-olive">{label}</div>
      <p className="mt-3 type-serif text-base leading-relaxed text-ink-soft md:text-lg">
        {text}
      </p>
    </div>
  );
}

export function InvestigationBoard({ c }: { c: CaseFile }) {
  const items = [
    { label: "Problem", text: c.problem },
    { label: "Insight", text: c.insight },
    { label: "Design", text: c.design },
  ];

  return (
    <div className="relative border-2 border-ink/25 bg-paper-deep p-6 pb-14 md:p-10 md:pb-16">
      {/* Double keyline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-ink/12"
      />
      <BoardThread />
      <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
        {items.map((item, i) => (
          <Scrap
            key={item.label}
            label={item.label}
            text={item.text}
            rot={rotations[i]}
          />
        ))}
      </div>

      {/* Case tag, pinned to the board's corner */}
      <div
        style={{ transform: "rotate(2.5deg)" }}
        className="absolute bottom-3 right-5 z-10 flex items-center gap-2 border border-ink/25 bg-paper px-3 py-1.5 shadow-paper md:bottom-4 md:right-8"
      >
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-wax" />
        <span className="eyebrow text-[9px] tracking-[0.2em] text-ink-soft">
          Case No. {c.no} · {c.status}
        </span>
      </div>
    </div>
  );
}
