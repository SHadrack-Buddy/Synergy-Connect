import { Settings, Users, Crown, Shield, UserPlus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface Organization {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  role: "admin" | "moderator" | "member";
}

interface Member {
  id: string;
  name: string;
  email: string;
  role: "admin" | "moderator" | "member";
  status: "online" | "away" | "offline";
  joinDate: string;
}

// TODO: Replace with real data from API
const mockOrganizations: Organization[] = [
  {
    id: "1",
    name: "Tech Innovators",
    description: "A community for technology enthusiasts and innovators",
    memberCount: 47,
    role: "admin",
  },
  {
    id: "2", 
    name: "Design Studio",
    description: "Creative designers collaborating on amazing projects",
    memberCount: 23,
    role: "member",
  },
];

const mockMembers: Member[] = [
  {
    id: "1",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "admin",
    status: "online",
    joinDate: "Jan 2024",
  },
  {
    id: "2",
    name: "Mike Chen", 
    email: "mike@example.com",
    role: "moderator",
    status: "away",
    joinDate: "Feb 2024",
  },
  {
    id: "3",
    name: "John Doe",
    email: "john@example.com", 
    role: "member",
    status: "online",
    joinDate: "Mar 2024",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "member", 
    status: "offline",
    joinDate: "Mar 2024",
  },
];

export function OrganizationManager() {
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(mockOrganizations[0]);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("member");
  const [newOrgName, setNewOrgName] = useState("");
  const [newOrgDescription, setNewOrgDescription] = useState("");

  const handleSelectOrg = (org: Organization) => {
    setSelectedOrg(org);
    console.log(`Selected organization: ${org.name}`);
  };

  const handleInviteMember = () => {
    if (inviteEmail) {
      console.log(`Inviting ${inviteEmail} as ${inviteRole}`);
      setInviteEmail("");
      setInviteRole("member");
    }
  };

  const handleCreateOrg = () => {
    if (newOrgName) {
      console.log(`Creating organization: ${newOrgName}`);
      setNewOrgName("");
      setNewOrgDescription("");
    }
  };

  const handleMemberAction = (memberId: string, action: string) => {
    console.log(`${action} member ${memberId}`);
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "admin": return <Crown className="h-4 w-4" />;
      case "moderator": return <Shield className="h-4 w-4" />;
      default: return <Users className="h-4 w-4" />;
    }
  };

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "admin": return "default";
      case "moderator": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Organizations</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button data-testid="button-create-org-dialog">
              <UserPlus className="h-4 w-4 mr-2" />
              Create Organization
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Organization</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="org-name">Organization Name</Label>
                <Input
                  id="org-name"
                  value={newOrgName}
                  onChange={(e) => setNewOrgName(e.target.value)}
                  placeholder="Enter organization name"
                  data-testid="input-org-name"
                />
              </div>
              <div>
                <Label htmlFor="org-description">Description</Label>
                <Textarea
                  id="org-description"
                  value={newOrgDescription}
                  onChange={(e) => setNewOrgDescription(e.target.value)}
                  placeholder="Describe your organization"
                  data-testid="textarea-org-description"
                />
              </div>
              <Button 
                onClick={handleCreateOrg} 
                className="w-full"
                data-testid="button-create-org-submit"
              >
                Create Organization
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Organizations List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Your Organizations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockOrganizations.map((org) => (
                  <div
                    key={org.id}
                    className={`p-3 rounded-lg border cursor-pointer hover-elevate ${
                      selectedOrg?.id === org.id ? "bg-primary/10 border-primary" : "border-border"
                    }`}
                    onClick={() => handleSelectOrg(org)}
                    data-testid={`org-${org.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium truncate">{org.name}</h3>
                        <p className="text-sm text-muted-foreground">{org.memberCount} members</p>
                      </div>
                      <Badge variant={getRoleBadgeVariant(org.role)} className="ml-2">
                        {getRoleIcon(org.role)}
                        <span className="ml-1 capitalize">{org.role}</span>
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organization Details */}
        <div className="lg:col-span-2">
          {selectedOrg ? (
            <div className="space-y-6">
              {/* Organization Info */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{selectedOrg.name}</CardTitle>
                      <p className="text-muted-foreground mt-1">{selectedOrg.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => console.log("Organization settings")}
                      data-testid="button-org-settings"
                    >
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{selectedOrg.memberCount}</p>
                      <p className="text-sm text-muted-foreground">Members</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">8</p>
                      <p className="text-sm text-muted-foreground">Channels</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">42</p>
                      <p className="text-sm text-muted-foreground">Posts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Invite Members */}
              {(selectedOrg.role === "admin" || selectedOrg.role === "moderator") && (
                <Card>
                  <CardHeader>
                    <CardTitle>Invite Members</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter email address"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)}
                        data-testid="input-invite-email"
                      />
                      <Select value={inviteRole} onValueChange={setInviteRole}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="member">Member</SelectItem>
                          <SelectItem value="moderator">Moderator</SelectItem>
                          {selectedOrg.role === "admin" && (
                            <SelectItem value="admin">Admin</SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                      <Button 
                        onClick={handleInviteMember}
                        data-testid="button-send-invite"
                      >
                        Invite
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Members List */}
              <Card>
                <CardHeader>
                  <CardTitle>Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockMembers.map((member) => (
                      <div key={member.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>
                                {member.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-background ${
                              member.status === 'online' ? 'bg-status-online' :
                              member.status === 'away' ? 'bg-status-away' : 'bg-status-offline'
                            }`} />
                          </div>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                            <p className="text-xs text-muted-foreground">Joined {member.joinDate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getRoleBadgeVariant(member.role)}>
                            {getRoleIcon(member.role)}
                            <span className="ml-1 capitalize">{member.role}</span>
                          </Badge>
                          {(selectedOrg.role === "admin" || selectedOrg.role === "moderator") && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => handleMemberAction(member.id, "manage")}
                              data-testid={`button-manage-member-${member.id}`}
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="flex items-center justify-center h-64">
                <p className="text-muted-foreground">Select an organization to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}