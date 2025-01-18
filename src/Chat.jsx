import React, { useState } from "react";
import ParseResponse from "./Assistant"

const ChatBox = ({responseFunc}) => {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    try {
        const response = await fetch("http://localhost:40006/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: input }),
        });

        const data = await response.json();
        console.log(data);

        if (response.ok) {
            responseFunc(data);
        } 
    } catch (error) {
        console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div className="chat-box">
      <div className="chat-header">Chat</div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
