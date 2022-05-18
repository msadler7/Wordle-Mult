import React from 'react'
import { useState } from 'react'
import Default from './Default'
import Create from './Create'
import Join from './Join'
import '../styles/Menu.css'

const Menu = ({ closeMenu, socketService }) => {
    const [menu, setMenu] = useState('default')
    let screen = null

    if (menu === 'default') {
        screen = <Default setMenu={setMenu} closeMenu={closeMenu} />
    }
    else if (menu === 'create') {
        screen = <Create socketService={socketService} setMenu={setMenu} closeMenu={closeMenu} />
    }
    else if (menu === 'join') {
        screen = <Join socketService={socketService} setMenu={setMenu} closeMenu={closeMenu} />
    }

    return (
        <>
            {screen}
        </>
    )
}

export default Menu