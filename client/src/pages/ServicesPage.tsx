import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SERVICES, SITE } from "../lib/site";

export function ServicesPage() {
  useReveal();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shërbimet DevByLand",
    description:
      "Web development, e-commerce, UX/UI dhe SEO për biznese në Tiranë dhe Shqipëri.",
    url: `${SITE.url}/services`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: SERVICES.map((s) => ({
      "@type": "Service",
      name: s.name,
      url: `${SITE.url}/services/${s.slug}`,
    })),
  };

  return (
    <>
      <Seo
        title="Shërbimet | Krijim Website, E-commerce, UX/UI & SEO"
        description="Shërbimet DevByLand në Tiranë: krijim website, e-commerce, UX/UI design dhe SEO. Zgjidhje digjitale për biznese në Shqipëri."
        path="/services"
        keywords={`${SITE.keywords}, shërbime web, agjenci digjitale Tiranë`}
        jsonLd={jsonLd}
      />
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">Shërbimet</p>
          <h1>Çfarë ndërtojmë për biznesin tënd</h1>
          <p>
            Nga website prezantues te e-commerce dhe SEO — zgjidhje të qarta për
            marka në Tiranë dhe në gjithë Shqipërinë.
          </p>
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
                      Më shumë për {service.shortName}
                    </Link>
                    <Link className="link-arrow" to="/contact">
                      Kërko ofertë →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Gati të fillojmë?"
        text="Na trego çfarë të duhet — website, dyqan online apo SEO — dhe të propozojmë hapin e parë."
      />
      <Footer showExtraLinks />
    </>
  );
}
