import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { SITE } from "../lib/site";

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="DevByLand privacy policy — how we collect, use and protect your personal data."
        path="/privacy"
      />
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
                <h3 style={{ float: "right" }}>Last updated: 29/10/2026</h3>
              </div>
            </div>
            <p style={{ color: "white", fontSize: 18 }}>
              * DEVBYLAND respects the privacy of clients and website visitors.
              This policy explains how we collect, use and protect personal
              information.
            </p>
            <p className="txt">
              <b>1. Data we collect</b>
            </p>
            <p>
              Name, email and phone number (when you submit the contact form).
              Company or business name. Technical data (IP, browser, pages
              visited — for anonymous analytics).
            </p>
            <p className="txt">
              <b>2. How we use the data</b>
            </p>
            <p>
              To reply to enquiries or quotes, improve our services, and send
              updates only with your consent.
            </p>
            <p className="txt">
              <b>3. Data protection</b>
            </p>
            <p>
              We use security measures to protect information against
              unauthorised access, alteration or disclosure.
            </p>
            <p className="txt">
              <b>4. Sharing with third parties</b>
            </p>
            <p>
              We do not share your information with others, except when needed
              to fulfil a request or comply with the law.
            </p>
            <p className="txt">
              <b>5. Your rights</b>
            </p>
            <p>
              You may request a copy of your data, correction or deletion, and
              stop receiving marketing messages.
            </p>
            <p className="txt">
              <b>6. Contact</b>
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
