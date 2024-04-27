import { createContext, useState } from 'react'


const CartContext = createContext()

const CartProvider = ({children}) => {

  const [ cart, setCart ] = useState([])

  const addToCart = (newProduct) => {
    let condicion = isInCart(newProduct.id)
    if (condicion) {
      const productsMod = cart.map ((productCart)=>{
        if (productCart.id === newProduct.id){
          return { ...productCart, quantity: productCart.quantity + newProduct.quantity }
        }else {
          return productCart
        }
      })

      setCart (productsMod)

    }else {
      setCart([...cart, newProduct])
    }
    
  }

  const isInCart =(productId) => {
    const condicion = cart.some((product)=> product.id === productId)
    return condicion
  }

  const totalQuantity = () => cart.reduce((total, product ) => total + product.quantity, 0 )
    
  const clearCart = () =>{
    setCart([])
  }

  const deleteProductById = () =>{
    const productsFilter = cart.filter ((productCart)=> productCart.id !== productId)
    setCart(productsFilter)
  }
  
  
  return (
    <CartContext.Provider value={{cart, addToCart, totalQuantity, clearCart, deleteProductById }} >
      {children}
    </CartContext.Provider>
  )
}

export {CartContext, CartProvider }
