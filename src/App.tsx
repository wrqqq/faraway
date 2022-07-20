import {useEffect, useState} from "react"
import axios from "axios"
import "./App.css"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route, Link, useLocation, useParams} from "react-router-dom"
import md5 from "md5"
import Character from "./pages/Character"
import Main from "./pages/Main"

function App() {
    const [characters, setCharacters] = useState([])
    const [characterName, setCharacterName] = useState("hulk")
    axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

    useEffect(() => {
        const getData = async () => {
            const baseUrl = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${characterName}`
            const time = Number(new Date())
            const hash = md5(time + `fb2ee5e8ef44d3c6f0c7046db2e421d5d8181512` + `5bbb2895287d6a461a6e6419341fdf5a`)

            const {data} = await axios.get(`${baseUrl}&ts=${time}&apikey=5bbb2895287d6a461a6e6419341fdf5a&hash=${hash}`)
            setCharacters(data.data.results)
            setCharacterName(data.data.results[0])
            console.log(data)
        }
        getData()
    }, [])

    return (
        <div className="App">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Main characters={characters} />} />
                    <Route path="/:id" element={<Character />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
