const { Server } = require('socket.io')
const io = new Server(3000)

io.on('connection', socket => {
    console.log("A client has connected")
})
