import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { CaseFile } from "@/lib/cases";
import {
  SaarthiCover,
  BirdsCover,
  PaytmCover,
} from "@/Components/project-covers";

const projectCovers: Record<string, () => React.JSX.Element> = {
  saarthi: SaarthiCover,
  "birds-of-gujarat": BirdsCover,
  "paytm-chatbot": PaytmCover,
};

/**
 * Editorial project card used on the homepage (featured) and Work page.
 * Featured projects render hand-drawn SVG cover art; the rest use their
 * real outcome screenshot, with a typographic panel as last resort so
 * missing assets never render as a broken image.
 */
export function ProjectCard({
  c,
  priority,
}: {
  c: CaseFile;
  priority?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const Cover = projectCovers[c.slug];
  const showCover = !!Cover;
  const showImage = !showCover && !!c.outcomeImage && !imageFailed;
  const imgRef = useRef<HTMLImageElement>(null);

  // The image may 404 before hydration attaches onError — check on mount too.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setImageFailed(true);
  }, []);

  return (
    <Link
      to="/cases/$slug"
      params={{ slug: c.slug }}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive"
    >
      <div className="relative aspect-[4/3] overflow-hidden border border-ink/10 bg-paper-deep">
        {/* Subtle case-file tab */}
        <span
          aria-hidden="true"
          className="absolute -top-px left-8 z-10 h-2.5 w-20 rounded-b-[3px] bg-wax/70"
        />
        {showCover ? (
          <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
            <Cover />
          </div>
        ) : showImage ? (
          <img
            ref={imgRef}
            src={c.outcomeImage}
            alt={`${c.title} — project outcome`}
            loading={priority ? "eager" : "lazy"}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between p-6">
            <span className="eyebrow text-[10px] text-ink-soft">
              Case No. {c.no}
            </span>
            <span className="type-serif text-4xl leading-none text-ink/25 group-hover:text-olive/40 transition-colors duration-500">
              {c.title}
            </span>
          </div>
        )}
        <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/5" />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <div className="eyebrow text-[10px] text-olive">
            No. {c.no} · {c.year}
          </div>
          <h3 className="type-serif text-2xl md:text-3xl leading-tight mt-2 text-ink group-hover:text-olive transition-colors duration-300">
            {c.title}
          </h3>
        </div>
        <ArrowUpRight
          className="mt-2 h-5 w-5 shrink-0 text-ink-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-olive"
          strokeWidth={1.4}
          aria-hidden="true"
        />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.kicker}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {c.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="eyebrow text-[9px] tracking-[0.2em] text-taupe border border-ink/15 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
