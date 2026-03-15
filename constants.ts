export const METADATA = {
  title: "Portfolio | Salim Lakhal",
  description:
    "Software engineering student at TELECOM SudParis. I build distributed systems, blockchain protocols, ML pipelines, and full-stack web apps.",
  siteUrl: "https://github.com/salim-lakhal",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "Software Engineer",
  "Product Builder",
  "Full-Stack Developer",
  "AI & Data Engineer",
];

export const EMAIL = "salim.lakhal@telecom-sudparis.eu";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/salim-lakhal",
  github: "https://github.com/salim-lakhal",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Meridiane",
    image: "/projects/meridiane.svg",
    blurImage: "/projects/blur/meridiane-blur.svg",
    description: "AI-powered SaaS helping international students in France. Shipped from scratch to production in 5 days. Live at meridiane.fr",
    gradient: ["#1a365d", "#2b6cb0"],
    url: "https://meridiane.fr",
    tech: ["react", "typescript", "python"],
  },
  {
    name: "ZKP Decentralized Storage",
    image: "/projects/zkp-storage.svg",
    blurImage: "/projects/blur/zkp-storage-blur.svg",
    description: "Encrypted IPFS storage with zero-knowledge proofs",
    gradient: ["#0d1117", "#161b22"],
    url: "https://github.com/salim-lakhal/zkp-decentralized-storage",
    tech: ["solidity", "react", "javascript"],
  },
  {
    name: "Insurance Claim Microservices",
    image: "/projects/insurance-microservices.svg",
    blurImage: "/projects/blur/insurance-microservices-blur.svg",
    description: "11 Spring Boot microservices for insurance claim processing",
    gradient: ["#1a0533", "#3d0066"],
    url: "https://github.com/salim-lakhal/insurance-claim-microservices",
    tech: ["java", "docker"],
  },
  {
    name: "Decentralized Voting Platform",
    image: "/projects/decentralized-voting.svg",
    blurImage: "/projects/blur/decentralized-voting-blur.svg",
    description: "On-chain voting DApp with smart contracts",
    gradient: ["#0f3460", "#533483"],
    url: "https://github.com/salim-lakhal/Decentralized-Voting-Platform",
    tech: ["solidity", "react", "javascript"],
  },
  {
    name: "RAG Document Pipeline",
    image: "/projects/rag-pipeline.svg",
    blurImage: "/projects/blur/rag-pipeline-blur.svg",
    description: "Document processing pipeline for Retrieval-Augmented Generation",
    gradient: ["#1B4332", "#2D6A4F"],
    url: "https://github.com/salim-lakhal/rag-document-pipeline",
    tech: ["python"],
  },
  {
    name: "SigVerify",
    image: "/projects/sigverify.svg",
    blurImage: "/projects/blur/sigverify-blur.svg",
    description: "Document signing and verification platform",
    gradient: ["#003366", "#004080"],
    url: "https://github.com/salim-lakhal/SigVerify",
    tech: ["next", "typescript", "mongodb"],
  },
  {
    name: "ai-or-ain't",
    image: "/projects/ai-or-aint.svg",
    blurImage: "/projects/blur/ai-or-aint-blur.svg",
    description: "Deepfake detection game — can you tell real from AI?",
    gradient: ["#1a1a2e", "#16213e"],
    url: "https://github.com/salim-lakhal/ai-or-ain-t",
    tech: ["typescript", "react", "javascript"],
  },
];

export const SKILLS = {
  languages: [
    "typescript",
    "javascript",
    "python",
    "java",
    "solidity",
  ],
  frontend: [
    "react",
    "next",
    "tailwind",
    "html",
    "css",
  ],
  other: ["git", "docker", "mongodb"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  // ── EXPERIENCE ──
  {
    type: NodeTypes.CHECKPOINT,
    title: "Experience",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Meridiane — Founder & Solo Builder (2025 – Present)",
    size: ItemSize.SMALL,
    subtitle:
      "Founded and built meridiane.fr from scratch — an AI-powered platform helping international students navigate French administrative procedures. Knowledge graph, AI chatbot, document verification, Stripe billing. Shipped to production in 5 days with paying users. React, TypeScript, Supabase, Python.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Product Owner Intern — Louis Vuitton (Sep 2025 – Present)",
    size: ItemSize.SMALL,
    subtitle:
      "Product ownership at LVMH's flagship maison in Paris. Defining product roadmap, writing user stories, coordinating with dev teams, designers, and stakeholders. Managing sprint planning and backlog prioritization across cross-functional squads.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Freelance Developer — XRPL Commons (Oct 2024 – Aug 2025)",
    size: ItemSize.SMALL,
    subtitle:
      "Full-stack development for a blockchain organization. Built and shipped production features using Nuxt.js, Vue.js, and the XRP Ledger. Handled the full lifecycle: architecture, development, testing, deployment, and performance optimization.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Developer Intern — XRPL Commons (Jun – Jul 2024)",
    size: ItemSize.SMALL,
    subtitle:
      "Built a full-stack educational platform from scratch with Nuxt.js, MongoDB, and Vue.js. Integrated XRP Ledger for Web3 features. Implemented secure user authentication and role-based access. Shipped to production within 2 months.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "President — Kryptosphere IMT Paris (Jan 2024 – Jan 2025)",
    size: ItemSize.SMALL,
    subtitle:
      "Led a team of 30+ members in Europe's largest student tech association (+800 members across campuses). Organized weekly workshops on AI, blockchain, and finance. Launched inter-campus collaborations and secured strategic partnerships with companies.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "HAKS Hackathon Organizer (Sep 2023 – May 2024)",
    size: ItemSize.SMALL,
    subtitle:
      "Organized a Web3 hackathon from the ground up — sponsored by XRPL Commons with an 8K prize pool. Secured sponsors, managed partnerships, coordinated 9 student organizers, and ran technical workshops during the event.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // ── HACKATHONS & ACHIEVEMENTS ──
  {
    type: NodeTypes.CHECKPOINT,
    title: "Hackathons & Achievements",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Paris Innov'Hack — Bistro Table AI (Jan 2026)",
    size: ItemSize.SMALL,
    subtitle:
      "Built a platform that lets restaurants showcase their menu using interactive 3D animations — customers scan a QR code and browse dishes in 3D before ordering. AI generates dish descriptions and nutritional info from photos. TypeScript, React, Three.js, Supabase. Built from scratch in 10 hours.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AMD Open Robotics Hackathon — Paris (Dec 2025)",
    size: ItemSize.SMALL,
    subtitle:
      "3-day hackathon with AMD and Hugging Face. Trained SO-101 robotic arms to automate manual tasks using the LeRobot framework and SmolVLA vision-language-action models. Collected training data, fine-tuned policies on AMD Ryzen AI laptops and MI300X GPUs, deployed on physical robots. Teams of 4.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Paris AI Hackathon @ Station F — Endexa (Nov 2025)",
    size: ItemSize.SMALL,
    subtitle:
      "Built Endexa at Station F — a GEO (Generative Engine Optimization) analytics platform. Analyzes how well websites are represented by AI models like ChatGPT, Claude, Perplexity, and Gemini. Scores websites 0-100 across 61 criteria with actionable recommendations. Python + FastAPI backend, React frontend, Redis caching. Built and demoed in one day.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Swarm Rescue Challenge — IP Paris / DGA (Nov 2024 – May 2025)",
    size: ItemSize.SMALL,
    subtitle:
      "Built an autonomous drone swarm system for exploration, mapping, and rescue. Implemented RRT path planning and multi-agent coordination via state machines. Ranked 10th out of 50+ teams from France and India.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Winner — Hi! PARIS Data Science Hackathon (2024)",
    size: ItemSize.SMALL,
    subtitle:
      "Won the 4th edition of the Hi! PARIS data science hackathon. Competing against teams from Polytechnique, HEC, ENSAE, and other top French schools. Hi! PARIS is a joint research center between HEC Paris and Institut Polytechnique de Paris.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "NASA Space Apps Challenge (Oct 2024)",
    size: ItemSize.SMALL,
    subtitle:
      "Built a seismic event detection system for planetary data. Filtered noise from Mars InSight and Apollo seismic data using FFT. Trained an ML model on spectrograms to detect moonquakes and marsquakes.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  // ── EDUCATION ──
  {
    type: NodeTypes.CHECKPOINT,
    title: "Education",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "TELECOM SudParis — Institut Polytechnique de Paris (2023 – 2026)",
    size: ItemSize.SMALL,
    subtitle:
      "Engineering degree. Systems programming, computer networks, distributed systems, probability theory, and project management. Part of the Institut Polytechnique de Paris alongside Ecole Polytechnique and ENSTA.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Classes Préparatoires MPSI-MP — Lycée Camille Jullian (2021 – 2023)",
    size: ItemSize.SMALL,
    subtitle:
      "Two-year intensive preparatory program in Bordeaux. Advanced mathematics, computer science, physics, and philosophy. Competitive entrance to top French engineering schools.",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "";
