import { io } from 'socket.io-client'

class SocketService {

    url = ''
    socket = null
    gameID = ''

    constructor(url, startGame) {
        this.url = url
        this.startGame = startGame
    }

    async connect() {
        this.socket = io(this.url)
        return new Promise((resolve, reject) => {
            this.socket.on('connect', () => {
                console.log("Connected to Server")
                resolve()
            })

            this.socket.on('connect_error', () => {
                console.log("Could not Connect to Server")
                this.socket.off('connect_error')
                reject()
            })
        })
    }

    async join(code) {
        await this.connect()

        return new Promise(async (resolve, reject) => {
            this.socket.emit('join_match', code, () => {
                reject()
            })

            await this.waitForOpponent()
            resolve()
        })

    }

    async waitForOpponent() {
        return new Promise((resolve) => {
            this.socket.on('opponent_found', (gameID) => {
                this.gameID = gameID
                console.log('Opponent Found!!')
                this.startGame(gameID)

                this.socket.on('opponent_disconnected', () => {
                    console.log('opponent left')
                })

                resolve()
            })
        })
    }
}

export default SocketService