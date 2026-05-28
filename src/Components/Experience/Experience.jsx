import "./Experience.css";
import experience from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="section-inner">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {experience.map((exp, i) => (
            <div className="exp-card" key={i}>
              <div className="exp-header">
                <div className="exp-header-left">
                  <h3 className="exp-org">{exp.org}</h3>
                  <p className="exp-role">{exp.role}</p>
                  {exp.advisors && <p className="exp-advisors">{exp.advisors}</p>}
                </div>
                <span className="exp-dates">{exp.dates}</span>
              </div>
              <ul className="exp-details">
                {exp.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
