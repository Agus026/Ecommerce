import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useContext } from "react";

import { CartContext } from "../../context/CartContext";

import "./navbar.css"

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  const quantity = totalQuantity()

  return (
    <Link to="/cart" className="cartWidget">
      <IoMdCart size={35} className={ quantity === 0 ? "icon-cart-cero" : "icon-cart" } />
    
        <p>{quantity > 0 && quantity }</p>
    </Link>
  )
}

export default CartWidget
