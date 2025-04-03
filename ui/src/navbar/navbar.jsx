
import { useContext} from 'react'
import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../Login/authcontext.jsx'
import './navbar.css'

export default function Navbar() {
    const {isLoggedIn, setIsLoggedIn} =useContext(AuthContext)
    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };

    return(
    <>
        <div className='navbar'>
            <h1>
                YourGameStore
            </h1>
            <ul id='btn-list'>
                <li><button className='nav-btn' onClick={() => handleNavigation('/')}>Home</button></li>
                <li><button className='nav-btn' onClick={() => handleNavigation('/all')}>All Inventory</button></li>
                <li><button className='nav-btn' onClick={() => handleNavigation('/myinv')}>My Inventory</button></li>
                <li><button className='nav-btn' onClick={() => handleNavigation('/login')}>Log In</button></li>
                <li><button onClick={handleLogout}>Log Out</button></li>
            </ul>
        </div>
    </>
    )
    }

    