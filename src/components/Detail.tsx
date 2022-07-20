import {Grid} from "@mui/material"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"
import {useAppSelector} from "../hooks"
import Typography from "@mui/material/Typography"

function Detail() {
    const characters = useAppSelector((state) => state.characters.characters)
    let {id} = useParams()
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    let numId: number = Number(id)
    const needObj = characters.find((c) => {
        return c.id === numId
    })

    useEffect(() => {
        if (needObj) {
            setName(needObj.name)
            setDescription(needObj.description)
            setImg(`${needObj?.thumbnail["path"]}.${needObj?.thumbnail["extension"]}`)
        }
    }, [needObj])

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
                <img src={img} alt={name} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography sx={{marginTop: 20}}>{description}</Typography>
            </Grid>
        </Grid>
    )
}

export default Detail
