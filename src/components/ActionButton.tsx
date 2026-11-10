import { ArrowUpRight, Mail } from "lucide-react";
import type { LinkAction } from "../content/site";

type ActionButtonProps = {
  action: LinkAction;
  variant?: "primary" | "secondary" | "footer";
};

export function ActionButton({ action, variant = "secondary" }: ActionButtonProps) {
  const className = `action-button action-button--${variant}`;

  if (action.href === "mailto-obfuscated") {
    function openObfuscatedMail() {
      const user = [109, 97, 114, 99, 111, 46, 116, 114, 101, 118, 105, 115, 97, 110, 105, 56, 49]
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
      const host = [103, 109, 97, 105, 108, 46, 99, 111, 109]
        .map((charCode) => String.fromCharCode(charCode))
        .join("");

      window.location.href = `mailto:${user}@${host}`;
    }

    return (
      <button className={className} onClick={openObfuscatedMail} type="button">
        <span>{action.label}</span>
        <Mail aria-hidden="true" className="action-button__arrow" size={16} />
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
      <span>{action.label}</span>
      <ArrowUpRight aria-hidden="true" className="action-button__arrow" size={16} />
    </a>
  );
}
