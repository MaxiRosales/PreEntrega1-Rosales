
import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    const increase = () => {
      if(counter < stock) {
        setCounter(counter + 1);
      }
    }

    const decrement = () => {
      if(counter > 1) {
        setCounter(counter - 1);
      }
    }


  return (
    <div className="cartWidget-card">
        <button className="cardButton" onClick={decrement}> - </button>
        <p> {counter} </p>
        <button className="cardButton" onClick={increase}> + </button>
    </div>
  )
}
export default ItemCount