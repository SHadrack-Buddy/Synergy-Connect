import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Bell, Shield, Palette } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    messages: true,
    mentions: true,
    posts: false,
    emails: true,
  });

  const [profile, setProfile] = useState({
    name: "Your User",
    email: "you@example.com",
    bio: "Building amazing things with Flash Connect",
  });

  const handleSaveProfile = () => {
    console.log("Profile saved:", profile);
  };

  const handleNotificationChange = (type: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
    console.log(`${type} notifications ${notifications[type] ? 'disabled' : 'enabled'}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-xl">YU</AvatarFallback>
            </Avatar>
            <Button 
              variant="outline"
              onClick={() => console.log("Change avatar clicked")}
              data-testid="button-change-avatar"
            >
              Change Avatar
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                data-testid="input-display-name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                data-testid="input-email"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Input
              id="bio"
              value={profile.bio}
              onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
              placeholder="Tell us about yourself..."
              data-testid="input-bio"
            />
          </div>
          
          <Button onClick={handleSaveProfile} data-testid="button-save-profile">
            Save Profile
          </Button>
        </CardContent>
      </Card>

      {/* Appearance Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Appearance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Theme</h3>
              <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
            </div>
            <ThemeToggle />
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Message Notifications</h3>
              <p className="text-sm text-muted-foreground">Get notified when you receive messages</p>
            </div>
            <Switch
              checked={notifications.messages}
              onCheckedChange={() => handleNotificationChange('messages')}
              data-testid="switch-messages"
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Mention Notifications</h3>
              <p className="text-sm text-muted-foreground">Get notified when someone mentions you</p>
            </div>
            <Switch
              checked={notifications.mentions}
              onCheckedChange={() => handleNotificationChange('mentions')}
              data-testid="switch-mentions"
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Post Notifications</h3>
              <p className="text-sm text-muted-foreground">Get notified about new posts</p>
            </div>
            <Switch
              checked={notifications.posts}
              onCheckedChange={() => handleNotificationChange('posts')}
              data-testid="switch-posts"
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Email Notifications</h3>
              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
            </div>
            <Switch
              checked={notifications.emails}
              onCheckedChange={() => handleNotificationChange('emails')}
              data-testid="switch-emails"
            />
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => console.log("Change password clicked")}
            data-testid="button-change-password"
          >
            Change Password
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => console.log("Privacy settings clicked")}
            data-testid="button-privacy-settings"
          >
            Privacy Settings
          </Button>
          <Button 
            variant="outline" 
            className="w-full justify-start"
            onClick={() => console.log("Download data clicked")}
            data-testid="button-download-data"
          >
            Download My Data
          </Button>
          
          <Separator />
          
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={() => console.log("Delete account clicked")}
            data-testid="button-delete-account"
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}