import ItemAvailability from '../ItemAvailability/ItemAvailability'
import ItemDetails from '../ItemDetails/ItemDetails'
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate'
import Button from '../Button/Button'
import './AddWarehouse.scss'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import API_URL from '../../utils'
import { Link } from 'react-router-dom';

function AddInventory() {


    const formRef = useRef()
    const [newItem, setNewItem] = useState(null)

    useEffect(() => {
        async function postInventory() {
            const response = await axios.post(API_URL + 'inventory/', newItem);
        }
        if (newItem) {
            postWarehouse();
        }
    }, [newItem]);




    const handleSubmit = (event) => {
        event.preventDefault()

        const form = formRef.current
        const warehouse_name = form.warehouse_name.value;
        const address = form.address.value;
        const city = form.city.value;
        const country = form.country.value;
        const contact_name = form.contact_name.value;
        const contact_position = form.contact_position.value;
        const contact_phone = form.contact_phone.value;
        const contact_email = form.contact_email.value;

        if (!warehouse_name || !address || !city || !country || !contact_name || !contact_position || !contact_phone || !contact_email) {
            alert("You must fill out all fields");
            return;
        } else {
            const inputedWarehouse = {
                warehouse_name,
                address,
                city,
                country,
                contact_name,
                contact_position,
                contact_phone,
                contact_email,
            }

            setNewWarehouse(inputedWarehouse)

            alert('success')
            window.location.href = '/'
        }
    }


    return (
        <form className='form' ref={formRef} onSubmit={handleSubmit}>
            <div className='form__input-container'>
                <ItemDetails />
                <ItemAvailability />
            </div>

            <div className='form__button-container'>
                <Link to='/'><ButtonAlternate text='cancel' /></Link>
                <Button type='submit' text='+ Add a Warehouse' />
            </div>
        </form>
    )
}


export default AddInventory



