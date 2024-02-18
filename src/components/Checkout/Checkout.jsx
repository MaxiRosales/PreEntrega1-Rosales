import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc, runTransaction } from "firebase/firestore";import "./Checkout.css"

const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async (event) => {
        event.preventDefault();
    
        if (!name || !surname || !phone || !email || !emailConfirm) {
            setError("Please complete all fields to continue!");
            return;
        }
    
        if (email !== emailConfirm) {
            setError("Emails doesn't match");
            return;
        }
    
        try {
            // Actualización del stock
            await Promise.all(
                cart.map(async (prod) => {
                    const productRef = doc(db, "products", prod.item.id);
                    await runTransaction(db, async (transaction) => {
                        const productDoc = await transaction.get(productRef);
                        const currentStock = productDoc.data().stock;
                        const updatedStock = currentStock - prod.units;
        
                        if (updatedStock < 0) {
                            throw new Error("Insufficient stock");
                        }
        
                        transaction.update(productRef, { stock: updatedStock });
                    });
                })
            );
        
            // Creación de la orden
            const order = {
                item: cart.map((prod) => ({
                    id: prod.item.id,
                    name: prod.item.name,
                    units: prod.units,
                })),
                total: total,
                date: new Date(),
                name,
                surname,
                phone,
                email,
            };
        
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("¡Ups!, something went wrong, maybe you're not enought majestic:", error);
            setError("Error when creating your order");
        }
    };

    return (
        <div>

            <form onSubmit={submitHandler}>
                {
                    cart.map(prod => (
                        <div>
                            <div className="checkoutInfo" key={prod.item.id}>
                                <p className="purchaseDetailValue"> {prod.item.name} x {prod.units} units - </p>
                                <p className="purchaseDetailValue">- U$D {prod.item.price} ( each one ) </p>
                            </div>
                            <hr className="cartHr" />
                        </div>
                    ))
                }
            <div className="formPosition">
                <div className="formDiv">
                    <label className="formLabel" htmlFor="name"> Name </label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="formDiv">
                    <label className="formLabel" htmlFor="surname"> Surname </label>
                    <input type="text" id="surname" onChange={(e) => setSurname(e.target.value)} />
                </div>

                <div className="formDiv">
                    <label className="formLabel" htmlFor="phone"> Phone </label>
                    <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="formDiv">
                    <label className="formLabel" htmlFor="email"> E-mail </label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="formDiv">
                    <label className="formLabel" htmlFor="emailcon"> E-mail Confirmación </label>
                    <input type="email" id="emailcon" onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button className="finishOrderButton" disabled={cart.length === 0}> Finish Order </button>

                {
                    orderId && <strong className="purchaseSuccess">¡Thanks for purchasing! your order code is: {orderId} </strong>
                }
            </div>
            </form>
        </div>
    )
}

export default Checkout