import { Code2, Mail, MessageCircle, Send, Star } from "lucide-react";
import { site } from "../content/site";
import { ActionButton } from "./ActionButton";

const connectIcons = {
  Email: <Mail aria-hidden="true" size={20} strokeWidth={2} />,
  Telegram: <Send aria-hidden="true" size={20} strokeWidth={2} />,
  WhatsApp: <MessageCircle aria-hidden="true" size={20} strokeWidth={2} />,
} as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-brand" aria-label="Trevisoft footer brand">
        <div className="footer-brand__mark" aria-hidden="true">
          <img src="/assets/moustache.svg" alt="" width="2000" height="1157" />
        </div>
        <div>
          <strong>{site.brand.name}</strong>
          <p>{site.brand.footerText}</p>
        </div>
      </section>

      <nav className="footer-column" aria-label="Profile links">
        <h2>Links</h2>
        {site.profileLinks.map((link) => (
          <ActionButton
            action={link}
            icon={<Code2 aria-hidden="true" size={18} strokeWidth={2} />}
            key={link.label}
            variant="footer"
          />
        ))}
      </nav>

      <nav className="footer-column footer-column--connect" aria-label="Connect links">
        <h2>Connect</h2>
        <div className="connect-list">
          {site.connectLinks.map((link) => (
            <ActionButton
              action={link}
              icon={connectIcons[link.label as keyof typeof connectIcons]}
              key={link.label}
              variant="footer"
            />
          ))}
        </div>
      </nav>

      <section className="footer-column" aria-label="Support Trevisoft">
        <h2>Support</h2>
        <ActionButton
          action={site.supportLink}
          icon={<Star aria-hidden="true" size={18} strokeWidth={2} />}
          variant="footer"
        />
      </section>
    </footer>
  );
}
