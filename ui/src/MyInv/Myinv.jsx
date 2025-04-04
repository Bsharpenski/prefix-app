import './myinv.css'
import {useEffect, useState, useContext} from 'react'
import {AuthContext} from '../Login/authcontext.jsx'
import HandleDelete from './removeitem.jsx'
import {useNavigate} from 'react-router-dom';

export default function Myinv() {
const {user} =useContext(AuthContext)
const [joined, setJoined] = useState([]);
const [results, setResults] = useState([]);

const navigate = useNavigate()
    const handleNavigation = (path) => {
        navigate(path);
    };

useEffect(() => {
    fetch("http://localhost:3001/joined")
    .then(res => res.json())
    .then((data) => {
        const filteredData =data.filter((item) => item.user_id === user?.id)
        setJoined(filteredData);
        setResults(filteredData);
    })
    .catch((err) => console.error('Error fetching:', err))
}, [user])

return(
    <>
        <div>
            <h2>My stores inventory</h2>
            <button onClick={() => handleNavigation('/additem')}>Add Item</button>
            <table >
                <thead>
                    <tr>
                        <th>Manager_ID</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Item_ID</th>
                        <th>Item_Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Edit Item</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {joined.map( (row) => (
                    <tr key={row.id}>
                    <td>{row.user_id}</td>
                    <td>{row.first_name}</td>
                    <td>{row.last_name}</td>
                    <td>{row.id}</td>
                    <td>{row.item_name}</td>
                    <td>{row.description}</td>
                    <td>{row.quantity}</td>
                    <td></td>
                    <td><HandleDelete id={row.id}/></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
)
}
    