import {useEffect, useState} from 'react'
import './home.css'

export default function Home() {
const [items, setItems] = useState([]);
const [results, setResults] = useState([]);

useEffect(() => {
    fetch("http://localhost:3001/items")
    .then(res => res.json())
    .then((data) => {
        setItems(data);
        setResults(data);
    })
}, [])

return(
<>
    <div>
        <input className='txtbox' placeholder='Search by product name'>
        </input>
        <h2>Our game products</h2>
        
        <ul >
            {items.map( item => (
                <div className='product-container' key={item.id}>
                    <li className='cardnames'> Name:</li>
                    <li> {item.item_name}</li>
                    <li className='cardnames'>  Product ID:</li>
                    <li> {item.id}</li>
                    <li className='cardnames'> Description:</li>
                    <li> {item.description}</li>
                </div>
            ))}
            
        </ul>
        
    </div>
</>
)
}