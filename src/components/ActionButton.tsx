import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { isObfuscatedMailAction, isPlaceholderAction, type LinkAction } from "../content/site";

type ActionButtonProps = {
  action: LinkAction;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "footer";
};

export function ActionButton({ action, icon, variant = "secondary" }: ActionButtonProps) {
  const className = `action-button action-button--${variant}`;
  const openObfuscatedMail = () => {
    const user = [109, 97, 114, 99, 111, 46, 116, 114, 101, 118, 105, 115, 97, 110, 105, 56, 49]
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
    const host = [103, 109, 97, 105, 108, 46, 99, 111, 109]
      .map((charCode) => String.fromCharCode(charCode))
      .join("");

    window.location.href = `mailto:${user}@${host}`;
  };
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

  if (isObfuscatedMailAction(action)) {
    return (
      <button className={className} onClick={openObfuscatedMail} type="button">
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
