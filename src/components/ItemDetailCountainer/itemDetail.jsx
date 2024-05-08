import { useContext, useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"

import ItemCount from "../examples/ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext"; 

import "./itemDetailCountainer.css";

const itemDetail = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  const [clickAdd, setClickAdd] = useState (false)
    
  const handleAddToCart = (count) => {
    const productCart = { ...product, quantity: count }
    addToCart(productCart)
    setClickAdd(true)
  }

  return (
    <div className="detail-container">
      <div className="img-container">
        <img src={product.imagen} className="img-detail" alt={product.nombre} />
      </div>
      <div className="info-container" >
        <h1 className="title">{product.nombre}</h1>
        <p className="detail-description">{product.descripcion}</p>
        <p className="price">Precio: ${product.precio}</p>
        {
          clickAdd ? <Link to="/cart" className="addToCart" > Ir al carrito </Link> : <ItemCount handleAddToCart={handleAddToCart} stock={product.stock}/>
        }
        </div>
    </div>
  )
}

export default itemDetail
