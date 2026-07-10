import { a as __toESM } from "../_runtime.mjs";
import { n as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as Mic, s as CircleCheck } from "../_libs/lucide-react.mjs";
import { n as BureauNav, t as BureauFooter } from "./bureau-chrome-CTZJa8JM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-AtjcnPdq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var easeApple = [
	.22,
	1,
	.36,
	1
];
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen texture-paper grain-fine",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BureauNav, { current: "/contact" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-6 pt-16 grid md:grid-cols-[1.1fr_1fr] gap-14 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "type-typewriter uppercase text-[11px] tracking-[0.35em] text-wax",
						children: "Intake Form · DIB-07"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "type-serif text-5xl md:text-7xl leading-[0.95] mt-4",
						children: [
							"Request",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "Investigation."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-ink-soft leading-relaxed",
						children: "Need help solving a complex user problem? Submit a new investigation. Every intake is read personally. Every reply comes on the record within two business days."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 space-y-6 border-t border-ink/15 pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
								children: "Direct Line"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:gaurij2302@gmail.com",
								className: "type-serif text-2xl hover:text-wax transition-colors",
								children: "gaurij2302@gmail.com"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
								children: "Field Office"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "type-serif text-xl",
								children: "Gandhinagar, Gujarat · India · Available for Remote & On-site Opportunities"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
								children: "Voice Recorder"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 type-serif italic text-lg text-ink-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
									className: "h-5 w-5 text-wax",
									strokeWidth: 1.4
								}), " Happy to connect over Google Meet or Microsoft Teams."]
							})] })
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .8,
						ease: easeApple
					},
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					className: "relative texture-paper grain-fine shadow-paper p-8 md:p-10 rounded-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-4 right-4 stamp text-[9px]",
							children: "AVAILABLE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "type-typewriter uppercase text-[10px] tracking-[0.3em] text-ink-soft",
							children: "Case Intake · New Conversation"
						}),
						sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 text-center py-16",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "h-12 w-12 text-wax mx-auto",
									strokeWidth: 1.4
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "stamp mt-6",
									children: "Filed & Received"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "type-serif text-3xl mt-6",
									children: "Case opened."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 type-serif italic text-ink-soft",
									children: [
										"Your intake is stamped and sitting on the investigator's desk.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Expect a reply within two business days."
									]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									name: "name",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Organization",
									name: "org"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Direct Line (email)",
									name: "email",
									type: "email",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									label: "Describe the mystery",
									name: "brief",
									rows: 5,
									placeholder: "Where are users getting lost? What have you already tried?",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Ideal timeline",
										name: "timeline",
										placeholder: "e.g. 6 weeks"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Opportunity Type",
										name: "budget",
										placeholder: "Optional"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full bg-ink text-paper py-4 type-typewriter uppercase text-xs tracking-[0.3em] hover:bg-wax transition-colors shadow-object",
									children: "File the Case"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft text-center",
									children: "— All submissions are treated as confidential —"
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BureauFooter, {})
		]
	});
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
			children: [label, required && " *"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			name,
			required,
			placeholder,
			className: "mt-1 w-full bg-transparent border-b-2 border-ink/30 focus:border-wax outline-none py-2 type-serif text-lg transition-colors"
		})]
	});
}
function TextArea({ label, name, rows, required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "type-typewriter text-[10px] uppercase tracking-widest text-ink-soft",
			children: [label, required && " *"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			name,
			rows,
			required,
			placeholder,
			className: "mt-1 w-full bg-transparent border-2 border-ink/20 focus:border-wax outline-none p-3 type-serif text-lg transition-colors resize-none"
		})]
	});
}
//#endregion
export { Contact as component };
