import { Code2, Disc3, Gift, Images, Network } from "lucide-react";
import type { ComponentType } from "react";
import type { Project, ProjectIconName } from "../content/site";
import { ActionButton } from "./ActionButton";
import { Badge } from "./Badge";

const projectIcons: Record<
  ProjectIconName,
  ComponentType<{ size?: number; strokeWidth?: number }>
> = {
  disc: Disc3,
  gift: Gift,
  images: Images,
  network: Network,
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = projectIcons[project.icon];

  return (
    <li className={`project-card project-card--${project.accent}`}>
      <div className="project-card__icon" aria-hidden="true">
        <Icon size={54} strokeWidth={1.9} />
      </div>
      <div className="project-card__body">
        <Badge kind={project.kind} tone="kind">
          {project.kind}
        </Badge>
        <h2>{project.name}</h2>
        <p>
          {project.summary} {project.description}
        </p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <Badge key={tag}>{`#${tag}`}</Badge>
          ))}
        </div>
      </div>
      <div className="project-card__actions">
        <ActionButton action={project.primaryAction} variant="primary" />
        {project.secondaryAction ? (
          <ActionButton
            action={project.secondaryAction}
            icon={<Code2 aria-hidden="true" size={22} strokeWidth={2.1} />}
          />
        ) : null}
      </div>
    </li>
  );
}
