import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Activity {
  id: string;
  type: 'deal_closed' | 'deal_won' | 'meeting_scheduled' | 'lead_generated';
  user: {
    name: string;
    avatar?: string;
  };
  description: string;
  value?: string;
  timestamp: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'deal_closed',
    user: { name: 'Sarah Chen' },
    description: 'closed deal with TechCorp Inc.',
    value: '$45,000',
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    type: 'deal_won',
    user: { name: 'Michael Rodriguez' },
    description: 'won enterprise deal',
    value: '$120,000',
    timestamp: '4 hours ago'
  },
  {
    id: '3',
    type: 'meeting_scheduled',
    user: { name: 'Emily Johnson' },
    description: 'scheduled demo with StartupXYZ',
    timestamp: '6 hours ago'
  },
  {
    id: '4',
    type: 'lead_generated',
    user: { name: 'David Park' },
    description: 'generated 5 new qualified leads',
    timestamp: '1 day ago'
  },
  {
    id: '5',
    type: 'deal_closed',
    user: { name: 'Lisa Thompson' },
    description: 'closed deal with Global Systems',
    value: '$78,000',
    timestamp: '1 day ago'
  }
];

const getActivityColor = (type: Activity['type']) => {
  switch (type) {
    case 'deal_closed':
    case 'deal_won':
      return 'bg-gradient-success text-success-foreground';
    case 'meeting_scheduled':
      return 'bg-gradient-primary text-primary-foreground';
    case 'lead_generated':
      return 'bg-warning text-warning-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'deal_closed':
    case 'deal_won':
      return '🎉';
    case 'meeting_scheduled':
      return '📅';
    case 'lead_generated':
      return '🎯';
    default:
      return '📊';
  }
};

export function RecentActivity() {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 pb-3 border-b border-border/30 last:border-0 last:pb-0">
            <Avatar className="h-8 w-8">
              <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
              <AvatarFallback className="bg-primary-muted text-primary text-xs font-semibold">
                {activity.user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">{activity.user.name}</span>
                <Badge className={cn("text-xs px-2 py-0.5", getActivityColor(activity.type))}>
                  {getActivityIcon(activity.type)}
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {activity.description}
                {activity.value && (
                  <span className="font-semibold text-success ml-1">{activity.value}</span>
                )}
              </p>
              
              <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}