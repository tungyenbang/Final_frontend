import React, { useEffect, useState } from 'react';
import './ChatBox.css';
import { SendOutlined, CloseCircleOutlined } from '@ant-design/icons';
import  socket  from './socket.js'; // socket đã cấu hình


const ChatBox = ({ user, onClose }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      if (data.senderId === user._id) {
        setMessages((prev) => [...prev, data]);
      }
    });

    return () => {
      socket.off('receive_message');
    };
  }, [user]);

  const handleSend = () => {
    if (message.trim()) {
      const msg = {
        senderId: 'admin',
        receiverId: user._id,
        content: message,
        timestamp: new Date()
      };
      socket.emit('send_message', msg);
      setMessages((prev) => [...prev, msg]);
      setMessage('');
    }
  };

  return (
    <div className="chat-box">
      <div className="chat-header">
        <span>Chat với {user.name}</span>
        <CloseCircleOutlined onClick={onClose} style={{ cursor: 'pointer' }} />
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={msg.senderId === 'admin' ? 'msg-admin' : 'msg-user'}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          placeholder="Nhắn gì đó..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <SendOutlined onClick={handleSend} />
      </div>
    </div>
  );
};

export default ChatBox;
