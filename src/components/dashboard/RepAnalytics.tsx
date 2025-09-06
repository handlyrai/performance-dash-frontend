import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Clock, TrendingUp, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface RepAnalyticsData {
  name: string;
  avatar?: string;
  totalCalls: number;
  avgCallDuration: string;
  conversionRate: number;
  aiAnalysis: {
    score: number;
    strengths: string[];
    improvements: string[];
    trend: "improving" | "stable" | "declining";
  };
}

const repsAnalytics: RepAnalyticsData[] = [
  {
    name: "Sarah Chen",
    totalCalls: 156,
    avgCallDuration: "18m 45s",
    conversionRate: 34,
    aiAnalysis: {
      score: 92,
      strengths: ["Excellent rapport building", "Clear value proposition"],
      improvements: ["Faster objection handling"],
      trend: "improving"
    }
  },
  {
    name: "Michael Rodriguez", 
    totalCalls: 142,
    avgCallDuration: "22m 15s",
    conversionRate: 31,
    aiAnalysis: {
      score: 87,
      strengths: ["Strong technical knowledge", "Patient listener"],
      improvements: ["More assertive closing"],
      trend: "stable"
    }
  },
  {
    name: "Emily Johnson",
    totalCalls: 134,
    avgCallDuration: "16m 30s", 
    conversionRate: 29,
    aiAnalysis: {
      score: 84,
      strengths: ["Efficient conversations", "Quick decision making"],
      improvements: ["Deeper needs analysis"],
      trend: "improving"
    }
  },
  {
    name: "David Park",
    totalCalls: 128,
    avgCallDuration: "20m 12s",
    conversionRate: 26,
    aiAnalysis: {
      score: 79,
      strengths: ["Persistent follow-up", "Good preparation"],
      improvements: ["Emotional intelligence", "Active listening"],
      trend: "stable"
    }
  },
  {
    name: "Lisa Thompson",
    totalCalls: 118,
    avgCallDuration: "19m 05s",
    conversionRate: 24,
    aiAnalysis: {
      score: 76,
      strengths: ["Professional demeanor", "Product knowledge"],
      improvements: ["Conversation flow", "Confidence building"],
      trend: "declining"
    }
  },
  {
    name: "James Wilson",
    totalCalls: 98,
    avgCallDuration: "15m 22s",
    conversionRate: 18,
    aiAnalysis: {
      score: 68,
      strengths: ["Quick learner", "Enthusiastic"],
      improvements: ["Call volume", "Closing techniques", "Objection handling"],
      trend: "improving"
    }
  }
];

const getTrendColor = (trend: string) => {
  switch (trend) {
    case "improving":
      return "bg-success text-success-foreground";
    case "stable": 
      return "bg-warning text-warning-foreground";
    case "declining":
      return "bg-destructive text-destructive-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getScoreColor = (score: number) => {
  if (score >= 90) return "text-success";
  if (score >= 80) return "text-warning";
  if (score >= 70) return "text-muted-foreground";
  return "text-destructive";
};

export function RepAnalytics() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Detailed Rep Analytics</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {repsAnalytics.map((rep) => (
          <Card key={rep.name} className="bg-gradient-card shadow-card border-border/50">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={rep.avatar} alt={rep.name} />
                  <AvatarFallback className="bg-primary-muted text-primary text-sm font-semibold">
                    {rep.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg text-foreground">{rep.name}</CardTitle>
                  <Badge className={cn("text-xs", getTrendColor(rep.aiAnalysis.trend))}>
                    {rep.aiAnalysis.trend}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className={cn("text-2xl font-bold", getScoreColor(rep.aiAnalysis.score))}>
                    {rep.aiAnalysis.score}
                  </div>
                  <div className="text-xs text-muted-foreground">AI Score</div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Call Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Phone className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">{rep.totalCalls}</div>
                  <div className="text-xs text-muted-foreground">Total Calls</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">{rep.avgCallDuration}</div>
                  <div className="text-xs text-muted-foreground">Avg Duration</div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <div className="text-lg font-semibold text-foreground">{rep.conversionRate}%</div>
                  <div className="text-xs text-muted-foreground">Conversion</div>
                </div>
              </div>

              {/* Conversion Rate Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Conversion Rate</span>
                  <span className="text-foreground font-medium">{rep.conversionRate}%</span>
                </div>
                <Progress value={rep.conversionRate} className="h-2" />
              </div>

              {/* AI Analysis */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">AI Performance Analysis</span>
                </div>
                
                <div className="space-y-2">
                  <div>
                    <div className="text-xs font-medium text-success mb-1">Strengths:</div>
                    <div className="text-xs text-muted-foreground">
                      {rep.aiAnalysis.strengths.join(" • ")}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs font-medium text-warning mb-1">Areas for Improvement:</div>
                    <div className="text-xs text-muted-foreground">
                      {rep.aiAnalysis.improvements.join(" • ")}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}