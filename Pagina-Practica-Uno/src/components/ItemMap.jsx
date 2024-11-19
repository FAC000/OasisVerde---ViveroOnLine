
import { Item } from "./Item";
import { ItemCart } from "./ItemCart";


export const ItemMap = ({ plantas, plantilla }) => {
  return (
    <>

      {

          plantilla === 'Item'
          ?
          plantas.map (prod => <Item key={prod.id} productos={prod} />)
          :
          plantas.map(prod => <ItemCart key={prod.id} productos={prod} />)

      }
    </>
  )
}

