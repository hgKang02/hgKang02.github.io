import "./Hero.css";
import logo_github from "../../assets/logo_github.png";
import logo_linkedin from "../../assets/logo_linkedin.png";
import profile_img from "../../assets/hangoo_profile.png";
import stanford_logo from "../../assets/stanford_logo.png";
import uiuc_logo from "../../assets/uiuc_logo.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Hangoo Kang</p>
          <h1>
            At the intersection of <span className="hero-accent">Self-Improving AI</span>, <span className="hero-accent">Scalable RL</span>, <span className="hero-accent">LLM Post-Training</span>, and <span className="hero-accent">MLSys</span>.
          </h1>
          <p className="hero-tagline">
            Master&rsquo;s student in <strong>Computer Science</strong> at Stanford, advised by Prof. <strong>Azalia Mirhoseini</strong> in the <strong>Scaling Intelligence Lab</strong>. Fortunate to also work closely with Prof. Yejin Choi&rsquo;s <strong>xLab</strong>.
          </p>
          <div className="hero-schools">
            <div className="hero-school">
              <img src={stanford_logo} alt="Stanford" />
              <span>MS Computer Science, Stanford &rsquo;27</span>
            </div>
            <div className="hero-school">
              <img src={uiuc_logo} alt="UIUC" />
              <span>BS Computer Science, UIUC &rsquo;25</span>
            </div>
          </div>
          <div className="hero-actions">
            <Link
              className="hero-cv"
              to="/Hangoo_Kang_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Curriculum Vitae &rarr;
            </Link>
            <div className="hero-links">
              <Link
                className="hero-link"
                to="https://scholar.google.com/citations?user=db_dyb0AAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Scholar"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
                </svg>
              </Link>
              <Link
                className="hero-link"
                to="https://github.com/hgKang02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <img src={logo_github} alt="GitHub" />
              </Link>
              <Link
                className="hero-link"
                to="https://www.linkedin.com/in/hangoo-kang-10027924a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img src={logo_linkedin} alt="LinkedIn" />
              </Link>
              <Link
                className="hero-link"
                to="https://x.com/hangoo_kang"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                className="hero-link"
                to="mailto:hangook@stanford.edu"
                aria-label="Email"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image-frame">
            <img src={profile_img} alt="Hangoo Kang" className="hero-image" />
          </div>
          <p className="hero-caption">Stanford, CA &middot; hangook@stanford.edu</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
