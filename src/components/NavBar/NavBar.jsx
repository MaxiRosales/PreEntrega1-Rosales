import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (

    <header>
      <Link to="/">
        <img className='img-logo' src="./img/logo.png" alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink className="link" to="/">
              All Games
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/category/Adventure & Platform">
              Adventure & Platform
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/category/Fighting">
              Fight
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/category/Racing">
              Racing
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/category/RPG">
              RPG
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/category/Simulator">
              Simulator
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/category/Sports">
              Sports
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>

  )
}

export default NavBar

