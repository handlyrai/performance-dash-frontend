import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Brain, TrendingUp, AlertCircle } from "lucide-react";
import { useState } from "react";

interface SentimentResult {
  text: string;
  sentiment: "positive" | "neutral" | "negative";
  confidence: number;
  timestamp: string;
}

export function SentimentAnalysis() {
  const [transcript, setTranscript] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<SentimentResult[]>([
    {
      text: "The client seemed very interested in our new features...",
      sentiment: "positive",
      confidence: 0.89,
      timestamp: "2 hours ago"
    },
    {
      text: "There were some concerns about pricing structure...",
      sentiment: "neutral",
      confidence: 0.72,
      timestamp: "1 day ago"
    }
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTranscript(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  const analyzeSentiment = async () => {
    if (!transcript.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      const newResult: SentimentResult = {
        text: transcript.substring(0, 50) + "...",
        sentiment: Math.random() > 0.5 ? "positive" : "neutral",
        confidence: 0.8 + Math.random() * 0.2,
        timestamp: "Just now"
      };
      
      setResults(prev => [newResult, ...prev]);
      setTranscript("");
      setIsAnalyzing(false);
    }, 2000);
  };

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
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Brain className="h-5 w-5 text-primary" />
          <span>AI Sentiment Analysis</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <div className="border-2 border-dashed border-border/50 rounded-lg p-4 text-center hover:border-primary/50 transition-smooth">
            <input
              type="file"
              accept=".txt,.docx,.pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="transcript-upload"
            />
            <label htmlFor="transcript-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">Upload call transcript</p>
              <Button variant="outline" size="sm" asChild>
                <span>Choose File</span>
              </Button>
            </label>
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="Or paste transcript text here..."
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              className="min-h-[100px]"
            />
            <Button 
              onClick={analyzeSentiment} 
              disabled={!transcript.trim() || isAnalyzing}
              className="w-full"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Sentiment"}
            </Button>
          </div>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Recent Analysis</h4>
            {results.slice(0, 3).map((result, index) => {
              const Icon = getSentimentIcon(result.sentiment);
              return (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <Icon className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{result.text}</p>
                    <div className="flex items-center justify-between mt-1">
                      <Badge className={`text-xs ${getSentimentColor(result.sentiment)}`}>
                        {result.sentiment} ({Math.round(result.confidence * 100)}%)
                      </Badge>
                      <span className="text-xs text-muted-foreground">{result.timestamp}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}