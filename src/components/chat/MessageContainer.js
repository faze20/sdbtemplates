import React , {useRef} from 'react'

const Message = React.memo(({ message, socketId }) => (
    <div className={`${socketId=== message.from ? 'my-message' : 'other-message'}`}>
        <label className='lable'> {socketId === message.from ? 'You' : `${message.from}:`}</label>
        <div className="message">{message.message}</div>
    </div>
))

const NewMessageInput = React.memo(({ onSubmit }) =>{
    const ref = useRef(null)

    return (
        <input
        onKeyDown={(event) => onSubmit(event , ref)}
        ref={ref}
        className='new-message-input'
        placeholder='New Message...'
        type="text" 
        ></input>
    )
})

const MessagesContainer = ({messages, bottomRef, socketId , onSubmit}) =>{
    console.log(messages)
    return(
        <div className="messages-container">
            <div className="messages-field">
                {messages?.map((message , index) => (
                    <Message key={index}  message={message} socketId={socketId}/>
                ))}
            <div ref={bottomRef}></div>
            </div>
            <NewMessageInput  onsubmit={onSubmit}/>

        </div>
    )
}

export default MessagesContainer