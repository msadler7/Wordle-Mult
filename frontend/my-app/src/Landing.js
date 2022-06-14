import React, { useState, useEffect, memo, useContext } from "react"
import Board from './components/Board'
import Menu from './components/Menu'
import GameService from "./services/GameService"
import { SocketContext } from "./App";
import './styles/App.css'

const MemoedBoard = memo(Board)

const Landing = () => {
    const [menuOpen, setMenuOpen] = useState(true)
    const [gameController, setGameInstance] = useState(null)
    const [choices, setChoices] = useState([])
    const [socketService,] = useContext(SocketContext)

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
        setGameInstance(new GameService(socketService.word, setChoices, socketService))
        console.log(socketService.word)
    }

    return (
        <>
            {menuOpen ? <Menu startGame={startGame} setMenuOpen={setMenuOpen} /> : <></>}
            <div className='container'>
                <h1 className='title'>Wordle Online</h1>
                <MemoedBoard choices={choices}/>
            </div>
        </>
    )
}

export default Landing