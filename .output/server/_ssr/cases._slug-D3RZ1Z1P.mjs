import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases._slug-D3RZ1Z1P.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "min-h-screen flex items-center justify-center texture-paper",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "stamp mb-4",
				children: "Cold Case"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "type-typewriter",
				children: "This file is not in the archive."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/cases",
				className: "mt-6 inline-block type-typewriter uppercase text-xs tracking-[0.3em] border-b-2 border-gold pb-1",
				children: "Back to Archive"
			})
		]
	})
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
