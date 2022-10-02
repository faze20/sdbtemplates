import React from 'react'
import io from 'socket.io-client';
import ChatApp from './ChatApp'
import '../../Chat.css'

const socket = io.connect("http://localhost:8000");

const ChatHome = () => {


  return (
    <div className='chatApp-container'>
      <ChatApp  socket={socket}/>
    </div>
  )
}

export default ChatHome
