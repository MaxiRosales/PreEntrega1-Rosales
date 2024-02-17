
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({initial, stock, addFunction}) => {

    const [counter, setCounter] = useState(1);

    const increase = () => {
      if(counter < stock) {
        setCounter(counter + 1);
      }
    }

    const decrement = () => {
      if(counter > initial) {
        setCounter(counter - 1);
      }
    }


  return (
    <>
    <div className="cartWidget-card">
        <button className="cardButton" onClick={decrement}> - </button>
        <p className="counter-p"> {counter} </p>
        <button className="cardButton" onClick={increase}> + </button>
    </div>
    <button className="itemCountAddBurron" onClick={() => addFunction(counter)}> Add to Cart </button>
    </>
  )
}
export default ItemCount