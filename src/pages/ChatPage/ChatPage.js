// import React from "react";
// import { Session, Chatbox } from "@talkjs/react";
// import Talk from "talkjs";
// import { useSelector } from "react-redux";



// const ChatPage = () => {

    

// const user = useSelector((state) => state.user);

// const currentUser = {
//   id: String(user?._id?.$oid || user?._id),  // Đảm bảo luôn là string
//   name: user?.name || "Guest",
//   email: user?.email || "unknown@example.com",
//   photoUrl: user?.avatar || "https://via.placeholder.com/150",
//   role: user?.isAdmin ? "admin" : "user"
// };
// console.log("user._id =", user._id);

      

//   const adminUser = {
//     id: "admin1",
//     name: "Admin",
//     email: "tung123@gmail.com",
//     role: "admin"
//   };

//   return (
//     <Session appId="tgjXlIrf" user={currentUser}>
//       <Chatbox
//         conversationId={Talk.oneOnOneId(currentUser, adminUser)}
//         participants={[currentUser, adminUser]}
//       />
//     </Session>
//   );
// };

// export default ChatPage;
