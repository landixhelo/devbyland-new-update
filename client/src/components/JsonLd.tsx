import { Helmet } from "react-helmet-async";
import { SERVICES, SITE } from "../lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        alternateName: ["Dev By Land", "DevByLand Albania"],
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/img/logo.png`,
        },
        image: `${SITE.url}/img/logo.png`,
        email: SITE.email,
        telephone: SITE.phoneE164,
        priceRange: "$$",
        foundingDate: "2024",
        description: SITE.defaultDescription,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bulevardi Dëshmorët e Kombit",
          addressLocality: "Tiranë",
          addressRegion: "Tiranë",
          addressCountry: "AL",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.geo.lat,
          longitude: SITE.geo.lng,
        },
        areaServed: [
          { "@type": "City", name: "Tiranë" },
          { "@type": "Country", name: "Albania" },
        ],
        sameAs: [SITE.instagram, SITE.linkedin],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: SITE.email,
            telephone: SITE.phoneE164,
            availableLanguage: ["sq", "en"],
            areaServed: "AL",
          },
        ],
        knowsAbout: [
          "Web Development",
          "E-commerce",
          "UX/UI Design",
          "SEO",
          "React",
          "Node.js",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Shërbimet DevByLand",
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              url: `${SITE.url}/services/${service.slug}`,
              provider: { "@id": `${SITE.url}/#organization` },
              areaServed: "AL",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.defaultDescription,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: ["sq", "en"],
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
