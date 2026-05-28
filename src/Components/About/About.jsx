import "./About.css";

const interests = [
  {
    title: "LLM Post-Training",
    text: "RLHF, RLVR, agentic RL, robust verifier design.",
  },
  {
    title: "Agentic AI",
    text: "Continuous self-improvement, capability-targeted training, multi-turn trustworthiness.",
  },
  {
    title: "MLSys",
    text: "Scalable distributed RL, PyTorch-native training stacks.",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-inner">
        <h2 className="section-title">About</h2>
        <div className="about-intro">
          <p>
            I work in the <strong>Scaling Intelligence Lab</strong>, advised by
            Prof. <strong>Azalia Mirhoseini</strong>, on self-improving
            agentic training and scalable RL post-training — including{" "}
            <strong>TRACE</strong> (self-improving agents via contrastive
            trajectory analysis) and core contributions to{" "}
            <strong>torchforge</strong> (Meta Superintelligence Lab&rsquo;s
            PyTorch-native RL library).
          </p>
          <p>
            I&rsquo;ve also been fortunate to work closely with{" "}
            <strong>xLab</strong> under Prof. <strong>Yejin Choi</strong> (and
            Prof. Natasha Jaques at UW), studying model collapse and how to enable diverse generation or reasoning for LLMs.
          </p>
          <p>
            Before Stanford, I was at UIUC with Profs. Gagandeep Singh, Sasa
            Misailovic, and Minjia Zhang, working on adversarial robustness for
            GUI agents (<strong>TRAP</strong>), grammar-constrained decoding
            (<strong>SynCode</strong>), and reward-hacking mitigation in RLHF.
          </p>
        </div>

        <h3 className="about-subtitle">Research Interests</h3>
        <div className="interests-grid">
          {interests.map((it, i) => (
            <div className="interest-card" key={i}>
              <h4 className="interest-title">{it.title}</h4>
              <p className="interest-text">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
