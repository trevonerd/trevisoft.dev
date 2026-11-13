import { Footer } from "./components/Footer";
import { LogoMark } from "./components/LogoMark";
import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { site } from "./content/site";

export function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>
      <header className="site-header">
        <a className="corner-mark" href="/" aria-label="Trevisoft home">
          <img src="/assets/moustache.svg" alt="" width="2000" height="1157" />
        </a>
        <ThemeToggle />
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <LogoMark />
          <div className="brand-stack">
            <h1 className="brand-title" id="page-title">
              {site.brand.name}
            </h1>
            <p className="brand-tagline">{site.brand.tagline}</p>
            <p className="brand-intro">{site.brand.intro}</p>
          </div>
        </section>

        <section className="projects-section" aria-label="Projects" id="projects" tabIndex={-1}>
          {site.projectGroups.map((group) => (
            <section className="project-group" aria-labelledby={group.id} key={group.id}>
              <h2 id={group.id}>{group.name}</h2>
              {/* biome-ignore lint/a11y/noRedundantRoles: Safari needs this role when list markers are hidden. */}
              <ul className="project-list" role="list">
                {group.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </ul>
            </section>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
