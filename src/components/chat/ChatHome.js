import React, { useEffect, useState } from 'react'
import io from 'socket.io-client';
import ChatApp from './ChatApp'
import '../../Chat.css'

// const socket = socketIO.connect('http://localhost:8000')
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