import { useState } from "react"

const ItemCount = ({addToCart}) => {
  const [count, useCount] = useState(1)

  const restar = () => {
    if (count > 1) {
      useCount(count - 1)
    }
  }
  const sumar = () => {
    //proximamente en stock
    useCount(count + 1)

  }

  return (
    <div>    
      <div>
        <button onClick={restar}>-</button>
       <p>{count}</p>
        <button onClick={sumar}>+</button>
      </div>
      <div>
        <button onClick={() =>addToCart (count)}>Agregar al carrito</button>
      </div>
    </div>

  )
}

export default ItemCount
