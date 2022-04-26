import React from 'react'
import { io } from 'socket.io-client'
//import { useEffect } from 'react'



const Socket = io('https://app.chat.vicokeke.me')
//replace url with path to your backend


const Input = (props) => {
   
   
  const handleSubmit = (e) => {
        e.preventDefault()
        const userId = sessionStorage.getItem("userId")
        const username = localStorage.getItem("username")
        let chat = document.getElementById("chat-box").value
        Socket.emit("message", {
            "username": username,
            "message": chat,
            "userId": userId
        })
        
        
        
        
        document.getElementById("chat-box").value="";
    }
    


  return (
      <form  onSubmit={handleSubmit}>
    <div className='input-group bg-light'>
                <input id="chat-box" type="text" className="form-control" placeholder="Enter your chat..." autoComplete="off" required/>
                <button type="submit" className='btn btn-primary'>Send</button>
    </div>
    </form>
  )
}

export default Input
