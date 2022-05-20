import React, { useState, useEffect } from "react"
import Board from './components/Board'
import Menu from './components/Menu'
import GameService from "./services/GameService"
import './styles/App.css'


const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(true)
    const [gameController, setGameInstance] = useState(null)
    const [choices, setChoices] = useState([])

    useEffect(() => {
        const handler = (e) => {
            gameController.handleKeyDown(e)
        }

        if (gameController) {
            document.addEventListener('keydown', handler)
            return () => document.addEventListener('keydown', handler)
        }
    }, [gameController])

    const startGame = () => {
        setGameInstance(new GameService('test', setChoices))
    }

    return (
        <>
            {menuOpen ? <Menu startGame={startGame} setMenuOpen={setMenuOpen} /> : <></>}
            <div className='container'>
                <h1 className='title'>Wordle Online</h1>
                <Board choices={choices}/>
                {/* <button onClick={() => { console.log(choices) }}>Click Here</button> */}
                {/* <button onClick={() => {document.addEventListener('keydown', test.bind(count))}}>Create Listener</button> */}
            </div>
        </>
    )
}

export default Landing