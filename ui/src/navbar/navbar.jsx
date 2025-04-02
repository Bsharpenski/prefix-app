import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './navbar.css'

export default function Navbar() {

    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path);
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
            </ul>
        </div>
    </>
    )
    }

    