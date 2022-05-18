import React from 'react'
import { useState } from 'react'
import socketIOClient from "socket.io-client";
import '../styles/Menu.css'

const Menu = ({ closeModal }) => {
    const [menu, setMenu] = useState('default')
    const [gameID, setGameID] = useState('')
    const [code, setCode] = useState('')
    const [connection, setConnection] = useState()
    const ENDPOINT = 'http://localhost:3000'

    const connect = async () => {
        return await new Promise(resolve => {
            const socket = socketIOClient(ENDPOINT)
            socket.on('connect', () => {
                resolve(socket)
            })
        })
    }

    const createMatch = async () => {
        const socket = await connect()
        setGameID(socket.id)
        setMenu('create')
    }

    const joinMatch = async () => {
        const socket = await connect()

        socket.on('opponent-found', () => {
            console.log("opponent found")
            closeModal(false)
        })

        socket.emit('join-match', code, () => {
            console.log("The gameID is either invalid or expired.")
        })
    }

    if (menu === 'default') {
        return (
            <>
                <div className='menu'>
                    <div className='default-container'>
                        <button onClick={() => closeModal(false)} className='btns'> Solo </button>
                        <button onClick={() => createMatch()} className='btns'> Create Match</button>
                        <button onClick={() => setMenu('join')} className='btns'> Join Match </button>
                    </div>
                </div>
            </>
        )
    }

    if (menu === 'create') {
        return (
            <div className='menu'>
                <div className='default-container'>
                    <h2>Your gameID is: {gameID}</h2>
                    <input className='inputs' placeholder='Username' />
                    <button className='btns'>Play</button>
                </div>
            </div>
        )
    }

    if (menu === 'join') {
        return (
            <div className='menu'>
                <div className='default-container'>
                    <input onChange={(e) => setCode(e.target.value)} className='inputs' placeholder='GameID' />
                    <input className='inputs' placeholder='Username' />
                    <button onClick={() => joinMatch()} className='btns'>Join</button>
                </div>
            </div>
        )
    }
}

export default Menu