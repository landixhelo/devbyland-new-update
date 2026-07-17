import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function PrivacyPage() {
  return (
    <>
      <Navbar />
      <section id="privacy">
        <div className="container">
          <h1 className="custom-heading">Privacy Policy</h1>
        </div>
      </section>
      <section id="terms-text">
        <div className="container">
          <div className="term-desc">
            <div className="row mb-5">
              <div className="col-md-6">
                <h2>Privacy Policy</h2>
              </div>
              <div className="col-md-6">
                <h3 style={{ float: "right" }}>Përditësimi i fundit: 29/10/2025</h3>
              </div>
            </div>
            <p style={{ color: "white", fontSize: 18 }}>
              * Kompania DEVBYLAND, respekton privatësinë e klientëve dhe
              vizitorëve të faqes sonë. Kjo politikë shpjegon si mbledhim,
              përdorim dhe mbrojmë informacionet personale.
            </p>
            <p className="txt">
              <b>1. Të dhënat që mbledhim</b>
            </p>
            <p>
              Emër, email dhe numër telefoni (kur plotëson formularin e
              kontaktit). Emrin e kompanisë ose biznesit. Të dhëna teknike (IP,
              browser, pages visited – për analiza anonime).
            </p>
            <p className="txt">
              <b>2. Si i përdorim të dhënat</b>
            </p>
            <p>
              Përgjigje ndaj kërkesave ose ofertave, përmirësim të shërbimeve, dhe
              njoftime (vetëm me pëlqimin tuaj).
            </p>
            <p className="txt">
              <b>3. Mbrojtja e të dhënave</b>
            </p>
            <p>
              Përdorim metoda sigurie për të mbrojtur informacionet kundër
              qasjes, ndryshimit ose shpërndarjes së paautorizuar.
            </p>
            <p className="txt">
              <b>4. Ndarja me palë të treta</b>
            </p>
            <p>
              Nuk i ndajmë informacionet me askënd tjetër, përveç rasteve kur
              është e nevojshme për përmbushjen e një kërkese ose zbatim të
              ligjit.
            </p>
            <p className="txt">
              <b>5. Të drejtat tuaja</b>
            </p>
            <p>
              Mund të kërkoni kopje të të dhënave, fshirjen ose korrigjimin e
              tyre, dhe ndërprerjen e komunikimit marketing.
            </p>
            <p className="txt">
              <b>6. Kontakt</b>
            </p>
            <p>
              <a href="mailto:devbyland@gmail.com">devbyland@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
