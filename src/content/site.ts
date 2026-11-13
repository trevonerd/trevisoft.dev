import siteJson from "./site.json" with { type: "json" };

const accents = ["blue", "violet", "green", "orange", "cyan", "pink", "purple"] as const;

const icons = [
  "activity",
  "audio",
  "crosshair",
  "disc",
  "film",
  "gift",
  "images",
  "network",
  "text",
] as const;

export const projectSchemaTypes = {
  "Agent Skill": "SoftwareSourceCode",
  "Chrome Extension": "SoftwareApplication",
  "Game Tool": "WebApplication",
  "Web App": "WebApplication",
} as const;

export type LinkAction = {
  label: string;
  href: string;
  external: boolean;
};

export type Project = {
  id: string;
  name: string;
  kind: keyof typeof projectSchemaTypes;
  description: string;
  accent: (typeof accents)[number];
  icon: (typeof icons)[number];
  primaryAction: LinkAction;
  secondaryActions: LinkAction[];
};

function hasValue<T extends string>(choices: readonly T[], value: string): value is T {
  return choices.some((choice) => choice === value);
}

function isProjectKind(kind: string): kind is Project["kind"] {
  return Object.hasOwn(projectSchemaTypes, kind);
}

export function createProjectGroups(groups: typeof siteJson.projectGroups) {
  const ids = new Set(["root", "page-title", "projects", "papa-note"]);

  function claimId(id: string) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || ids.has(id)) {
      throw new Error(`Invalid or duplicate catalog ID: ${id}`);
    }
    ids.add(id);
  }

  return groups.map((group) => {
    claimId(group.id);
    return {
      ...group,
      projects: group.projects.map(({ actions, accent, icon, kind, ...project }): Project => {
        claimId(project.id);
        const [primaryAction, ...secondaryActions] = actions;
        if (
          !primaryAction ||
          actions.some(({ href }) => !URL.canParse(href) || !/^https?:\/\//.test(href))
        ) {
          throw new Error(`Invalid project links: ${project.id}`);
        }
        if (!isProjectKind(kind)) {
          throw new Error(`Unknown project kind for ${project.id}: ${kind}`);
        }
        if (!hasValue(accents, accent) || !hasValue(icons, icon)) {
          throw new Error(`Unknown project accent or icon: ${project.id}`);
        }
        return { ...project, accent, icon, kind, primaryAction, secondaryActions };
      }),
    };
  });
}

export const site = { ...siteJson, projectGroups: createProjectGroups(siteJson.projectGroups) };
