
import { useState } from "react";

const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    const increment = () => {
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
    <div>
        <button onClick={decrement}> - </button>
        <p> {counter} </p>
        <button onClick={increment}> + </button>
    </div>
  )
}

export default ItemCount