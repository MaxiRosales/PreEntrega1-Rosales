import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: [],
    total: 0,
    quantity: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState (0);
    const [quantity, setQuantity] = useState(0);

    const addToCart = (item, units) => {
        const existingProducts = cart.find(prod => prod.item.id === item.id);

        if (!existingProducts) {
            setCart( prev => [...prev, { item,units }]);
            setQuantity( prev => prev + units );
            setTotal(prev => prev + (item.price * units))
        } else {
            const cartUpdate = cart.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, units: prod.units + units };
                } else {
                    return prod;
                }
            })
            setCart(cartUpdate);
            setQuantity (prev => prev + units);
            setTotal(prev => prev + (item.price * units))
        }
    }

    const productDelete = (id) => {
        const productDeleted = cart.findIndex(prod => prod.item.id === id);
        const cartUpdate = cart.filter(prod => prod.item.id !== id);

        setCart(cartUpdate);
        setQuantity(prev => prev - productDeleted.units);
        setTotal (prev => prev - (productDeleted.item.price * productDeleted.units));
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
        setQuantity(0);
    }

    return(
        <CartContext.Provider value ={{ cart, total, quantity, addToCart, productDelete, clearCart }}> {children} </CartContext.Provider>
    )
}