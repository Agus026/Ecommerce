import { useEffect, useState } from 'react'
import getProducts from '../../data/getProducts'

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
      {
        products.map((product) => {
          return  <div key={ product.id} className='card'>
                  <h4>{product.nombre}</h4>
                  <p>{product.descripcion}</p>
                  </div>
        })
      }
    </div>
  )
}

export default ItemListContainer
