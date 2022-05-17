import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
const socket = io('http://localhost:3000')
const btn = document.getElementById('join')
const roomID = document.getElementById('roomID')

btn.addEventListener('click', joinMatch)

socket.on('connect', () => {
    console.log("Connected to server ")
    console.log(socket.id)
})

socket.on('opponent-found', () => {
    console.log("Opponent Found")
})

socket.on('opponent-disconnected', () => {
    console.log("Your opponent has left the game")
})

function joinMatch() {
    socket.on('connect', () => {
        socket.emit('join-match', roomID.value, (err) => {
            console.log("The gameID is either invalid or expired.")
        })
    })
}
