import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import ChatApp from './ChatApp'
import '../../Chat.css'

const socket = io.connect("http://localhost:8000");

const ChatHome = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };


  return (
    <div className='chatApp'>
      {!showChat ? 
      <div className="joinChatContainer">
        <h3>Join a chat</h3>
        <input type="text"
          placeholder='type name'
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input type="text"
          placeholder='Room ID....'
          onChange={(e)=>setRoom(e.target.value)}
        />
        <button onClick={joinRoom}>Join a room</button>
      </div>
      : 
      <ChatApp socket={socket} username={username} room={room} />
      }
    </div>
  )
}

export default ChatHome

// import "./App.css";
// import io from "socket.io-client";
// import Picker from "emoji-picker-react";
// const socket = io("http://localhost:5000");


// const App = ()=>{
//   const [socketId, setSocketId] = useState("");
//   const [message, setMessage] = useState("");
//   const [users, setUsers] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [joinedRoom, setJoinedRoom] = useState(false);
//   const [room, setRoom] = useState("");
//   const [chat, setChat] = useState([]);
//   const [showEmoji, setShowEmoji] = useState(false);

//   //emoji handler
//   const onEmojiClick = (event, emojiObject) => {
//     setMessage(message + emojiObject.emoji);
//   };

//   const chatContainer = useRef(null)

//   useEffect(()=>{
//     socket.on('me', id=>{
//       setSocketId(id)
//     })

//     socket.on('disconnect', ()=>{
//       socket.disconnect()
//     })
//     socket.on('getAllUsers', users=>{
//       setUsers(users)
//     })
//     //real time
//     socket.on('updateUsers', users=>{
//       setUsers(users)
//     })

//     socket.on('getAllRooms', (rooms)=>{
//       setRoom(rooms)
//     })
//     // real time
//     socket.on('updateRooms', (rooms)=>{
//       setRoom(rooms)
//     });
//     //Rooms
//     socket.on('chat', (payload)=>{
//       setChat(payload.chat)

//     })

//     if(joinedRoom === true){
//       chatContainer.current.scrollIntoView({
//         behaviour: "smooth",
//         block:'end',
//       })

//     }

//   },[chat, rooms])

//   const sendMessage = ()=>{
//     const payload = {message , room , socketId}
//     socket.emit('message', payload)
//     setMessage("");
//     socket.on('chat', payloadd=>{
//       setChat(payloadd.chat)
//     })
//     chatContainer.current.scrollIntoView({
//       behaviour: "smooth",
//       block:'end',
//     })
//     setShowEmoji(false)
//   }

//   const createRoom = ()=>{
//     socket.emit('create_room')
//     socket.on('get_room' , (room)=>{
//       setRooms([...rooms, room])
//     })
//   }

//   const joinRoom = (room)=>{
//     socket.emit('join_room', room)
//     setRoom(room.id)
//     setJoinedRoom(true)
//     setChat(room.chat)
//   }

//   return(
//     <>
//       <h1 className="main_heading">Chat App</h1>
//       <h1 className="my_socket">Me: {socket.id}</h1>
//       <h3 className="roomJoined">
//         {joinRoom === true 
//         ? `Room: ${room}` 
//         : "You are not joined in any room"}
//       </h3>


//       {!joinedRoom && (
//         <div className="container">
//           <div className="users-container">
//             <h2 className="users_heading">Online Users : </h2>
//             <ul className="users">
//               {users.map((user)=>{
//                 return <li key={user}>
//                   {user && user === socketId ? '*Me*': user }
//                 </li>
//               })}
//             </ul>
//           </div>
//           <div className="rooms-container">
//             <h2 className="rooms_heading">Available Rooms :</h2>
//             {rooms.length === 0 ? (
//               <h3 className="no_room">No rooms ! create a room</h3>)
//               : (
//                 <ul className="rooms">
//                   {rooms.map((room)=>{
//                     return (
//                       <li key={room.id} onClick={()=>joinRoom(room)}> {room.id}</li>
//                     )
//                   })}
//                 </ul>
//               )
//             }
//           </div>
//           <div className="btn-container">
//             <button className="btn" onClick={()=> createRoom()}>Create Room</button>
//           </div>
//         </div>
//       )}
//       {joinedRoom && (
//         <>
//           <div className="chat-container">
//             <ul className="chat-list" id="chat-list" ref={chatContainer}>
//               {chat.map((chat, index)=>{
//                 return(

//                 <li
//                   key={index}
//                   className={chat.writer === socketId ? 'chat-me': 'chat-user'}
//                   >
//                   {chat.writer === socketId 
//                   ? `${chat.message}: Me*`
//                   :`User(${chat.writer.slice(0,5)}): ${chat.message}` }
//                   </li>
//                 )
//               })}

//             </ul>
//           </div>
//           <form className="chat-form" onSubmit={(e)=> e.preventDefault()}>
//             <input type="text"  placeholder="Your messsage..."
//             autoFocus
//             onChange={(e)=>setMessage(e.target.value)}
//             value={message}/>

//             <button className="emoji_btn" type="button" onClick={()=>setShowEmoji(!showEmoji)}>Emoji</button>
//             <button className="send_btn" onClick={()=>sendMessage()} type='submit'>Send</button>
//           </form>
//           { showEmoji && 
//           <Picker 
//           onEmojiClick={onEmojiClick} 
//           pickerStyle={{
//             width:'20%',
//              display:'absolute',
//              left:'0',
//              bottom:'270px',
//              backgroundColor:'#fff',
//           }}
//             />}
//         </>
//       )}
//     </>
//   )

// }
