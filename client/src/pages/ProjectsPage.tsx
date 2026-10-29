import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SITE } from "../lib/site";

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
        description="Selected DevByLand work: Stitch Bear e-commerce, Tavolina hospitality and AutoRent — real products for real businesses."
        path="/projects"
        keywords={`web portfolio Albania, e-commerce project, ${SITE.keywords}`}
      />
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">Selected work</p>
          <h1>Real projects, real businesses</h1>
          <p>
            Three digital products that show how we work — e-commerce,
            hospitality and rental.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="portfolio-list">
            <article className="portfolio-item reveal" id="stitch-bear">
              <div className="portfolio-item__media project-card--stitch">
                <div className="project-card__visual">
                  <img
                    className="project-card__img"
                    src="/img/projects/stitch-bear.png"
                    alt="Stitch Bear e-commerce"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="portfolio-item__body">
                <p className="section-label">E-commerce</p>
                <h2>Stitch Bear</h2>
                <p>
                  <strong>Problem:</strong> a handmade brand selling only
                  through social media.
                  <br />
                  <strong>Built:</strong> online store with catalog, checkout
                  and admin.
                </p>
                <div
                  className="project-card__meta"
                  style={{ marginBottom: "1.25rem" }}
                >
                  <span style={tagStyle}>React</span>
                  <span style={tagStyle}>Node.js</span>
                  <span style={tagStyle}>Shop</span>
                </div>
                <div className="portfolio-item__actions">
                  <Link className="btn-brand" to="/contact">
                    Similar project?
                  </Link>
                </div>
              </div>
            </article>

            <article className="portfolio-item reveal" id="tavolina">
              <div className="portfolio-item__media project-card--tavolina">
                <div className="project-card__visual">
                  <img
                    className="project-card__img"
                    src="/img/projects/tavolina.png"
                    alt="Tavolina hospitality"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="portfolio-item__body">
                <p className="section-label">Hospitality</p>
                <h2>Tavolina</h2>
                <p>
                  <strong>Problem:</strong> paper menus and manual order
                  handling.
                  <br />
                  <strong>Built:</strong> digital menu, ordering and POS for
                  bars and restaurants.
                </p>
                <div
                  className="project-card__meta"
                  style={{ marginBottom: "1.25rem" }}
                >
                  <span style={tagStyle}>Full-stack</span>
                  <span style={tagStyle}>POS</span>
                  <span style={tagStyle}>Ops</span>
                </div>
                <div className="portfolio-item__actions">
                  <Link className="btn-brand" to="/contact">
                    Similar project?
                  </Link>
                </div>
              </div>
            </article>

            <article className="portfolio-item reveal" id="rental-car">
              <div className="portfolio-item__media project-card--autorent">
                <div className="project-card__visual">
                  <img
                    className="project-card__img"
                    src="/img/projects/autorent.png"
                    alt="AutoRent fleet"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="portfolio-item__body">
                <p className="section-label">Rental</p>
                <h2>AutoRent</h2>
                <p>
                  <strong>Problem:</strong> bookings handled by phone and
                  spreadsheets.
                  <br />
                  <strong>Built:</strong> rental platform with online booking
                  and admin panel.
                </p>
                <div
                  className="project-card__meta"
                  style={{ marginBottom: "1.25rem" }}
                >
                  <span style={tagStyle}>React</span>
                  <span style={tagStyle}>Express</span>
                  <span style={tagStyle}>PostgreSQL</span>
                </div>
                <div className="portfolio-item__actions">
                  <a
                    className="btn-brand"
                    href="https://www.landixhelo.me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View live site
                  </a>
                  <Link className="link-arrow" to="/contact">
                    Get in touch →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Got an idea? Let’s build it together."
        text="Tell us about your business and we’ll propose the right solution within 24 hours."
        cta="Book a free call"
      />
      <Footer />
    </>
  );
}
