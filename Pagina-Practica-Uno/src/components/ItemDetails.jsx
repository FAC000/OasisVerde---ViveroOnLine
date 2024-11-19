import { Toast } from "bootstrap";
import { useCarritoContext } from "../context/CartContext";
import { UseCounter } from "../hooks/UseCounter"
import React from 'react';
import { toast } from "react-toastify";


export function ItemDetails({ item }) {
    const { addItem } = useCarritoContext()
    const { count, incrementar, decrementar, reset } = UseCounter(1, item.stock, 1)


    const handleToCart = () => {
        
        addItem(item, count)
        toast.success(`Producto agregado al carrito correctamente`, {
            position: "bottom-right",
            autoClose: 1800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
           
        })
    }

    return (
        <>
            <div className="detailsCard">
                <div className="containerDetails">
                    <p className="detailsMarca">Oasis Verde</p>
                    <img className="detailsImg" src={`../img/${item.img}`} alt={`Imagen de ${item.nombre}`} />


                    <div className="containerDetailsInfo">
                        <h1>{item.nombre}</h1>
                        <h2>{item.categoria}</h2>
                        <p className="detailsPrecio">${item.precio}</p>
                        <div className="detailsCounter">
                            <h3>Cantidad</h3>
                            <div className="counterContainer">
                                <button onClick={decrementar}>-</button>
                                <span className="contador">{count}</span>
                                <button onClick={incrementar}>+</button>
                                <button className="butonReset" onClick={reset}> <i className=" iconReset bi bi-arrow-clockwise"></i> </button>

                                <button className="buttonaCarrito" onClick={handleToCart}>Agregar al Carrito</button>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}