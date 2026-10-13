import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé — Gauri Joshi · Design Investigation Bureau" },
      {
        name: "description",
        content:
          "Résumé of Product Designer Gauri Joshi — experience, education and selected work.",
      },
      { property: "og:title", content: "Résumé — Gauri Joshi" },
      {
        property: "og:description",
        content: "Résumé of Gauri Joshi, Product Designer.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <div className="min-h-screen grain-fine">
      <BureauNav current="/resume" />

      <main className="mx-auto max-w-6xl px-6 pt-16">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeApple }}
        >
          <div className="eyebrow text-[10px] text-olive">Résumé</div>
          <h1 className="type-serif text-5xl md:text-7xl leading-[0.95] mt-4 text-ink">
            On the <span className="italic">record.</span>
          </h1>
          <p className="mt-6 max-w-xl text-ink-soft leading-relaxed">
            Experience, education and selected work — the full document, exactly
            as filed.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-4 eyebrow text-[10px] hover:bg-olive transition-colors duration-300"
            >
              <Download className="h-4 w-4" /> Download PDF
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink/25 px-7 py-4 eyebrow text-[10px] text-ink hover:border-olive hover:text-olive transition-colors duration-300"
            >
              <ExternalLink className="h-4 w-4" /> Open in New Tab
            </a>
          </div>

          <div className="mt-12 border border-ink/10 bg-paper-deep">
            <iframe
              src="/resume.pdf"
              title="Résumé of Gauri Joshi"
              className="w-full h-[75vh] bg-paper"
            />
          </div>

          <a
            href="/"
            className="mt-10 inline-flex items-center gap-2 eyebrow text-[10px] text-ink-soft hover:text-olive transition-colors"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Home
          </a>
        </motion.section>
      </main>

      <BureauFooter />
    </div>
  );
}
