import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SERVICES, SITE } from "../lib/site";
import { CTA, PACKAGES, SERVICES_SECTION } from "../lib/content";

export function ServicesPage() {
  useReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DevByLand Services",
    description: SERVICES_SECTION.text,
    url: `${SITE.url}/services`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: SERVICES.map((s) => ({
      "@type": "Service",
      name: s.name,
      description: s.intro,
      url: `${SITE.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <Seo
        title="Services | Websites, E-commerce, UX/UI & SEO"
        description={`${SERVICES_SECTION.title}. ${SERVICES_SECTION.text}`}
        path="/services"
        keywords={`${SITE.keywords}, web agency Albania`}
        jsonLd={jsonLd}
      />
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">{SERVICES_SECTION.label}</p>
          <h1>{SERVICES_SECTION.title}</h1>
          <p>{SERVICES_SECTION.text}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="service-detail-list">
            {SERVICES.map((service, i) => (
              <article
                className={`service-detail-row reveal${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
                key={service.slug}
                id={service.slug}
              >
                <div>
                  <p className="section-label">{service.shortName}</p>
                  <h2>{service.h1}</h2>
                  <p>{service.intro}</p>
                  <ul className="service-detail-bullets">
                    {service.bullets.slice(0, 4).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="service-detail-actions">
                    <Link
                      className="btn-brand"
                      to={`/services/${service.slug}`}
                    >
                      More about {service.shortName}
                    </Link>
                    <Link className="link-arrow" to="/contact">
                      Get a quote →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper-deep" id="packages">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Pricing</p>
            <h2 className="section-title">
              Pick the plan that fits your business
            </h2>
            <p className="section-text">
              Fixed-price quotes. Prices in euro, no hidden costs.
            </p>
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

      <CtaBand title={CTA.mid.title} text={CTA.mid.text} cta={CTA.mid.cta} />
      <Footer showExtraLinks />
    </>
  );
}
