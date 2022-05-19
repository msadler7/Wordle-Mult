import React from 'react'
import Board from './components/Board'
import Menu from './components/Menu'
import GameService from './services/GameService'
import SocketService from './services/SocketService'

import './styles/App.css'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            open: true,
            socket: new SocketService('http://localhost:3000', this.startGame.bind(this)),
            boardState: [],
            game: null,
        }
    }

    startGame(word){
        this.setState({game: new GameService(word, this.setState.bind(this))}, () => {
            document.addEventListener('keydown', this.state.game.handle.bind(this.state.game))
        })
    }

    setBoardState(){
        console.log('hello')
    }

    render() {

        return (
            <>
                {this.state.open ? <Menu socketService={this.state.socket} setState={this.setState.bind(this)} /> : <></>}
                <div className='container'>
                    <h1 className='title'>Wordle Online</h1>
                    <Board boardState={this.state.boardState} />
                </div>
            </>
        )
    }
}

export default App