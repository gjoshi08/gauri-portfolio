import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as BureauNav, t as BureauFooter } from "./bureau-chrome-CTZJa8JM.mjs";
import { t as cases } from "./cases-D-rOW1tI.mjs";
import { n as EvidenceFolder } from "./bureau-BUjoEktQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases.index-CEfnAK6b.js
var import_jsx_runtime = require_jsx_runtime();
var easeApple = [
	.22,
	1,
	.36,
	1
];
function CasesIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen texture-paper grain-fine",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BureauNav, { current: "/cases" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .8,
					ease: easeApple
				},
				className: "mx-auto max-w-7xl px-6 pt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax",
						children: "The Archive · Room 04"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "type-serif text-5xl md:text-7xl mt-4 leading-[0.95] text-ink max-w-3xl",
						children: ["Closed ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "Case Files."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-ink-soft leading-relaxed",
						children: "Every folder holds a real investigation — witnesses, evidence, suspects and verdict. Nothing is dramatized. Details are anonymized where a client's identity is confidential."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-6 mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
					children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvidenceFolder, {
						caseNo: c.no,
						title: c.title,
						kicker: c.kicker,
						tags: c.tags,
						href: `/cases/${c.slug}`,
						status: c.status
					}, c.slug))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 mt-20 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "type-typewriter uppercase text-xs tracking-[0.3em] border-b-2 border-ink pb-1 hover:text-wax hover:border-wax transition-colors",
					children: "Don't see your problem here? File a new case →"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BureauFooter, {})
		]
	});
}
//#endregion
export { CasesIndex as component };
