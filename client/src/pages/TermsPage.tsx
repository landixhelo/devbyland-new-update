import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { SITE } from "../lib/site";

export function TermsPage() {
  return (
    <>
      <Seo
        title="Terms & Conditions"
        description="Terms of use for the DevByLand website and services."
        path="/terms"
      />
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
                <h3 style={{ float: "right" }}>Last updated: 29/10/2026</h3>
              </div>
            </div>
            <p style={{ color: "white", fontSize: 18 }}>
              * These terms (“Terms”) govern use of the DevByLand website and
              services provided by <b>DEVBYLAND</b>.
            </p>
            <p className="txt">
              <b>1. Acceptance</b>
            </p>
            <p>
              By using our website or requesting a service, you accept these
              terms. If you do not agree, please do not use our site.
            </p>
            <p className="txt">
              <b>2. Our services</b>
            </p>
            <p>
              Web design & development, e-commerce, UX/UI, SEO and related
              digital services — as agreed with each client.
            </p>
            <p className="txt">
              <b>3. Payments</b>
            </p>
            <p>
              Payments follow the agreement for each project. Any deposit
              required is non-refundable after work has started.
            </p>
            <p className="txt">
              <b>4. Ownership</b>
            </p>
            <p>
              Deliverables become the client’s property after full payment.
              Until then they remain the property of DEVBYLAND. After final
              payment, code and assets are transferred to you.
            </p>
            <p className="txt">
              <b>5. Changes</b>
            </p>
            <p>
              We may update these terms. The latest version is published on this
              page.
            </p>
            <p className="txt">
              <b>6. Limitation of liability</b>
            </p>
            <p>
              We are not liable for damages arising from use of our websites or
              services, except where required by law.
            </p>
            <p className="txt">
              <b>7. Governing law</b>
            </p>
            <p>
              These terms are governed by the laws of the Republic of Albania.
            </p>
            <p className="txt">
              <b>8. Contact</b>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <br />
              <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
