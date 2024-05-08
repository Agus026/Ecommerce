import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

import "./cart.css"

const Cart = () => {

    const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return <div className='emtyCart'>
            <h2>No hay productos en el carrito 😥</h2>
            <p>Vuelva a la sección de productos.</p>
            <Link className='btn-emty' to="/" > Mirar Productos </Link>
        </div>
    }

    return (

        <div className='carrito'>
            <h2> Tu Carrito </h2>
            <div >

                {cart.map((product) => (
                    <div className='product-cart' key={product.id}>
                        <p  className='descripcion-titulo'>{product.nombre}</p>
                        <img className='imagen-producto' src={product.imagen} alt={product.nombre} />
                        <p className='descripcion-producto'>{product.descripcion}</p>
                        <p className='descripcion-producto'>Cantidad: {product.quantity}</p>
                        <p className='descripcion-producto'>Precio: ${product.precio}</p>
                        <p className='descripcion-producto'>Total: ${product.quantity * product.precio}</p>
                        <div className='eliminar-container' >                        
                         <button className='eliminar-producto' onClick={() => deleteProductById(product.id)} >Eliminar producto</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='set-cart' >
                <h2>Precio Total : ${totalPrice()}</h2>
                <Link to="/checkout" className='btn-setCart'> Continuar con la compra </Link>
                <button className='btn-setCart' onClick={clearCart} >Vaciar Carrito</button>

            </div>
        </div>
    )



}

export default Cart
