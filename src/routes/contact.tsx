import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { BureauNav, BureauFooter } from "@/Components/bureau-chrome";
import { ArrowLeft, CheckCircle2, Link, Mic } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

const easeApple = [0.22, 1, 0.36, 1] as const;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Let's Start,The Investigation. — Gauri Joshi" },
      { name: "description", content: "Submit a new UX investigation. The Bureau reviews every intake personally." },
      { property: "og:title", content: "Request Investigation — DIB" },
      { property: "og:description", content: "Whether you'd like to discuss an internship, collaborate on a product,talk about UX research, or simply exchange ideas, I'd love to hear from you." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen texture-paper grain-fine">
      <BureauNav current="/contact" />
      <main className="mx-auto max-w-7xl px-6 pt-10">

    <button
  onClick={() => navigate({ to: "/" })}
  className="group inline-flex items-center justify-center
             w-10 h-10
             rounded-full
             border border-ink/10
             bg-paper/80
             shadow-paper
             hover:bg-paper
             transition-all duration-300
             hover:-translate-x-1"
  aria-label="Back to Investigator Desk"
>
  <ArrowLeft
    size={18}
    className="text-ink-soft group-hover:text-wax transition-colors"
  />
</button>

      <section className="mx-auto max-w-6xl px-6 pt-16 grid md:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div>
          <div className="type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax">
            Intake Form · DIB-07
          </div>
          <h1 className="type-serif text-5xl md:text-7xl leading-[0.95] mt-4">
            Request<br /><span className="italic">Investigation.</span>
          </h1>
          <p className="mt-6 max-w-md text-ink-soft leading-relaxed">
            Need help solving a complex user problem? Submit a new investigation. Every intake is read personally. Every reply comes on the record within two business days.
          </p>

          <div className="mt-12 space-y-6 border-t border-ink/15 pt-8">
            <div>
              <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Direct Line</div>
              <a href="mailto:gaurij2302@gmail.com" className="type-serif text-2xl hover:text-wax transition-colors">gaurij2302@gmail.com</a>
            </div>
            <div>
              <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Field Office</div>
              <div className="type-serif text-xl">Gandhinagar, Gujarat · India · Available for Remote & On-site Opportunities</div>
            </div>
            <div>
              <div className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">Voice Recorder</div>
              <div className="flex items-center gap-3 type-serif italic text-lg text-ink-soft">
                <Mic className="h-5 w-5 text-wax" strokeWidth={1.4} /> Happy to connect over Google Meet or Microsoft Teams.
              </div>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easeApple }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="relative texture-paper shadow-paper p-8 md:p-10 rounded-sm"
        >
          <div className="absolute top-4 right-4 stamp text-[9px]">AVAILABLE</div>
          <div className="type-typewriter uppercase text-[10px] tracking-[0.3em] text-ink-soft">Case Intake · New Conversation</div>

          {sent ? (
            <div className="mt-10 text-center py-16">
              <CheckCircle2 className="h-12 w-12 text-wax mx-auto" strokeWidth={1.4} />
              <div className="stamp mt-6">Filed & Received</div>
              <h3 className="type-serif text-3xl mt-6">Case opened.</h3>
              <p className="mt-3 type-serif italic text-ink-soft">
                Your intake is stamped and sitting on the investigator's desk.<br/>Expect a reply within two business days.
              </p>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <Field label="Name" name="name" required />
              <Field label="Organization" name="org" />
              <Field label="Direct Line (email)" name="email" type="email" required />
              <TextArea label="Describe the mystery" name="brief" rows={5} placeholder="Where are users getting lost? What have you already tried?" required />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Ideal timeline" name="timeline" placeholder="e.g. 6 weeks" />
                <Field label="Opportunity Type" name="budget" placeholder="Optional" />
              </div>
              <button type="submit" className="w-full bg-ink text-paper py-4 type-typewriter uppercase text-xs tracking-[0.3em] hover:bg-wax transition-colors shadow-object">
                File the Case
              </button>
              <p className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft text-center">
                — All submissions are treated as confidential —
              </p>
            </div>
          )}
        </motion.form>
      </section>

      <BureauFooter />
      </main>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">{label}{required && " *"}</span>
      <input
        type={type} name={name} required={required} placeholder={placeholder}
        className="mt-1 w-full bg-transparent border-b-2 border-ink/30 focus:border-wax outline-none py-2 type-serif text-lg transition-colors"
      />
    </label>
  );
}
function TextArea({ label, name, rows, required, placeholder }: { label: string; name: string; rows: number; required?: boolean; placeholder?: string }) {
  return (
    <label className="block">
      <span className="type-typewriter text-[10px] uppercase tracking-widest text-ink-soft">{label}{required && " *"}</span>
      <textarea
        name={name} rows={rows} required={required} placeholder={placeholder}
        className="mt-1 w-full bg-transparent border-2 border-ink/20 focus:border-wax outline-none p-3 type-serif text-lg transition-colors resize-none"
      />
    </label>
  );
}
