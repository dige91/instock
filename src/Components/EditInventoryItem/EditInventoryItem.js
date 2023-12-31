import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../utils';
import backButton from '../../assets/icons/arrow_back-24px.svg';
import PageHeaderNoIcon from '../PageHeaderNoIcon/PageHeaderNoIcon';
import ItemDetailsEdit from '../ItemDetailsEdit/ItemDetailsEdit';
import ItemAvailabilityEdit from '../ItemAvailabilityEdit/ItemAvailabilityEdit';
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate';
import Button from '../Button/Button';
import './EditInventoryItem.scss';

function EditInventoryItem({ warehouses }) {
    const { id } = useParams();
    const formRef = useRef(null);
    const [item, setItem] = useState({});
    const [item_name, setItem_name] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("out Of Stock");
    const [quantity, setQuantity] = useState(0);
    const [warehouseName, setWarehouseName] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/inventories/${id}`);
                const { item_name, description, category, status, quantity, warehouse_name, warehouse_id } = response.data;
                setItem(response.data);
                setItem_name(item_name || "");
                setDescription(description || "");
                setCategory(category || "");
                setStatus(status || "out Of Stock");
                setQuantity(quantity || 0);
                setWarehouseName(warehouse_id || "");
                console.log('ID :', warehouse_id)
                console.log('Quantity :', quantity)
            } catch (error) {
                console.error("Error fetching inventory item details:", error);
            }
        };

        fetchItem();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = formRef.current;
        const item_name = form.item_name.value;
        const description = form.description.value;
        const category = form.category.value;
        const status = form.status.value;
        let quantity = '0';
        if (status === "In Stock") {
            quantity = form.quantity.value;
        }

        const warehouseName = form.warehouseName.value;

        const updatedItem = {
            item_name: item_name,
            description: description,
            category: category,
            status: status,
            quantity: quantity,
            warehouse_id: warehouseName
        };
        try {
            await axios.put(`${API_URL}/api/inventories/${id}`, updatedItem);
            alert('Success');
            console.log(updatedItem);
            
            function goBack() {
                    navigate(-1)
            };
            goBack()
        } catch (error) {
            console.error('Error updating inventory item:', error);
            console.log("error response:", error.response);
            alert('Failed to update inventory item. Please try again.');
        }
    };

    
    return (
        <section className='main-section'>
            <PageHeaderNoIcon srcLeft={backButton} text={'Edit Inventory Item'} />
            <form className='main-section-form' onSubmit={handleSubmit} ref={formRef}>
                <div className='main-section-form__input-container'>
                    <ItemDetailsEdit
                        item_name={item_name}
                        setItem_name={setItem_name}
                        description={description}
                        setDescription={setDescription}
                        category={category}
                        setCategory={setCategory}
                    />
                    <ItemAvailabilityEdit
                        status={status}
                        setStatus={setStatus}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        warehouses={warehouses}
                        warehouseName={warehouseName}
                        setWarehouseName={setWarehouseName}
                        
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
