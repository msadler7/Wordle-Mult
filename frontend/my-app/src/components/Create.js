import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { SocketContext } from "../App";

const Create = ({ startGame ,setMenuOpen}) => {
    const [gameID, setGameID] = useState('')
    const [socketService,] = useContext(SocketContext)

    const createSession = async () => {
        await socketService.connect()
        setGameID(socketService.socket.id)
        await socketService.waitForOpponent()
        setMenuOpen(false)
        startGame()
    }

    useEffect(() => {
        createSession()
    }, [])

    return (
        <div className='menu'>
            <div className='default-container'>
                <h2 className="gameID">Your gameID is: {gameID}</h2>
                <h3>Waiting for opponent... </h3>
            </div>
        </div>
    )
}

export default Create