import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import "./cart.css"

const cart = () => {

    const { cart, clearCart, deleteProductById } = useContext(CartContext)

    return (
        <div>
            <div className='carrito'>
                <h2>Carrito</h2>
                <div className='product-cart'>

                    {cart.map((product) => (
                        <div key={product.id}>
                            <p>{product.nombre}</p>
                            <img className='imagen-producto' src={product.imagen} alt={product.nombre} />
                            <p className='descripcion-producto'>{product.descripcion}</p>
                            <p className='descripcion-producto'>Cantidad:{product.quantity}</p>
                            <p className='descripcion-producto'>Precio{product.precio}</p>

                            <button className='eliminar-producto' onClick={deleteProductById} >Eliminar producto</button>
                        </div>
                    ))}
                </div>

                <button className='clearCart' onClick={clearCart} >Vaciar Carrito</button>
            </div>
        </div>
    )



}

export default cart
