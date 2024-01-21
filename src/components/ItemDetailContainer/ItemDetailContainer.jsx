import { useState, useEffect } from "react";
import { getOnlyProduct } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {idItem} = useParams();

    useEffect( () => {
        getOnlyProduct(idItem)
            .then(res => setProduct(res))

    }, [idItem])
  return (
    <div>
        <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer