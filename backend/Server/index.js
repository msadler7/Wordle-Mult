const { readFileSync } = require('fs')
const { Server } = require('socket.io')
const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3000

const io = new Server(3001, {
    cors: {
        origin: "*"
    }
})

const rooms = io.of("/").adapter.rooms;

app.use(express.static(path.join(__dirname, 'build')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

io.on('connection', socket => {
    console.log(`A client has connected - ${socket.id}`)
    let gameID = socket.id

    socket.on('join_match', (roomID, cb) => {
        if (rooms.has(roomID)) {
            socket.join(roomID)
            console.log(`${socket.id} has joined room ${roomID}`)
            gameID = roomID
            words = readFileSync("words.txt", 'utf-8')
            words = words.split("\n")
            word = words[Math.floor(Math.random() * words.length)]
            io.to(roomID).emit('opponent_found', word)
        }
        else {
            cb(false)
        }
    })

    socket.on('disconnect', () => {
        io.to(gameID).emit('opponent_disconnected')
    })

    socket.on('game_won', () => {
        socket.broadcast.emit('game_won')
    })
})



