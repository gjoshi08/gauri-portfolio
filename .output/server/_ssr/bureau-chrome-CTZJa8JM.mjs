import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as FingerprintPattern } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bureau-chrome-CTZJa8JM.js
var import_jsx_runtime = require_jsx_runtime();
var easeApple = [
	.22,
	1,
	.36,
	1
];
function BureauNav({ current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			opacity: 0,
			y: -12
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .7,
			ease: easeApple
		},
		className: "sticky top-0 z-40 border-b border-ink/10 backdrop-blur-md",
		style: { background: "oklch(0.955 0.018 85 / 0.85)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FingerprintPattern, {
					className: "h-5 w-5 text-wax",
					strokeWidth: 1.4
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "type-typewriter text-[9px] uppercase tracking-[0.35em] text-ink-soft",
						children: "Design Investigation Bureau"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "type-serif italic text-sm",
						children: "Gauri Joshi"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden md:flex items-center gap-8",
				children: [
					{
						href: "/",
						label: "HQ"
					},
					{
						href: "/cases",
						label: "Case Files"
					},
					{
						href: "/about",
						label: "Investigator"
					},
					{
						href: "/contact",
						label: "Request Investigation"
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: i.href,
					className: `type-typewriter uppercase text-[11px] tracking-[0.3em] pb-1 border-b ${current === i.href ? "border-wax text-wax" : "border-transparent text-ink-soft hover:text-ink"}`,
					children: i.label
				}, i.href))
			})]
		})
	});
}
function BureauFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-32 border-t border-ink/15 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft",
				children: "© Design Investigation Bureau · All files confidential"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "type-typewriter text-[10px] uppercase tracking-[0.3em] text-ink-soft",
				children: "Filed by Gauri Joshi · Case Log v.001"
			})]
		})
	});
}
//#endregion
export { BureauNav as n, BureauFooter as t };
