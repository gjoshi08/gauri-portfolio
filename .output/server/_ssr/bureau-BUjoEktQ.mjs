import "../_runtime.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FolderClosed, c as Camera, i as Laptop, l as ArrowRight, n as Notebook, r as Mic, t as Search } from "../_libs/lucide-react.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var easeApple = [
	.22,
	1,
	.36,
	1
];
var deskObjects = [
	{
		key: "cases",
		label: "Case Files",
		sub: "Projects",
		href: "/cases",
		icon: FolderClosed,
		x: "12%",
		y: "18%",
		rotate: -6,
		tone: "paper"
	},
	{
		key: "about",
		label: "The Notebook",
		sub: "About",
		href: "/about",
		icon: Notebook,
		x: "62%",
		y: "12%",
		rotate: 5,
		tone: "leather"
	},
	{
		key: "camera",
		label: "Field Camera",
		sub: "Gallery",
		href: "/cases",
		icon: Camera,
		x: "78%",
		y: "44%",
		rotate: -8,
		tone: "metal"
	},
	{
		key: "resume",
		label: "MacBook",
		sub: "Résumé",
		href: "/about",
		icon: Laptop,
		x: "38%",
		y: "50%",
		rotate: 2,
		tone: "metal"
	},
	{
		key: "contact",
		label: "Voice Recorder",
		sub: "Request Investigation",
		href: "/contact",
		icon: Mic,
		x: "10%",
		y: "62%",
		rotate: 8,
		tone: "metal"
	},
	{
		key: "search",
		label: "Magnifier",
		sub: "Search Files",
		href: "/cases",
		icon: Search,
		x: "70%",
		y: "72%",
		rotate: -14,
		tone: "wood"
	}
];
function toneStyles(tone) {
	switch (tone) {
		case "paper": return {
			background: "linear-gradient(135deg, oklch(0.94 0.03 82), oklch(0.88 0.045 78))",
			color: "var(--color-ink)",
			border: "1px solid oklch(0.75 0.04 70)"
		};
		case "leather": return {
			background: "linear-gradient(135deg, oklch(0.32 0.06 45), oklch(0.24 0.05 45))",
			color: "oklch(0.92 0.03 82)",
			border: "1px solid oklch(0.15 0.03 45)"
		};
		case "metal": return {
			background: "linear-gradient(135deg, oklch(0.85 0.01 250), oklch(0.68 0.008 250))",
			color: "var(--color-ink)",
			border: "1px solid oklch(0.55 0.008 250)"
		};
		case "wood": return {
			background: "linear-gradient(135deg, oklch(0.5 0.08 55), oklch(0.35 0.07 50))",
			color: "oklch(0.95 0.03 82)",
			border: "1px solid oklch(0.25 0.05 45)"
		};
	}
}
function DetectiveDesk() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full aspect-[16/10] texture-desk grain rounded-md overflow-hidden shadow-object",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none flicker",
					style: { background: "radial-gradient(ellipse 60% 55% at 42% 40%, oklch(0.95 0.05 85 / 0.28), transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute z-0",
					style: {
						left: "48%",
						top: "22%"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-24 h-24 rounded-full border-4 border-cognac/40 opacity-40" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						delay: .3,
						duration: 1
					},
					className: "absolute rounded-sm shadow-object grain-fine",
					style: {
						left: "28%",
						top: "28%",
						width: "44%",
						height: "48%",
						background: "repeating-linear-gradient(0deg, oklch(0.32 0.08 240) 0, oklch(0.32 0.08 240) 24px, oklch(0.38 0.09 240) 25px), repeating-linear-gradient(90deg, transparent 0, transparent 24px, oklch(0.38 0.09 240 / 0.6) 25px), oklch(0.28 0.09 240)",
						transform: "rotate(-3deg)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute bottom-3 right-4 type-typewriter text-[9px] uppercase tracking-widest text-paper/70",
						children: "Wireframe · Sheet 04"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: -6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .5,
						ease: easeApple,
						duration: .6
					},
					className: "absolute p-3 shadow-object type-typewriter text-[11px]",
					style: {
						left: "5%",
						top: "8%",
						width: 130,
						height: 130,
						background: "oklch(0.88 0.14 95)",
						transform: "rotate(-8deg)",
						color: "var(--color-ink)"
					},
					children: [
						"\"Users don't lie.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"They confess in behavior.\""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						rotate: 20
					},
					animate: {
						opacity: 1,
						rotate: 12
					},
					transition: {
						delay: .7,
						duration: .7,
						ease: easeApple
					},
					className: "absolute bg-paper p-2 pb-6 shadow-object",
					style: {
						right: "6%",
						top: "6%",
						width: 140
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full aspect-square",
						style: { background: "radial-gradient(circle at 40% 35%, oklch(0.65 0.08 40), oklch(0.28 0.04 40))" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "type-typewriter text-[10px] text-ink-soft mt-1 text-center",
						children: "Crime Scene · 03"
					})]
				}),
				deskObjects.map((obj, i) => {
					const Icon = obj.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: obj.href,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 12,
								rotate: obj.rotate
							},
							animate: {
								opacity: 1,
								y: 0,
								rotate: obj.rotate
							},
							transition: {
								delay: .4 + i * .08,
								duration: .7,
								ease: easeApple
							},
							whileHover: {
								y: -6,
								rotate: obj.rotate * .4,
								scale: 1.03,
								transition: {
									duration: .3,
									ease: easeApple
								}
							},
							className: "absolute group cursor-pointer",
							style: {
								left: obj.x,
								top: obj.y,
								...toneStyles(obj.tone),
								width: 148,
								borderRadius: 6
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 shadow-object rounded-[inherit] flex items-center gap-3",
								style: toneStyles(obj.tone),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-6 w-6 shrink-0",
									strokeWidth: 1.4
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "type-typewriter uppercase text-[9px] tracking-[0.25em] opacity-70",
									children: obj.sub
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "type-serif text-base leading-tight",
									children: obj.label
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 left-1/2 -translate-x-1/2 type-typewriter text-[10px] uppercase tracking-widest text-paper/80 whitespace-nowrap flex items-center gap-1",
								children: ["Examine ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
							})]
						})
					}, obj.key);
				})
			]
		})
	});
}
function EvidenceFolder({ caseNo, title, kicker, status = "Case Closed", tags, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: href,
		className: "block group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
			whileHover: {
				y: -6,
				rotate: 0
			},
			transition: {
				duration: .4,
				ease: easeApple
			},
			className: "relative texture-paper grain-fine shadow-paper rounded-sm p-8 h-full",
			style: { transform: "rotate(-0.3deg)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-3 left-8 h-6 w-32 bg-cognac/70 rounded-sm shadow-sm" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft",
						children: ["Case No. ", caseNo]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "stamp text-[9px]",
						children: status
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "type-typewriter text-xs uppercase tracking-[0.25em] text-cognac",
						children: kicker
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "type-serif text-3xl md:text-4xl mt-3 leading-tight text-ink group-hover:text-wax transition-colors",
						children: title
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 border-t border-ink/15 pt-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-2 flex-wrap",
						children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft border border-ink/30 px-2 py-0.5",
							children: t
						}, t))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-ink group-hover:translate-x-1 transition-transform" })]
				})
			]
		})
	});
}
//#endregion
export { EvidenceFolder as n, DetectiveDesk as t };
