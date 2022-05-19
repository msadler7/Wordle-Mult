import React from 'react'
import { useState } from 'react'
import Default from './Default'
import Create from './Create'
import Join from './Join'
import '../styles/Menu.css'

const Menu = ({ setState, socketService }) => {
    const [menu, setMenu] = useState('default')
    let screen = null

    if (menu === 'default') {
        screen = <Default setMenu={setMenu} setState={setState} />
    }
    else if (menu === 'create') {
        screen = <Create socketService={socketService} setMenu={setMenu} setState={setState} />
    }
    else if (menu === 'join') {
        screen = <Join socketService={socketService} setMenu={setMenu} setState={setState} />
    }

    return (
        <>
            {screen}
        </>
    )
}

export default Menu