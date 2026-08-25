export const SITE = {
  name: "DevByLand",
  url: "https://www.devbyland.com",
  email: "devbyland@gmail.com",
  phoneDisplay: "+355 68 900 1257",
  phoneE164: "+355689001257",
  whatsappUrl: "https://wa.me/355689001257",
  instagram: "https://www.instagram.com/devbyland/",
  linkedin: "https://www.linkedin.com/company/devbyland",
  address: "Bulevardi Dëshmorët e Kombit, Tiranë, Shqipëri",
  geo: {
    lat: 41.3275,
    lng: 19.8187,
  },
  ogImage: "https://www.devbyland.com/img/logo.png",
  defaultTitle:
    "DevByLand | Krijim Website, E-commerce & SEO në Tiranë, Shqipëri",
  defaultDescription:
    "Agjenci web në Tiranë: krijim website, e-commerce, UX/UI dhe SEO për biznese në Shqipëri. Website moderne që sjellin klientë — DevByLand.",
  keywords: [
    "krijim website Shqipëri",
    "krijim website Tiranë",
    "web development Albania",
    "agjenci web Tiranë",
    "e-commerce Shqipëri",
    "dyqan online Tiranë",
    "SEO Shqipëri",
    "UX UI design Tiranë",
    "website për biznese",
    "DevByLand",
  ].join(", "),
} as const;

export type ServiceSlug =
  | "web-development"
  | "ecommerce"
  | "ux-ui"
  | "seo";

export type ServicePage = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: ServicePage[] = [
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Website",
    title: "Krijim Website në Tiranë & Shqipëri | DevByLand",
    description:
      "Krijim website profesionale në Tiranë: faqe biznesi, landing page dhe platforma custom. Web development modern, i shpejtë dhe i optimizuar për SEO.",
    h1: "Krijim website në Tiranë",
    intro:
      "Ndërtojmë website që duken profesionale dhe punojnë për biznesin tënd — nga faqja prezantuese te platforma custom. Stack modern (React, Node), dizajn responsive dhe fokus te konvertimet.",
    bullets: [
      "Website biznesi dhe landing page",
      "Aplikacione web dhe dashboard",
      "Dizajn 100% responsive (mobile-first)",
      "Integrime: formë, WhatsApp, maps, email",
      "Hosting, domain setup dhe lansim",
      "Kode i pastër, i shpejtë dhe i sigurt",
    ],
    faqs: [
      {
        q: "Sa kushton krijimi i një website në Shqipëri?",
        a: "Varet nga scope — një website prezantues është më ekonomik se një platformë custom. Pas briefing-ut të japim ofertë të qartë.",
      },
      {
        q: "Sa zgjat zhvillimi i një faqeje?",
        a: "Zakonisht 1–3 javë për website prezantues. Platformat më komplekse kanë afat të personalizuar.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    shortName: "E-commerce",
    title: "E-commerce & Dyqan Online në Shqipëri | DevByLand",
    description:
      "Ndërtojmë dyqane online dhe e-commerce në Shqipëri: katalog, checkout, admin dhe përvojë blerjeje e pastër. Shitje online pa komplikime.",
    h1: "E-commerce & dyqan online",
    intro:
      "Nga katalogu te pagesa — ndërtojmë dyqane online që janë të lehta për klientin dhe të menaxhueshme për ty. Ideale për marka lokale që duan të shesin 24/7.",
    bullets: [
      "Katalog produktesh dhe kategori",
      "Checkout i thjeshtë dhe i sigurt",
      "Panel admin për porosi e stok",
      "Përvojë mobile e optimizuar",
      "SEO bazë për produktet",
      "Integrime pagesash sipas nevojës",
    ],
    faqs: [
      {
        q: "A mund të shes online nga Shqipëria?",
        a: "Po. Ndërtojmë e-commerce të përshtatur për tregun lokal — me admin, porosi dhe përvojë mobile.",
      },
      {
        q: "A mund të migroj produktet ekzistuese?",
        a: "Po, mund të importojmë katalogun dhe të strukturojmë kategoritë që të jenë të qarta për blerësit.",
      },
    ],
  },
  {
    slug: "ux-ui",
    name: "UX / UI Design",
    shortName: "UX/UI",
    title: "UX/UI Design në Tiranë | DevByLand",
    description:
      "Dizajn UX/UI për website dhe aplikacione në Tiranë. Ndërfaqe të qarta që rrisin konvertimet — më pak fërkim, më shumë klientë.",
    h1: "UX / UI Design",
    intro:
      "Dizajnojmë ndërfaqe që përdoruesit i kuptojnë menjëherë. Para kodit — struktura, wireframe dhe UI që përputhet me markën tënde.",
    bullets: [
      "Wireframe dhe strukturë informacioni",
      "UI modern sipas markës",
      "Prototipe për feedback të shpejtë",
      "Design system i thjeshtë",
      "Fokus te mobile dhe aksesueshmëri",
      "Dorëzim i gatshëm për zhvillim",
    ],
    faqs: [
      {
        q: "A bëni vetëm dizajn, pa kod?",
        a: "Po, mund të punojmë vetëm UX/UI ose dizajn + zhvillim si paketë e plotë.",
      },
      {
        q: "A punoni me Figma?",
        a: "Po — dorëzimi bëhet zakonisht në Figma, i gatshëm për implementim.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO & Performance",
    shortName: "SEO",
    title: "SEO në Shqipëri | Optimizim Website Tiranë | DevByLand",
    description:
      "SEO dhe optimizim website në Shqipëri: shpejtësi, meta, strukturë dhe përmbajtje që të gjejnë klientët në Google. Agjenci SEO në Tiranë.",
    h1: "SEO & performancë website",
    intro:
      "Ndihmojmë biznesin tënd të gjendet në Google — me SEO teknik, përmbajtje të qartë, shpejtësi ngarkimi dhe strukturë që kërkuesit e kuptojnë.",
    bullets: [
      "Audit SEO teknik i faqes",
      "Meta title, description dhe headings",
      "Optimizim shpejtësie (Core Web Vitals)",
      "Strukturë URL dhe sitemap",
      "Schema / rich results bazë",
      "Këshilla përmbajtjeje për fjalë kyçe lokale",
    ],
    faqs: [
      {
        q: "Sa kohë duhet që SEO të japë rezultate?",
        a: "Zakonisht disa javë deri në disa muaj, sipas konkurrencës. Ne ndërtojmë bazën teknike që të fillosh fort.",
      },
      {
        q: "A bëni SEO lokale për Tiranën?",
        a: "Po — fokus te kërkimet lokale (Tiranë / Shqipëri) dhe shërbimet që ofron biznesi yt.",
      },
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
