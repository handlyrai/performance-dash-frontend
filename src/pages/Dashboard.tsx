import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { GoogleMeetScheduler } from "@/components/dashboard/GoogleMeetScheduler";
import { SentimentAnalysis } from "@/components/dashboard/SentimentAnalysis";
import { RepAnalytics } from "@/components/dashboard/RepAnalytics";

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Top Section - AI Sentiment Analysis */}
        <div>
          <SentimentAnalysis />
        </div>

        {/* Detailed Analytics */}
        <div>
          <RepAnalytics />
        </div>

        {/* Google Meet Scheduler - Bottom */}
        <div>
          <GoogleMeetScheduler />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;