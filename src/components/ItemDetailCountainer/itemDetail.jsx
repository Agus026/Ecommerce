import "./itemDetailCountainer.css";
import React from 'react'

const itemDetail = ({ product }) => {
  
  return (
      <div>
      <div >
        <h1>{product.nombre}</h1>
        <p>{product.descripcion}</p>
        <p>Precio:{product.precio}</p>
      </div>
      <div>
        <img src={product.imagen} alt={product.nombre} />
      </div>
    </div>
  )
}

export default itemDetail
