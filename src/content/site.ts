import siteJson from "./site.json";

export type ThemeAccent = "blue" | "violet" | "green" | "orange" | "cyan" | "pink" | "purple";

export type ProjectIconName = "disc" | "gift" | "images" | "network";

export type LinkAction = {
  label: string;
  href: string;
  external: boolean;
  placeholder: boolean;
  disabledReason?: string;
};

export type Project = {
  id: string;
  name: string;
  kind: "Chrome Extension" | "Game Tool" | "Web App";
  summary: string;
  description: string;
  tags: string[];
  accent: ThemeAccent;
  icon: ProjectIconName;
  primaryAction: LinkAction;
  secondaryAction?: LinkAction;
};

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
    subtagline: string;
    footerText: string;
  };
  profileLinks: LinkAction[];
  connectLinks: LinkAction[];
  supportLink: LinkAction;
  projects: Project[];
};

export const site = siteJson as SiteContent;

export function isPlaceholderAction(action: LinkAction): boolean {
  return action.placeholder || action.href.trim().startsWith("#");
}
