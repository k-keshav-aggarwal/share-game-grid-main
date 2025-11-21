import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface UsageCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: string;
  trendLabel: string;
}

export const UsageCard = ({ title, value, icon: Icon, trend, trendLabel }: UsageCardProps) => {
  const isPositive = trend.startsWith('+');
  
  return (
    <Card className="p-6 shadow-card hover:shadow-hover transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="text-2xl font-semibold text-foreground mb-1">{value}</div>
      <div className="flex items-center text-xs">
        <span className={isPositive ? 'text-primary' : 'text-accent'}>{trend}</span>
        <span className="text-muted-foreground ml-1">{trendLabel}</span>
      </div>
    </Card>
  );
};
