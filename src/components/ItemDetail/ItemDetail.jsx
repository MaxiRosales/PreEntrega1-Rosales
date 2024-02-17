import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, name, price, details, category, img, stock }) => {

    const [addUnits, setAddUnits] = useState(0);
    const { addToCart } = useContext(CartContext);

    const unitsHandler = (units) => {
        setAddUnits(units);

        const item = { id, name, price };
        addToCart(item, units);
    }

    return (
        <><div className="body">
            <div className='itemPage'>
                <div className='itemContainer'>
                    <img src={img} alt={name} />
                    <h2 className='itemDetailH2'>{name}</h2>
                    <strong className='itemDetailStrong'>{category}</strong>
                    <small className='itemDetailSmall'>{details}</small>
                    <p className='itemDetailStock'> stock: {stock} </p>
                    <h3 className='itemDetailPriceDiv'><span className='usdSpan'>U$D</span>{price},00</h3>
                </div>
            </div>
            <div className="itemDetailCartDiv">
                <div className="itemDetailCartButton">
                    {
                        addUnits > 0 ? (<Link className='itemDetailFinishButton' to="/cart">Finish purchase</Link>) : (<ItemCount initial={1} stock={stock} addFunction={unitsHandler} />)
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default ItemDetail