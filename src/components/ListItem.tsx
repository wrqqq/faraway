import * as React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

type Character = {
    name: string
    description: string
    img: string
}

export default function ListItem({name, description, img}: Character) {
    return (
        <Card sx={{maxWidth: 345, height: 500, cursor: "pointer"}}>
            <CardHeader sx={{height: 34}} title={name} />
            <CardMedia component="img" height="194" image={img} alt={name} />
            <CardContent>
                <Typography variant="body2" color="text.secondary" height="300">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}
