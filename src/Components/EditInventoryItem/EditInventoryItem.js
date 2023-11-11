import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../utils';
import backButton from '../../assets/icons/arrow_back-24px.svg';
import PageHeaderNoIcon from '../PageHeaderNoIcon/PageHeaderNoIcon';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemAvailability from '../ItemAvailability/ItemAvailability';
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate';
import Button from '../Button/Button';
import './EditInventoryItem.scss';

function EditInventoryItem({warehouses}) {
    console.log(warehouses);
    const { id } = useParams();
    const formRef = useRef(null);
    const [item, setItem] = useState({});
    const [item_name, setItem_name] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("outOfStock");
    const [quantity, setQuantity] = useState(0);
    const [warehouse, setWarehouse] = useState("");

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/inventories/2`);
                const { item_name, description, category, status, quantity, warehouse_id } = response.data;
                setItem_name(item_name || "");
                setDescription(description || "");
                setCategory(category || "");
                setStatus(status || "outOfStock");
                setQuantity(quantity || 0);
                setWarehouse(warehouse_id || "");
            } catch (error) {
                console.error("Error fetching inventory item details:", error);
            }
        };

        fetchItem();
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!item_name || !description || !category || typeof quantity !== 'number') {
            alert("You must fill out all fields");
            return;
        } else {
            const updatedItem = {
                item_name,
                description,
                category,
                status,
                quantity,
            };
            console.log(updatedItem);
            alert('Success');
        }
    };

    return (
        <section className='main-section'>
            <PageHeaderNoIcon srcLeft={backButton} text={'Edit Inventory Item'} />
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
                    <Link to='/' className='main-section-form__link'>
                        <ButtonAlternate text='Cancel' />
                    </Link>
                    <Button type='submit' text='Save' />
                </div>
            </form>
        </section>
    );
}

export default EditInventoryItem;
