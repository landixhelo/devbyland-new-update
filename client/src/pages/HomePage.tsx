import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { Seo } from "../components/Seo";
import { TECH_STACK } from "../components/TechStack";
import { useReveal } from "../hooks/useReveal";

const services = [
  {
    title: "Web Development",
    text: "Website, e-commerce dhe aplikacione me React e Node — të shpejta, të sigurta dhe të gatshme për rritje.",
  },
  {
    title: "UX / UI Design",
    text: "Ndërfaqe të qarta që përdoruesit i kuptojnë menjëherë — më pak fërkim, më shumë konvertime.",
  },
  {
    title: "E-commerce",
    text: "Dyqane online me katalog, checkout dhe admin — të ndërtuara për shitje reale, jo vetëm pamje.",
  },
  {
    title: "SEO & Performance",
    text: "Optimizim për Google dhe shpejtësi ngarkimi, që biznesi yt të gjendet dhe të shitet më mirë.",
  },
  {
    title: "Sisteme custom",
    text: "Rezervime, rental, dashboard dhe paneli admin — logjikë biznesi e personalizuar.",
  },
  {
    title: "Mirëmbajtje",
    text: "Përditësime, siguri dhe mbështetje e vazhdueshme pas lansimit — pa surpriza.",
  },
];

const industries = [
  "E-commerce",
  "Hospitality",
  "Rental",
  "Retail",
  "Shërbime",
  "Startups",
];

const values = [
  {
    title: "Fokus te rezultati",
    text: "Çdo faqe ka një qëllim të qartë: kontakt, shitje ose rezervim.",
  },
  {
    title: "Pronësi e projektit",
    text: "E trajtojmë produktin tënd si tonin — me kujdes te detaji dhe afatet.",
  },
  {
    title: "Komunikim 1:1",
    text: "Feedback i shpejtë, pa zinxhirë të gjatë. Ti flet me atë që ndërton.",
  },
  {
    title: "Stack modern",
    text: "Teknologji që mbajnë shpejtësi dhe hapësirë për zgjerim të mëvonshëm.",
  },
];

const testimonials = [
  {
    quote:
      "Faqja e re duket profesionale dhe klientët rezervojnë më lehtë. Procesi ishte i qartë nga fillimi deri te lansimi.",
    name: "Klient hospitality",
    role: "Tavolina",
  },
  {
    quote:
      "Na duhej një platformë qiraje që të funksiononte në telefon. AutoRent na e dha — e pastër dhe e shpejtë.",
    name: "Klient rental",
    role: "AutoRent",
  },
  {
    quote:
      "Nga ideja te dyqani online, gjithçka u ndërtua me fokus te shitjet. Rekomandojmë DevByLand.",
    name: "Klient e-commerce",
    role: "Stitch Bear",
  },
];

export function HomePage() {
  useReveal();

  return (
    <>
      <Seo path="/" />
      <Navbar variant="home" />

      <header className="hero">
        <div className="container">
          <h1 className="hero-brand">
            DevBy<span>Land</span>
          </h1>
          <p className="hero-lead">
            Studio web që ndërton faqe, e-commerce dhe platforma digjitale për
            biznese që duan të rriten online.
          </p>
          <div className="hero-actions">
            <Link className="btn-brand" to="/projects">
              Shiko projektet
            </Link>
            <Link className="btn-ghost" to="/contact">
              Na kontakto
            </Link>
          </div>
        </div>
      </header>

      <section className="trust-strip" aria-label="Fokusi ynë">
        <div className="container trust-strip__inner">
          <span>Stitch Bear</span>
          <span>Tavolina</span>
          <span>AutoRent</span>
          <span>E-commerce</span>
          <span>Hospitality</span>
          <span>Rental</span>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Çfarë ndërtojmë</p>
            <h2 className="section-title">Gjithçka që të duhet për prani serioze online</h2>
            <p className="section-text">
              Nga ideja te lansimi — dizajn, kod dhe optimizim që sjellin
              klientë.
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
            <Link className="btn-brand" to="/contact">
              Shiko shërbimet
            </Link>
          </div>
        </div>
      </section>

      <section className="mid-cta">
        <div className="container mid-cta__inner reveal">
          <div>
            <h2>Gati për një faqe që punon për biznesin tënd?</h2>
            <p>Konsultë e shkurtër — pa obligim. Të tregojmë hapin e parë.</p>
          </div>
          <Link className="btn-brand" to="/contact">
            Konsultë falas
          </Link>
        </div>
      </section>

      <section className="section section--paper-deep" id="stats">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Rezultatet</p>
            <h2 className="section-title">
              Nuk flasim vetëm — <em>dorëzojmë</em>
            </h2>
          </div>
          <div className="stats-grid reveal">
            <div className="stats-item">
              <strong>3+</strong>
              <p>produkte digjitale në portfolio aktiv</p>
            </div>
            <div className="stats-item">
              <strong>100%</strong>
              <p>fokus te mobile dhe performancë</p>
            </div>
            <div className="stats-item">
              <strong>1:1</strong>
              <p>komunikim direkt gjatë projektit</p>
            </div>
            <div className="stats-item">
              <strong>4</strong>
              <p>hapa të qartë deri te lansimi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-head row-between reveal">
            <div>
              <p className="section-label">Portfolio</p>
              <h2 className="section-title">Projekte të zgjedhura</h2>
              <p className="section-text">
                Punë reale për e-commerce, restorante dhe rental — të dizajnuara
                për shitje dhe përvojë të pastër.
              </p>
            </div>
            <Link className="link-arrow" to="/projects">
              Të gjitha projektet →
            </Link>
          </div>

          <div className="project-grid">
            <Link
              className="project-card project-card--featured project-card--stitch reveal"
              to="/projects#stitch-bear"
            >
              <div className="project-card__visual">
                <img
                  className="project-card__img"
                  src="/img/projects/stitch-bear.png"
                  alt="Stitch Bear e-commerce"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="project-card__tag">E-commerce</span>
              <h3 className="project-card__title">Stitch Bear</h3>
              <p className="project-card__desc">
                Dyqan online për produkte handmade — katalog, checkout dhe admin
                për menaxhim të lehtë.
              </p>
              <div className="project-card__meta">
                <span>React</span>
                <span>Node</span>
                <span>Shop</span>
              </div>
            </Link>

            <Link
              className="project-card project-card--tavolina reveal reveal-delay-1"
              to="/projects#tavolina"
            >
              <div className="project-card__visual">
                <img
                  className="project-card__img"
                  src="/img/projects/tavolina.png"
                  alt="Tavolina rezervime"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="project-card__tag">Bar & Restorant</span>
              <h3 className="project-card__title">Tavolina</h3>
              <p className="project-card__desc">
                Sistem për menu, porosi dhe operacione ditore të
                bar-restorantit.
              </p>
              <div className="project-card__meta">
                <span>Full-stack</span>
                <span>POS</span>
              </div>
            </Link>

            <Link
              className="project-card project-card--autorent reveal reveal-delay-2"
              to="/projects#rental-car"
            >
              <div className="project-card__visual">
                <img
                  className="project-card__img"
                  src="/img/projects/autorent.png"
                  alt="AutoRent flota"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span className="project-card__tag">Rental</span>
              <h3 className="project-card__title">AutoRent</h3>
              <p className="project-card__desc">
                Platformë qiraje makinash me rezervime, admin dhe përvojë
                mobile.
              </p>
              <div className="project-card__meta">
                <span>React</span>
                <span>PostgreSQL</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--paper-deep" id="values">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Si kujdesemi</p>
            <h2 className="section-title">
              Projektin tënd e trajtojmë si tonin
            </h2>
            <p className="section-text">
              Studio e vogël, fokus i madh — cilësi, afate dhe komunikim i
              hapur.
            </p>
          </div>
          <div className="value-cards">
            {values.map((item, i) => (
              <article
                className={`value-card reveal${i ? ` reveal-delay-${Math.min(i, 3)}` : ""}`}
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Industritë</p>
            <h2 className="section-title">Përvojë në sektore të ndryshme</h2>
            <p className="section-text">
              Ndihmojmë marka lokale të shesin, rezervojnë dhe komunikojnë më
              mirë digjitalisht.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((name, i) => (
              <div
                className={`industry-chip reveal reveal-delay-${(i % 3) + 1}`}
                key={name}
                style={{ ["--i" as string]: String(i) }}
              >
                <span className="industry-chip__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <strong>{name}</strong>
                <span className="industry-chip__glow" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Klientët</p>
            <h2 className="section-title">Çfarë thonë për punën tonë</h2>
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
            <p className="section-label">Si punojmë</p>
            <h2 className="section-title">Katër hapa, zero kaos</h2>
            <p className="section-text">
              Proces i qartë nga biseda e parë deri te lansimi — me feedback të
              vazhdueshëm.
            </p>
          </div>
          <div className="process-track">
            <div className="process-step reveal">
              <span className="process-step__num">01</span>
              <h3>Briefing</h3>
              <p>
                Kuptojmë biznesin, audiencën dhe qëllimin — shitje, rezervim ose
                prezantim.
              </p>
            </div>
            <div className="process-step reveal reveal-delay-1">
              <span className="process-step__num">02</span>
              <h3>Dizajn</h3>
              <p>
                Struktura dhe UI që përputhen me markën — para se të shkruhet
                kodi.
              </p>
            </div>
            <div className="process-step reveal reveal-delay-2">
              <span className="process-step__num">03</span>
              <h3>Build</h3>
              <p>
                Zhvillim i pastër, i shpejtë dhe i testuar në desktop e mobile.
              </p>
            </div>
            <div className="process-step reveal reveal-delay-3">
              <span className="process-step__num">04</span>
              <h3>Lansim</h3>
              <p>
                Deploy, SEO bazë, training dhe mbështetje pas publikimit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-deep" id="tech">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Stack</p>
            <h2 className="section-title">Teknologjitë që përdorim</h2>
            <p className="section-text">
              Mjete moderne që mbajnë shpejtësi, siguri dhe hapësirë për rritje.
            </p>
          </div>
          <div className="tech-marquee reveal">
            {TECH_STACK.map((tech) => (
              <span className="tech-chip" key={tech.name}>
                {tech.icon}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="container">
          <div className="section-head row-between reveal">
            <div>
              <p className="section-label">Paketat</p>
              <h2 className="section-title">Zgjidh planin që të përshtatet</h2>
              <p className="section-text">
                Nga prezantim i thjeshtë te platformë e plotë — çmimi final
                varet nga scope.
              </p>
            </div>
            <Link className="link-arrow" to="/contact">
              Kërko ofertë →
            </Link>
          </div>
          <div className="package-grid">
            <div className="package-tier reveal">
              <p className="package-tier__name">Starter</p>
              <h3>Website prezantues</h3>
              <p className="package-tier__desc">
                Ideale për biznese që duan prani profesionale online shpejt.
              </p>
              <ul>
                <li>Deri në 5 faqe</li>
                <li>Dizajn responsive</li>
                <li>Formë kontakti</li>
                <li>SEO bazë</li>
              </ul>
              <Link className="btn-brand" to="/contact">
                Fillo
              </Link>
            </div>
            <div className="package-tier package-tier--featured reveal reveal-delay-1">
              <p className="package-tier__name">Business</p>
              <h3>Web + funksione</h3>
              <p className="package-tier__desc">
                Për marka që duan më shumë se një faqe statike.
              </p>
              <ul>
                <li>Deri në 10 faqe / seksione</li>
                <li>UI i personalizuar</li>
                <li>Integrime (email, maps, etj.)</li>
                <li>Optimizim performancë</li>
              </ul>
              <Link className="btn-brand" to="/contact">
                Fillo
              </Link>
            </div>
            <div className="package-tier reveal reveal-delay-2">
              <p className="package-tier__name">Custom</p>
              <h3>Platformë e plotë</h3>
              <p className="package-tier__desc">
                E-commerce, rental, dashboard ose sistem i dedikuar.
              </p>
              <ul>
                <li>Full-stack custom</li>
                <li>Panel admin</li>
                <li>Auth & database</li>
                <li>Deploy + mirëmbajtje</li>
              </ul>
              <Link className="btn-brand" to="/contact">
                Fillo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-deep" id="faq">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Pyetje të shpeshta</h2>
            <p className="section-text">
              Përgjigje të shkurtra para se të na shkruash.
            </p>
          </div>
          <div className="faq-list reveal">
            <details className="faq-item">
              <summary>Sa kohë zgjat një projekt?</summary>
              <p>
                Një website prezantues zakonisht 1–3 javë. Platformat custom
                (e-commerce, rental, dashboard) variojnë sipas funksioneve — të
                japim afat të qartë pas briefing-ut.
              </p>
            </details>
            <details className="faq-item">
              <summary>A punoni vetëm me biznese në Shqipëri?</summary>
              <p>
                Jemi të bazuar në Shqipëri, por punojmë edhe me klientë remote.
                Komunikimi bëhet në shqip ose anglisht.
              </p>
            </details>
            <details className="faq-item">
              <summary>A përfshihet hosting dhe domain?</summary>
              <p>
                Mund t’i setup-ojmë për ty (Vercel, Railway, etj.). Domain
                zakonisht blen ti; ne e lidhim dhe e konfigurojmë.
              </p>
            </details>
            <details className="faq-item">
              <summary>Çfarë më duhet të sjell para fillimit?</summary>
              <p>
                Logo (nëse ke), foto, tekstet kryesore dhe një ide të qartë çfarë
                duhet të bëjë faqja. Nëse nuk i ke gati, të ndihmojmë edhe me
                strukturën e përmbajtjes.
              </p>
            </details>
            <details className="faq-item">
              <summary>A ofroni mirëmbajtje pas lansimit?</summary>
              <p>
                Po — përditësime, backup, ndryshime të vogla dhe mbështetje
                teknike me plan mujor ose sipas nevojës.
              </p>
            </details>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ke një ide? Le ta ndërtojmë."
        text="Na trego biznesin tënd — të propozojmë zgjidhjen e duhur dhe hapin e parë."
      />
      <Footer showExtraLinks />
    </>
  );
}
