import "./Education.css";
import education from "../../data/education";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-inner">
        <h2 className="section-title">Education</h2>
        <div className="edu-list">
          {education.map((edu, i) => (
            <div className="edu-card" key={i}>
              <div className="edu-header">
                <div className="edu-header-left">
                  <h3 className="edu-school">{edu.school}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                </div>
                <span className="edu-dates">{edu.dates}</span>
              </div>
              {edu.details && <p className="edu-details">{edu.details}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
