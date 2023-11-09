import ContactDetails from '../ContactDetails/ContactDetail'
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate'
import Button from '../Button/Button'
import './EditWarehouse.scss'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const REACT_APP_BACKEND_URL = "http://localhost:8080/warehouse";

function EditWarehouse() {

    const { id } = useParams();
    const [warehouse, setWarehouse] = useState({});
    const formRef = useRef(null);

    useEffect(() => {
        const fetchWarehouse = async () => {
            try {
                const response = await axios.get(`${REACT_APP_BACKEND_URL}/${id}`);
                setWarehouse(response.data);
                console.log(response.data);
            } catch (error) {
                console.error("error fetchin warehouse details:", error);
            }
        };
        fetchWarehouse();
    }, [id]);

    const handleSubmit = async (event) => {
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
            const updatedWarehouse = {
                warehouse_name,
                address,
                city,
                country,
                contact_name,
                contact_position,
                contact_phone,
                contact_email,
            }
            try {
                await axios.put(`${REACT_APP_BACKEND_URL}/${id}`, updatedWarehouse);
                alert('Success');
                window.location.href = '/';
            } catch (error) {
                console.error('Error updating warehouse:', error);
                alert('Failed to update warehouse. Please try again.');
            }
        }
    };


    return (
        <form className='form' ref={formRef} onSubmit={handleSubmit}>
            <div className='form__input-container'>
                <WarehouseDetails />
                <ContactDetails />
            </div>

            <div className='form__button-container'>
                <ButtonAlternate text='cancel' />
                <Button type='submit' text='Save' />
            </div>
        </form>
    )
}


export default EditWarehouse



