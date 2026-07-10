import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getCase } from "./cases-D-rOW1tI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cases._slug-D_WNDyDm.js
var $$splitNotFoundComponentImporter = () => import("./cases._slug-D3RZ1Z1P.mjs");
var $$splitComponentImporter = () => import("./cases._slug-qXvneNZy.mjs");
var Route = createFileRoute("/cases/$slug")({
	loader: ({ params }) => {
		const c = getCase(params.slug);
		if (!c) throw notFound();
		return c;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — Case ${loaderData.no}` },
		{
			name: "description",
			content: loaderData.summary
		},
		{
			property: "og:title",
			content: `${loaderData.title} — DIB`
		},
		{
			property: "og:description",
			content: loaderData.summary
		}
	] : [{ title: "Case File" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
