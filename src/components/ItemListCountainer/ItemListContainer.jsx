import { useEffect, useState } from 'react'
import getProducts from '../../data/getProducts'
import ItemList from './ItemList'

const ItemListContainer = ({ titulo }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts
      .then((respuesta) => setProducts(respuesta))
      .catch((error) => console.log(error))
      .finally(() => console.log("La promesa se termino"))

  }, [])



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
