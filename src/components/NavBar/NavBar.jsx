import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <>
    <header>
        <img className='img-logo' src="./img/logo.png" alt="logo" />
        <nav>
            <ul>
                <li>Acción</li>
                <li>Aventura</li>
                <li>Carreras</li>
                <li>Lucha</li>
                <li>Deportes</li>
            </ul> 
        </nav>
        <CartWidget/>
    </header>
    </>
  )
}

export default NavBar