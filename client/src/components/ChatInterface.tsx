import { Send, Paperclip, Smile, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

interface Message {
  id: string;
  user: string;
  content: string;
  timestamp: string;
  avatar?: string;
}

// TODO: Replace with real data from API
const mockMessages: Message[] = [
  {
    id: "1",
    user: "Sarah Wilson",
    content: "Hey everyone! Just finished the new user interface mockups. Would love to get your feedback.",
    timestamp: "10:30 AM",
  },
  {
    id: "2", 
    user: "Mike Chen",
    content: "Looks great! The color scheme really fits our brand. One suggestion - maybe we could make the buttons slightly larger for better mobile usability?",
    timestamp: "10:32 AM",
  },
  {
    id: "3",
    user: "John Doe", 
    content: "Agreed with Mike. Also, have we considered adding dark mode support?",
    timestamp: "10:35 AM",
  },
  {
    id: "4",
    user: "Sarah Wilson",
    content: "Great points! Dark mode is already in the works. I'll adjust the button sizes in the next iteration.",
    timestamp: "10:37 AM",
  },
];

interface ChatInterfaceProps {
  channelName?: string;
  isDirectMessage?: boolean;
  recipientName?: string;
}

export function ChatInterface({ channelName = "general", isDirectMessage = false, recipientName }: ChatInterfaceProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(mockMessages);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        user: "You",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");
      console.log(`Message sent: ${message}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleAttachment = () => {
    console.log("Attachment clicked");
  };

  const handleEmoji = () => {
    console.log("Emoji picker clicked");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="border-b p-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-2">
          {isDirectMessage ? (
            <>
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  {recipientName?.split(' ').map(n => n[0]).join('') || 'U'}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-semibold">{recipientName}</h2>
                <p className="text-sm text-muted-foreground">Online</p>
              </div>
            </>
          ) : (
            <>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-primary font-semibold">#</span>
              </div>
              <div>
                <h2 className="font-semibold">#{channelName}</h2>
                <p className="text-sm text-muted-foreground">{messages.length} messages</p>
              </div>
            </>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => console.log("Chat options clicked")}
          data-testid="button-chat-options"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-3 group">
              <Avatar className="h-8 w-8 mt-1">
                <AvatarFallback>
                  {msg.user.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-sm">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.timestamp}</span>
                </div>
                <p className="text-sm text-foreground mt-1">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={handleAttachment}
                data-testid="button-attachment"
              >
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                onClick={handleEmoji}
                data-testid="button-emoji"
              >
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder={`Message ${isDirectMessage ? recipientName : `#${channelName}`}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="min-h-[40px]"
                data-testid="input-message"
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!message.trim()}
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}