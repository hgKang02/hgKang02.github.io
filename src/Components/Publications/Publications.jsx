import "./Publications.css";
import publications from "../../data/publications";
import { Link } from "react-router-dom";

const Publications = () => {
  return (
    <section id="publications" className="publications">
      <div className="section-inner">
        <h2 className="section-title">Publications</h2>
        <p className="publications-note">* = equal contribution.</p>
        <div className="pub-list">
          {publications.map((pub, i) => (
            <div className="pub-card" key={i}>
              <div className="pub-thumb">
                {pub.image ? (
                  <img src={pub.image} alt={pub.title} />
                ) : (
                  <div className="pub-thumb-placeholder">
                    <span>No preview</span>
                  </div>
                )}
              </div>
              <div className="pub-body">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-venue">
                  <em>{pub.venue}</em>
                  {pub.status && <span className="pub-status"> ({pub.status})</span>}
                </p>
                <div className="pub-links">
                  {pub.arxiv && (
                    <Link to={pub.arxiv} target="_blank" rel="noopener noreferrer" className="pub-link">
                      arXiv
                    </Link>
                  )}
                  {pub.code && (
                    <Link to={pub.code} target="_blank" rel="noopener noreferrer" className="pub-link">
                      code
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
