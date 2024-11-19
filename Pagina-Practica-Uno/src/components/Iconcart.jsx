import { useCarritoContext } from "../context/CartContext"
import { Link } from "react-router-dom"


export const Iconcart = () => {

  const { getItemQuantity } = useCarritoContext()
  return (
    <>
      <Link to={'/Cart'} >
        <i className=" iCart bi bi-cart"> <span>{getItemQuantity()}</span> </i>
      </Link>
    </>
  )
}
