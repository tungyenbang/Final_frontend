import React, { useState } from 'react';
import { MessageOutlined } from '@ant-design/icons';
import './ChatBubble.css'; // Thêm CSS để cố định vị trí góc phải
import ChatBox from './ChatBox';

const ChatBubble = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chat-bubble-wrapper">
      {selectedUser ? (
        <ChatBox user={selectedUser} onClose={() => setSelectedUser(null)} />
      ) : (
        <div className="chat-icon" onClick={() => setSelectedUser(users[0])}>
          <MessageOutlined style={{ fontSize: 24 }} />
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
