import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, Brain, TrendingUp, AlertCircle, User } from "lucide-react";
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
  const [selectedRep, setSelectedRep] = useState<string>("");
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

  const salesReps = [
    "Sarah Chen",
    "Michael Rodriguez", 
    "Emily Johnson",
    "David Park",
    "Lisa Thompson",
    "James Wilson"
  ];

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
    if (!transcript.trim() || !selectedRep) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call
    setTimeout(() => {
      const newResult: SentimentResult = {
        text: `${selectedRep}: ${transcript.substring(0, 50)}...`,
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
    <Card className="bg-gradient-card shadow-elegant border-border/50 h-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div>
            <span className="text-xl font-semibold">AI Sentiment Analysis</span>
            <p className="text-sm text-muted-foreground mt-1">Analyze call transcripts for customer sentiment</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
            <input
              type="file"
              accept=".txt,.docx,.pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="transcript-upload"
            />
            <label htmlFor="transcript-upload" className="cursor-pointer block">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <h3 className="text-lg font-medium text-foreground mb-2">Upload Call Transcript</h3>
              <p className="text-sm text-muted-foreground mb-4">Supports .txt, .docx, and .pdf files</p>
              <Button variant="outline" size="lg" asChild>
                <span className="px-6 py-2">Choose File</span>
              </Button>
            </label>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-1">
                <Select value={selectedRep} onValueChange={setSelectedRep}>
                  <SelectTrigger className="border-border/50 focus:border-primary/50">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <SelectValue placeholder="Select sales representative..." />
                  </SelectTrigger>
                  <SelectContent>
                    {salesReps.map((rep) => (
                      <SelectItem key={rep} value={rep}>
                        {rep}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Textarea
              placeholder="Paste your call transcript here for instant analysis..."
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              className="min-h-[120px] resize-none border-border/50 focus:border-primary/50"
            />
            <Button 
              onClick={analyzeSentiment} 
              disabled={!transcript.trim() || !selectedRep || isAnalyzing}
              className="w-full h-12 text-base font-medium"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <Brain className="h-4 w-4 mr-2 animate-pulse" />
                  Analyzing Sentiment...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Analyze Sentiment
                </>
              )}
            </Button>
          </div>
        </div>

      </CardContent>
    </Card>
  );
}