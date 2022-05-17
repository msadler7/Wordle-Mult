import React from 'react'
import '../styles/Menu.css'

const Menu = () => {

    return (
        <>
            <div className='menu'>
                <div className='menu-container'>
                        <button className='menu-btn'> Solo </button>
                        <button className='menu-btn'> Create Match</button>
                        <button className='menu-btn'> Join Match </button>
                </div>
            </div>
        </>
    )
}

export default Menu