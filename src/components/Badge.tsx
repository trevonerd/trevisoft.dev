import { Gamepad2, Globe2, Puzzle } from "lucide-react";
import type { Project } from "../content/site";

type BadgeProps = {
  children: string;
  tone?: "kind" | "tag";
  kind?: Project["kind"];
};

export function Badge({ children, tone = "tag", kind }: BadgeProps) {
  const Icon = kind === "Chrome Extension" ? Puzzle : kind === "Game Tool" ? Gamepad2 : Globe2;

  return (
    <span className={`badge badge--${tone}`}>
      {tone === "kind" ? <Icon aria-hidden="true" size={13} strokeWidth={2.6} /> : null}
      {children}
    </span>
  );
}
