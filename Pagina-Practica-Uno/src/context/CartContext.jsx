import { useState, useContext, createContext } from "react";


const CarritoContext = createContext()

export const useCarritoContext = () => useContext(CarritoContext)

export const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([])

    // buscar producto
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    // Agregar producto 
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {

            const indice = carrito.findIndex (prod=> prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito (aux)
            
        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }

            setCarrito([...carrito, newItem])
        }
    }


    const removeItem = (id) => {
        setCarrito(carrito.filter(prod => prod.id !== id))
    }


    const emptyCart = () => {
        setCarrito([])
    }

    const updateItem = (id, newQuantity) => {
        const indice = carrito.findIndex(prod => prod.id === id)
        const aux = carrito
        aux[indice].quantity = newQuantity
        setCarrito([...aux])
    }

    const getItemQuantity = () => {
        return carrito.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return carrito.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }


    return (
        <CarritoContext.Provider value={{ carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice, updateItem }}>
            {props.children}
        </CarritoContext.Provider>
    )


}