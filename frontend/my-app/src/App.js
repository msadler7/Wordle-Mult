import React, { useState, createContext} from 'react'
import Landing from './Landing'
import SocketService from './services/SocketService'

const SocketContext = createContext(null)

const App = () => {

    return (
        <SocketContext.Provider value={useState(new SocketService('http://192.168.2.250:3001'))}>
            <Landing/>
        </SocketContext.Provider>
    )
}

export { App, SocketContext }