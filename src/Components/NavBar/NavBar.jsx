import "./NavBar.css";
import logo_github from "../../assets/logo_github.png";
import logo_linkedin from "../../assets/logo_linkedin.png";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const NavBar = () => {
  const { isDark, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;
    const headerOffset = 88;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div
        className="nav-wordmark"
        onClick={() => scrollToSection("hero")}
        role="button"
        tabIndex={0}
      >
        <span className="nav-wordmark-name">Hangoo Kang</span>
        <span className="nav-wordmark-sub">Stanford CS</span>
      </div>
      <ul className="nav-menu">
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("news")}>News</li>
        <li onClick={() => scrollToSection("publications")}>Publications</li>
        <li onClick={() => scrollToSection("blogs")}>Writing</li>
        <li onClick={() => scrollToSection("experience")}>Experience</li>
        <li onClick={() => scrollToSection("education")}>Education</li>
        <li onClick={() => scrollToSection("awards")}>Awards</li>
      </ul>
      <div className="nav-right">
        <Link
          className="nav-cv"
          to="/Hangoo_Kang_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </Link>
        <div className="nav-logo">
          <Link
            className="nav-link"
            to="https://scholar.google.com/citations?user=db_dyb0AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
            </svg>
          </Link>
          <Link
            className="nav-link"
            to="https://github.com/hgKang02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={logo_github} alt="GitHub" />
          </Link>
          <Link
            className="nav-link"
            to="https://www.linkedin.com/in/hangoo-kang-10027924a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={logo_linkedin} alt="LinkedIn" />
          </Link>
        </div>
        <button
          className="theme-toggle"
          onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
