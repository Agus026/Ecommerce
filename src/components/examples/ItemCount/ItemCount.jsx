import { useState } from "react"
import "./itemCount.css"

const ItemCount = ({handleAddToCart}) => {
  const [count, useCount] = useState(1)

  const handleSubstract = () => {
    if (count > 1) {
      useCount(count - 1)
    }
  }
  const handleAdd = () => {
    //proximamente en stock
    useCount(count + 1)

  }

  return (
    <div>    
      <div>
        <button onClick={handleSubstract}>-</button>
       <p>{count}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <div>
        <button onClick={() =>handleAddToCart(count)}>Agregar al carrito</button>
      </div>
    </div>

  )
}

export default ItemCount
