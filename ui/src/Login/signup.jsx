import {useNavigate} from 'react-router-dom';
export default function Signup() {


    const navigate = useNavigate()
        const handleNavigation = (path) => {
            navigate(path);
        };

    return(
    <>
        <div className='signup'>
            <h2>Create New Account:</h2>
            <input className='txtbox' placeholder='First Name' type='text'></input>
            <input className='txtbox' placeholder='Last Name' type='text'></input>
            <input className='txtbox' placeholder='Username' type='text'></input>
            <input className='txtbox' placeholder='Password' type='text'></input>
            <button>Submit</button>
        </div>
    </>
    )
    }