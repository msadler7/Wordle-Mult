import React from 'react'

const Default = ({startGame, setMenuOpen, setMenu}) => {

    return (
        <>
            <div className='menu'>
                <div className='default-container'>
                    <button onClick={() => {
                        setMenuOpen(false)
                        startGame()
                    }} className='btns'> Solo </button>
                    <button onClick={() => setMenu('create')} className='btns'> Create Match</button>
                    <button onClick={() => setMenu('join')} className='btns'> Join Match </button>
                </div>
            </div>
        </>
    )
}

export default Default