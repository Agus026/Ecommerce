import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import "./itemListContainerStyle.css"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from '../../db/db'

const ItemListContainer = ({ titulo }) => {

  const [products, setProducts] = useState([])
  
  const { idCategory } = useParams()
  
  const getProduct = async () =>{
   const dataDb = await getDocs(collection(db, "products"));
   const data = dataDb.docs.map((productDb)=>{
    return { id: productDb.id, ...productDb.data() }
   })
   
   setProducts(data)

  }
const getProductByCategory = async() => {
  const q = query(collection(db, "products"), where("categoría", "==", idCategory));
  
  const dataDb = await getDocs(q);
  
    const data = dataDb.docs.map((productDb)=>{
     return { id: productDb.id, ...productDb.data() }
    })
   
   setProducts(data)
}


  useEffect(() => {
    if (idCategory) {
     getProductByCategory()
    }else {
     getProduct()
    }
  }, [idCategory])



  return (
    <div className='item-list'>
      <div className='page-title'>
        <h1>{titulo}</h1>
      </div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
