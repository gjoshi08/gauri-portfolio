import { motion } from "framer-motion";

const evidenceLinks = [
  {
    number: "07",
    label: "LinkedIn",
    description: "Professional profile & experience",
    href: "https://linkedin.com/in/gaurijoshi23",
    position: "left-[34%] top-[30%]",
    rotation: "-8deg",
    color: "#e9d49a",
  },
  {
    number: "08",
    label: "Behance",
    description: "Selected design projects",
    href: "https://behance.net/gaurijoshi7",
    position: "left-[43%] top-[42%]",
    rotation: "5deg",
    color: "#f0dfb8",
  },
  {
    number: "09",
    label: "Resume",
    description: "Experience, skills & credentials",
    href: "/resume.pdf",
    position: "right-[4%] top-[32%]",
    rotation: "-4deg",
    color: "#e8c85b",
  },
];
export function PinnedEvidenceLinks() {
  return (
    <>
      {/* DESKTOP — SCATTERED NOTES INSIDE THE EXISTING BOARD */}
      <div className="absolute inset-0 z-20 hidden md:block pointer-events-none">
        {evidenceLinks.map((item, index) => (
          <motion.a
            key={item.number}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={`${item.label}: ${item.description}`}
            title={item.description}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -7,
              rotate: 0,
              scale: 1.04,
            }}
            transition={{ duration: 0.2 }}
            style={{
              rotate: item.rotation,
              backgroundColor: item.color,
              zIndex: index + 1,
            }}
            className={`pointer-events-auto absolute ${item.position} flex w-[24%] min-w-0 flex-col border border-[#b69a68] p-3 pb-4 shadow-[2px_5px_8px_rgba(47,30,18,0.25)]`}
          >
            {/* Pushpin */}
            <span className="absolute left-1/2 top-[-6px] h-3 w-3 -translate-x-1/2 rounded-full border border-[#c9a78a] bg-[#963f34] shadow-sm" />

            {/* Evidence number — hover to reveal description */}
            <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#963f34]">
              Evidence / {item.number}
            </span>

            {/* Note title */}
            <span className="mt-3 font-serif text-lg italic leading-tight text-[#39281d]">
              {item.label}
            </span>

            {/* Small footer */}
            <span className="mt-3 border-t border-dashed border-[#8d6b45]/50 pt-2 font-mono text-[7px] uppercase tracking-wider text-[#75583c]">
              Open record ↗
            </span>

            {/* Hover tooltip */}
            <span className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-40 -translate-x-1/2 translate-y-1 border border-[#b69a68] bg-[#f0df9d] p-3 text-center opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block font-mono text-[8px] uppercase tracking-widest text-[#963f34]">
                File {item.number}
              </span>
              <span className="mt-2 block font-serif text-sm leading-snug text-[#39281d]">
                {item.description}
              </span>
            </span>
          </motion.a>
        ))}
      </div>

      {/* MOBILE — NOTES IN A COMPACT ROW */}
      <div className="relative z-20 grid grid-cols-3 gap-3 md:hidden">
        {evidenceLinks.map((item) => (
          <a
            key={item.number}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="relative flex min-h-[100px] flex-col border border-[#b69a68] p-2 pt-4 shadow-md"
            style={{
              backgroundColor: item.color,
              transform: `rotate(${item.rotation})`,
            }}
          >
            <span className="absolute left-1/2 top-[-5px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#963f34]" />

            <span className="font-mono text-[7px] text-[#963f34]">
              EVIDENCE / {item.number}
            </span>

            <span className="mt-3 font-serif text-sm italic text-[#39281d]">
              {item.label}
            </span>

            <span className="mt-auto pt-2 font-mono text-[7px] uppercase text-[#75583c]">
              Open ↗
            </span>
          </a>
        ))}
      </div>
    </>
  );
}