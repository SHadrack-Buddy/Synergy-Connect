import { ChatInterface } from "@/components/ChatInterface";
import { useState } from "react";

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<{
    type: "channel" | "dm";
    name: string;
    recipient?: string;
  }>({
    type: "channel",
    name: "general",
  });

  return (
    <div className="h-full">
      <ChatInterface 
        channelName={selectedChat.type === "channel" ? selectedChat.name : undefined}
        isDirectMessage={selectedChat.type === "dm"}
        recipientName={selectedChat.recipient}
      />
    </div>
  );
}