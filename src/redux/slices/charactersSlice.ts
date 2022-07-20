import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import md5 from "md5"

type Character = {
    name: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
    id: number
}

type CharactersState = {
    characters: Character[]
    query: string
}

const initialState: CharactersState = {
    characters: [],
    query: "",
}

export const fetchCharacters = createAsyncThunk<Character[], string, {rejectValue: string}>(
    "characters/fetchCharacters",
    async function (query, {rejectWithValue}) {
        const baseUrl = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}`
        const time = Number(new Date())
        const hash = md5(time + `fb2ee5e8ef44d3c6f0c7046db2e421d5d81815125bbb2895287d6a461a6e6419341fdf5a`)

        const {data} = await axios.get(`${baseUrl}&ts=${time}&apikey=5bbb2895287d6a461a6e6419341fdf5a&hash=${hash}`)

        if (!data) {
            return rejectWithValue("Server Error!")
        }

        return data.data.results
    },
)

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacters.fulfilled, (state, action) => {
            state.characters = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
//export const {getCharacters} = charactersSlice.actions

export default charactersSlice.reducer
