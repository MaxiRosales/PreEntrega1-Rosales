import React, { cloneElement } from 'react'
import { useState } from 'react'
import { db } from '../../services/config'
import { collection, addDoc } from 'firebase/firestore'


//este form probablemente no lo use, debo recordar eliminarlo en tal caso
const Form = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const formHandler = (e) =>{
        e.preventDefault();

        addDoc(collection(db, "users"),{
            name,
            lastName,
            phone
        })
            setName("");
            setLastName("");
            setPhone("");
    }
  return (
    <form onSubmit={formHandler}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <br />

        <label htmlFor="">LastName</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.taget.vlaue)} />
        <br />

        <label htmlFor="">Phone</label>
        <input type="tel" value={phone} onChange={(e) => setPhone (e.taget.value)} />
        <br />
    </form>
  )
}

export default Form