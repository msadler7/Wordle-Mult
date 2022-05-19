import React from 'react'
import '../styles/Board.css'

const Board = ({ boardState }) => {

    let items = []
    for (let i = 0; i < 30; i++) {
        if (i < boardState.length) {
            items.push(
                <div key={i} className='item'>
                    <h1>{boardState[i]}</h1>
                </div>
            )
        }
        else {
            items.push(
                <div key={i} className='item'></div>
            )
        }
    }


    return (
        <div className='board'>
            {items}
        </div>
    )
}

export default Board