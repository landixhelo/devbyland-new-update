import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { useReveal } from "../hooks/useReveal";

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
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">Portfolio</p>
          <h1>Projekte</h1>
          <p>
            Tre produkte digjitale që tregojnë se si punojmë — e-commerce,
            hospitality dhe rental.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="portfolio-list">
            <article className="portfolio-item reveal" id="stitch-bear">
              <div className="portfolio-item__media project-card--stitch">
                <div className="project-card__visual">
                  <div className="project-card__pattern" />
                </div>
              </div>
              <div className="portfolio-item__body">
                <p className="section-label">E-commerce</p>
                <h2>Stitch Bear</h2>
                <p>
                  Platformë e-commerce për markë handmade. Katalog produktesh,
                  checkout, panel admin dhe përvojë blerjeje e pastër — e
                  ndërtuar për shitje online pa komplikime.
                </p>
                <div
                  className="project-card__meta"
                  style={{ marginBottom: "1.25rem" }}
                >
                  <span style={tagStyle}>React</span>
                  <span style={tagStyle}>Node.js</span>
                  <span style={tagStyle}>PostgreSQL</span>
                </div>
                <div className="portfolio-item__actions">
                  <Link className="btn-brand" to="/contact">
                    Projekt i ngjashëm?
                  </Link>
                </div>
              </div>
            </article>

            <article className="portfolio-item reveal" id="tavolina">
              <div className="portfolio-item__media project-card--tavolina">
                <div className="project-card__visual">
                  <div className="project-card__pattern" />
                </div>
              </div>
              <div className="portfolio-item__body">
                <p className="section-label">Bar & Restorant</p>
                <h2>Tavolina</h2>
                <p>
                  Sistem digjital për bar dhe restorant: menu, porosi, role stafi
                  dhe rrjedhë pune në kohë reale. Ndërtuar për operacione ditore
                  — jo vetëm për pamje.
                </p>
                <div
                  className="project-card__meta"
                  style={{ marginBottom: "1.25rem" }}
                >
                  <span style={tagStyle}>Full-stack</span>
                  <span style={tagStyle}>Dashboard</span>
                  <span style={tagStyle}>Ops</span>
                </div>
                <div className="portfolio-item__actions">
                  <Link className="btn-brand" to="/contact">
                    Projekt i ngjashëm?
                  </Link>
                </div>
              </div>
            </article>

            <article className="portfolio-item reveal" id="rental-car">
              <div className="portfolio-item__media project-card--autorent">
                <div className="project-card__visual">
                  <div className="project-card__pattern" />
                </div>
              </div>
              <div className="portfolio-item__body">
                <p className="section-label">Car Rental</p>
                <h2>AutoRent</h2>
                <p>
                  Platformë qiraje makinash me kërkim, rezervime, panel admin
                  dhe akses për kontraktorë. Dizajn i fokusuar te shpejtësia e
                  rezervimit dhe menaxhimi i flotës.
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
                    Shiko live
                  </a>
                  <Link className="link-arrow" to="/contact">
                    Na shkruaj →
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand
        title="Projekti yt i radhës"
        text="Na trego çfarë do të ndërtosh — e-commerce, restorant, rental ose diçka tjetër."
      />
      <Footer />
    </>
  );
}
