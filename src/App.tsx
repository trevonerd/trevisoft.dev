import { Code2, Globe2 } from "lucide-react";
import { ActionButton } from "./components/ActionButton";
import { Footer } from "./components/Footer";
import { LogoMark } from "./components/LogoMark";
import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { site } from "./content/site";

const profileIcons = {
  "github.com/trevonerd": <Code2 aria-hidden="true" size={22} strokeWidth={2} />,
  "marcotrevisani.com": <Globe2 aria-hidden="true" size={22} strokeWidth={2} />,
} as const;

export function App() {
  return (
    <main className="site-shell" aria-labelledby="page-title">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="synth-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <header className="site-header">
        <a className="corner-mark" href="/" aria-label="Trevisoft home">
          <img src="/assets/moustache.svg" alt="" width="2000" height="1157" />
        </a>
        <ThemeToggle />
      </header>

      <section className="hero" aria-label="Trevisoft project directory">
        <LogoMark />
        <div className="brand-stack">
          <h1 className="brand-title" id="page-title">
            {site.brand.name}
          </h1>
          <p className="brand-tagline">{site.brand.tagline}</p>
          <p className="brand-subtagline">{site.brand.subtagline}</p>
        </div>

        <nav className="profile-links" aria-label="Marco Trevisani links">
          {site.profileLinks.map((link) => (
            <ActionButton
              action={link}
              icon={profileIcons[link.label as keyof typeof profileIcons]}
              key={link.label}
              variant="secondary"
            />
          ))}
        </nav>
      </section>

      <section className="projects-section" aria-labelledby="projects-title">
        <h2 className="sr-only" id="projects-title">
          Trevisoft projects
        </h2>
        <ul className="project-list" aria-label="Trevisoft projects">
          {site.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}
