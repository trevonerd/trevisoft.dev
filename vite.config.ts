import react from "@vitejs/plugin-react";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { defineConfig } from "vitest/config";
import { App } from "./src/App";
import { site } from "./src/content/site";

const homepage = "https://trevisoft.dev/";
const projectTypes = {
  "Agent Skill": "SoftwareSourceCode",
  "Chrome Extension": "SoftwareApplication",
  "Game Tool": "WebApplication",
  "Web App": "WebApplication",
} as const;

export default defineConfig({
  plugins: [
    react(),
    {
      name: "trevisoft-prerender",
      apply: "build",
      transformIndexHtml(html) {
        const mount = '<div id="root"></div>';
        if (!html.includes(mount)) {
          throw new Error("Trevisoft prerender could not find the homepage mount point.");
        }

        const maker = {
          "@type": "Person",
          "@id": `${homepage}#marco-trevisani`,
          name: site.author.name,
          url: site.author.portfolio.href,
          sameAs: [site.author.github.href],
        };
        const projects = site.projectGroups.flatMap((group) => group.projects);
        const schema = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${homepage}#website`,
              url: homepage,
              name: site.brand.name,
              inLanguage: "en",
              creator: maker,
            },
            {
              "@type": "CollectionPage",
              "@id": `${homepage}#projects`,
              url: homepage,
              name: "Trevisoft projects",
              isPartOf: { "@id": `${homepage}#website` },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: projects.map((project, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  item: {
                    "@type": projectTypes[project.kind],
                    "@id": `${homepage}#${project.id}`,
                    name: project.name,
                    description: project.description,
                    url: project.actions[0].href,
                    creator: { "@id": maker["@id"] },
                  },
                })),
              },
            },
          ],
        };

        return {
          html: html.replace(
            mount,
            () => `<div id="root">${renderToString(createElement(App))}</div>`,
          ),
          tags: [
            {
              tag: "script",
              attrs: { type: "application/ld+json" },
              children: JSON.stringify(schema).replaceAll("<", "\\u003c"),
              injectTo: "head",
            },
          ],
        };
      },
    },
  ],
  test: {
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    globals: true,
  },
});
