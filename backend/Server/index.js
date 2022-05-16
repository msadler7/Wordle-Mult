const { Server } = require('socket.io')

const io = new Server(3000, {
    cors:{
        origin: "http://127.0.0.1:5500"
    }
})

const rooms = io.of("/").adapter.rooms;

io.on('connection', socket => {
    console.log(`A client has connected - ${socket.id}`)

    socket.on('join-match', (roomID, cb) => {
        if (rooms.has(roomID)){
            socket.join(roomID)
            console.log(`${socket.id} has joined room ${roomID}`)
            io.to(roomID).emit('opponent-found')

            socket.on('disconnect', () => {
                socket.to(roomID).emit('opponent-disconnected')
            })
        }
        else{
            cb(false)
        }
    })
})

