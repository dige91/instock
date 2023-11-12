import React from 'react';
import './ItemAvailabilityEdit.scss';

function ItemAvailabilityEdit({ status, setStatus, warehouses, quantity, setQuantity, setWarehouseName, warehouseName }) {
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const handleChangeWarehouse = (event) => {
        setWarehouseName(event.target.value);
    };

    if (warehouses) {
        return (
            <section className='item-availability'>
                <h2 className='item-availability__heading'>Item Availability</h2>

                <div className='item-availability__status'>
                    <label className='item-availability__label'>Status</label>
                    
                    <div className='item-availability__status-container'>
                        <div>
                            <input
                                className='item-availability__radio'
                                type="radio"
                                id="inStock"
                                name="status"
                                value="inStock"
                                checked={status === 'inStock'}
                                onChange={handleChangeStatus}
                            />
                            <label className='item-availability__label' htmlFor="inStock">In Stock</label>
                        </div>
                        <div>
                            <input
                                className='item-availability__radio'
                                type="radio"
                                id="outOfStock"
                                name="status"
                                value="outOfStock"
                                checked={status === 'outOfStock'}
                                onChange={handleChangeStatus}
                            />
                            <label className='item-availability__label' htmlFor="outOfStock">Out of Stock</label>
                        </div>
                    </div>
                </div>

                {status === 'inStock' && (
                    <div className='item-availability__quantity-container'>
                        <label className='item-availability__label'>Quantity</label>
                        <input
                            className='item-availability__input'
                            value={quantity}
                            name="quantity"
                            id="quantity"
                            onChange={handleChangeQuantity}
                        />
                    </div>
                )}

                <div className='item-availability__warehouse-container'>
                    <label className='item-availability__label' htmlFor='warehouse'>Warehouse</label>
                    <select
                        className='item-availability__input item-availability__input--select'
                        name="warehouseName"
                        id="warehouseName"
                        value={warehouseName}
                        onChange={handleChangeWarehouse}
                    >
                        <option value="">{warehouseName}</option>

                        {warehouses?.map((warehouse) => (
                            <option key={warehouse.id} value={warehouse.warehouse_name}>
                                {warehouse.warehouse_name}
                            </option>
                        ))}
                    </select>
                </div>
            </section>
        );
    }
}

export default ItemAvailabilityEdit;
