// import React, { useState, useEffect } from 'react';
// import { fetchMessages, sendMessage } from '../services/chatService';
// import { useSelector } from 'react-redux';

// const ChatBox = ({ adminId }) => {
//   const [messages, setMessages] = useState([]);
//   const [content, setContent] = useState('');
//   const { userInfo } = useSelector(state => state.auth);

//   const loadMessages = async () => {
//     const msgs = await fetchMessages(userInfo._id, userInfo.token);
//     setMessages(msgs);
//   };

//   useEffect(() => {
//     loadMessages();
//     const interval = setInterval(loadMessages, 3000); // polling mỗi 3s
//     return () => clearInterval(interval);
//   }, []);

//   const handleSend = async () => {
//     if (content.trim()) {
//       await sendMessage(adminId, content, userInfo.token);
//       setContent('');
//       loadMessages();
//     }
//   };

//   return (
//     <div style={{ border: '1px solid gray', padding: '1rem' }}>
//       <h2>Chat với Admin</h2>
//       <div style={{ height: 300, overflowY: 'auto', background: '#f5f5f5', marginBottom: '1rem' }}>
//         {messages.map((msg, idx) => (
//           <div key={idx} style={{ textAlign: msg.sender === userInfo._id ? 'right' : 'left' }}>
//             <p><strong>{msg.sender === userInfo._id ? 'Bạn' : 'Admin'}:</strong> {msg.content}</p>
//           </div>
//         ))}
//       </div>
//       <input value={content} onChange={e => setContent(e.target.value)} placeholder="Nhập tin nhắn..." />
//       <button onClick={handleSend}>Gửi</button>
//     </div>
//   );
// };

// export default ChatBox;
