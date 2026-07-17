import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CtaBand } from "../components/CtaBand";
import { useReveal } from "../hooks/useReveal";

export function HomePage() {
  useReveal();

  return (
    <>
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
                <div className="project-card__pattern" />
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
                <div className="project-card__pattern" />
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
                <div className="project-card__pattern" />
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

      <section className="section section--paper-deep" id="audience">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Për kë punojmë</p>
            <h2 className="section-title">Biznese që duan prani serioze online</h2>
            <p className="section-text">
              Ndihmojmë marka lokale të shesin, rezervojnë dhe komunikojnë më
              mirë digjitalisht.
            </p>
          </div>
          <div className="audience-grid">
            <div className="audience-item reveal">
              <h3>E-commerce & dyqane</h3>
              <p>
                Katalog, checkout dhe admin — që shitjet online të jenë të
                thjeshta dhe të besueshme.
              </p>
            </div>
            <div className="audience-item reveal reveal-delay-1">
              <h3>Bar, restorant & hospitality</h3>
              <p>
                Menu digjitale, porosi dhe sisteme që lehtësojnë punën e stafit
                çdo ditë.
              </p>
            </div>
            <div className="audience-item reveal reveal-delay-2">
              <h3>Shërbime & rental</h3>
              <p>
                Rezervime, paneli admin dhe faqe që kthejnë vizitorët në klientë.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head reveal">
            <p className="section-label">Çfarë bëjmë</p>
            <h2 className="section-title">Shërbime që ngrenë biznesin</h2>
            <p className="section-text">
              Nga ideja te lansimi — dizajn, kod dhe optimizim që sjellin
              klientë.
            </p>
          </div>
          <div className="service-list">
            <div className="service-row reveal">
              <span className="service-row__num">01</span>
              <h3 className="service-row__title">Web Development</h3>
              <p className="service-row__text">
                Website, e-commerce dhe aplikacione me React, Node dhe stack
                modern — të shpejta, të sigurta dhe të gatshme për rritje.
              </p>
            </div>
            <div className="service-row reveal reveal-delay-1">
              <span className="service-row__num">02</span>
              <h3 className="service-row__title">UX / UI Design</h3>
              <p className="service-row__text">
                Ndërfaqe të qarta që përdoruesit i kuptojnë menjëherë — më pak
                fërkim, më shumë konvertime.
              </p>
            </div>
            <div className="service-row reveal reveal-delay-2">
              <span className="service-row__num">03</span>
              <h3 className="service-row__title">SEO & Performance</h3>
              <p className="service-row__text">
                Optimizim për Google dhe shpejtësi ngarkimi, që biznesi yt të
                gjendet dhe të shitet më mirë.
              </p>
            </div>
            <div className="service-row reveal reveal-delay-3">
              <span className="service-row__num">04</span>
              <h3 className="service-row__title">Mirëmbajtje</h3>
              <p className="service-row__text">
                Përditësime, siguri dhe mbështetje e vazhdueshme pas lansimit —
                pa surpriza.
              </p>
            </div>
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
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Prisma",
              "Figma",
              "SEO",
              "Vercel",
            ].map((tech) => (
              <span className="tech-chip" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="about-strip">
            <div className="about-strip__visual reveal" aria-hidden="true" />
            <div className="reveal reveal-delay-1">
              <p className="section-label">Kush jemi</p>
              <h2 className="section-title">Studio e vogël, ndikim i madh</h2>
              <p className="section-text">
                DevByLand është studio krijuese në Shqipëri. Ndërtojmë produkte
                digjitale që duken mirë dhe punojnë edhe më mirë — për marka
                lokale që duan prani serioze online.
              </p>
              <div className="about-points">
                <div className="about-point">
                  <h3>Fokus te rezultati</h3>
                  <p>Çdo faqe ka një qëllim: kontakt, shitje ose rezervim.</p>
                </div>
                <div className="about-point">
                  <h3>Proces i qartë</h3>
                  <p>
                    Briefing → dizajn → build → lansim — me komunikim të
                    vazhdueshëm.
                  </p>
                </div>
                <div className="about-point">
                  <h3>Stack modern</h3>
                  <p>
                    Teknologji që mbajnë shpejtësi dhe janë të lehta për t’u
                    zgjeruar.
                  </p>
                </div>
              </div>
              <div className="results-strip reveal" style={{ marginTop: "2rem" }}>
                <div>
                  <strong>3+</strong>
                  <p>produkte digjitale në portfolio aktiv</p>
                </div>
                <div>
                  <strong>100%</strong>
                  <p>fokus te mobile dhe performancë</p>
                </div>
                <div>
                  <strong>1:1</strong>
                  <p>komunikim direkt gjatë gjithë projektit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper-deep" id="packages">
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

      <section className="section" id="faq">
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
