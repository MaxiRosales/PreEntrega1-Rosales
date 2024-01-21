import React from 'react'
import './ItemDetail.css';

const ItemDetail = ({ name, price, details, category, img }) => {
    return (
        <div className='itemContainer'>
            <img src={img} alt={name}/>
            <h2>{name}</h2>
            <strong>{category}</strong>
            <small>{details}</small>
            <button>More Details</button>
            <h3>{price}</h3>
        </div>
    )
}

export default ItemDetail