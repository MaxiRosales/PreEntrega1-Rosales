import React from 'react'
import "./CartItem.css"

const CartItem = ({ item, units, index}) => {
  return (
    <div key={index}>
    <div className='purchaseDiv'>
      <div className="purchaseInfo">
        <p className='purchaseDetail'>Name:</p>
        <h3 className='purchaseDetailValue'>{item.name}  </h3>
      </div>
      <div className="purchaseInfo">
        <p className="purchaseDetail">Units:</p>
        <p className='purchaseDetailValue'>{units}</p>
      </div>
      <div className="purchaseInfo">
        <p className="purchaseDetail">Price:</p>
        <p className='purchaseDetailValue'>U$D {item.price} </p>
      </div>
    </div>
    <hr className='cartHr'></hr>
    </div>
  )
}

export default CartItem