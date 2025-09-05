import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { SalesRepCard } from "@/components/dashboard/SalesRepCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { DollarSign, TrendingUp, Users, Target } from "lucide-react";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "$1,234,567",
      change: "+12.5%",
      trend: "up" as const,
      icon: DollarSign
    },
    {
      title: "Monthly Growth",
      value: "23.8%",
      change: "+4.2%",
      trend: "up" as const,
      icon: TrendingUp
    },
    {
      title: "Active Reps",
      value: "24",
      change: "+2",
      trend: "up" as const,
      icon: Users
    },
    {
      title: "Quota Attainment",
      value: "89.2%",
      change: "-2.1%",
      trend: "down" as const,
      icon: Target
    }
  ];

  const salesReps = [
    {
      name: "Sarah Chen",
      role: "Senior Sales Executive",
      revenue: "$184,250",
      quota: "$200,000",
      progress: 92,
      deals: 12,
      rank: 1
    },
    {
      name: "Michael Rodriguez",
      role: "Account Executive",
      revenue: "$156,800",
      quota: "$180,000",
      progress: 87,
      deals: 15,
      rank: 2
    },
    {
      name: "Emily Johnson",
      role: "Sales Manager",
      revenue: "$142,300",
      quota: "$170,000",
      progress: 84,
      deals: 18,
      rank: 3
    },
    {
      name: "David Park",
      role: "Sales Representative",
      revenue: "$128,900",
      quota: "$160,000",
      progress: 81,
      deals: 22,
      rank: 4
    },
    {
      name: "Lisa Thompson",
      role: "Account Executive",
      revenue: "$118,750",
      quota: "$150,000",
      progress: 79,
      deals: 16,
      rank: 5
    },
    {
      name: "James Wilson",
      role: "Sales Representative",
      revenue: "$95,400",
      quota: "$140,000",
      progress: 68,
      deals: 14,
      rank: 6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

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
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;