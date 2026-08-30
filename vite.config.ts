// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Generate complete HTML for every public route so the portfolio can be
    // hosted on GitHub Pages without a long-running application server.
    prerender: {
      enabled: true,
      // Route discovery covers the portfolio page. Avoid treating linked
      // downloads (such as the CV PDF) as HTML routes to crawl.
      crawlLinks: false,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },
    sitemap: {
      enabled: true,
      host: "https://jonathan.guru",
    },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
