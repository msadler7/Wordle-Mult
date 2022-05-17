import React from 'react'
import '../styles/Board.css'

const Board = () => {
    let gridItems = []

    for (let i = 0; i < 30; i++) {
        gridItems.push(
            <div className='item'></div>
        )
    }

    return (
        <div className="board">
            {gridItems}
        </div>
    )
}

export default Board