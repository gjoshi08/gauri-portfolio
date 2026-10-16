import { ArrowUpRight, FileText, Linkedin } from "lucide-react";

const professionalLinks = [
  {
    number: "01",
    label: "Professional Network",
    title: "LinkedIn",
    description: "Experience, professional journey and connections.",
    href: "linkedin.com/in/gaurijoshi23",
    external: true,
  },
  {
    number: "02",
    label: "Selected Work",
    title: "Behance",
    description: "Explore selected design projects and case studies.",
    href: "behance.net/gaurijoshi7",
    external: true,
  },
];

export function ProfessionalLinks() {
  return (
    <section
      id="professional-records"
      className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 md:py-20"
    >
      {/* Section heading */}
      <div className="mb-8 flex flex-col justify-between gap-5 border-b border-ink/20 pb-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-wax">
            Bureau Records · External Links
          </p>

          <h2 className="mt-3 font-serif text-3xl text-ink sm:text-4xl">
            Follow the evidence.
          </h2>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-ink-soft">
          Explore my professional journey, selected work and complete
          credentials beyond the bureau.
        </p>
      </div>

      {/* Professional profile cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {professionalLinks.map((item) => (
          <a
            key={item.number}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[190px] flex-col justify-between border border-ink/20 bg-paper/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-wax hover:bg-paper sm:p-6"
          >
            {/* Record number */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-ink-soft">
                RECORD / {item.number}
              </span>

              <ArrowUpRight
                size={18}
                className="text-wax transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>

            {/* Record information */}
            <div className="mt-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-wax">
                {item.label}
              </p>

              <h3 className="mt-2 font-serif text-2xl text-ink">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </div>
          </a>
        ))}

        {/* Resume PDF */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex min-h-[190px] flex-col justify-between border border-ink/20 bg-[#e9d09a]/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-wax hover:bg-[#e9d09a]/60 sm:p-6"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.2em] text-ink-soft">
              RECORD / 03
            </span>

            <FileText
              size={18}
              className="text-wax transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="mt-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-wax">
              Investigator Credentials
            </p>

            <h3 className="mt-2 font-serif text-2xl text-ink">
              Resume PDF
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Education, experience, skills and selected projects.
            </p>
          </div>
        </a>
      </div>

      {/* Closing note */}
      <div className="mt-6 flex items-center gap-3 border-t border-dashed border-ink/20 pt-5">
        <Linkedin size={15} className="shrink-0 text-wax" />

        <p className="font-serif text-sm italic text-ink-soft">
          Every connection adds another piece to the story.
        </p>
      </div>
    </section>
  );
}