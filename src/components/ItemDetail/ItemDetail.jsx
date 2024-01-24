import React from 'react'
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ name, price, details, category, img }) => {
    return (
        <div className='itemPage'>
            <div className='itemContainer'>
                <img src={img} alt={name} />
                <h2 className='itemDetailH2'>{name}</h2>
                <strong className='itemDetailStrong'>{category}</strong>
                <small className='itemDetailSmall'>{details}</small>
                <h3 className='itemDetailPriceDiv'><span className='usdSpan'>U$D</span>{price},00</h3>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail