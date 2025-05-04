// import { axiosJWT } from "./UserService";

// // 📨 Gửi tin nhắn từ user đến admin
// export const sendMessage = async (data, access_token) => {
//   const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/chat/send`, data, {
//     headers: {
//       token: `Bearer ${access_token}`,
//     },
//   });
//   return res.data;
// };

// // 📥 Lấy tất cả tin nhắn giữa user và admin
// export const getMessages = async (userId, access_token) => {
//   const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/chat/messages/${userId}`, {
//     headers: {
//       token: `Bearer ${access_token}`,
//     },
//   });
//   return res.data;
// };
