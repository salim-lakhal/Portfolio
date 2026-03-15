import React from "react";

type TagType = "default" | "outlined" | "ai";

interface TagProps {
  label: string;
  type: TagType;
}

const TAG_CLASSES: Record<TagType, string> = {
  default: "border border-gray-700 bg-gray-800/50 text-gray-300",
  outlined: "border border-gray-600 bg-transparent text-gray-400",
  ai: "border border-cyan-800 bg-cyan-900/30 text-cyan-300",
};

const ROW_ONE: TagProps[] = [
  { label: "TypeScript", type: "default" },
  { label: "React", type: "default" },
  { label: "Python", type: "default" },
  { label: "Solidity", type: "outlined" },
  { label: "Next.js", type: "default" },
  { label: "Spring Boot", type: "outlined" },
  { label: "Docker", type: "default" },
  { label: "AWS", type: "outlined" },
  { label: "Claude Code", type: "ai" },
  { label: "GraphRAG", type: "ai" },
  { label: "Supabase", type: "default" },
  { label: "Tailwind CSS", type: "outlined" },
];

const ROW_TWO: TagProps[] = [
  { label: "Agentic AI", type: "ai" },
  { label: "Agent Orchestration", type: "ai" },
  { label: "Node.js", type: "default" },
  { label: "MongoDB", type: "outlined" },
  { label: "PostgreSQL", type: "default" },
  { label: "Hardhat", type: "outlined" },
  { label: "FastAPI", type: "default" },
  { label: "Three.js", type: "outlined" },
  { label: "Stripe", type: "default" },
  { label: "Vue.js", type: "outlined" },
  { label: "Context Engineering", type: "ai" },
  { label: "LLM Pipelines", type: "ai" },
];

const Tag = ({ label, type }: TagProps) => (
  <span
    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shrink-0 ${TAG_CLASSES[type]}`}
  >
    {label}
  </span>
);

interface MarqueeRowProps {
  items: TagProps[];
  direction: "left" | "right";
}

const MarqueeRow = ({ items, direction }: MarqueeRowProps) => {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div className={`flex gap-4 w-max ${animationClass}`}>
        {doubled.map((item, i) => (
          <Tag key={`${item.label}-${i}`} label={item.label} type={item.type} />
        ))}
      </div>
    </div>
  );
};

const SkillsMarquee = React.memo(() => {
  return (
    <section
      className="w-full py-16 relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="flex flex-col gap-5">
        <MarqueeRow items={ROW_ONE} direction="left" />
        <MarqueeRow items={ROW_TWO} direction="right" />
      </div>
    </section>
  );
});

SkillsMarquee.displayName = "SkillsMarquee";

export default SkillsMarquee;
