import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { isPlaceholderAction, type LinkAction } from "../content/site";

type ActionButtonProps = {
  action: LinkAction;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "footer";
};

export function ActionButton({ action, icon, variant = "secondary" }: ActionButtonProps) {
  const className = `action-button action-button--${variant}`;
  const content = (
    <>
      {icon ? <span className="action-button__icon">{icon}</span> : null}
      <span>{action.label}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="action-button__arrow"
        size={20}
        strokeWidth={2.4}
      />
    </>
  );

  if (isPlaceholderAction(action)) {
    return (
      <button
        aria-disabled="true"
        className={`${className} is-disabled`}
        data-testid="placeholder-action"
        disabled
        title={action.disabledReason}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      className={className}
      href={action.href}
      rel={action.external ? "noreferrer" : undefined}
      target={action.external ? "_blank" : undefined}
    >
      {content}
    </a>
  );
}
