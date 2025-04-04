import {useEffect, useState, useContext} from 'react'
import {AuthContext} from '../Login/authcontext.jsx'
import {useNavigate} from 'react-router-dom';

export default function Additem() {

    const {user} = useContext(AuthContext)
    const [formData, setFormData] = useState({
        itemName: '',
        description: '',
        quantity: '',
    });

    const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path);
    };

    const inputChange =(event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const addinv = async () => {

        if(!formData.itemName || !formData.description || !formData.quantity ){
            alert('Missing one or more fields!');
            return;
        }
        try {
        const response = await fetch('http://localhost:3001/items', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user?.id,
                item_name: formData.itemName,
                description: formData.description,
                quantity: formData.quantity,
            })
        })

        const data = await response.json()
            if (data.success == true) {
                alert('item added!')
                navigate('/myinv');
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
            <h2>Add Item to inventory:</h2>
            <input
             className='txtbox'
              placeholder='itemName'
               type='text'
                name='itemName'
                 value={formData.itemName}
                  onChange={inputChange}
                  ></input>
            <input
             className='txtbox'
                placeholder='description'
                 type='text'
                  name='description'
                    value={formData.description}
                     onChange={inputChange}
                     ></input>
            <input
             className='txtbox'
              placeholder='quantity'
               type='text'
                name='quantity'
                 value={formData.quantity}
                  onChange={inputChange}
                  ></input>
            
            <button onClick={addinv}>Submit</button>
        </div>
    </>
    )
    }