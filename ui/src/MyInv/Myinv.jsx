import './myinv.css'
import {useEffect, useState, useContext} from 'react'
import {AuthContext} from '../Login/authcontext.jsx'

export default function Myinv() {
const {user} =useContext(AuthContext)
const [joined, setJoined] = useState([]);
const [results, setResults] = useState([]);

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
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
)
}
    