import {useEffect, useState} from 'react'
import './home.css'

export default function Home() {
const [items, setItems] = useState([]);
const [results, setResults] = useState([]);
const [query, setQuery] = useState('');

useEffect(() => {
    fetch("http://localhost:3001/items")
    .then(res => res.json())
    .then((data) => {
        setItems(data);
        setResults(data);
    })
    .catch((err) => console.error('Error fetching items:', err));
}, []);

const handleSearch = (event) => {
    const value =event.target.value;
    setQuery(value);

    if (value) {
        const filteredResults =items.filter((item) =>
        item.item_name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filteredResults);
    } else {
        setResults(items)
    }
}

return(
<>
    <div>
        <input
         className='txtbox'
         type='text'
         value={query}
         onChange={handleSearch}
         placeholder='Search by product name'
         >
        </input>
        <h2>Our game products</h2>
        
        <ul >
            {results.map( (item) => (
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