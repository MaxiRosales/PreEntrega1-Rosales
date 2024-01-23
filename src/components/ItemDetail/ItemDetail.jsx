import React from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ name, price, details, category, img }) => {
    return (
        <div className='itemPage'>
            <div className='itemContainer'>
                <img src={img} alt={name} />
                <h2>{name}</h2>
                <strong>{category}</strong>
                <small>{details}</small>
                <button>More Details</button>
                <h3>{price}</h3>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail