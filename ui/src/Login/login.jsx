import {useNavigate} from 'react-router-dom';
import './login.css'

export default function Login() {

    const navigate = useNavigate()
        const handleNavigation = (path) => {
            navigate(path);
        };

    return(
    <>
        <div className='login'>
            <h2>Log in:</h2>
            <input className='txtbox' placeholder='Username' type='text'></input>
            <input className='txtbox' placeholder='Password' type='text'></input>
            <button>Submit</button>
            <h6>Dont have an account with us?</h6>
            <button className='nav-btn' onClick={() => handleNavigation('/signup')}>Create Account!</button>
        </div>
    </>
    )
    }