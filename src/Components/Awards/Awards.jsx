import "./Awards.css";
import awards from "../../data/awards";
import activities from "../../data/activities";

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
          <h3 className="service-title">Professional Activities</h3>
          {activities.map((group) => (
            <div className="service-group" key={group.role}>
              <h4 className="service-role">{group.role}</h4>
              <ul className="service-list">
                {group.entries.map((entry) => (
                  <li className="service-item" key={entry.venue}>
                    <span>{entry.venue}</span>
                    <span className="award-year">{entry.years}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
