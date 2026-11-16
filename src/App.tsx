import { ArrowDown, ArrowUpRight, Code2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { Footer } from "./components/Footer";
import { LogoMark } from "./components/LogoMark";
import { ProjectCard } from "./components/ProjectCard";
import { ThemeToggle } from "./components/ThemeToggle";
import { site } from "./content/site";

export function App({ logoSrc = "/assets/logo-papone-morbido.webp" }: { logoSrc?: string }) {
  const shellRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.active = String(
            entry.isIntersecting && entry.intersectionRatio >= 0.25,
          );
        }
      },
      { threshold: [0, 0.25] },
    );
    for (const visual of shellRef.current?.querySelectorAll(".project-visual") ?? []) {
      observer.observe(visual);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <div className="site-shell" ref={shellRef}>
      <div className="reading-progress" aria-hidden="true" />
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>
      <header className="site-header nav">
        <div className="wrap header-inner">
          <a className="corner-mark" href="/" aria-label="Trevisoft home">
            <img src={logoSrc} alt="" width="1280" height="427" />
            <span>Trevisoft</span>
          </a>
          <nav aria-label="Main navigation">
            <a className="link" href="#projects">
              Projects
            </a>
            <a className="link" href="#about">
              The maker
            </a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="hero hero--collage" aria-labelledby="page-title">
          <div className="wrap hero-layout">
            <div className="hero-eyebrow">
              <span>
                <span className="status-dot" /> Independent software by Marco Trevisani
              </span>
              <span className="hero-edition">Ideas, built & shipped.</span>
            </div>
            <div className="hero__grid">
              <div className="hero__text">
                <p className="hero-kicker">
                  <Code2 size={18} aria-hidden="true" /> A personal software lab
                </p>
                <h1 id="page-title">
                  <span className="title-intro">Software for</span>{" "}
                  <span className="title-creators">creators</span>{" "}
                  <span className="title-players">
                    &amp; <span className="accent-type">players.</span>
                  </span>
                </h1>
                <p className="hero__lead">{site.brand.intro}</p>
                <div className="btn-row">
                  <a className="btn btn--primary hero-action" href="#projects">
                    See the projects <ArrowDown size={19} aria-hidden="true" />
                  </a>
                  <a
                    className="hero-secondary link"
                    href={site.author.github.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="hero__art frame">
                <div className="signal-field" aria-hidden="true">
                  <div className="signal-silk" />
                  <svg className="signal-orbits" viewBox="0 0 640 560" fill="none">
                    <title>Trevisoft orbital mark</title>
                    <g transform="rotate(-24 320 280)">
                      <ellipse cx="320" cy="280" rx="312" ry="178" />
                      <circle cx="632" cy="280" r="3" />
                    </g>
                    <path d="M60 96h12m-6-6v12M566 468h12m-6-6v12" />
                  </svg>
                </div>
                <div className="brand-lockup">
                  <LogoMark src={logoSrc} />
                  <span className="brand-title">{site.brand.name}</span>
                </div>
                <a
                  className="orbit-project orbit-project--vinyl"
                  href="https://vinylpng.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open VinylPNG"
                >
                  <img src="/assets/projects/vinylpng.svg" width="36" height="36" alt="" />
                  <span>
                    VinylPNG<small>For your next release</small>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
                <a
                  className="orbit-project orbit-project--drops"
                  href="https://getdrophunter.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open DropHunter"
                >
                  <img src="/assets/projects/drophunter.svg" width="36" height="36" alt="" />
                  <span>
                    DropHunter<small>Twitch drops, on autopilot</small>
                  </span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="hero-bottom">
              <div className="hero-proof">
                <strong>
                  {String(
                    site.projectGroups.reduce((count, group) => count + group.projects.length, 0),
                  ).padStart(2, "0")}
                </strong>
                <span>Projects to explore</span>
              </div>
              <nav className="collection-nav" aria-label="Project categories">
                <a href="#projects">
                  Create <span>04</span>
                </a>
                <a href="#game-tools-section">
                  Play <span>02</span>
                </a>
                <a href="#extensions-and-skills-section">
                  Extend <span>03</span>
                </a>
              </nav>
              <a className="scroll-cue" href="#projects" aria-label="Scroll to the projects">
                <ArrowDown size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {site.projectGroups.map((group, index) => (
          <section
            className={`project-group project-group--${group.id}`}
            aria-labelledby={group.id}
            id={index === 0 ? "projects" : `${group.id}-section`}
            tabIndex={-1}
            key={group.id}
          >
            <div className="wrap">
              <div className="section-heading">
                <div>
                  <span className="section-index">
                    0{index + 1} / {index === 0 ? "CREATE" : index === 1 ? "PLAY" : "EXTEND"}
                  </span>
                  <h2 id={group.id}>{group.name}</h2>
                </div>
                <p>{group.description}</p>
              </div>
              {/* biome-ignore lint/a11y/noRedundantRoles: Safari needs this role when list markers are hidden. */}
              <ul className="project-list" role="list">
                {group.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
