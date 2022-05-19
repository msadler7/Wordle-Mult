import React, { useEffect } from "react";
import { useState } from "react";

const Create = ({setMenu, closeMenu, socketService}) => {
    const [gameID, setGameID] = useState('')

    const createSession = async () => {
        await socketService.connect()
        setGameID(socketService.socket.id)
        await socketService.waitForOpponent()
        closeMenu(false)
    }

    const play = async () => {
        closeMenu(false)
        await socketService.waitForOpponent()
    }

    useEffect(() => {
        createSession()
    }, [])

    return (
        <div className='menu'>
            <div className='default-container'>
                <h2>Your gameID is: {gameID}</h2>
                <input className='inputs' placeholder='Username' />
                <button onClick={() => play()} className='btns'>Play</button>
            </div>
        </div>
    )
}

export default Create