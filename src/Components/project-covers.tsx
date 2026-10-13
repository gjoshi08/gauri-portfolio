/**
 * Hand-drawn SVG cover art for the three featured projects.
 *
 * Abstract, editorial illustrations in the site palette — no fake screenshots,
 * no invented data, no brand marks. Real project outcome imagery still appears
 * on each case detail page.
 */

const PAPER = "var(--paper)";
const PAPER_DEEP = "var(--paper-deep)";
const INK = "var(--ink)";
const INK_SOFT = "var(--ink-soft)";
const OLIVE = "var(--olive)";
const TAUPE = "var(--taupe)";
const WAX = "var(--wax)";

/* ————————————————————————————————————————————————
   Saarthi — wayfinding through a system
   A route with waypoints leading to a public-service
   building; a prepared-documents checklist alongside.
———————————————————————————————————————————————— */
export function SaarthiCover() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      role="img"
      aria-label="Illustration: a route with waypoints leading to a public service building"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={PAPER} />

      {/* Faint pinboard grid */}
      <g stroke={INK} strokeOpacity="0.06" strokeWidth="1">
        {[40, 100, 160, 220, 280].map((y) => (
          <line key={y} x1="24" y1={y} x2="376" y2={y} />
        ))}
      </g>

      {/* Prepared-documents checklist, slightly tilted */}
      <g transform="rotate(-4 95 130)">
        <rect
          x="52"
          y="70"
          width="86"
          height="112"
          fill={PAPER_DEEP}
          stroke={INK}
          strokeOpacity="0.35"
        />
        <line
          x1="52"
          y1="70"
          x2="138"
          y2="70"
          stroke={INK}
          strokeOpacity="0.5"
          strokeWidth="2"
        />
        <g stroke={INK_SOFT} strokeWidth="2" strokeLinecap="round">
          <line x1="66" y1="96" x2="100" y2="96" />
          <line x1="66" y1="116" x2="118" y2="116" />
          <line x1="66" y1="136" x2="108" y2="136" />
          <line x1="66" y1="156" x2="94" y2="156" />
        </g>
        <g
          stroke={OLIVE}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <path d="M56 92 l4 4 6 -8" />
          <path d="M56 112 l4 4 6 -8" />
          <path d="M56 132 l4 4 6 -8" />
        </g>
      </g>

      {/* Route with waypoints */}
      <path
        d="M 48 252 C 110 252 100 214 150 206 S 236 226 264 186 S 300 132 330 122"
        fill="none"
        stroke={INK}
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeDasharray="7 7"
        strokeLinecap="round"
      />
      <circle cx="48" cy="252" r="5.5" fill={OLIVE} />
      <circle
        cx="150"
        cy="206"
        r="5"
        fill={PAPER}
        stroke={OLIVE}
        strokeWidth="2.5"
      />
      <circle
        cx="264"
        cy="186"
        r="5"
        fill={PAPER}
        stroke={OLIVE}
        strokeWidth="2.5"
      />

      {/* Public-service building */}
      <g
        stroke={INK}
        strokeOpacity="0.55"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      >
        <path d="M286 130 L330 106 L374 130" />
        <line x1="292" y1="130" x2="368" y2="130" />
        <line x1="296" y1="176" x2="364" y2="176" />
        {[304, 322, 340, 358].map((x) => (
          <line key={x} x1={x} y1="134" x2={x} y2="172" />
        ))}
      </g>

      {/* Destination pin */}
      <g>
        <path
          d="M330 74 c-9 0 -16 7 -16 16 0 11 16 27 16 27 s16 -16 16 -27 c0 -9 -7 -16 -16 -16 z"
          fill={WAX}
        />
        <circle cx="330" cy="90" r="5.5" fill={PAPER} />
      </g>
    </svg>
  );
}

/* ————————————————————————————————————————————————
   Birds of Gujarat — information design + storytelling
   A bird above a quiet chart: progressive disclosure
   of ecological data.
———————————————————————————————————————————————— */
export function BirdsCover() {
  const bars = [
    { x: 70, h: 46 },
    { x: 112, h: 74 },
    { x: 154, h: 58 },
    { x: 196, h: 96 },
    { x: 238, h: 68 },
    { x: 280, h: 110 },
  ];
  const baseY = 254;
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      role="img"
      aria-label="Illustration: a bird above a bar chart of ecological data"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={PAPER} />

      {/* Faint sun disc */}
      <circle cx="330" cy="66" r="26" fill={TAUPE} fillOpacity="0.18" />

      {/* Minimal flying bird */}
      <g stroke={INK} strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M150 108 q 26 -24 52 0" />
        <path d="M202 108 q 26 -24 52 0" />
      </g>
      <circle cx="202" cy="112" r="2.6" fill={WAX} />

      {/* Trend line over the bars */}
      <path
        d="M70 190 L 112 166 L 154 176 L 196 142 L 238 160 L 280 132"
        fill="none"
        stroke={WAX}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill={PAPER} stroke={WAX} strokeWidth="2">
        {[
          [70, 190],
          [112, 166],
          [154, 176],
          [196, 142],
          [238, 160],
          [280, 132],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" />
        ))}
      </g>

      {/* Bars */}
      {bars.map((b, i) => (
        <rect
          key={b.x}
          x={b.x - 13}
          y={baseY - b.h}
          width="26"
          height={b.h}
          fill={i === 3 ? OLIVE : TAUPE}
          fillOpacity={i === 3 ? 0.9 : 0.35}
        />
      ))}
      <line
        x1="46"
        y1={baseY}
        x2="330"
        y2={baseY}
        stroke={INK}
        strokeOpacity="0.5"
        strokeWidth="2"
      />

      {/* Perched reed */}
      <path
        d="M330 254 C 336 220 330 190 344 160"
        fill="none"
        stroke={OLIVE}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ————————————————————————————————————————————————
   Paytm Chatbot Redesign — context-aware conversation
   Two message bubbles, a typing indicator and a
   transaction-status pulse.
———————————————————————————————————————————————— */
export function PaytmCover() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      role="img"
      aria-label="Illustration: chat bubbles with a typing indicator and a status pulse line"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="300" fill={PAPER} />

      {/* Incoming bubble */}
      <g>
        <path
          d="M56 58 h150 a14 14 0 0 1 14 14 v52 a14 14 0 0 1 -14 14 h-124 l-22 20 v-20 h-4 a14 14 0 0 1 -14 -14 v-52 a14 14 0 0 1 14 -14 z"
          fill={PAPER_DEEP}
          stroke={INK}
          strokeOpacity="0.4"
        />
        <g stroke={INK_SOFT} strokeWidth="3" strokeLinecap="round">
          <line x1="62" y1="88" x2="196" y2="88" />
          <line x1="62" y1="106" x2="160" y2="106" />
        </g>
      </g>

      {/* Outgoing bubble (olive) */}
      <g>
        <path
          d="M210 152 h124 a14 14 0 0 1 14 14 v44 a14 14 0 0 1 -14 14 h-4 v18 l-20 -18 h-100 a14 14 0 0 1 -14 -14 v-44 a14 14 0 0 1 14 -14 z"
          fill={OLIVE}
        />
        <g
          stroke={PAPER}
          strokeWidth="3"
          strokeLinecap="round"
          strokeOpacity="0.9"
        >
          <line x1="222" y1="178" x2="334" y2="178" />
          <line x1="222" y1="196" x2="300" y2="196" />
        </g>
      </g>

      {/* Typing indicator */}
      <g>
        <rect
          x="56"
          y="162"
          width="58"
          height="34"
          rx="17"
          fill={PAPER}
          stroke={TAUPE}
          strokeWidth="2"
        />
        <g fill={WAX}>
          <circle cx="74" cy="179" r="4" />
          <circle cx="85" cy="179" r="4" fillOpacity="0.6" />
          <circle cx="96" cy="179" r="4" fillOpacity="0.3" />
        </g>
      </g>

      {/* Transaction-status pulse */}
      <path
        d="M56 252 h72 l10 -18 l14 36 l12 -50 l10 32 h170"
        fill="none"
        stroke={WAX}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.85"
      />
      <circle cx="334" cy="252" r="4" fill={WAX} />
    </svg>
  );
}
