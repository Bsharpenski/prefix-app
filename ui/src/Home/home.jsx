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
        <input>
        </input>
        <h2>Our game products</h2>
        <ul >
            {items.map( item => (
                <div id='product-container'>
                    <div key={item.id}>
                      <li> {item.item_name}</li>
                      <li> {item.description}</li>
                      <li>  Product ID: {item.id}</li>
                    </div>
                </div>
            ))}
            
        </ul>
    </div>
</>
)
}