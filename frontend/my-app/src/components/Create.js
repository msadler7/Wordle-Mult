import React, { useEffect } from "react";
import { useState } from "react";

const Create = ({setState, socketService}) => {
    const [gameID, setGameID] = useState('')

    const createSession = async () => {
        await socketService.connect()
        setGameID(socketService.socket.id)
        await socketService.waitForOpponent()
        setState({open: false})
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