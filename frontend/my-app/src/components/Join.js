import React from "react";
import { useState } from "react";

const Join = ({setMenu, closeMenu, socketService}) => {
    const [gameID, setGameID] = useState('')

    const joinMatch = () => {

    }

    return (
        <div className='menu'>
            <div className='default-container'>
                <input onChange={(e) => setGameID(e.target.value)} className='inputs' placeholder='GameID' />
                <input className='inputs' placeholder='Username' />
                <button onClick={() => joinMatch()} className='btns'>Join</button>
            </div>
        </div>
    )
}

export default Join