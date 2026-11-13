import type { IndexHtmlTransformResult } from "vite";
import { projectSchemaTypes, site } from "../content/site.ts";

const mount = '<div id="root"></div>';

export function publishHomepage(html: string, markup: string): IndexHtmlTransformResult {
  if (!html.includes(mount)) {
    throw new Error("Trevisoft prerender could not find the homepage mount point.");
  }

  const homepage = html.match(/<link rel="canonical" href="([^"]+)"\s*\/?>/)?.[1];
  if (!homepage) {
    throw new Error("Trevisoft prerender could not find the canonical homepage URL.");
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
              "@type": projectSchemaTypes[project.kind],
              "@id": `${homepage}#${project.id}`,
              name: project.name,
              description: project.description,
              url: project.primaryAction.href,
              creator: { "@id": maker["@id"] },
            },
          })),
        },
      },
    ],
  };

  return {
    html: html.replace(mount, () => `<div id="root">${markup}</div>`),
    tags: [
      {
        tag: "script",
        attrs: { type: "application/ld+json" },
        children: JSON.stringify(schema).replaceAll("<", "\\u003c"),
        injectTo: "head",
      },
    ],
  };
}
