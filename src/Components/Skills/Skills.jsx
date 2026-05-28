import "./Skills.css";
import skills from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3 className="skill-type">{skill.type}</h3>
              <p className="skill-items">{skill.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
