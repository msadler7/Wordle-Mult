import React from "react";
import { useState, useContext } from "react";
import { SocketContext } from "../App";

const Join = ({startGame, setMenuOpen }) => {
    const [gameID, setGameID] = useState('')
    const [connecting, setConnecting] = useState(false)
    const [socketService,] = useContext(SocketContext)

    const joinMatch = async () => {
        setConnecting(true)
        await socketService.join(gameID)
        setMenuOpen(false)
        socketService.listen()
        startGame()
    }

    return (
        <div className='menu'>
            <div className='default-container'>
                {!connecting ?
                    <>
                        <input onChange={(e) => setGameID(e.target.value)} className='inputs' placeholder='GameID' />
                        <button onClick={() => joinMatch()} className='btns'>Join</button>
                    </>
                    :
                    <h2>Joining Game</h2>
                }
            </div>
        </div>
    )
}

export default Join