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
    name: "DevByLand Services",
    description:
      "Web development, e-commerce, UX/UI and SEO for businesses in Tirana and abroad.",
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
        title="Services | Websites, E-commerce, UX/UI & SEO"
        description="What we do: web development, e-commerce, UX/UI design and SEO — from first idea to launch."
        path="/services"
        keywords={`${SITE.keywords}, web agency Albania`}
        jsonLd={jsonLd}
      />
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">Services</p>
          <h1>Everything you need to look serious online</h1>
          <p>
            From first idea to launch: design, development and search
            optimisation in one place.
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

      <CtaBand
        title="Need a website that works for your business?"
        text="Tell us about your project and get a clear quote within 24 hours."
      />
      <Footer showExtraLinks />
    </>
  );
}
