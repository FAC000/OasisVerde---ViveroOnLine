
import {UseCounter} from "../hooks/UseCounter"


 export function ItemCounter() {

    const { count,incrementar,decrementar,reset } = UseCounter (1,10,1)
    
   return (
     <div>
        <button onClick={decrementar}>-</button>
         <span className="contador">{count}</span>
         <button onClick={incrementar}>+</button>
         <button className="butonReset" onClick={reset}></button>
        <button className="butonAgregar">Agregar al carrito</button>
    </div>
   )
 }

