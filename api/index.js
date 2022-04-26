const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const  socketIo  = require("socket.io");
const io = socketIo(server,{ 
    cors: {
      origin: '*'
    }
}) 




app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
  
});

app.post('/', (req,res) => {
    
})




io.on('connection',(socket)=>{
    console.log('client connected: ',socket.id)
    
    socket.on("message", (data) => {
        console.log(data)
        io.emit('messages',{
            "username": data.username,
            "message": data.message,
            "userId": data.userId
        })
    })
    
    socket.on('disconnect',(reason)=>{
      console.log(reason)
    })
  })

 



  setInterval(()=>{
    io.to('clock-room').emit('time', new Date())
},1000)




server.listen(8080, () => {
  console.log('listening on *:8080');
});