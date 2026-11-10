export const SITE = {
  name: "DevByLand",
  url: "https://www.devbyland.com",
  email: "devbyland@gmail.com",
  phoneDisplay: "+355 68 900 1257",
  phoneE164: "+355689001257",
  whatsappUrl: "https://wa.me/355689001257",
  instagram: "https://www.instagram.com/devbyland/",
  linkedin: "https://www.linkedin.com/company/devbyland",
  address: "Tirana, Albania",
  geo: {
    lat: 41.3275,
    lng: 19.8187,
  },
  ogImage: "https://www.devbyland.com/img/logo.png",
  defaultTitle:
    "DevByLand | Websites & web apps that bring you customers",
  defaultDescription:
    "Web development studio in Tirana, Albania. We build fast websites, e-commerce and booking systems for hospitality, rental and retail — React, Node.js, SEO included.",
  keywords: [
    "web development Albania",
    "website agency Tirana",
    "e-commerce Albania",
    "UX UI design Tirana",
    "SEO Albania",
    "React developer Albania",
    "custom web apps",
    "DevByLand",
  ].join(", "),
} as const;

export type ServiceSlug =
  | "web-development"
  | "ecommerce"
  | "ux-ui"
  | "seo"
  | "custom-systems"
  | "maintenance";

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
    name: "Web development",
    shortName: "Websites",
    title: "Web Development in Tirana & Albania | DevByLand",
    description:
      "Business websites and web apps built with React and Node. Fast, secure and easy to grow.",
    h1: "Web development",
    intro:
      "Business websites and web apps built with React and Node. Fast, secure and easy to grow.",
    bullets: [
      "Business websites and landing pages",
      "Web apps and dashboards",
      "100% responsive (mobile-first)",
      "Integrations: forms, WhatsApp, maps, email",
      "Hosting, domain setup and launch",
      "Clean, fast and secure code",
    ],
    faqs: [
      {
        q: "How much does a website cost?",
        a: "Starter websites start from €150. Web + features from €350. After a short briefing we send a fixed-price quote.",
      },
      {
        q: "How long does development take?",
        a: "A website takes 2–4 weeks, a custom platform 6–12 weeks, depending on features.",
      },
    ],
  },
  {
    slug: "ux-ui",
    name: "UX / UI design",
    shortName: "UX / UI",
    title: "UX/UI Design | DevByLand",
    description:
      "Clear, modern interfaces designed around what your visitors need to do.",
    h1: "UX / UI design",
    intro:
      "Clear, modern interfaces designed around what your visitors need to do.",
    bullets: [
      "Wireframes and information architecture",
      "Brand-aligned UI",
      "Prototypes for fast feedback",
      "Simple design system",
      "Mobile and accessibility focus",
      "Handoff ready for development",
    ],
    faqs: [
      {
        q: "Do you offer design without development?",
        a: "Yes — UX/UI only, or design plus build as a full package.",
      },
      {
        q: "Do you work in Figma?",
        a: "Yes. Deliverables are usually in Figma, ready for implementation.",
      },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    shortName: "E-commerce",
    title: "E-commerce & Online Stores | DevByLand",
    description:
      "Online stores with catalog, checkout, admin panel and payments.",
    h1: "E-commerce",
    intro:
      "Online stores with catalog, checkout, admin panel and payments.",
    bullets: [
      "Product catalog and categories",
      "Simple, secure checkout",
      "Admin for orders and stock",
      "Mobile-optimised shopping experience",
      "Basic product SEO",
      "Payment integrations as needed",
    ],
    faqs: [
      {
        q: "How much does an online store cost?",
        a: "Full platforms start from €550, depending on catalog size, payments and admin needs. We send a fixed quote after briefing.",
      },
      {
        q: "Can you migrate my existing products?",
        a: "Yes. We can import your catalog and structure categories so shoppers find products quickly.",
      },
    ],
  },
  {
    slug: "seo",
    name: "SEO and performance",
    shortName: "SEO",
    title: "SEO & Website Performance | DevByLand",
    description:
      "Technical SEO, speed optimisation and analytics so customers can find you.",
    h1: "SEO and performance",
    intro:
      "Technical SEO, speed optimisation and analytics so customers can find you.",
    bullets: [
      "Technical SEO audit",
      "Meta titles, descriptions and headings",
      "Speed optimisation (Core Web Vitals)",
      "URL structure and sitemap",
      "Basic schema / rich results",
      "Content guidance for local keywords",
    ],
    faqs: [
      {
        q: "How long until SEO shows results?",
        a: "Usually weeks to a few months, depending on competition. We build the technical base so you start strong.",
      },
      {
        q: "Do you do local SEO for Tirana / Albania?",
        a: "Yes — we focus on local search intent and the services your business actually sells.",
      },
    ],
  },
  {
    slug: "custom-systems",
    name: "Custom systems",
    shortName: "Custom",
    title: "Custom Booking & Admin Systems | DevByLand",
    description:
      "Booking, rental and admin systems tailored to how your business works.",
    h1: "Custom systems",
    intro:
      "Booking, rental and admin systems tailored to how your business works.",
    bullets: [
      "Booking and reservation flows",
      "Rental and fleet management",
      "Admin panels and dashboards",
      "User accounts and roles",
      "Integrations with your tools",
      "Built for desktop and mobile",
    ],
    faqs: [
      {
        q: "How much does a custom system cost?",
        a: "Full platforms start from €550. Scope and timeline are confirmed after we map your workflow.",
      },
      {
        q: "Can you rebuild something we already use in spreadsheets?",
        a: "Yes — that’s a common request. We turn manual processes into a clean web app your team can run daily.",
      },
    ],
  },
  {
    slug: "maintenance",
    name: "Maintenance",
    shortName: "Maintenance",
    title: "Website Maintenance & Support | DevByLand",
    description:
      "Updates, fixes and improvements after launch, so nothing breaks quietly.",
    h1: "Maintenance",
    intro:
      "Updates, fixes and improvements after launch, so nothing breaks quietly.",
    bullets: [
      "Security and dependency updates",
      "Bug fixes and small improvements",
      "Content and layout tweaks",
      "Performance checks",
      "Backup and monitoring guidance",
      "Monthly or on-demand plans",
    ],
    faqs: [
      {
        q: "Do you offer support after launch?",
        a: "Yes. Monthly maintenance plans cover updates, fixes and small improvements.",
      },
      {
        q: "Can you maintain a site you didn’t build?",
        a: "Often yes — after a short technical review we tell you what’s possible and what it would cost.",
      },
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
