import React, { useState, createContext } from 'react'
import Landing from './Landing'
import SocketService from './services/SocketService'

const SocketContext = createContext(null)

const App = () => {
    
    return (
        <SocketContext.Provider value={useState(new SocketService('http://localhost:3000'))}>
            <Landing/>
        </SocketContext.Provider>
    )
}

export {App, SocketContext}