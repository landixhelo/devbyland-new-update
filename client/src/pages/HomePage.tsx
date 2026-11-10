import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { TECH_STACK } from "../components/TechStack";
import { useReveal } from "../hooks/useReveal";
import { SITE, SERVICES } from "../lib/site";
import {
  CTA,
  FAQS,
  HOME_INTRO,
  PACKAGES,
  PROJECTS,
  PROJECTS_SECTION,
  SERVICES_SECTION,
  TESTIMONIALS,
} from "../lib/content";

export function HomePage() {
  useReveal();

  const homeFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Seo
        path="/"
        title={SITE.defaultTitle}
        description={SITE.defaultDescription}
        jsonLd={homeFaqLd}
      />
      <Navbar variant="home" />

      <header className="hero">
        <div className="container">
          <p className="hero-eyebrow">{HOME_INTRO.eyebrow}</p>
          <h1 className="hero-brand">
            We build fast websites and web apps that bring you{" "}
            <span>customers</span>.
          </h1>
          <p className="hero-lead">{HOME_INTRO.lead}</p>
          <div className="hero-actions">
            <Link className="btn-brand" to="/contact">
              Get a free quote
            </Link>
            <Link className="btn-ghost" to="/projects">
              See our work
            </Link>
          </div>
        </div>
      </header>

      <section className="trust-strip" aria-label="Tech stack">
        <div className="container trust-strip__inner">
          {TECH_STACK.map((tech) => (
            <span key={tech.name}>{tech.name}</span>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">{SERVICES_SECTION.label}</p>
            <h2 className="section-title">{SERVICES_SECTION.title}</h2>
            <p className="section-text">{SERVICES_SECTION.text}</p>
          </div>
          <div className="service-cards">
            {SERVICES.map((item, i) => (
              <Link
                className={`service-card reveal${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
                to={`/services/${item.slug}`}
                key={item.slug}
              >
                <span className="service-card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.name}</h3>
                <p>{item.intro}</p>
              </Link>
            ))}
          </div>
          <div className="section-actions reveal">
            <Link className="btn-brand" to="/services">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="mid-cta">
        <div className="container mid-cta__inner reveal">
          <div>
            <h2>{CTA.mid.title}</h2>
            <p>{CTA.mid.text}</p>
          </div>
          <Link className="btn-brand" to="/contact">
            {CTA.mid.cta}
          </Link>
        </div>
      </section>

      <section className="section section--paper-deep" id="stats">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Why us</p>
            <h2 className="section-title">
              A small studio, fully focused on your result
            </h2>
          </div>
          <div className="stats-grid reveal">
            <div className="stats-item">
              <strong>3+</strong>
              <p>live products in our portfolio</p>
            </div>
            <div className="stats-item">
              <strong>24h</strong>
              <p>reply time on every enquiry</p>
            </div>
            <div className="stats-item">
              <strong>1:1</strong>
              <p>direct contact with the developer</p>
            </div>
            <div className="stats-item">
              <strong>100%</strong>
              <p>code ownership transferred to you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-head row-between reveal">
            <div>
              <p className="section-label">{PROJECTS_SECTION.label}</p>
              <h2 className="section-title">{PROJECTS_SECTION.title}</h2>
            </div>
            <Link className="link-arrow" to="/projects">
              All projects →
            </Link>
          </div>

          <div className="project-grid">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                className={`project-card ${p.className} reveal${p.delay}`}
                to={`/projects#${p.slug}`}
              >
                <div className="project-card__visual">
                  <img
                    className="project-card__img"
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="project-card__tag">{p.tag}</span>
                <h3 className="project-card__title">{p.title}</h3>
                <p className="project-card__desc">
                  <strong>Problem:</strong> {p.problem}
                  <br />
                  <strong>Built:</strong> {p.built}
                </p>
                <div className="project-card__meta">
                  {p.meta.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper-deep" id="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Client feedback</p>
            <h2 className="section-title">What clients say</h2>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((item, i) => (
              <blockquote
                className={`testimonial-card reveal${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
                key={item.role}
              >
                <div className="testimonial-card__stars" aria-hidden="true">
                  ★★★★★
                </div>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink" id="process">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Process</p>
            <h2 className="section-title">Four steps, zero chaos</h2>
          </div>
          <div className="process-track">
            <div className="process-step reveal">
              <span className="process-step__num">01</span>
              <h3>Briefing</h3>
              <p>
                We learn your goals, audience and what success looks like.
              </p>
            </div>
            <div className="process-step reveal reveal-delay-1">
              <span className="process-step__num">02</span>
              <h3>Design</h3>
              <p>
                You see the structure and look before a single line of code.
              </p>
            </div>
            <div className="process-step reveal reveal-delay-2">
              <span className="process-step__num">03</span>
              <h3>Build</h3>
              <p>
                Short sprints with regular demos on desktop and mobile.
              </p>
            </div>
            <div className="process-step reveal reveal-delay-3">
              <span className="process-step__num">04</span>
              <h3>Launch</h3>
              <p>
                Deployment, SEO setup, training and support after go-live.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="container">
          <div className="section-head row-between reveal">
            <div>
              <p className="section-label">Pricing</p>
              <h2 className="section-title">
                Pick the plan that fits your business
              </h2>
              <p className="section-text">
                Fixed-price quotes. Prices in euro, no hidden costs.
              </p>
            </div>
            <Link className="link-arrow" to="/contact">
              Request a quote →
            </Link>
          </div>
          <div className="package-grid">
            {PACKAGES.map((pkg, i) => (
              <div
                className={`package-tier${pkg.featured ? " package-tier--featured" : ""} reveal${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
                key={pkg.name}
              >
                <p className="package-tier__name">{pkg.name}</p>
                <h3>{pkg.price}</h3>
                <p className="package-tier__desc">{pkg.desc}</p>
                <ul>
                  {pkg.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <Link className="btn-brand" to="/contact">
                  Get a quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper-deep" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Questions we hear often</h2>
          </div>
          <div className="faq-list reveal">
            {FAQS.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={CTA.final.title} text={CTA.final.text} cta={CTA.final.cta} />
      <Footer showExtraLinks />
    </>
  );
}
