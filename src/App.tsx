import {useEffect, useState} from "react"
import axios from "axios"
import "./App.css"
import Header from "./components/Header"
import ListItem from "./components/ListItem"
import md5 from "md5"

type Person = {
    name?: string
}

//type Persons = {
//   persons?: Person[]
//}

function App() {
    const [characters, setCharacters] = useState([])
    const [characterName, setCharacterName] = useState("")
    axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

    useEffect(() => {
        const getData = async () => {
            /*axios
            .get("http://developer.marvel.com/v1/public/comics?apikey=5bbb2895287d6a461a6e6419341fdf5a")
            .then((data) => {
                console.log(data)
                setPersons(data.data.results)
            })*/

            const baseUrl = `http://develop.marvel.com/v1/public/characters?nameStartsWith=${characterName}`
            const time = Number(new Date())
            // eslint-disable-next-line no-useless-concat
            const hash = md5(time + `fb2ee5e8ef44d3c6f0c7046db2e421d5d8181512` + `5bbb2895287d6a461a6e6419341fdf5a`)

            const {data} = await axios.get(`${baseUrl}&ts=${time}&apikey=5bbb2895287d6a461a6e6419341fdf5a&hash=${hash}`)
            setCharacters(data.data.results)
            setCharacterName(data.data.results[0])
        }
        getData()
    }, [characterName])

    return (
        <div className="App">
            <Header />
            <ListItem></ListItem>
            <ul>
                {characters.map((person: Person) => (
                    <li>{`${person.name} ${characterName}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
