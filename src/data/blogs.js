// Blog posts (e.g. PyTorch blog releases). Add the exact URLs once published —
// I left `url` as null so the cards render without a broken link if missing.
const blogs = [
  {
    title: "Scalable RL with TorchForge and Weaver",
    venue: "PyTorch Blog",
    date: "Feb 2026",
    coauthors: "Meta Superintelligence Lab × Stanford × CoreWeave",
    description:
      "Validated TorchForge × Weaver on a 512-GPU CoreWeave cluster: 4× faster RL step times, >90% job completion, and matching o3-mini on MATH500 / GPQA / MMLU-Pro without human annotations.",
    url: "https://pytorch.org/blog/supercharging-llms-scalable-rl-with-torchforge-and-weaver/",
  },
  {
    title: "Introducing TorchForge",
    venue: "PyTorch Blog",
    date: "Feb 2026",
    coauthors: "Meta Superintelligence Lab × PyTorch team",
    description:
      "Announcing TorchForge, the PyTorch-native scalable RL post-training library powering modern agentic training stacks.",
    url: "https://pytorch.org/blog/introducing-torchforge/",
  },
];

export default blogs;
