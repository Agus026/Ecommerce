import { IoMdCart } from "react-icons/io";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className="cartWidget">
      <IoMdCart size={40} />
    
        <p>{totalQuantity()}</p>
    </Link>
  )
}

export default CartWidget
