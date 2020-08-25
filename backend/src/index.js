const express   = require('express');
const mongoose = require('mongoose');
const socketIO   = require('socket.io')
const http      = require('http')
const app       = express()
const PORT      = 9000
const serve     = http.createServer(app)
const Chat = require('./models/Menssage')
const io = socketIO(serve)

// iniciando Websocket 
io.on('connection', async socket => {

  const messages =  await Chat.find()

  console.log(`usuario:${socket.id}`)
  socket.emit('menssageEvent',messages);
 
            
  socket.on('menssageEvent',async (msg) => { 
    
    let message = new Chat({name:msg.name, message: msg.message})
    await message.save()
    
    let messages =  await Chat.find()
      io.emit('menssageEvent',messages)
  
  })
    
})

// iniciando bd  
mongoose.connect('mongodb://db:27017/Chat',{ useUnifiedTopology: true,useNewUrlParser: true }, (err) =>{
    if (err) {
        throw err;
    }    
})



// iniciando Servidor 
serve.listen(PORT, ()=>{
    console.log(`Server initiated on port ${PORT}`)
})