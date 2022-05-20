import React from 'react'
import '../styles/Board.css'

const Board = ({ choices }) => {

    let boxes = []
    const ROWS = 6
    const COLUMNS = 5

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            let element
            if (i < choices.length) {
                element = (
                    <div key={`${i},${j}`} className='item'>
                        <h1>{choices[i][j]}</h1>
                    </div>
                )
            }
            else {
                element = (
                    <div key={`${i},${j}`} className='item'></div>
                )
            }

            boxes.push(element)
        }
    }

    return (
        <div className='board'>
            {boxes}
        </div>
    )
}

export default Board