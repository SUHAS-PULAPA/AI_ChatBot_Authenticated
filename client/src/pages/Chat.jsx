import { useState } from 'react';
import API from '../api/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MessageBubble from '../components/MessageBubble';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: 'user', text: message };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await API.post('/chat', { message });

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: res.data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', text: 'Error: Unable to get response' },
      ]);
    }

    setMessage('');
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="chat-shell">
      <div className="chat-panel">
        <div className="chat-header">
          <div className="chat-title">
            <h2>Memory Chatbot</h2>
            <span>Thoughtful, contextual conversations</span>
          </div>
          <button className="ghost-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <MessageBubble key={index} role={msg.role} text={msg.text} />
          ))}

          {loading && <div className="typing-indicator">Bot is typing...</div>}
        </div>

        <div className="chat-input-row">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="chat-input"
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />

          <button onClick={sendMessage} className="send-btn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}