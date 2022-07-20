import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"

type Character = {
    name: string
    description: string
    img: string
}

export default function ListItem({name, img}: Character) {
    return (
        <Card sx={{maxWidth: 345, cursor: "pointer"}}>
            <CardHeader sx={{height: 34}} title={name} />
            <CardMedia component="img" height="194" image={img} alt={name} />
        </Card>
    )
}
