import { useState } from "react";
import { Send, Smile, Image, Mic, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ChatUi = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: message, sender: "user" }]);
      setMessage("");
    }
  };

  return (
    <div className="h-screen flex flex-col bg-base-100">
      {/* Header */}
      <div className="bg-base-200 p-4 border-b border-base-content/10">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary">U</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold">User Name</h2>
            <p className="text-sm text-base-content/60">Online</p>
          </div>
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg ${
                msg.sender === "user" ? "bg-primary text-primary-content" : "bg-base-200"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-base-200 p-4 border-t border-base-content/10">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <button type="button" className="btn btn-ghost btn-sm">
            <Smile className="h-5 w-5" />
          </button>
          <button type="button" className="btn btn-ghost btn-sm">
            <Image className="h-5 w-5" />
          </button>
          <button type="button" className="btn btn-ghost btn-sm">
            <Link to="/chatuii">
              <LinkIcon className="h-5 w-5" />
            </Link>
          </button>
          <input
            type="text"
            className="input input-bordered flex-1"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" className="btn btn-ghost btn-sm">
            <Mic className="h-5 w-5" />
          </button>
          <button type="submit" className="btn btn-primary btn-sm">
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatUi;