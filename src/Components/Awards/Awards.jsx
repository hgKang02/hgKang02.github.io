import "./Awards.css";
import awards from "../../data/awards";

const Awards = () => {
  return (
    <section id="awards" className="awards">
      <div className="section-inner">
        <h2 className="section-title">Awards</h2>
        <ul className="awards-list">
          {awards.map((a, i) => (
            <li key={i} className="award-item">
              <span className="award-title">{a.title}</span>
              <span className="award-year">{a.year}</span>
            </li>
          ))}
        </ul>
        <div className="service-block">
          <h3 className="service-title">Service</h3>
          <p className="service-text">
            Conference Reviewer: ICLR 2026, ICML 2026, COLM 2026, NeurIPS 2025.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Awards;
