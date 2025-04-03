import {useNavigate} from 'react-router-dom';
import React, { useContext} from 'react'
import {useState} from 'react'
import './login.css'
import {AuthContext} from './authcontext.jsx'

export default function Login() {

    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path);
    };


    const {isLoggedIn, setIsLoggedIn} =useContext(AuthContext)
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const inputChange =(event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const login = async () => {

        if(!formData.username || !formData.password){
            alert('Missing one or more fields!');
            return;
        }

        try {
        const response = await fetch('http://localhost:3001/users')
            const users = await response.json();

            const user= users.find(
                (user) => user.username === formData.username && user.password === formData.password
            )
        
            if (user) {
                alert(`Logged in as ${user.first_name}`)
                setIsLoggedIn(true);
                navigate('/myinv');
            } else {
                alert('Invalid credentials')
            }
        } catch(error) {
            console.error('Error:', error);
            alert('An error occured')
        }
    }

    

    return(
    <>
        <div className='login'>
            <h2>Log in:</h2>
            <input className='txtbox' placeholder='Username' type='text' name='username' value={formData.username} onChange={inputChange}></input>
            <input className='txtbox' placeholder='Password' type='password' name='password' value={formData.password} onChange={inputChange}></input>
            <button onClick={login}>Submit</button>
            <h6>Dont have an account with us?</h6>
            <button className='nav-btn' onClick={() => handleNavigation('/signup')}>Create Account!</button>
        </div>
    </>
    )
    }