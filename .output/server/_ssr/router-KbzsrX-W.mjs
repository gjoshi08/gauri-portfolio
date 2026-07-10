import { a as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cases } from "./cases-D-rOW1tI.mjs";
import { t as Route$6 } from "./cases._slug-D_WNDyDm.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-KbzsrX-W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C7JQbNQw.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center texture-paper px-4 grain",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stamp mb-8",
					children: "Case Not Found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold type-serif text-ink",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 type-typewriter text-ink-soft",
					children: "This lead went cold. The file has been misplaced."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-8 inline-block type-typewriter uppercase tracking-widest text-sm border-b-2 border-gold pb-1 hover:text-wax transition-colors",
					children: "Return to Headquarters"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center texture-paper px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stamp mb-8",
					children: "Investigation Halted"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl type-serif",
					children: "A page in the file is damaged."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-ink-soft type-typewriter",
					children: "Try reopening the folder."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "type-typewriter uppercase tracking-widest text-sm border-b-2 border-gold pb-1",
						children: "Reopen"
					})
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Gauri Joshi — Design Investigation Bureau" },
			{
				name: "description",
				content: "The portfolio of UX Designer Gauri Joshi, presented as an interactive detective investigation. Case files, evidence, and closed investigations."
			},
			{
				name: "author",
				content: "Gauri Joshi"
			},
			{
				property: "og:title",
				content: "Gauri Joshi — Design Investigation Bureau"
			},
			{
				property: "og:description",
				content: "UX case files from a designer who investigates every user problem like a mystery."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@300;400;500;600&family=Special+Elite&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var BASE_URL = "";
var Route$4 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/cases",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/contact",
			changefreq: "yearly",
			priority: "0.7"
		},
		...cases.map((c) => ({
			path: `/cases/${c.slug}`,
			changefreq: "yearly",
			priority: "0.8"
		}))
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$3 = () => import("./contact-AtjcnPdq.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Let's Start,The Investigation. — Gauri Joshi" },
		{
			name: "description",
			content: "Submit a new UX investigation. The Bureau reviews every intake personally."
		},
		{
			property: "og:title",
			content: "Request Investigation — DIB"
		},
		{
			property: "og:description",
			content: "Whether you'd like to discuss an internship, collaborate on a product,talk about UX research, or simply exchange ideas, I'd love to hear from you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about--soKiSEI.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Chief Investigator's Profile — Gauri Joshi" },
		{
			name: "description",
			content: "Mission, experience, philosophy and tools of UX Investigator Gauri Joshi."
		},
		{
			property: "og:title",
			content: "Chief Investigator's Profile — Gauri Joshi"
		},
		{
			property: "og:description",
			content: "The investigator behind the Design Investigation Bureau."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-DsbgLht5.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./cases.index-CEfnAK6b.mjs");
var Route = createFileRoute("/cases/")({
	head: () => ({ meta: [
		{ title: "Case Files — Gauri Joshi" },
		{
			name: "description",
			content: "The archive of closed UX case files investigated by Gauri Joshi."
		},
		{
			property: "og:title",
			content: "Case Files — Gauri Joshi"
		},
		{
			property: "og:description",
			content: "Every project is a case. Every solution closes it."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$4.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var CasesIndexRoute = Route.update({
	id: "/cases/",
	path: "/cases/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	SitemapDotxmlRoute,
	CasesSlugRoute: Route$6.update({
		id: "/cases/$slug",
		path: "/cases/$slug",
		getParentRoute: () => Route$5
	}),
	CasesIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
