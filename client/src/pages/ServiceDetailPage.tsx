import { Link, Navigate, useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { getService, SERVICES, SITE } from "../lib/site";

export function ServiceDetailPage() {
  useReveal();
  const { slug = "" } = useParams();
  const service = getService(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const url = `${SITE.url}/services/${service.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      url,
      provider: {
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
      },
      areaServed: [
        { "@type": "City", name: "Tiranë" },
        { "@type": "Country", name: "Albania" },
      ],
      serviceType: service.name,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Kreu",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Shërbimet",
          item: `${SITE.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ];

  const related = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        path={`/services/${service.slug}`}
        keywords={`${service.name}, ${SITE.keywords}`}
        jsonLd={jsonLd}
      />
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">
            <Link to="/services">Shërbimet</Link> / {service.shortName}
          </p>
          <h1>{service.h1}</h1>
          <p>{service.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container service-detail-layout">
          <div className="reveal">
            <h2 className="section-title">Çfarë përfshihet</h2>
            <ul className="service-detail-bullets service-detail-bullets--lg">
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="service-detail-actions" style={{ marginTop: "1.75rem" }}>
              <Link className="btn-brand" to="/contact">
                Kërko ofertë
              </Link>
              <a
                className="btn-ghost"
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                  `Përshëndetje! Dua info për: ${service.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="service-side reveal reveal-delay-1">
            <h3>Pse DevByLand?</h3>
            <p>
              Studio e vogël në Tiranë me fokus te rezultati: website që sjellin
              kontakt, shitje ose rezervim — jo vetëm pamje.
            </p>
            <ul>
              <li>Komunikim 1:1</li>
              <li>Proces i qartë</li>
              <li>Stack modern</li>
              <li>Mbështetje pas lansimit</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Pyetje për {service.shortName}</h2>
          </div>
          <div className="faq-list reveal">
            {service.faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Shërbime të tjera</p>
            <h2 className="section-title">Mund të të interesojë edhe</h2>
          </div>
          <div className="service-cards">
            {related.map((s, i) => (
              <Link
                className={`service-card reveal${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
                to={`/services/${s.slug}`}
                key={s.slug}
              >
                <span className="service-card__num">{s.shortName}</span>
                <h3>{s.h1}</h3>
                <p>{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Le të flasim për ${service.shortName}`}
        text="Na shkruaj — të japim hapin e radhës dhe një vlerësim realist."
      />
      <Footer showExtraLinks />
    </>
  );
}
