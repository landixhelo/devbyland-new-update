import { NavLink, Link, useLocation } from "react-router-dom";
import { SITE } from "../lib/site";

type Props = {
  variant?: "home" | "inner";
};

export function Navbar({ variant = "inner" }: Props) {
  const { pathname } = useLocation();
  const homeHash = (hash: string) =>
    pathname === "/" ? hash : `/${hash}`;

  return (
    <nav className="navbar navbar-expand-lg site-nav">
      <div className="container">
        <Link className="navbar-brand" to="/">
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
              >
                Projekte
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={homeHash("#services")}>
                Shërbimet
              </a>
            </li>
            {variant === "home" && (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#process">
                    Procesi
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#packages">
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
              >
                Kontakt
              </NavLink>
            </li>
           
            <li className="nav-item">
              <Link className="nav-cta" to="/contact">
                Fillo projektin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
