import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Seo } from "../components/Seo";
import { useReveal } from "../hooks/useReveal";
import { SITE } from "../lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactPage() {
  useReveal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const terms = data.get("terms") === "on";

    if (!terms || name.length < 2 || message.length < 10 || !email) {
      setStatus("error");
      setErrorMsg("Please fill in the required fields (name, email, message, terms).");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${SITE.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          _replyto: email,
          _subject: subject || `DevByLand enquiry: ${service}`,
          service,
          message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const json = (await res.json()) as {
        success?: string | boolean;
        message?: string;
        error?: string;
      };

      if (!res.ok || json.success === "false" || json.success === false) {
        throw new Error(json.message || json.error || "Send failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        `Something went wrong. Email us at ${SITE.email} or WhatsApp ${SITE.phoneDisplay}.`
      );
    }
  }

  return (
    <>
      <Seo
        title="Contact | Get a free quote"
        description="Tell us about your project. DevByLand replies within 24 hours — websites, e-commerce, UX/UI and SEO."
        path="/contact"
        keywords={`contact DevByLand, website quote Tirana, ${SITE.keywords}`}
      />
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">Contact</p>
          <h1>Let’s talk</h1>
          <p>
            Tell us about your idea or business — we’ll reply with clear next
            steps within 24 hours.
          </p>
        </div>
      </header>

      <section id="contact-us">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5 reveal">
              <p className="section-label">Reach us</p>
              <h2 className="section-title" style={{ maxWidth: "14ch" }}>
                Your project starts here
              </h2>
              <p className="section-text">
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
              <p className="section-text" style={{ marginTop: "0.75rem" }}>
                Phone:{" "}
                <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
              </p>
              <p className="section-text" style={{ marginTop: "0.75rem" }}>
                WhatsApp:{" "}
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="section-text" style={{ marginTop: "0.75rem" }}>
                Instagram:{" "}
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @devbyland
                </a>
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  className="btn-brand"
                  href={`${SITE.whatsappUrl}?text=${encodeURIComponent(
                    "Hi DevByLand! I’d like to talk about a project."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
            <div className="col-lg-7 reveal reveal-delay-1">
              <div className="contact-form">
                {status === "success" && (
                  <div className="alert alert-success" role="alert">
                    Message sent successfully. Thank you!
                  </div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger" role="alert">
                    {errorMsg}
                  </div>
                )}
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="name" className="form-label required">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          minLength={2}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="email" className="form-label required">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="subject" className="form-label">
                          Subject
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="service" className="form-label">
                          Service
                        </label>
                        <select
                          className="form-select form-control"
                          id="service"
                          name="service"
                          defaultValue="Web Development"
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="E-commerce">E-commerce</option>
                          <option value="UX/UI Design">UX/UI Design</option>
                          <option value="SEO">SEO</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project"
                          style={{ height: "auto" }}
                          required
                          minLength={10}
                        />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="terms">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            name="terms"
                            required
                          />
                          <label className="form-check-label" htmlFor="terms">
                            By submitting, you agree to our{" "}
                            <Link to="/terms">Terms</Link> and{" "}
                            <Link to="/privacy">Privacy</Link>.
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 text-md-end">
                      <button
                        type="submit"
                        className="btn-brand"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? "Sending..." : "Send message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
