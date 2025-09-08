import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain } from "lucide-react";
import { CallAnalysisModal } from "./CallAnalysisModal";
import { useState } from "react";

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

const callAnalysisData = {
  "Sarah Chen": [
    {
      id: "1",
      clientName: "TechCorp Industries",
      callDuration: "45m",
      timestamp: "2 hours ago",
      sentiment: "positive" as const,
      confidence: 0.92,
      keyPoints: [
        "Discussed Q4 expansion plans",
        "Positive feedback on product roadmap",
        "Interest in enterprise features"
      ],
      outcome: "Scheduled follow-up demo for next week"
    },
    {
      id: "2", 
      clientName: "Global Solutions Inc",
      callDuration: "32m",
      timestamp: "1 day ago",
      sentiment: "positive" as const,
      confidence: 0.87,
      keyPoints: [
        "Budget approval confirmed",
        "Implementation timeline discussed",
        "Training requirements clarified"
      ],
      outcome: "Contract sent for review"
    },
    {
      id: "3",
      clientName: "StartupXYZ",
      callDuration: "28m", 
      timestamp: "2 days ago",
      sentiment: "neutral" as const,
      confidence: 0.74,
      keyPoints: [
        "Pricing concerns raised",
        "Feature comparison requested",
        "Decision timeline extended"
      ],
      outcome: "Providing competitive analysis"
    },
    {
      id: "4",
      clientName: "Enterprise Corp",
      callDuration: "52m",
      timestamp: "3 days ago", 
      sentiment: "positive" as const,
      confidence: 0.89,
      keyPoints: [
        "Security requirements discussed",
        "Integration capabilities confirmed",
        "Stakeholder buy-in achieved"
      ],
      outcome: "Moving to pilot phase"
    },
    {
      id: "5",
      clientName: "Innovation Labs",
      callDuration: "35m",
      timestamp: "4 days ago",
      sentiment: "positive" as const,
      confidence: 0.91,
      keyPoints: [
        "Use case validation successful",
        "ROI projections reviewed",
        "Implementation support discussed"
      ],
      outcome: "Proposal approved, contract negotiation starting"
    }
  ],
  "Michael Rodriguez": [
    {
      id: "6",
      clientName: "Manufacturing Co",
      callDuration: "38m",
      timestamp: "3 hours ago",
      sentiment: "positive" as const,
      confidence: 0.85,
      keyPoints: [
        "Process automation benefits explained",
        "Cost savings calculations reviewed",
        "Deployment schedule agreed"
      ],
      outcome: "Technical evaluation scheduled"
    },
    {
      id: "7",
      clientName: "Retail Chain Ltd",
      callDuration: "41m",
      timestamp: "1 day ago", 
      sentiment: "neutral" as const,
      confidence: 0.76,
      keyPoints: [
        "Scalability concerns addressed",
        "Support structure questioned",
        "Competitor comparison requested"
      ],
      outcome: "Preparing detailed comparison report"
    },
    {
      id: "8",
      clientName: "Healthcare Systems",
      callDuration: "29m",
      timestamp: "2 days ago",
      sentiment: "positive" as const,
      confidence: 0.88,
      keyPoints: [
        "Compliance requirements confirmed",
        "Data security measures approved",
        "Integration timeline finalized"
      ],
      outcome: "Contract review in progress"
    },
    {
      id: "9", 
      clientName: "Financial Services",
      callDuration: "47m",
      timestamp: "3 days ago",
      sentiment: "negative" as const,
      confidence: 0.82,
      keyPoints: [
        "Budget constraints discussed",
        "Feature gaps identified", 
        "Alternative solutions explored"
      ],
      outcome: "Follow-up meeting scheduled to address concerns"
    },
    {
      id: "10",
      clientName: "Education District",
      callDuration: "33m",
      timestamp: "5 days ago",
      sentiment: "positive" as const,
      confidence: 0.86,
      keyPoints: [
        "User training plan approved",
        "Rollout phases defined",
        "Success metrics established"
      ],
      outcome: "Pilot program initiated"
    }
  ]
};

// Generate similar data for other reps with different call results
const generateCallData = (repName: string, basePositive: number) => {
  const clients = [
    "Acme Corporation", "Global Dynamics", "Future Tech", "Innovation Hub", "Prime Solutions",
    "Alpha Industries", "Beta Systems", "Gamma Corp", "Delta Enterprises", "Omega Group"
  ];
  
  return Array.from({ length: 5 }, (_, i) => {
    const sentimentRandom = Math.random();
    let sentiment: "positive" | "neutral" | "negative";
    if (sentimentRandom < basePositive) {
      sentiment = "positive";
    } else if (sentimentRandom < 0.7) {
      sentiment = "neutral"; 
    } else {
      sentiment = "negative";
    }
    
    return {
      id: `${repName}-${i + 1}`,
      clientName: clients[i % clients.length],
      callDuration: `${25 + Math.floor(Math.random() * 30)}m`,
      timestamp: `${i + 1} day${i > 0 ? 's' : ''} ago`,
      sentiment,
      confidence: 0.7 + Math.random() * 0.25,
      keyPoints: [
        "Product demonstration completed",
        "Requirements gathering session",
        "Pricing discussion held"
      ],
      outcome: Math.random() < 0.6 ? "Follow-up scheduled" : "Awaiting client decision"
    };
  });
};

// Add call data for remaining reps
Object.assign(callAnalysisData, {
  "Emily Johnson": generateCallData("Emily Johnson", 0.8),
  "David Park": generateCallData("David Park", 0.7), 
  "Lisa Thompson": generateCallData("Lisa Thompson", 0.65),
  "James Wilson": generateCallData("James Wilson", 0.55)
});

export function RepAnalytics() {
  const [selectedRep, setSelectedRep] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRepClick = (repName: string) => {
    setSelectedRep(repName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRep(null);
  };
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
            <div 
              key={index} 
              className="p-4 rounded-lg bg-muted/30 border border-border/30 space-y-4 hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 cursor-pointer hover:shadow-elegant"
              onClick={() => handleRepClick(rep.name)}
            >
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

        {selectedRep && (
          <CallAnalysisModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            repName={selectedRep}
            callResults={callAnalysisData[selectedRep as keyof typeof callAnalysisData] || []}
          />
        )}
      </CardContent>
    </Card>
  );
}