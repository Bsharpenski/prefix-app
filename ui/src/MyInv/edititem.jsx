import { useState} from 'react'

export default function HandleEdit({id, currentData}) {

    const [status, setStatus] = useState(null);
    const [isModalOpen, setIsModalOpen] =useState(false);
    const [formData, setFormData] = useState({
        item_name: '',
        description: '',
        quantity:'',
    });

    
    const inputChange =(event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleEdit = () => {
         fetch(`http://localhost:3001/items/${id}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    alert('Item updated')
                    setIsModalOpen(false)
                    window.location.reload()
                } else {
                    setStatus('failed to update')
                }
            })
            .catch((error) => {
                setStatus('failed to update')
            })
    }
    const openModal = () => {
        console.log(currentData)
        setFormData({
            item_name: currentData?.item_name || '',
            description: currentData?.description || '',
            quantity: currentData?.quantity || '',
        });
        setIsModalOpen(true)
    }
    
    const closeModal = () => {
        setIsModalOpen(false);
    }
    

    return(
    <>
        <div >
            <button onClick={openModal}>Edit</button>
                {isModalOpen && (
                    <div className ='modal-overlay'>
                        <div className ='modal'>
                    <h2>Edit Item:</h2>
                    <form onSubmit={(event) => event.preventDefault()}>
                        
                        <input
                            className='txtbox'
                            placeholder='Item Name'
                            type='text'
                            name='item_name'
                            value={formData.item_name}
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
                        
                        <button onClick={handleEdit}>Submit</button>
                        <button onClick={closeModal}>Cancel</button>
                    </form>
                    </div>
                    </div>
           )} 
        </div>
    </>
    )
}