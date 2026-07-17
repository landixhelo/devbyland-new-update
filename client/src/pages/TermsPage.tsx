import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function TermsPage() {
  return (
    <>
      <Navbar />
      <section id="termss">
        <div className="container">
          <h1 className="custom-heading">Terms & Conditions</h1>
        </div>
      </section>
      <section id="terms-text">
        <div className="container">
          <div className="term-desc">
            <div className="row mb-5">
              <div className="col-md-6">
                <h2>Terms & Conditions</h2>
              </div>
              <div className="col-md-6">
                <h3 style={{ float: "right" }}>Përditësimi i fundit: 29/10/2025</h3>
              </div>
            </div>
            <p style={{ color: "white", fontSize: 18 }}>
              * Këto kushte (“Kushtet”) rregullojnë përdorimin e faqes DevByLand
              dhe shërbimeve të ofruara nga <b>DEVBYLAND</b>.
            </p>
            <p className="txt">
              <b>1. Pranimi i kushteve</b>
            </p>
            <p>
              Duke përdorur faqen tonë ose duke kërkuar një shërbim, ju pranoni
              këto kushte. Nëse nuk jeni dakord, ju lutemi mos përdorni faqen
              tonë.
            </p>
            <p className="txt">
              <b>2. Shërbimet tona</b>
            </p>
            <p>
              Web Design & Development, SEO, Branding & Graphic Design — sipas
              marrëveshjes me klientin.
            </p>
            <p className="txt">
              <b>3. Pagesat</b>
            </p>
            <p>
              Pagesat kryhen sipas marrëveshjes për çdo projekt. Parapagimi (nëse
              kërkohet) nuk është i rimbursueshëm pas fillimit të punës.
            </p>
            <p className="txt">
              <b>4. Pronësia e përmbajtjes</b>
            </p>
            <p>
              Materialet e krijuara janë pronë e klientit vetëm pas pagesës së
              plotë. Deri atëherë mbeten pronë e DEVBYLAND.
            </p>
            <p className="txt">
              <b>5. Ndryshime</b>
            </p>
            <p>
              Mund të përditësojmë këto kushte. Versioni më i fundit publikohet
              në këtë faqe.
            </p>
            <p className="txt">
              <b>6. Kufizimi i përgjegjësisë</b>
            </p>
            <p>
              Nuk mbajmë përgjegjësi për dëme që mund të lindin nga përdorimi i
              faqeve ose shërbimeve tona.
            </p>
            <p className="txt">
              <b>7. Ligji në fuqi</b>
            </p>
            <p>Këto kushte rregullohen sipas ligjeve të Republikës së Shqipërisë.</p>
            <p className="txt">
              <b>8. Kontakt</b>
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
