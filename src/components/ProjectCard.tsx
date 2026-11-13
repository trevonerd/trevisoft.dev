import {
  Activity,
  AudioLines,
  Crosshair,
  Disc3,
  Film,
  Gift,
  Images,
  Network,
  Text,
} from "lucide-react";
import type { ComponentType } from "react";
import type { Project } from "../content/site";
import { ActionButton } from "./ActionButton";

const projectIcons: Record<
  Project["icon"],
  ComponentType<{ size?: number; strokeWidth?: number }>
> = {
  activity: Activity,
  audio: AudioLines,
  crosshair: Crosshair,
  disc: Disc3,
  film: Film,
  gift: Gift,
  images: Images,
  network: Network,
  text: Text,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = projectIcons[project.icon];

  return (
    <li className={`project-card project-card--${project.accent}`} id={project.id}>
      <span className="project-card__icon" aria-hidden="true">
        <Icon strokeWidth={1.9} />
      </span>
      <div className="project-card__body">
        <span className="project-card__kind">{project.kind}</span>
        <h3>{project.name}</h3>
        <p className="project-card__description">{project.description}</p>
      </div>
      <div className="project-card__actions">
        <ActionButton action={project.primaryAction} variant="primary" />
        {project.secondaryActions.map((action) => (
          <ActionButton action={action} key={action.href} />
        ))}
      </div>
    </li>
  );
}
