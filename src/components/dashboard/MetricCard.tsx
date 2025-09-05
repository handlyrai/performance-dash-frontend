import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
  className?: string;
}

export function MetricCard({ title, value, change, trend, icon: Icon, className }: MetricCardProps) {
  const trendColors = {
    up: "text-success",
    down: "text-destructive", 
    neutral: "text-muted-foreground"
  };

  const trendBgs = {
    up: "bg-success-muted",
    down: "bg-destructive/10",
    neutral: "bg-muted"
  };

  return (
    <Card className={cn("bg-gradient-card shadow-card border-border/50", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <div className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs font-medium", trendBgs[trend])}>
                <span className={trendColors[trend]}>{change}</span>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-primary-muted p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}