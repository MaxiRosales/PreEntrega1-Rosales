import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const {category} = useParams();

  useEffect(() => {

    const functionProducts = category ? getProductsByCategory : getProducts;

    functionProducts(category)
      .then(res => setProducts(res))
      .catch(error => console.log(error))

  }, [category])

  return (
    <div>
      <ItemList products={products}/>
    </div>
    
  )
}

export default ItemListContainer