import { useEffect, useState } from "react"
import { ItemMap } from "./ItemMap"
import { useParams } from "react-router-dom"



export function ItemListContainer() {

    const [planta, setPlanta] = useState([])
    const { cid } = useParams()

    useEffect(() => {
        fetch('../data/productos.json')
            .then(response => response.json())
            .then(lista => {
                const prodStock = lista.filter (prod => prod.stock >0)    
                if (cid) {
                    const productosFiltrados = prodStock.filter(lista => lista.categoria == cid)
                    setPlanta(productosFiltrados)
                } else {
                    setPlanta(prodStock)
                }
            })

    }, [cid])



    return (
        <div className="containerItemList">
            <ItemMap plantas={planta} plantilla="Item" />
        </div>
    )
}
