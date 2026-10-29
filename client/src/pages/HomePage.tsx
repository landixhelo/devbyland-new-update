import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { TECH_STACK } from "../components/TechStack";
import { useReveal } from "../hooks/useReveal";
import { SITE } from "../lib/site";

const services = [
  {
    title: "Web development",
    text: "Business websites and web apps built with React and Node. Fast, secure and easy to grow.",
  },
  {
    title: "UX / UI design",
    text: "Clear, modern interfaces designed around what your visitors need to do.",
  },
  {
    title: "E-commerce",
    text: "Online stores with catalog, checkout, admin panel and payments.",
  },
  {
    title: "SEO and performance",
    text: "Technical SEO, speed optimisation and analytics so customers can find you.",
  },
  {
    title: "Custom systems",
    text: "Booking, rental and admin systems tailored to how your business works.",
  },
  {
    title: "Maintenance",
    text: "Updates, fixes and improvements after launch, so nothing breaks quietly.",
  },
];

const projects = [
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
  },
];

const testimonials = [
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
];

const faqs = [
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
];

export function HomePage() {
  useReveal();

  const homeFaqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
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
          <p className="hero-eyebrow">
            Web development studio · Tirana, Albania · CET
          </p>
          <h1 className="hero-brand">
            We build fast websites and web apps that bring you{" "}
            <span>customers</span>.
          </h1>
          <p className="hero-lead">
            Websites, e-commerce and booking systems for hospitality, rental and
            retail businesses. Built with React and Node.js, optimised for
            search, delivered on time.
          </p>
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
            <p className="section-label">What we do</p>
            <h2 className="section-title">
              Everything you need to look serious online
            </h2>
            <p className="section-text">
              From first idea to launch: design, development and search
              optimisation in one place.
            </p>
          </div>
          <div className="service-cards">
            {services.map((item, i) => (
              <article
                className={`service-card reveal${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
                key={item.title}
              >
                <span className="service-card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
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
            <h2>Need a website that works for your business?</h2>
            <p>
              Tell us about your project and get a clear quote within 24 hours.
            </p>
          </div>
          <Link className="btn-brand" to="/contact">
            Get a free quote
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
              <p className="section-label">Selected work</p>
              <h2 className="section-title">Real projects, real businesses</h2>
            </div>
            <Link className="link-arrow" to="/projects">
              All projects →
            </Link>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
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
            {testimonials.map((item, i) => (
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
            <div className="package-tier reveal">
              <p className="package-tier__name">Starter website</p>
              <h3>From quote</h3>
              <p className="package-tier__desc">
                Ideal for businesses that need a professional online presence
                quickly.
              </p>
              <ul>
                <li>Up to 5 pages</li>
                <li>Responsive design</li>
                <li>Contact form</li>
                <li>Basic SEO</li>
              </ul>
              <Link className="btn-brand" to="/contact">
                Get a quote
              </Link>
            </div>
            <div className="package-tier package-tier--featured reveal reveal-delay-1">
              <p className="package-tier__name">Web + features</p>
              <h3>From quote</h3>
              <p className="package-tier__desc">
                For brands that need more than a static brochure site.
              </p>
              <ul>
                <li>Up to 10 pages</li>
                <li>Custom UI design</li>
                <li>Integrations (maps, payments, email)</li>
                <li>Performance optimisation</li>
              </ul>
              <Link className="btn-brand" to="/contact">
                Get a quote
              </Link>
            </div>
            <div className="package-tier reveal reveal-delay-2">
              <p className="package-tier__name">Full platform</p>
              <h3>From quote</h3>
              <p className="package-tier__desc">
                E-commerce, rental, booking or a dedicated system.
              </p>
              <ul>
                <li>E-commerce, rental or booking</li>
                <li>Admin panel and database</li>
                <li>User accounts and auth</li>
                <li>Deployment and maintenance</li>
              </ul>
              <Link className="btn-brand" to="/contact">
                Get a quote
              </Link>
            </div>
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
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Got an idea? Let’s build it together."
        text="Tell us about your business and we’ll propose the right solution within 24 hours."
        cta="Book a free call"
      />
      <Footer showExtraLinks />
    </>
  );
}
