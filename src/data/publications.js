import trace from "../assets/trace.png";
import fortyshades from "../assets/time-1.png";
import trap from "../assets/trap.png";
import pet from "../assets/pet.png";
import stochastic_monkeys from "../assets/stochastic_monkeys.png";
import syncode from "../assets/syncode.png";
import thundersync from "../assets/thundersync.webp";
import sharpeningTax from "../assets/sharpening-tax.webp";
import blockParallelism from "../assets/block-parallelism.webp";
import hybridDiffusion from "../assets/hybrid-diffusion.webp";
import delm from "../assets/delm.webp";
import clm from "../assets/clm.webp";

const publications = [
  {
    title: "ThunderSyncRL: Lossless Acceleration of Agentic Reinforcement Learning.",
    authors: "Seil Kang*, Hangoo Kang*, Tarun Suresh, Youngeun Kim, Shreyas Pimpalgaonkar, Seong Jae Hwang, Azalia Mirhoseini.",
    venue: "arXiv preprint, 2026",
    status: "under review ICLR 2027",
    arxiv: "https://arxiv.org/abs/2610.05935",
    code: "https://github.com/seilk/thundersync",
    image: thundersync,
    imageFit: "contain",
  },
  {
    title: "Sharpening Tax in Post-Training.",
    authors: "Changdae Oh, Qi Zeng, Qi Qi, Andrey Zhmoginov, Deren Lei, Yun He, Hoang Phan, Hangoo Kang, Azalia Mirhoseini, Sharon Li.",
    venue: "arXiv preprint, 2026",
    status: "under review ICLR 2027",
    arxiv: "https://arxiv.org/abs/2610.01509",
    code: "https://github.com/changdaeoh/sharpening-tax",
    image: sharpeningTax,
    imageFit: "contain",
  },
  {
    title: "Contrastive Language Model (CLM)",
    authors: "Jacky Kwok, Hangoo Kang, Tarun Suresh, Jon Saad-Falcon, Marco Pavone, Christopher Ré, Azalia Mirhoseini.",
    venue: "Open-source research project, 2026",
    description: "Co-developed CLM-8B, a System One model that scores candidate actions with contrastive learning, matching Jev across computer-use, gaming, and tool-calling tasks at up to 9× lower latency. The project launch reached 1M views on X.",
    blog: "https://contrastive-lm.notion.site",
    code: "https://github.com/Contrastive-LM/CLM",
    models: "https://huggingface.co/Contrastive-LM/CLM-v0.1-8B",
    image: clm,
    imageFit: "contain",
  },
  {
    title: "Block Parallelism for Efficient Distributed Long-Context Diffusion Language Model Training.",
    authors: "Tarun Suresh*, Pranshu Chaturvedi*, Hangoo Kang*, Parth Shroff, Ishan S. Khare, Hermann Kumbong, Azalia Mirhoseini.",
    venue: "arXiv preprint, 2026",
    status: "under review ICLR 2027",
    arxiv: "https://arxiv.org/abs/2609.19242",
    code: "https://github.com/ScalingIntelligence/Turbo-dLLM",
    image: blockParallelism,
    imageFit: "contain",
  },
  {
    title: "Training Hybrid Block Diffusion Language Models with Partial Bidirectionality.",
    authors: "Pranshu Chaturvedi, Parth Shroff, Tarun Suresh, Hangoo Kang, Kaiyue Wen.",
    venue: "arXiv preprint, 2026",
    status: "under review ICLR 2027",
    arxiv: "https://arxiv.org/abs/2607.02805",
    image: hybridDiffusion,
    imageFit: "contain",
  },
  {
    title: "Decentralized Multi-Agent Systems with Shared Context.",
    authors: "Yuzhen Mao, Jerry Gu, Aadi Chauhan, Qizheng Zhang, Hangoo Kang, Azalia Mirhoseini.",
    venue: "arXiv preprint, 2026",
    status: "under review ICLR 2027",
    arxiv: "https://arxiv.org/abs/2606.10662",
    project: "https://yuzhenmao.github.io/DeLM/",
    image: delm,
    imageFit: "contain",
  },
  {
    title: "TRACE: Capability-Targeted Agentic Training.",
    authors: "Hangoo Kang*, Tarun Suresh*, Jon Saad-Falcon, Azalia Mirhoseini.",
    venue: "AIWILD @ ICML 2026",
    status: "under review ICLR 2027",
    highlight: "Spotlight",
    arxiv: "https://arxiv.org/abs/2604.05336",
    code: "https://github.com/ScalingIntelligence/TRACE",
    image: trace,
  },
  {
    title: "Forty Shades of Blue: Quality-Diversity Alignment via Mode-Conditioned Reinforcement Learning.",
    authors: "Jiayi Yuan*, Hangoo Kang*, James Jihao Liu*, Yejin Choi, Vikram Iyer, Liwei Jiang, Natasha Jaques.",
    venue: "GenAICreativity @ ICML 2026",
    status: "under review ICLR 2027",
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
    authors: "Yinglun Xu*, Hangoo Kang*, Tarun Suresh, Yuxuan Wan, Gagandeep Singh.",
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
