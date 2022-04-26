import React from 'react'

const Chats = (props) => {
    console.log(props)
    let authorId = props.message.userid
    let userId = props.user
    //let sessionStore = sessionStorage.getItem("userId")
    //let authorname = props.message.username
    //let username = localStorage.getItem("username")
    
  return (
      <div className='w-100 d-block chat-parent'>
    <div className={( authorId === userId )?'chat mb-2 my-text w-75':'chat mb-2 received-text w-75'}>
        <div className='small-font'>{props.message.username}</div>
            {props.message.message}
        
    </div>
    </div>
  )
}

export default Chats
