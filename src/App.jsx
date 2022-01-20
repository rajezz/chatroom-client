import { useState, useEffect } from "react"

import { initializeSocket } from "./services/socket.service"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Chatroom from "./components/Chatroom"

const App = () => {

    const [username, setUsername] = useState("Anonymous user")
    
    
    return <div className="page">
        <Header username={username} setUsername={setUsername} />
        <Chatroom />
    </div>
}

export default App
