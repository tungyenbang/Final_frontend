import { io } from 'socket.io-client';

// URL của backend (đã chạy socket.io server)
const socket = io('http://localhost:3001'); // Đổi nếu backend chạy cổng khác

export default socket;
