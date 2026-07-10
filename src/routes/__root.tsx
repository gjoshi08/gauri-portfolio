import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center texture-paper px-4 grain">
      <div className="max-w-md text-center relative z-10">
        <div className="stamp mb-8">Case Not Found</div>
        <h1 className="text-7xl font-bold type-serif text-ink">404</h1>
        <p className="mt-4 type-typewriter text-ink-soft">
          This lead went cold. The file has been misplaced.
        </p>
        <a href="/" className="mt-8 inline-block type-typewriter uppercase tracking-widest text-sm border-b-2 border-gold pb-1 hover:text-wax transition-colors">
          Return to Headquarters
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center texture-paper px-4">
      <div className="max-w-md text-center">
        <div className="stamp mb-8">Investigation Halted</div>
        <h1 className="text-xl type-serif">A page in the file is damaged.</h1>
        <p className="mt-2 text-sm text-ink-soft type-typewriter">Try reopening the folder.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="type-typewriter uppercase tracking-widest text-sm border-b-2 border-gold pb-1"
          >
            Reopen
          </button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gauri Joshi — Design Investigation Bureau" },
      { name: "description", content: "The portfolio of UX Designer Gauri Joshi, presented as an interactive detective investigation. Case files, evidence, and closed investigations." },
      { name: "author", content: "Gauri Joshi" },
      { property: "og:title", content: "Gauri Joshi — Design Investigation Bureau" },
      { property: "og:description", content: "UX case files from a designer who investigates every user problem like a mystery." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@300;400;500;600&family=Special+Elite&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
