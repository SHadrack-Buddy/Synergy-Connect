import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, Users, FileText, Calendar, ArrowUpRight, Plus } from "lucide-react";
import logoUrl from "@assets/generated_images/Flash_Connect_logo_design_7fb07f3f.png";
import harmonographUrl from "@assets/generated_images/Harmonograph_animation_wallpaper_9c58921b.png";

// TODO: Replace with real data from API
const recentActivity = [
  { id: "1", user: "Sarah Wilson", action: "posted in #design", time: "5 min ago" },
  { id: "2", user: "Mike Chen", action: "joined the team", time: "1 hour ago" },
  { id: "3", user: "John Doe", action: "shared a document", time: "2 hours ago" },
  { id: "4", user: "Emily Davis", action: "started a video call", time: "3 hours ago" },
];

const quickStats = [
  { label: "Active Members", value: "24", icon: Users, change: "+3 today" },
  { label: "Messages Today", value: "147", icon: MessageSquare, change: "+15%" },
  { label: "Shared Files", value: "89", icon: FileText, change: "+7 this week" },
  { label: "Upcoming Events", value: "5", icon: Calendar, change: "3 this week" },
];

const upcomingEvents = [
  { id: "1", title: "Team Standup", time: "9:00 AM", attendees: 8 },
  { id: "2", title: "Design Review", time: "2:00 PM", attendees: 5 },
  { id: "3", title: "All Hands Meeting", time: "4:00 PM", attendees: 24 },
];

export function Dashboard() {
  const handleCreateOrganization = () => {
    console.log("Create organization clicked");
  };

  const handleJoinOrganization = () => {
    console.log("Join organization clicked");
  };

  const handleViewEvent = (eventId: string) => {
    console.log(`View event ${eventId}`);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <img src={logoUrl} alt="Flash Connect Logo" className="w-16 h-16 rounded-lg" />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome to Flash Connect</h1>
            <p className="text-muted-foreground">Your collaborative workspace for seamless teamwork</p>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden mb-6">
          <img 
            src={harmonographUrl} 
            alt="Beautiful Harmonograph mathematical art patterns" 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-semibold mb-2">Start collaborating today</h2>
            <p className="text-sm opacity-90">Create or join an organization to get started</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={handleCreateOrganization} data-testid="button-create-org">
            <Plus className="h-4 w-4 mr-2" />
            Create Organization
          </Button>
          <Button 
            variant="outline" 
            onClick={handleJoinOrganization}
            data-testid="button-join-org"
          >
            Join Organization
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Recent Activity
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => console.log("View all activity")}
                data-testid="button-view-all-activity"
              >
                View All
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {activity.user.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Today's Schedule
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => console.log("View calendar")}
                data-testid="button-view-calendar"
              >
                View Calendar
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover-elevate cursor-pointer"
                  onClick={() => handleViewEvent(event.id)}
                  data-testid={`event-${event.id}`}
                >
                  <div>
                    <p className="font-medium text-sm">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {event.attendees} attending
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}