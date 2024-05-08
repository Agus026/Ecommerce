import { useState } from "react"
import "./itemCount.css"

const ItemCount = ({ handleAddToCart, stock }) => {
  const [count, useCount] = useState(1)

  const handleSubstract = () => {
    if (count > 1) {
      useCount(count - 1)
    }
  }
  const handleAdd = () => {
    if (count < stock) {
      useCount(count + 1)
    }
  }

  return (
    <div className="item-count">
      <div>
        <button className="button-add" onClick={() => handleAddToCart(count)}>Agregar al carrito</button>
      </div>
      <div className="controls-count">
        <button className="button-count" onClick={handleSubstract}>-</button>
        <p className="count">{count}</p>
        <button className="button-count" onClick={handleAdd}>+</button>
      </div>
    </div>

  )
}

export default ItemCount
