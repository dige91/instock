import ContactDetails from '../ContactDetails/ContactDetail'
import EditWarehouseDetails from '../EditWarehouseDetails/EditWarehouseDetails'
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate'
import Button from '../Button/Button'
import './EditWarehouse.scss'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';
import PageHeaderNoIcon from '../PageHeaderNoIcon/PageHeaderNoIcon'
import EditContactDetails from '../EditContactDetails/EditContactDetails'
const REACT_APP_BACKEND_URL = "http://localhost:8080/api/warehouses";

function EditWarehouse() {

    const { id } = useParams();
    const [warehouse, setWarehouse] = useState({});
    const formRef = useRef(null);

    useEffect(() => {
        const fetchWarehouse = async () => {
            try {
                const response = await axios.get(`${REACT_APP_BACKEND_URL}/${id}`);
                setWarehouse(response.data);
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
    console.log(warehouse);
    return (
        <section className='form-container'>
        <PageHeaderNoIcon text='Edit Warehouse'/>
        <form className='form' ref={formRef} onSubmit={handleSubmit}>
            <div className='form__input-container'>
                <EditWarehouseDetails warehouse={warehouse}/>
                <EditContactDetails warehouse={warehouse}/>
            </div>

            <div className='form__button-container'>
                <Link className='form__link' to='/'><ButtonAlternate text='cancel' /></Link>
                <Button type='submit' text='Save' />
            </div>
        </form>
        </section>
    )
}


export default EditWarehouse



