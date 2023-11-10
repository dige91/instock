import ItemAvailability from '../ItemAvailability/ItemAvailability'
import ItemDetails from '../ItemDetails/ItemDetails'
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate'
import Button from '../Button/Button'
import './AddInventory.scss'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import API_URL from '../../utils'
import { Link } from 'react-router-dom';

function AddInventory() {


    const ItemFormRef = useRef()
    const [newItem, setNewItem] = useState(null)

    useEffect(() => {
        async function postInventory() {
            const response = await axios.post(API_URL + 'inventory/', newItem);
        }
        if (newItem) {
            postInventory();
        }
    }, [newItem]);




    const handleSubmit = (event) => {
        event.preventDefault()

        const form = ItemFormRef.current
        const item_name = form.item_name.value;
        const description = form.description.value;
        const category = form.category.value;
        const status = form.status.value;
        const quantity = form.quantity.value;
        

        if (!item_name || !description || !category || !status || !quantity ) {
            alert("You must fill out all fields");
            return;
        } else {
            const inputedItem = {
                item_name,
                description,
                category,
                status,
                quantity,
            }

            setNewItem(inputedItem)

            alert('success')
            window.location.href = '/'
        }
    }


    return (
        <form className='form' ref={ItemFormRef} onSubmit={handleSubmit}>
            <div className='form__input-container'>
                <ItemDetails />
                <ItemAvailability ItemFormRef={ItemFormRef.current}/>
            </div>

            <div className='form__button-container'>
                <Link to='/' className='form__link'><ButtonAlternate text='cancel' /></Link>
                <Button type='submit' text='+ Add a Warehouse' />
            </div>
        </form>
    )
}


export default AddInventory



