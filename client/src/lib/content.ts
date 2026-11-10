export const HOME_INTRO = {
  eyebrow: "Web development studio · Tirana, Albania · CET",
  headline: "We build fast websites and web apps that bring you customers.",
  lead:
    "Websites, e-commerce and booking systems for hospitality, rental and retail businesses. Built with React and Node.js, optimised for search, delivered on time.",
} as const;

export const SERVICES_SECTION = {
  label: "What we do",
  title: "Everything you need to look serious online",
  text: "From first idea to launch: design, development and search optimisation in one place.",
} as const;

export const PROJECTS_SECTION = {
  label: "Selected work",
  title: "Real projects, real businesses",
  text: "Three digital products that show how we work — e-commerce, hospitality and rental.",
} as const;

export const PROJECTS = [
  {
    slug: "stitch-bear",
    className: "project-card--featured project-card--stitch",
    img: "/img/projects/stitch-bear.png",
    alt: "Stitch Bear e-commerce",
    tag: "E-commerce",
    title: "Stitch Bear",
    problem: "a handmade brand selling only through social media.",
    built: "online store with catalog, checkout and admin.",
    meta: ["React", "Node"],
    delay: "",
    liveUrl: null as string | null,
  },
  {
    slug: "tavolina",
    className: "project-card--tavolina",
    img: "/img/projects/tavolina.png",
    alt: "Tavolina hospitality",
    tag: "Hospitality",
    title: "Tavolina",
    problem: "paper menus and manual order handling.",
    built: "digital menu, ordering and POS for bars and restaurants.",
    meta: ["POS", "Full-stack"],
    delay: " reveal-delay-1",
    liveUrl: null as string | null,
  },
  {
    slug: "rental-car",
    className: "project-card--autorent",
    img: "/img/projects/autorent.png",
    alt: "AutoRent rental platform",
    tag: "Rental",
    title: "AutoRent",
    problem: "bookings handled by phone and spreadsheets.",
    built: "rental platform with online booking and admin panel.",
    meta: ["React", "PostgreSQL"],
    delay: " reveal-delay-2",
    liveUrl: "https://www.rentalcaral.com/",
  },
] as const;

export const PACKAGES = [
  {
    name: "Starter website",
    price: "From €150",
    desc: "Ideal for businesses that need a professional online presence quickly.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO",
    ],
    featured: false,
  },
  {
    name: "Web + features",
    price: "From €350",
    desc: "For brands that need more than a static brochure site.",
    features: [
      "Up to 10 pages",
      "Custom UI design",
      "Integrations (maps, payments, email)",
      "Performance optimisation",
    ],
    featured: true,
  },
  {
    name: "Full platform",
    price: "From €550",
    desc: "E-commerce, rental, booking or a dedicated system.",
    features: [
      "E-commerce, rental or booking",
      "Admin panel and database",
      "User accounts and auth",
      "Deployment and maintenance",
    ],
    featured: false,
  },
] as const;

export const FAQS = [
  {
    q: "How long does a project take?",
    a: "A website takes 2–4 weeks, a custom platform 6–12 weeks, depending on features.",
  },
  {
    q: "Do you work with clients outside Albania?",
    a: "Yes. We work remotely in English, on CET hours, with clients across Europe and beyond.",
  },
  {
    q: "Does the price include hosting and domain?",
    a: "We can set up and manage both for you. Costs are listed clearly in your quote.",
  },
  {
    q: "Who owns the code?",
    a: "You do. All code and assets are transferred to you after final payment.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Monthly maintenance plans cover updates, fixes and small improvements.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Of course. We are happy to sign one before discussing your project.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Clear communication and a website that finally matches how we want to present the business.",
    name: "Client",
    role: "Tavolina",
  },
  {
    quote:
      "We needed online bookings that work on mobile. The platform is fast, simple and easy to manage.",
    name: "Client",
    role: "AutoRent",
  },
  {
    quote:
      "From idea to live store, everything was built around selling — not just looking good.",
    name: "Client",
    role: "Stitch Bear",
  },
] as const;

export const CTA = {
  mid: {
    title: "Need a website that works for your business?",
    text: "Tell us about your project and get a clear quote within 24 hours.",
    cta: "Get a free quote",
  },
  final: {
    title: "Got an idea? Let’s build it together.",
    text: "Tell us about your business and we’ll propose the right solution within 24 hours.",
    cta: "Book a free call",
  },
} as const;
