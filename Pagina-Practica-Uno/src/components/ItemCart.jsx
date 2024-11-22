import { useCarritoContext } from "../context/CartContext"
import { UseCounter } from "../hooks/UseCounter"


export function ItemCart({ productos }) {
    const { removeItem, updateItem } = useCarritoContext()
    const { count, incrementar, decrementar } = UseCounter(productos.quantity, productos.stock, 1)
    return (
        <>
        <div className="icContainer">
            <div className="icImg">
                <img src={`../img/${productos.img}`} alt={`Imagen de ${productos.nombre}`} className=" img-itemcart "  />
            </div>
            
            <div className="icTitulo">
                <h1 >{productos.nombre}</h1>
                
            <div className="icCompra">

                <button onClick={async () => {
                    updateItem(productos.id, count - 1)
                    decrementar()
                }}>
                    -
                </button>

                <span className="countIc">{count}</span>

                <button onClick={() => {
                     updateItem(productos.id, count + 1)
                    incrementar()
                }}>
                    +
                </button>
                
            <div className="icSubtotal">
                <p>Subtotal: <span> ${productos.precio * count} </span></p>
            </div>
            </div>


            <div className="icEliminar">
                <button  onClick={() => removeItem(productos.id)}>
                    Eliminar
                </button>
            </div>
            </div>
        </div>
        

        </>
    )
}
