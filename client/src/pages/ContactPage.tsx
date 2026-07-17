import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useReveal } from "../hooks/useReveal";

type Status = "idle" | "loading" | "success" | "error";

export function ContactPage() {
  useReveal();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      terms: data.get("terms") === "on",
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMsg(json.error || "Dërgimi dështoi. Provo përsëri.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Diçka shkoi keq. Provo përsëri ose na shkruaj në email.");
    }
  }

  return (
    <>
      <Navbar />
      <header className="page-hero">
        <div className="container">
          <p className="section-label">Kontakt</p>
          <h1>Le të flasim</h1>
          <p>
            Na trego idenë ose biznesin tënd — përgjigjemi shpejt me hapin e
            radhës.
          </p>
        </div>
      </header>

      <section id="contact-us">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5 reveal">
              <p className="section-label">Na shkruaj</p>
              <h2 className="section-title" style={{ maxWidth: "12ch" }}>
                Vizioni yt fillon këtu
              </h2>
              <p className="section-text">
                Email:{" "}
                <a href="mailto:devbyland@gmail.com">devbyland@gmail.com</a>
              </p>
              <p className="section-text" style={{ marginTop: "0.75rem" }}>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/devbyland/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @devbyland
                </a>
              </p>
            </div>
            <div className="col-lg-7 reveal reveal-delay-1">
              <div className="contact-form">
                {status === "success" && (
                  <div className="alert alert-success" role="alert">
                    Mesazhi u dërgua me sukses. Faleminderit!
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
                          Emri
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Vendosni emrin"
                          required
                          minLength={2}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="email" className="form-label required">
                          Emaili
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Vendosni emailin"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="subject" className="form-label">
                          Subjekti
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subjekti"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="service" className="form-label">
                          Shërbimi
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
                          <option value="Tjetër">Tjetër</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3 contact-fr">
                        <label htmlFor="message" className="form-label">
                          Mesazh
                        </label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Shkruani mesazhin"
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
                            Duke dërguar formularin, pranoni{" "}
                            <Link to="/terms">Kushtet</Link> dhe{" "}
                            <Link to="/privacy">Privatësinë</Link>.
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
                        {status === "loading"
                          ? "Duke dërguar..."
                          : "Dërgo Mesazhin"}
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
