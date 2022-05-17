import React from 'react'
import './App.css'

function App() {

    let gridItems = []

    for (let i = 0; i < 30; i++) {
        gridItems.push(
            <div className='item'></div>
        )
    }

    return (
        <div className='container'>
            <h1 className='title'>Wordle Online</h1>
            <div className="board">
                {gridItems}
            </div>
            <button className='play'>Play</button>
        </div>
    )
}

export default App