import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SITE } from "../lib/site";
import { CTA, PROJECTS, PROJECTS_SECTION } from "../lib/content";

const tagStyle = {
  borderColor: "var(--line)",
  color: "var(--ink)",
} as const;

export function ProjectsPage() {
  useReveal();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <Seo
        title="Work | Selected projects"
        description={`${PROJECTS_SECTION.title}. ${PROJECTS_SECTION.text}`}
        path="/projects"
        keywords={`web portfolio Albania, e-commerce project, ${SITE.keywords}`}
      />
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">{PROJECTS_SECTION.label}</p>
          <h1>{PROJECTS_SECTION.title}</h1>
          <p>{PROJECTS_SECTION.text}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="portfolio-list">
            {PROJECTS.map((p) => (
              <article className="portfolio-item reveal" id={p.slug} key={p.slug}>
                <div className={`portfolio-item__media ${p.className.replace("project-card--featured ", "")}`}>
                  <div className="project-card__visual">
                    <img
                      className="project-card__img"
                      src={p.img}
                      alt={p.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="portfolio-item__body">
                  <p className="section-label">{p.tag}</p>
                  <h2>{p.title}</h2>
                  <p>
                    <strong>Problem:</strong> {p.problem}
                    <br />
                    <strong>Built:</strong> {p.built}
                  </p>
                  <div
                    className="project-card__meta"
                    style={{ marginBottom: "1.25rem" }}
                  >
                    {p.meta.map((m) => (
                      <span key={m} style={tagStyle}>
                        {m}
                      </span>
                    ))}
                  </div>
                  <div className="portfolio-item__actions">
                    {p.liveUrl ? (
                      <>
                        <a
                          className="btn-brand"
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View live site
                        </a>
                        <Link className="link-arrow" to="/contact">
                          Get in touch →
                        </Link>
                      </>
                    ) : (
                      <Link className="btn-brand" to="/contact">
                        Similar project?
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={CTA.final.title} text={CTA.final.text} cta={CTA.final.cta} />
      <Footer />
    </>
  );
}
