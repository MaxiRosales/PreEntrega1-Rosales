import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting="Bienvenido a tu futura tienda digital"/>
    <h3>esperamos que disfrutes del amplio catálogo de juegos que tenemos para ofrecerte</h3>
    </>
  )
}

export default App