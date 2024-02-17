import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import "./Cart.css"

const Cart = () => {
    const { cart, clearCart, total, quantity } = useContext(CartContext);

    if (quantity === 0) {
        return (
            <>
                <h2>your cart is empty</h2>
                <Link to="/">Back to main page</Link>
            </>
        )
    }
    return (
        <div>
            {
                cart.map(prod => <CartItem key={prod.id} {...prod} />)
            }
            <h3 className="cartTotal"> Total:<span className="cartUsdSpan">U$D</span> {total} </h3>
            <button className="clearCartButton" onClick={() => clearCart()}><img className="trashIcon" src="./img/trash.png" /> Clear Cart</button>
            <button className="completePurchaseButton">
                <Link className="completePurchaseLink" to="/checkout"> Complete Purchase </Link>
            </button>
        </div>
    )
}

export default Cart