import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {ItemDetails} from "./ItemDetails"

export function ItemDetailsContainer() {

    const [item, setItem] = useState([])
    const { pid } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(detalle => {
                const prod = detalle.find(ele => ele.id == pid)
                if (prod)
                    setItem(prod)
            })

    }, [])




    return (
        <div className="detailsBody">
            <ItemDetails item={item}/>
        </div>
    )
} 