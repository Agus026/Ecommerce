import React from 'react'
import { Link } from 'react-router-dom'
import "../ItemListCountainer/itemListContainerStyle.css"

const Item = ({ product }) => {
    return (

        <div className="card" key={product.id}>
            <div className='image-card-box'>
                <img src={product.imagen} className="image-card" alt={product.nombre} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.nombre}</h5>
                <p className="card-text">{product.descripcion}</p>
                <div className='btn-card'>
                <Link to={"/detail/"+product.id} className="btn btn-primary">Detalle</Link>
                </div>
            </div>
        </div>

    )
}

export default Item

