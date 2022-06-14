import React from 'react'
import '../styles/Board.css'

const Board = ({ choices }) => {

    let boxes = []
    const ROWS = 6
    const COLUMNS = 5

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLUMNS; j++) {
            let element
            if (5 * i + j < choices.length) {
                let obj = choices[5 * i + j]
                let className = 'item'

                if (obj.showColor) {
                    if (obj.code === 2) { className = 'correct-item' }
                    else if (obj.code === 1) { className = 'close-item' }
                    else { className = 'incorrect-item' }
                }

                element = (
                    <div key={`${i},${j}`} className={className}>
                        <h1>{choices[5 * i + j].token}</h1>
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