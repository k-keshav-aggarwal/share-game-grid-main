import { ArrowRightLeft, Users, Handshake, GitBranch } from "lucide-react";

interface GameTheoryBadgeProps {
  type: "stackelberg" | "coalition" | "bargaining" | "non-cooperative";
}

const badgeConfig = {
  stackelberg: {
    label: "Stackelberg",
    icon: ArrowRightLeft,
    description: "Leader-follower dynamics",
  },
  coalition: {
    label: "Coalition",
    icon: Users,
    description: "Group formation benefits",
  },
  bargaining: {
    label: "Bargaining",
    icon: Handshake,
    description: "Negotiated settlements",
  },
  "non-cooperative": {
    label: "Non-cooperative",
    icon: GitBranch,
    description: "Independent strategies",
  },
};

export const GameTheoryBadge = ({ type }: GameTheoryBadgeProps) => {
  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <div className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg shadow-card">
      <Icon className="h-5 w-5 text-primary" />
      <div>
        <div className="font-medium text-sm">{config.label}</div>
        <div className="text-xs text-muted-foreground">{config.description}</div>
      </div>
    </div>
  );
};
