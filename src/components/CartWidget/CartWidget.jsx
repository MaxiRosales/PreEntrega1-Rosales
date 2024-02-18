import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

export const CartWidget = () => {
  const { quantity } = useContext(CartContext);
  return (
    <div>
      <Link className='cart-div' to="/cart">
        <img className='cart-img' src="./img/cart.png" alt="cart" />
        {
          quantity > 0 && <strong className='cartQuantity'> {quantity} </strong>
        }
      </Link>
    </div>
  )
}

export default CartWidget

