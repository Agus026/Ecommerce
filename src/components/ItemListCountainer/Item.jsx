import React from 'react'

const Item = ({product}) => {
    return (

        <div key={product.id} className='card'>
            <h4>{product.nombre}</h4>
            <p>{product.descripcion}</p>
        </div>

    )
}

export default Item
