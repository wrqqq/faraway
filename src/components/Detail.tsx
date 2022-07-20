import React from "react"
import {useParams} from "react-router-dom"

function Detail() {
    let {id} = useParams()

    return (
        <div>
            <h1>123</h1>
            <h3>ID: {id}</h3>
        </div>
    )
}

export default Detail
