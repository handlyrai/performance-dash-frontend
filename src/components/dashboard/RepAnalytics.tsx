import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";

const repsData = [
  {
    name: "Sarah Chen",
    role: "Senior Sales Executive",
    avgSentiment: 9.2,
    callsAnalyzed: 45,
    overallMood: "Highly Positive",
    moodTrend: "+12%",
    positiveCallsPercent: 89,
    neutralCallsPercent: 11,
    negativeCallsPercent: 0,
    aiInsight: "Exceptional emotional intelligence and client rapport. Consistently maintains positive sentiment throughout calls."
  },
  {
    name: "Michael Rodriguez", 
    role: "Account Executive",
    avgSentiment: 8.7,
    callsAnalyzed: 52,
    overallMood: "Positive",
    moodTrend: "+8%",
    positiveCallsPercent: 82,
    neutralCallsPercent: 15,
    negativeCallsPercent: 3,
    aiInsight: "Strong performance with effective communication style. Minor improvements in handling objections."
  },
  {
    name: "Emily Johnson",
    role: "Sales Manager", 
    avgSentiment: 8.4,
    callsAnalyzed: 38,
    overallMood: "Positive",
    moodTrend: "+5%",
    positiveCallsPercent: 79,
    neutralCallsPercent: 18,
    negativeCallsPercent: 3,
    aiInsight: "Balanced approach with good client engagement. Focus on active listening could enhance sentiment scores."
  },
  {
    name: "David Park",
    role: "Sales Representative",
    avgSentiment: 7.9,
    callsAnalyzed: 48,
    overallMood: "Moderately Positive",
    moodTrend: "+2%",
    positiveCallsPercent: 71,
    neutralCallsPercent: 25,
    negativeCallsPercent: 4,
    aiInsight: "Solid technical knowledge but could improve emotional connection with prospects."
  },
  {
    name: "Lisa Thompson",
    role: "Account Executive",
    avgSentiment: 7.6,
    callsAnalyzed: 35,
    overallMood: "Neutral-Positive",
    moodTrend: "-1%",
    positiveCallsPercent: 66,
    neutralCallsPercent: 29,
    negativeCallsPercent: 5,
    aiInsight: "Consistent performance but lacks enthusiasm. Consider coaching on energy and engagement techniques."
  },
  {
    name: "James Wilson",
    role: "Sales Representative", 
    avgSentiment: 6.8,
    callsAnalyzed: 29,
    overallMood: "Neutral",
    moodTrend: "-5%",
    positiveCallsPercent: 55,
    neutralCallsPercent: 35,
    negativeCallsPercent: 10,
    aiInsight: "Needs improvement in rapport building and objection handling. Recommend additional training."
  }
];

export function RepAnalytics() {
  const getMoodColor = (mood: string) => {
    if (mood.includes("Highly Positive")) return "text-success";
    if (mood.includes("Positive")) return "text-success";
    if (mood.includes("Neutral")) return "text-warning";
    return "text-muted-foreground";
  };

  const getTrendColor = (trend: string) => {
    if (trend.startsWith("+")) return "text-success";
    if (trend.startsWith("-")) return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <Card className="bg-gradient-card shadow-elegant border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>Detailed Sentiment Analytics</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repsData.map((rep, index) => (
            <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/30 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{rep.name}</h3>
                  <p className="text-sm text-muted-foreground">{rep.role}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  Rank #{index + 1}
                </Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Avg Sentiment</p>
                  <p className="text-lg font-bold text-foreground">{rep.avgSentiment}/10</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Calls Analyzed</p>
                  <p className="text-lg font-bold text-foreground">{rep.callsAnalyzed}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">Overall Mood</p>
                  <span className={`text-xs font-medium ${getTrendColor(rep.moodTrend)}`}>
                    {rep.moodTrend}
                  </span>
                </div>
                <p className={`text-sm font-medium ${getMoodColor(rep.overallMood)}`}>
                  {rep.overallMood}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">Sentiment Distribution</p>
                <div className="flex space-x-1 h-2 rounded-full overflow-hidden bg-muted">
                  <div 
                    className="bg-success" 
                    style={{ width: `${rep.positiveCallsPercent}%` }}
                  />
                  <div 
                    className="bg-warning" 
                    style={{ width: `${rep.neutralCallsPercent}%` }}
                  />
                  <div 
                    className="bg-destructive" 
                    style={{ width: `${rep.negativeCallsPercent}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Positive {rep.positiveCallsPercent}%</span>
                  <span>Neutral {rep.neutralCallsPercent}%</span>
                  <span>Negative {rep.negativeCallsPercent}%</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border/30">
                <p className="text-xs text-muted-foreground mb-1">AI Insight</p>
                <p className="text-xs text-foreground leading-relaxed">{rep.aiInsight}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}