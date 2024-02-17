import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        if (!name || !surname || !phone || !email || emailConfirm) {
            setError ("¡Please complete all fields to continue!");
            return;
        }
    

        if (email !== emailConfirm){
            setError("Emails do not match");
            return;
        }

        const order = {
            item: cart.map(prod => ({
                id: prod.item.id,
                name: prod.item.name,
                units: prod.units
            })),
            total: total,
            date: new Date(),
            name,
            surname,
            phone,
            email
        }

        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                clearCart();
            })
            .catch(error => {
                console.log("Error creating purchase order", error);
                setError ("something went wrong, you may be not enought majestic");
            })
}

return(
    <div>
        <h2>Checkout - Finish purchase </h2>

        <form onSubmit={submitHandler}>
                {
                    cart.map(prod => (
                        <div key={prod.item.id}>
                            <p> {prod.item.name} x {prod.units} </p>
                            <p> {prod.item.price} </p>
                            <hr />
                        </div>
                    ))
                }

                <div>
                    <label htmlFor="name"> Name </label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="surname"> surname </label>
                    <input type="text" id="surname" onChange={(e) => setSurname(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="phone"> phone </label>
                    <input type="tel" id="phone" onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email"> E-mail </label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="emailcon"> Email Confirmación </label>
                    <input type="email" id="emailcon" onChange={(e) => setEmailConfirm(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button> Finish Order </button>

                {
                    orderId && <strong>¡Thanks for purchasing! your order code is: {orderId} </strong>
                }

            </form>
    </div>
)
}

export default Checkout