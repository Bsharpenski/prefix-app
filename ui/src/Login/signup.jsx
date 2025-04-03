import { useState } from 'react'

export default function Signup() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
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

    const signup = async () => {

        if(!formData.firstName || !formData.lastName || !formData.username || !formData.password){
            alert('Missing one or more fields!');
            return;
        }
        try {
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.firstName,
                last_name: formData.lastName,
                username: formData.username,
                password: formData.password
            })
        })

        const data = await response.json()
            if (data.success == true) {
                alert('Account Created!')
                window.location.reload();
            } else {
                alert('Failed request')
            }
        } catch(error) {
            console.error('Error:', error);
            alert('An error occured')
        }
    }

    

    return(
    <>
        <div className='signup'>
            <h2>Create New Account:</h2>
            <input
             className='txtbox'
              placeholder='First Name'
               type='text'
                name='firstName'
                 value={formData.firstName}
                  onChange={inputChange}
                  ></input>
            <input
             className='txtbox'
                placeholder='Last Name'
                 type='text'
                  name='lastName'
                    value={formData.lastName}
                     onChange={inputChange}
                     ></input>
            <input
             className='txtbox'
              placeholder='Username'
               type='text'
                name='username'
                 value={formData.username}
                  onChange={inputChange}
                  ></input>
            <input
             className='txtbox'
              placeholder='Password'
               type='text'
                name='password'
                 value={formData.password}
                  onChange={inputChange}
                  ></input>
            <button onClick={signup}>Submit</button>
        </div>
    </>
    )
    }