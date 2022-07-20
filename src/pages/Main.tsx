import {Link} from "react-router-dom"
import ListItem from "../components/ListItem"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"

type Character = {
    name: string
    description: string
    thumbnail: {
        path: string
        extension: string
    }
    id: number
}

type Characters = {
    characters: Character[]
}

const Main = ({characters}: Characters): JSX.Element => {
    return (
        <Container sx={{mt: 2}}>
            <Grid container spacing={2}>
                {characters?.map(({name, description, thumbnail, id}: Character) => {
                    const url = `${thumbnail["path"]}.${thumbnail["extension"]}`
                    return (
                        <Grid item xs={3} md={3} key={id}>
                            <Link to={`${id}`}>
                                <ListItem name={name} description={description} img={url}></ListItem>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Main
