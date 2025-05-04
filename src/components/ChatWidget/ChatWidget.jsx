import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import './ChatWidget.css';

const socket = io(process.env.REACT_APP_API_URL, {
  withCredentials: true,
});

const ChatWidget = () => {
  const user = useSelector(state => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('receiveMessage', (data) => {
      setMessages(prev => [...prev, data]);
    });

    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handleSend = () => {
    if (!newMsg.trim()) return;

    const msgData = {
      senderId: user?.id || 'guest',
      receiverId: '67071a0d79d68bea62eaa9cf',
      message: newMsg,
    };
    console.log(user?.id)
    console.log(newMsg)

    socket.emit('sendMessage', msgData);
    setMessages(prev => [...prev, msgData]);
    setNewMsg('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-bubble" onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">Chat với Admin</div>
          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={msg.senderId === user?.id ? 'msg user' : 'msg admin'}>
                {msg.message}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={newMsg}
              onChange={(e) => setNewMsg(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Nhắn gì đó..."
            />
            <button onClick={handleSend}>Gửi</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
