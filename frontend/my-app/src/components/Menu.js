import React from 'react'
import { useState } from 'react'
import Default from './Default'
import Create from './Create'
import Join from './Join'
import '../styles/Menu.css'

const Menu = ({ startGame, setMenuOpen }) => {
    const [menu, setMenu] = useState('default')
    let screen = null

    if (menu === 'default') {
        screen = <Default startGame={startGame} setMenuOpen={setMenuOpen} setMenu={setMenu}/>
    }
    else if (menu === 'create') {
        screen = <Create startGame={startGame} setMenuOpen={setMenuOpen}/>
    }
    else if (menu === 'join') {
        screen = <Join startGame={startGame} setMenuOpen={setMenuOpen}/>
    }

    return (
        <>
            {screen}
        </>
    )
}

export default Menu