import React from 'react'
import { useState, useEffect } from 'react'
import Board from './components/Board'
import Menu from './components/Menu'
import SocketService from './services/SocketService'
import './styles/App.css'


const App = () => {
    const [open, setOpen] = useState(true)
    const [socket, setSocket] = useState()
    const ENDPOINT = 'http://localhost:3000'
    
    useEffect(() => {
        setSocket(new SocketService(ENDPOINT))
    },[])

    return (
        <>
            {open ? <Menu socketService={socket} closeMenu={setOpen}/> : <></>}
            <div className='container'>
                <h1 className='title'>Wordle Online</h1>
                <Board />
            </div>
        </>
    )
}

export default App