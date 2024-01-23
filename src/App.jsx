import React from 'react'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='bodyDiv'>
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/category/:category' element={ <ItemListContainer /> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App