import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { runnerImport } from "vite";
import { defineConfig } from "vitest/config";
import { publishHomepage } from "./src/build/homepage.ts";
import { getThemeBootstrapScript } from "./src/lib/theme.ts";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "trevisoft-theme-bootstrap",
      transformIndexHtml: {
        order: "pre",
        handler: () => [
          {
            tag: "script",
            children: getThemeBootstrapScript(),
            injectTo: "head-prepend",
          },
        ],
      },
    },
    {
      name: "trevisoft-prerender",
      apply: "build",
      async transformIndexHtml(html) {
        const {
          module: { App },
        } = await runnerImport<typeof import("./src/App.tsx")>("/src/App.tsx", {
          configFile: false,
          plugins: [react()],
        });

        return publishHomepage(html, renderToString(createElement(App)));
      },
    },
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,
  },
});
