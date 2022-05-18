import { io } from 'socket.io-client'

class SocketService{

    url = ''
    socket = null

    constructor(url){
       this.url = url
    }

    async connect(){
        this.socket = io(this.url)
        return new Promise((resolve, reject) => {
            this.socket.on('connect', () => {
                console.log("Connected to Server")
                resolve()
            })

            this.socket.on('connect_error', () => {
                console.log("Could not Connect to Server")
                reject()
            })
        })
    }
}

export default SocketService