import { NavLink, Link, useLocation } from "react-router-dom";
import { SITE } from "../lib/site";

type Props = {
  variant?: "home" | "inner";
};

declare global {
  interface Window {
    bootstrap?: {
      Collapse: {
        getOrCreateInstance: (
          el: Element,
          opts?: { toggle?: boolean }
        ) => { hide: () => void };
      };
    };
  }
}

function closeMobileNav() {
  const el = document.getElementById("mainNav");
  if (!el?.classList.contains("show")) return;

  const Collapse = window.bootstrap?.Collapse;
  if (Collapse) {
    Collapse.getOrCreateInstance(el, { toggle: false }).hide();
    return;
  }

  el.classList.remove("show");
  document
    .querySelector('.navbar-toggler[aria-controls="mainNav"]')
    ?.setAttribute("aria-expanded", "false");
}

export function Navbar({ variant = "inner" }: Props) {
  const { pathname } = useLocation();

  return (
    <nav className="navbar navbar-expand-lg site-nav">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMobileNav}>
          <img className="brand-mark" src="/img/logo.png" alt={SITE.name} />
          <span className="brand-name">{SITE.name}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Menu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive && pathname === "/" ? " is-active" : ""}`
                }
                to="/"
                end
                onClick={closeMobileNav}
              >
                Kreu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " is-active" : ""}`
                }
                to="/projects"
                onClick={closeMobileNav}
              >
                Projekte
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " is-active" : ""}`
                }
                to="/services"
                onClick={closeMobileNav}
              >
                Shërbimet
              </NavLink>
            </li>
            {variant === "home" && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#process"
                    onClick={closeMobileNav}
                  >
                    Procesi
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#packages"
                    onClick={closeMobileNav}
                  >
                    Paketat
                  </a>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link${isActive ? " is-active" : ""}`
                }
                to="/contact"
                onClick={closeMobileNav}
              >
                Kontakt
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-lg-none"
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileNav}
              >
                WhatsApp
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-cta" to="/contact" onClick={closeMobileNav}>
                Fillo projektin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
