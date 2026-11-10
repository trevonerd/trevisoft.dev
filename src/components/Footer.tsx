import { site } from "../content/site";
import { ActionButton } from "./ActionButton";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-about">
        <h2 id="about" tabIndex={-1}>
          {site.brand.name}
        </h2>
        <p>{site.brand.about}</p>
      </div>
      <nav className="footer-column" aria-labelledby="footer-profile">
        <h3 id="footer-profile">Profile</h3>
        <ActionButton action={site.author.portfolio} variant="footer" />
        <ActionButton action={site.author.github} variant="footer" />
      </nav>
      <nav className="footer-column" aria-labelledby="footer-contact">
        <h3 id="footer-contact">Contact</h3>
        {site.connectLinks.map((link) => (
          <ActionButton action={link} key={link.label} variant="footer" />
        ))}
      </nav>
    </footer>
  );
}
