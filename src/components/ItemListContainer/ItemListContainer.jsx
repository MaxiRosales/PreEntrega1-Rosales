import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const {category} = useParams();

  useEffect(() => {

    const myProducts = category ? query(collection(db, "products"), where ("category", "==", category)) : collection(db, "products");

    getDocs(myProducts)
      .then (res => {
        const newProducts = res.docs.map(doc => {
          const data = doc.data();
          return {id: doc.id, ...data};
        })
        setProducts(newProducts);
      })
      .catch ( error => console.log(error))
  }, [category])

  return (
    <div className="body">
    <div className="bodyDiv">
      <ItemList products={products}/>
    </div>
    </div>
    
  )
}

export default ItemListContainer