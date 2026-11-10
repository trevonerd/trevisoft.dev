import siteJson from "./site.json";

export type ThemeAccent = "blue" | "violet" | "green" | "orange" | "cyan" | "pink" | "purple";

export type ProjectIconName =
  | "activity"
  | "audio"
  | "crosshair"
  | "disc"
  | "film"
  | "gift"
  | "images"
  | "network"
  | "text";

export type LinkAction = {
  label: string;
  href: string;
  external: boolean;
};

export type Project = {
  id: string;
  name: string;
  kind: "Chrome Extension" | "Game Tool" | "Web App" | "Agent Skill";
  description: string;
  accent: ThemeAccent;
  icon: ProjectIconName;
  actions: [LinkAction, ...LinkAction[]];
};

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
    intro: string;
    about: string;
  };
  author: { name: string; portfolio: LinkAction; github: LinkAction };
  connectLinks: LinkAction[];
  projectGroups: {
    id: string;
    name: string;
    projects: Project[];
  }[];
};

export const site = siteJson as SiteContent;
