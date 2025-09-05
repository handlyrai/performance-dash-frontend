import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { SalesRepCard } from "@/components/dashboard/SalesRepCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { SentimentAnalysis } from "@/components/dashboard/SentimentAnalysis";

const Dashboard = () => {

  const salesReps = [
    {
      name: "Sarah Chen",
      role: "Senior Sales Executive",
      sentiment: "9.2/10",
      calls: 28,
      progress: 92,
      avgSentiment: "Positive",
      rank: 1
    },
    {
      name: "Michael Rodriguez",
      role: "Account Executive",
      sentiment: "8.7/10",
      calls: 32,
      progress: 87,
      avgSentiment: "Positive",
      rank: 2
    },
    {
      name: "Emily Johnson",
      role: "Sales Manager",
      sentiment: "8.4/10",
      calls: 25,
      progress: 84,
      avgSentiment: "Positive",
      rank: 3
    },
    {
      name: "David Park",
      role: "Sales Representative",
      sentiment: "7.9/10",
      calls: 30,
      progress: 81,
      avgSentiment: "Neutral",
      rank: 4
    },
    {
      name: "Lisa Thompson",
      role: "Account Executive",
      sentiment: "7.6/10",
      calls: 22,
      progress: 79,
      avgSentiment: "Neutral",
      rank: 5
    },
    {
      name: "James Wilson",
      role: "Sales Representative",
      sentiment: "6.8/10",
      calls: 18,
      progress: 68,
      avgSentiment: "Neutral",
      rank: 6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sales Team Performance */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Team Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {salesReps.map((rep, index) => (
                  <SalesRepCard key={index} {...rep} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <SentimentAnalysis />
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;