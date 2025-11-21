import { Scale, GitBranch, Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Scale,
    title: "Fairness Engine",
    description: "Dynamic pricing with fairness constraints ensures equitable energy distribution across all community members while maintaining market efficiency.",
  },
  {
    icon: GitBranch,
    title: "Game-Theory Core",
    description: "Advanced models including Stackelberg leader-follower dynamics, coalition formation, bargaining protocols, and non-cooperative equilibrium analysis.",
  },
  {
    icon: Building2,
    title: "Community & Policy Tools",
    description: "Simulate subsidies, grid stress scenarios, and rooftop solar incentives to understand policy impacts before implementation.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Built on Rigorous Research
          </h2>
          <p className="text-muted-foreground text-lg">
            Combining AI with game theory to create fair, efficient energy markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Card 
              key={idx} 
              className="p-8 shadow-card hover:shadow-hover transition-all duration-300 border-border"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
