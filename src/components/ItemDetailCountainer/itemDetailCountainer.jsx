import { useEffect, useState } from "react";
import getProducts from "../../data/getProducts";
import ItemDetail from "./itemDetail"
import { useParams } from "react-router-dom"

const ItemDetailCountainer = () => {
    const [product, setProduct] = useState({})
    useEffect (()=> {
        getProducts
        .then ((respuesta)=> {
            const newProduct = respuesta.find((product)=> product.id === idProduct )
            setProduct(newProduct)
        })
        .catch((error)=> console.log(error))
    }, [])
    return (
        <ItemDetail product={product}/>
    )
}
export default ItemDetailCountainer