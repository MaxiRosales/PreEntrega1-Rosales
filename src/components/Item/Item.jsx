import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, details, category, img }) => {
    return (
        <div className="cardProduct">
            <img src={img} alt={name} />
            <h2 className='gameNameH2'>{name}</h2>
            <strong className='strongCategory'>{category}</strong>
            <small className='detailSmallDiv'>{details}</small>
            <Link className='moreDetailButtom' to={`/item/${id}`}>More Details</Link>
            <h3 className='priceDiv'><span className='usdSpan'>U$D</span>{price},00</h3>
        </div>
    )
}


export default Item