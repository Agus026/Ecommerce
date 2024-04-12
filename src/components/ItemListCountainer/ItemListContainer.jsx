import { useEffect, useState } from 'react'
import getProducts from '../../data/getProducts'
import ItemList from './ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ titulo }) => {

  const [products, setProducts] = useState([])
  
  const { idCategory } = useParams
  
  useEffect(() => {
    getProducts
      .then((respuesta) => {
        if (idCategory){
          const productsFilter = respuesta.filter((product)=> product.categoría === idCategory )
          setProducts(productsFilter)
        }else{
          setProducts(respuesta)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("La promesa se termino"))

  }, [idCategory])



  return (
    <div>
      <div>
        <h1>{titulo}</h1>
      </div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
