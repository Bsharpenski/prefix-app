import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home/home.jsx'
import Allinv from './Allinv/allinv.jsx'
import Myinv from './MyInv/Myinv.jsx'
import Login from './Login/login.jsx'
import Navbar from './navbar/navbar.jsx'

function App() {
  

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<Allinv/>}/>
        <Route path='/myinv' element={<Myinv/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
