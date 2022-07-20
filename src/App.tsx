import {useEffect, useState} from "react"
import axios from "axios"
import "./App.css"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Character from "./pages/Character"
import Main from "./pages/Main"
import {useAppDispatch, useAppSelector} from "./hooks"
import {fetchCharacters} from "./redux/slices/charactersSlice"

function App() {
    const characters = useAppSelector((state) => state.characters.characters)
    //const [characterName, setCharacterName] = useState("hulk")
    const dispatch = useAppDispatch()
    axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

    useEffect(() => {
        dispatch(fetchCharacters("hulk"))
    }, [dispatch])

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main characters={characters} />} />
                    <Route path="/:id" element={<Character />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
