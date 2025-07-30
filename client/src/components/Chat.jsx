import { useState, useRef, useEffect } from 'react';
import './styles/Chat.css';

export default function Chat({currentRightTab}) {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! Need help with PC parts?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `You said: "${input}" — let me find something.`,
        },
      ]);
    }, 600);

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ display: currentRightTab === 'Chat' ? 'flex' : 'none', flexDirection: 'column', flex: 1 }} className="chat-container">
      <span className="chat-header">Silicon Assistant</span>

      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-bubble ${
              msg.sender === 'user' ? 'user-bubble' : 'ai-bubble'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="chat-input"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="chat-send-button">
          Send
        </button>
      </div>
    </div>
  );
}
