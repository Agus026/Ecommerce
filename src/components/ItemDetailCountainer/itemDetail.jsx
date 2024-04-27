import "./itemDetailCountainer.css";
import React from 'react'
import { Link } from "react-router-dom"
import ItemCount from "../examples/ItemCount/ItemCount";
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"; 

const itemDetail = ({ product }) => {

  const {addToCart, cart} = useContext(CartContext)
  
  console.log (cart)
  
  const handleAddToCart = (count) => {
    const productCart = { ...product, quantity: count }
    addToCart(productCart)
  }

  return (
    <div className="detail-container">
      <div>
        <img src={product.imagen} className="img-detail" alt={product.nombre} />
      </div>
      <div >
        <h1 className="title">{product.nombre}</h1>
        <p className="detail-description">{product.descripcion}</p>
        <p className="price">Precio:{product.precio}</p>
        <ItemCount handleAddToCart={handleAddToCart}/>
        <Link className="addToCart">Agregar al carrito </Link>
      </div>
    </div>
  )
}

export default itemDetail
