import React from "react";
import { useState } from "react";

const Join = ({ setState, socketService }) => {
    const [gameID, setGameID] = useState('')
    const [connecting, setConnecting] = useState(false)

    const joinMatch = async () => {
        setConnecting(true)
        await socketService.join(gameID)
        setState({open: false})
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