import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {io} from 'socket.io-client'
import Input from './Input'
import { useSelector,useDispatch } from 'react-redux'
import Chats from './Chats'

const socket = io('https://app.chat.vicokeke.me')
// replace this url with path to your backend



     socket.on('connect', ()=>{
      let username = localStorage.getItem("username");
      if(!username || username == null){
            let user = prompt('Enter username');
            username = localStorage.setItem("username", user)
      }
      sessionStorage.setItem('userId',socket.id)
      
      console.log(socket.id)
})


socket.on('disconnect',()=>console.log('server disconnected'))



 const App = () => {
  
  const state = useSelector(store => store)
  const dispatch = useDispatch()

let userId = sessionStorage.getItem("userId")
 
  useEffect(() => {
    console.log(socket.id)
    
      socket.on('messages', (data) =>{
      
      
      //should've just used action creators here
      dispatch({
       "type": "ADD_MESSAGE",
       "payload": {
           "username": data.username,
           "message": data.message,
           "userId": data.userId
       }
     })
     
     
     }) 
     
     
  }, [])
  
  
  return (
    <div className='app container mb-4'>
      <div className='row'>
        <div className='col-sm-12 col-md-6 mx-auto'>
          <div className=''>
            <div className='card-header bg-white text-center'>Demo group chat with Sockets.io</div>
            <div className=''>
              <div className='chats'>

                
                {
                  state.messages.map((data,index)=>{
                    return(
                      <Chats message={data}  key={index} user={userId}/>
                    )
                  })
                }
               <br/><br/><br/>
              </div>
              
              
            </div>

          </div>
          <div className='fixed fixed-bottom border w-100 p-4 bg-light'>
          <Input user={userId}/>
          </div>
        </div>
      </div>
      
    </div>
  )
}


export default App