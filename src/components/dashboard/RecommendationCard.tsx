import { Card } from "@/components/ui/card";
import { Lightbulb, TrendingDown, Battery } from "lucide-react";

export const RecommendationCard = () => {
  return (
    <Card className="p-6 shadow-card h-full">
      <h2 className="text-xl font-semibold mb-4">Smart Recommendations</h2>
      
      <div className="space-y-4">
        <div className="flex gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
          <TrendingDown className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-sm mb-1">Optimal Export Window</div>
            <p className="text-xs text-muted-foreground">
              Solar surplus expected at 11:00; exporting now gives you a better settlement price.
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-3 bg-accent/10 rounded-lg border border-accent/20">
          <Battery className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-sm mb-1">Battery Strategy</div>
            <p className="text-xs text-muted-foreground">
              Grid strain rising tonight; battery discharge recommended around 18:00.
            </p>
          </div>
        </div>

        <div className="flex gap-3 p-3 bg-muted rounded-lg">
          <Lightbulb className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-medium text-sm mb-1">Cost Savings</div>
            <p className="text-xs text-muted-foreground">
              Shifting 2kW of usage to off-peak hours could save $4.50 today.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
