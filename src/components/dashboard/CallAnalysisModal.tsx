import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, AlertCircle, Brain, Phone, Clock } from "lucide-react";

interface CallAnalysisResult {
  id: string;
  clientName: string;
  callDuration: string;
  timestamp: string;
  sentiment: "positive" | "neutral" | "negative";
  confidence: number;
  keyPoints: string[];
  outcome: string;
}

interface CallAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  repName: string;
  callResults: CallAnalysisResult[];
}

export function CallAnalysisModal({ isOpen, onClose, repName, callResults }: CallAnalysisModalProps) {
  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-gradient-success text-success-foreground";
      case "negative":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return TrendingUp;
      case "negative":
        return AlertCircle;
      default:
        return Brain;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-primary" />
            <span>Recent Call Analysis - {repName}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {callResults.map((call) => {
            const Icon = getSentimentIcon(call.sentiment);
            return (
              <Card key={call.id} className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{call.clientName}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{call.callDuration}</span>
                          </span>
                          <span>{call.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getSentimentColor(call.sentiment)} font-medium`}>
                      {call.sentiment.charAt(0).toUpperCase() + call.sentiment.slice(1)}
                      <span className="ml-1 opacity-80">
                        {Math.round(call.confidence * 100)}%
                      </span>
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Key Discussion Points</h4>
                      <ul className="space-y-1">
                        {call.keyPoints.map((point, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-border/30">
                      <h4 className="text-sm font-medium text-foreground mb-1">Call Outcome</h4>
                      <p className="text-sm text-muted-foreground">{call.outcome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}