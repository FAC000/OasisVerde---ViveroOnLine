import { Link } from "react-router-dom"

export function Item({ productos }) {

 

  return (

    
    
    <div className="contenedor">
      <div className="contenedorCard">
        <img className="cardImg" src={`../img/${productos.img}`} alt={`Imagen de ${productos.nombre}`} />
        <h2 className="tituloCard">{productos.nombre}</h2>
        <p className="cardPrecio">${productos.precio}</p>
        <Link to={`/productos/${productos.id}`}> 
        <button className="cardComprar">COMPRAR</button>
        </Link> 
        </div>
      </div>
      
  )
}        
