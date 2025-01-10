import React, { useState } from "react";
import ParseResponse from "./Assistant"

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    try {
        // Send the user's query to the backend
        const response = await fetch("http://localhost:40006/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: input }),
        });

        const data = await response.json();

        // Check if there was an error
        if (response.ok) {
            // Display the responses from OpenAI
            // if (data.responses && data.responses.length > 0) {
            //     responseContainer.innerHTML = `<ul>${data.responses
            //         .map((resp) => `<li>${resp}</li>`)
            //         .join("")}</ul>`;
            // } else {
            //     responseContainer.textContent = "No response received.";
            // }
            ParseResponse(data);
            
        } 
    } catch (error) {
        console.error("Error:", error);
    }

    setInput(""); // Clear the input field
  };

  return (
    <div className="chat-box">
      <div className="chat-header">Chat</div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === "user" ? "user" : "bot"}`}>
            {message.text}
          </div>
        ))}
      </div>
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
