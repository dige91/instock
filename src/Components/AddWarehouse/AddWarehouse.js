import ContactDetails from '../ContactDetails/ContactDetail'
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate'
import Button from '../Button/Button'
import './AddWarehouse.scss'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import API_URL from '../../utils'
import { Link } from 'react-router-dom';
import PageHeaderNoIcon from '../PageHeaderNoIcon/PageHeaderNoIcon'

function AddWarehouse() {
    const formRef = useRef()
    const [newWarehouse, setNewWarehouse] = useState(null)

    useEffect(() => {
        async function postWarehouse() {
            const response = await axios.post(API_URL + 'warehouse/', newWarehouse);
        }
        if (newWarehouse) {
            postWarehouse();
        }
    }, [newWarehouse]);

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
        <section className='form-container'>
        <PageHeaderNoIcon text='Add Warehouse' />
        <form className='form' ref={formRef} onSubmit={handleSubmit}>
            <div className='form__input-container'>
                <WarehouseDetails />
                <ContactDetails />
            </div>

            <div className='form__button-container'>
                <Link className='form__link' to='/'><ButtonAlternate text='cancel' /></Link>
                <Button type='submit' text='+ Add a Warehouse' />
            </div>
        </form>
        </section>
    )
}


export default AddWarehouse



