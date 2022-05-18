const { Server } = require('socket.io')

const io = new Server(3000, {
    cors:{
        origin: "*"
    }
})

const rooms = io.of("/").adapter.rooms;

io.on('connection', socket => {
    console.log(`A client has connected - ${socket.id}`)
    let gameID = socket.id

    socket.on('join-match', (roomID, cb) => {
        if (rooms.has(roomID)){
            socket.join(roomID)
            console.log(`${socket.id} has joined room ${roomID}`)
            gameID = roomID
            io.to(roomID).emit('opponent-found')
        }
        else{
            cb(false)
        }
    })

    socket.on('disconnect', () => {
        io.to(gameID).emit('opponent-disconnected')
    })

})

