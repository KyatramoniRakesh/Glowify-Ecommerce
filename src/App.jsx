import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './Components/Login'
import Signup from './Components/Signup'
import CartPage from './Components/CartPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path='/login'  element={<LoginPage/>} />
      <Route path='/signup'  element={<Signup />} />
      <Route path='/cart'  element={<CartPage />} />
    </Routes>
    
  );
}

export default App
