import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Home/home.jsx'
import Allinv from './Allinv/allinv.jsx'
import Myinv from './MyInv/Myinv.jsx'
import Login from './Login/login.jsx'
import Navbar from './navbar/navbar.jsx'
import Signup from './Login/signup.jsx'


function App() {
  

  return (
    <>
   
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<Allinv/>}/>
        <Route path='/myinv' element={<Myinv/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    
    </>
  )
}

export default App
