import { site } from "../content/site";
import { ActionButton } from "./ActionButton";

export function Footer() {
  return (
    <footer className="site-footer closing" id="about" tabIndex={-1}>
      <div className="wrap">
        <div className="footer-story" data-moment="liquid-type">
          <h2 className="mo-lt__type">
            A family name. <br />
            My own software.
          </h2>
          <div>
            <p>{site.brand.about}</p>
            <ActionButton action={site.author.portfolio} variant="footer" />
          </div>
        </div>
        <div className="footer-details">
          <div className="footer-directory">
            <div className="footer-about">
              <span className="footer-brand">{site.brand.name}</span>
              <p>Independent software by {site.author.name}.</p>
            </div>
            <nav className="footer-column" aria-labelledby="footer-profile">
              <h3 id="footer-profile">Profile</h3>
              <ActionButton action={site.author.github} variant="footer" />
            </nav>
            <nav className="footer-column" aria-labelledby="footer-contact">
              <h3 id="footer-contact">Contact</h3>
              {site.connectLinks.map((link) => (
                <ActionButton action={link} key={link.label} variant="footer" />
              ))}
            </nav>
          </div>
          <div className="footer-legal">
            <span>© {new Date().getFullYear()} Trevisoft</span>
            <a className="link" href="#projects">
              See the projects
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
