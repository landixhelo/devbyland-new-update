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
        { "@type": "City", name: "Tirana" },
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
          name: "Home",
          item: SITE.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
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
            <Link to="/services">Services</Link> / {service.shortName}
          </p>
          <h1>{service.h1}</h1>
          <p>{service.intro}</p>
        </div>
      </header>

      <section className="section">
        <div className="container service-detail-layout">
          <div className="reveal">
            <h2 className="section-title">What’s included</h2>
            <ul className="service-detail-bullets service-detail-bullets--lg">
              {service.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div
              className="service-detail-actions"
              style={{ marginTop: "1.75rem" }}
            >
              <Link className="btn-brand" to="/contact">
                Get a quote
              </Link>
              <a
                className="btn-ghost"
                href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                  `Hi DevByLand! I’d like info about: ${service.name}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <aside className="service-side reveal reveal-delay-1">
            <h3>Why DevByLand?</h3>
            <p>
              A small studio in Tirana focused on results: websites that bring
              contact, sales or bookings — not just looks.
            </p>
            <ul>
              <li>1:1 communication</li>
              <li>Clear process</li>
              <li>Modern stack</li>
              <li>Support after launch</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--paper-deep">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Questions about {service.shortName}</h2>
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
            <p className="section-label">Other services</p>
            <h2 className="section-title">You might also need</h2>
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
        title={`Let’s talk about ${service.shortName}`}
        text="Tell us what you need — we’ll reply with next steps and a realistic estimate."
      />
      <Footer showExtraLinks />
    </>
  );
}
