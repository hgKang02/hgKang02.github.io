import trace from "../assets/trace.png";
import fortyshades from "../assets/time-1.png";
import trap from "../assets/trap.png";
import pet from "../assets/pet.png";
import stochastic_monkeys from "../assets/stochastic_monkeys.png";
import syncode from "../assets/syncode.png";

const publications = [
  {
    title: "TRACE: Capability-Targeted Agentic Training.",
    authors: "Hangoo Kang*, Tarun Suresh*, Jon Saad-Falcon, Azalia Mirhoseini.",
    venue: "AIWILD @ ICML 2026",
    status: "under review for main conference",
    arxiv: "https://arxiv.org/abs/2604.05336",
    code: "https://github.com/ScalingIntelligence/TRACE",
    image: trace,
  },
  {
    title: "Forty Shades of Blue: Quality-Diversity Alignment via Mode-Conditioned Reinforcement Learning.",
    authors: "Hangoo Kang*, Jiayi Yuan*, James Jihao Liu*, Yejin Choi, Vikram Iyer, Liwei Jiang, Natasha Jaques.",
    venue: "GenAICreativity @ ICML 2026",
    status: "under review for main conference",
    arxiv: null,
    code: null,
    image: fortyshades,
  },
  {
    title: "TRAP: Targeted Redirecting of Agentic Preferences.",
    authors: "Hangoo Kang*, Jehyeok Yeon*, Gagandeep Singh.",
    venue: "NeurIPS 2025",
    status: null,
    arxiv: "https://arxiv.org/abs/2505.23518",
    code: "https://github.com/hgKang02/TRAP",
    image: trap,
  },
  {
    title: "Learning a Pessimistic Reward in RLHF: KL Regularization is Not Necessary.",
    authors: "Hangoo Kang*, Yinglun Xu*, Tarun Suresh, Yuxuan Wan, Gagandeep Singh.",
    venue: "ARLET @ NeurIPS 2025",
    status: null,
    arxiv: "https://arxiv.org/abs/2505.20556",
    code: "https://github.com/yuxuanw8/PET",
    image: pet,
  },
  {
    title: "Stochastic Monkeys at Play: Random Augmentations Cheaply Break LLM Safety Alignment.",
    authors: "Jason Vega, Hangoo Kang*, Junsheng Huang*, Gaokai Zhang*, Minjia Zhang, Gagandeep Singh.",
    venue: "Under review",
    status: null,
    arxiv: "https://arxiv.org/abs/2411.02785",
    code: "https://github.com/uiuc-focal-lab/stochastic-monkeys",
    image: stochastic_monkeys,
  },
  {
    title: "SynCode: LLM Generation with Grammar Augmentation.",
    authors: "Shubham Ugare, Tarun Suresh, Hangoo Kang, Sasa Misailovic, Gagandeep Singh.",
    venue: "TMLR 2025",
    status: null,
    arxiv: "https://arxiv.org/abs/2403.01632",
    code: "https://github.com/uiuc-focal-lab/syncode",
    image: syncode,
  },
];

export default publications;
