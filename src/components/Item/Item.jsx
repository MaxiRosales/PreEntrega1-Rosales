import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, category, img }) => {
    return (
        <div className="cardProduct">
            <img src={img} alt={name} />
            <div className="gameinfo">
            <h2 className='gameNameH2'>{name}</h2>
            <strong className='strongCategory'>{category}</strong>
            <Link className='moreDetailButtom' to={`/item/${id}`}>More Details</Link>
            <h3 className='priceDiv'><span className='usdSpan'>U$D</span>{price},00</h3>
            </div>
        </div>
    )
}


export default Item