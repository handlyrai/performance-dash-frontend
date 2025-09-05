import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface SalesRepCardProps {
  name: string;
  role: string;
  avatar?: string;
  revenue: string;
  quota: string;
  progress: number;
  deals: number;
  rank: number;
  className?: string;
}

export function SalesRepCard({ 
  name, 
  role, 
  avatar, 
  revenue, 
  quota, 
  progress, 
  deals, 
  rank,
  className 
}: SalesRepCardProps) {
  const getRankColor = (rank: number) => {
    if (rank <= 3) return "bg-gradient-success text-success-foreground";
    if (rank <= 5) return "bg-primary text-primary-foreground";
    return "bg-muted text-muted-foreground";
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 100) return "bg-gradient-success";
    if (progress >= 75) return "bg-gradient-primary";
    if (progress >= 50) return "bg-warning";
    return "bg-destructive";
  };

  return (
    <Card className={cn("bg-gradient-card shadow-card border-border/50 hover:shadow-elegant transition-smooth", className)}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary-muted text-primary font-semibold">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
          <Badge className={cn("font-bold", getRankColor(rank))}>
            #{rank}
          </Badge>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold text-foreground">{revenue}</p>
              <p className="text-sm text-muted-foreground">of {quota} quota</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-foreground">{deals}</p>
              <p className="text-sm text-muted-foreground">deals</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Quota Progress</span>
              <span className="text-sm font-medium text-foreground">{progress}%</span>
            </div>
            <Progress 
              value={progress} 
              className="h-2 bg-muted"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}