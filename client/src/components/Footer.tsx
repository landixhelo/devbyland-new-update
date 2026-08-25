import { Link } from "react-router-dom";
import { SITE } from "../lib/site";

type Props = {
  showExtraLinks?: boolean;
};

export function Footer({ showExtraLinks = false }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__brand">
              DevBy<span>Land</span>
            </p>
            <p>
              Krijim website, e-commerce, UX/UI dhe SEO për biznese në Tiranë dhe
              Shqipëri.
            </p>
          </div>
          <div>
            <h4>Navigim</h4>
            <ul>
              <li>
                <Link to="/">Kreu</Link>
              </li>
              <li>
                <Link to="/services">Shërbimet</Link>
              </li>
              <li>
                <Link to="/projects">Projekte</Link>
              </li>
              {showExtraLinks && (
                <>
                  <li>
                    <a href="/#process">Procesi</a>
                  </li>
                  <li>
                    <a href="/#packages">Paketat</a>
                  </li>
                  <li>
                    <a href="/#faq">FAQ</a>
                  </li>
                </>
              )}
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Shërbimet</h4>
            <ul>
              <li>
                <Link to="/services/web-development">Krijim website</Link>
              </li>
              <li>
                <Link to="/services/ecommerce">E-commerce</Link>
              </li>
              <li>
                <Link to="/services/ux-ui">UX / UI</Link>
              </li>
              <li>
                <Link to="/services/seo">SEO</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
              <li>
                <a href={`tel:${SITE.phoneE164}`}>{SITE.phoneDisplay}</a>
              </li>
              <li>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>{SITE.address}</li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>
            © {year} {SITE.name}
          </span>
          <span>
            <Link to="/privacy">Privacy</Link> · <Link to="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
