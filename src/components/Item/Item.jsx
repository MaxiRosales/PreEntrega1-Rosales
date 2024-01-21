import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, price, details, category, img }) => {
    return (
        <div className="cardProduct">
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <strong>{category}</strong>
            <small>{details}</small>
            <Link to={`/item/${id}`}>More Details</Link>
            <h3>{price}</h3>
        </div>
    )
}


export default Item