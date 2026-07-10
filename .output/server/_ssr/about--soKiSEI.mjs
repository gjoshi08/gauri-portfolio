import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as BureauNav, t as BureauFooter } from "./bureau-chrome-CTZJa8JM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about--soKiSEI.js
var import_jsx_runtime = require_jsx_runtime();
var easeApple = [
	.22,
	1,
	.36,
	1
];
function Block({ label, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			ease: easeApple
		},
		className: "mt-20 grid md:grid-cols-[220px_1fr] gap-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "type-serif text-3xl mt-3 leading-tight",
			children: title
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "type-serif text-lg leading-relaxed text-ink-soft",
			children
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen texture-paper grain-fine",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BureauNav, { current: "/about" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-5xl px-6 pt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .9,
						ease: easeApple
					},
					className: "relative texture-paper grain-fine shadow-paper p-10 md:p-16 rounded-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-6 right-6 stamp text-[10px]",
						children: "DESIGN CLEARANCE"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid md:grid-cols-[auto_1fr] gap-10 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-40 aspect-[3/4] shadow-object relative overflow-hidden",
							style: { background: "linear-gradient(135deg, oklch(0.45 0.05 60), oklch(0.28 0.03 60))" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-3 border border-paper/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-2 left-2 right-2 type-typewriter text-[9px] text-paper/70 uppercase tracking-widest",
								children: "ID · 0001 · DIB"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "type-typewriter uppercase text-[11px] tracking-[0.35em] text-ink-soft",
								children: "Chief Investigator's Profile"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "type-serif text-5xl md:text-7xl leading-[0.95] mt-3",
								children: ["Gauri ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic",
									children: "Joshi"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 type-serif italic text-xl text-ink-soft leading-relaxed max-w-lg",
								children: "UX designer who treats every project as an unsolved case — and refuses to close the file until the user's problem is genuinely gone."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 grid grid-cols-3 gap-6 border-t border-ink/15 pt-6 max-w-xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
										children: "Cases Closed"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "type-serif text-3xl mt-1",
										children: "6+"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
										children: "Design Tools"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "type-serif text-3xl mt-1",
										children: "8+"
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
										children: "Current Role"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "type-serif text-3xl mt-1",
										children: "UX Designer"
									})] })
								]
							})
						] })]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "I · Mission",
						title: "Investigate the user. Design the answer.",
						children: "I believe every successful digital product begins by understanding people rather than assumptions.My process combines UX research, interaction design, service design and visual thinking to uncover real user needs and translate them into intuitive digital experiences.Every project is approached like an investigation where evidence guides every design decision."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "II · Experience",
						title: "Field Assignments.",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-5 not-italic type-serif",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "grid grid-cols-[120px_1fr] gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "type-typewriter text-sm text-wax",
									children: "Jun 2025 — Now"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "UX Designer" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Altum Infotech (Remote)",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Designed healthcare and AI-powered children's storytelling products from research through high-fidelity prototypes."
								] })]
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Block, {
						label: "III · Education",
						title: "Formal training on record.",
						children: [
							"M.Des · Intelligent User Experience Design, DAU · Gandhinagar",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"B.Des · Interior Design, Navrachna University"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "IV · Design Philosophy",
						title: "Operating Principles",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal pl-6 space-y-3 not-italic type-serif",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Users reveal problems.Design reveals solutions." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Research without design is a case that never closes." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Every screen should answer three questions: where am I, what can I do, what happens next." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Beauty is not decoration. It is trust, rendered." })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "V · Strengths",
						title: "Tools of the trade.",
						children: "Research design · Interviewing · Journey mapping · Information architecture · Interaction design · Prototyping · Design systems · Accessibility (WCAG 2.2) · Workshop facilitation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "VI · Instruments",
						title: "Standard kit.",
						children: "Figma · Framer · Adobe Photoshop · Adobe Illustrator · Adobe Indesign · a good notebook and a decent pen."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
						label: "VII · Fun Facts",
						title: "Off the record.",
						children: "Watches three detective movies a month. Drinks her coffee black. Believes the best design critique happens on a long walk."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BureauFooter, {})
		]
	});
}
//#endregion
export { About as component };
