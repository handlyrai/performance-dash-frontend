import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Calendar, Filter } from "lucide-react";
import heroImage from "@/assets/sales-dashboard-hero.jpg";

export function DashboardHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-primary opacity-90" />
      
      {/* Content */}
      <div className="relative px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-white">Sales Performance Dashboard</h1>
              <p className="text-lg text-white/80">Track your team's performance and drive revenue growth</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search team members..." 
                  className="pl-10 w-full sm:w-64 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              
              <Select defaultValue="thisMonth">
                <SelectTrigger className="w-full sm:w-40 bg-white/10 border-white/20 text-white">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thisWeek">This Week</SelectItem>
                  <SelectItem value="thisMonth">This Month</SelectItem>
                  <SelectItem value="thisQuarter">This Quarter</SelectItem>
                  <SelectItem value="thisYear">This Year</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              
              <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/20">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}