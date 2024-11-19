
import { useCarritoContext } from "../context/CartContext"
import { ItemMap } from "./ItemMap"
import { Link } from "react-router-dom"

export function Cart() {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {
                carrito.length === 0 ?
                    <div className="cvContainer">
                        <h1 className="carritoVacio">Carrito Vacio</h1>
                    
                    
                    <Link to= '/productos'>
                    <p className="carritoP">
                       Volver a la tienda
                    </p>
                    </Link>
                    </div>

                    :

                    <div className="cartContainer">
                        {<ItemMap plantas={carrito} plantilla="ItemCart" />}
                        <div className="cartFuncionalidades">
                            <p> Resumen de la compra $ <span> {totalPrice()}</span></p>

                            <Link to={'/productos'} >
                               <button>Seguir Comprando</button>
                            </Link>

                            <Link to={'/checkout'}>
                               <button>Finalizar Compra</button>
                            </Link>
                        </div>
                    </div>
            }
        </>
    )

}
