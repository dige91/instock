import ItemAvailability from '../ItemAvailability/ItemAvailability'
import ItemDetails from '../ItemDetails/ItemDetails'
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate'
import Button from '../Button/Button'
import './AddInventory.scss'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import API_URL from '../../utils'
import { Link } from 'react-router-dom';
import backButton from '../../assets/icons/arrow_back-24px.svg'
import PageHeaderNoIcon from '../PageHeaderNoIcon/PageHeaderNoIcon'

function AddInventory({warehouses}) {


    const [item_name, setItem_name] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("outOfStock");
    const [quantity, setQuantity] = useState(0)
    const [warehouse, setWarehouse] = useState("")


    const [newItem, setNewItem] = useState("")


    useEffect(() => {
        async function postInventory() {
            const response = await axios.post(API_URL + '/api/inventories', newItem);
        }
        if (newItem) {
            postInventory();
        }
    }, [newItem]);

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!item_name || !description || !category || !status || (typeof(quantity) !== 'number') ) {
            alert("You must fill out all fields");
            const inputedItem = {
                item_name,
                description,
                category,
                status,
                quantity,
                warehouse_id: warehouse
            }
            return;
        } else {
            const inputedItem = {
                item_name,
                description,
                category,
                status,
                quantity,
                warehouse_id: warehouse
            }

            setNewItem(inputedItem)

            alert('success')
            window.location.href = '/'
        }
    }

    return (
    <section className='main-section'>
        <PageHeaderNoIcon srcLeft={backButton} text={'Add New Inventory Item'} />
        <form className='main-section-form' onSubmit={handleSubmit}>
            <div className='main-section-form__input-container'>
                <ItemDetails 
                    item_name={item_name}
                    setItem_name={setItem_name}
                    description={description}
                    setDescription={setDescription}
                    category={category}
                    setCategory={setCategory}
                />
                <ItemAvailability 
                    status={status}
                    setStatus={setStatus}
                    quantity={quantity} 
                    setQuantity={setQuantity}
                    warehouses={warehouses}
                    warehouse={warehouse}
                    setWarehouse={setWarehouse}
                />
            </div>

            <div className='main-section-form__button-container'>
                <Link to='/' className='main-section-form__link'><ButtonAlternate text='cancel' /></Link>
                <Button type='submit' text='+ Add Item' />
            </div>
        </form>
        </section>
    )
}


export default AddInventory



