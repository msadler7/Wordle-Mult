import React from 'react'
import { useState } from 'react'
import Board from './components/Board'
import Menu from './components/Menu'
import './styles/App.css'


const App = () => {
    const [open, setOpen] = useState(true)

    return (
        <>
            {open ? <Menu closeModal={setOpen}/> : <></>}
            <div className='container'>
                <h1 className='title'>Wordle Online</h1>
                <Board />
            </div>
        </>
    )
}

export default App