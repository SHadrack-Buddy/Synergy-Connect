import { Hash, Home, MessageSquare, Users, Settings, Plus, Search } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const mainMenuItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Messages", url: "/messages", icon: MessageSquare },
  { title: "Organizations", url: "/organizations", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
];

// TODO: Replace with real data from API
const channels = [
  { name: "general", id: "1" },
  { name: "development", id: "2" },
  { name: "design", id: "3" },
  { name: "marketing", id: "4" },
];

const directMessages = [
  { name: "John Doe", status: "online", id: "1" },
  { name: "Sarah Wilson", status: "away", id: "2" },
  { name: "Mike Chen", status: "busy", id: "3" },
];

export function AppSidebar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log(`Searching for: ${query}`);
  };

  const handleChannelClick = (channelName: string) => {
    console.log(`Clicked channel: ${channelName}`);
  };

  const handleDMClick = (userName: string) => {
    console.log(`Clicked DM with: ${userName}`);
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">FC</span>
          </div>
          <span className="font-semibold text-sidebar-foreground">Flash Connect</span>
        </div>
        <div className="mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-9"
              data-testid="input-search"
            />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} data-testid={`link-${item.title.toLowerCase()}`}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <div className="flex items-center justify-between">
            <SidebarGroupLabel>Channels</SidebarGroupLabel>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-5 w-5"
              onClick={() => console.log("Add channel clicked")}
              data-testid="button-add-channel"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {channels.map((channel) => (
                <SidebarMenuItem key={channel.id}>
                  <SidebarMenuButton 
                    onClick={() => handleChannelClick(channel.name)}
                    data-testid={`button-channel-${channel.name}`}
                  >
                    <Hash className="h-4 w-4" />
                    <span>{channel.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <div className="flex items-center justify-between">
            <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-5 w-5"
              onClick={() => console.log("New DM clicked")}
              data-testid="button-new-dm"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {directMessages.map((dm) => (
                <SidebarMenuItem key={dm.id}>
                  <SidebarMenuButton 
                    onClick={() => handleDMClick(dm.name)}
                    data-testid={`button-dm-${dm.name.replace(' ', '-').toLowerCase()}`}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <div className="relative">
                        <Avatar className="h-5 w-5">
                          <AvatarFallback className="text-xs">
                            {dm.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className={`absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-sidebar ${
                          dm.status === 'online' ? 'bg-status-online' :
                          dm.status === 'away' ? 'bg-status-away' :
                          dm.status === 'busy' ? 'bg-status-busy' : 'bg-status-offline'
                        }`} />
                      </div>
                      <span className="truncate">{dm.name}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sidebar-foreground truncate">Your User</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6"
            onClick={() => console.log("User settings clicked")}
            data-testid="button-user-settings"
          >
            <Settings className="h-3 w-3" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}