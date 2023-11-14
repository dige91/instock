import React from 'react';
import './ItemAvailabilityEdit.scss';

function ItemAvailabilityEdit({ status, setStatus, warehouses, quantity, setQuantity, setWarehouseName, warehouseName,  }) {
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const handleChangeWarehouse = (event) => {
        setWarehouseName(event.target.value);
    };
    console.log('LOOK HERE:',warehouseName);
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
                                id="In Stock"
                                name="status"
                                value="In Stock"
                                defaultChecked={quantity !== 0}
                                onChange={handleChangeStatus}
                            />
                            <label className='item-availability__label' htmlFor="In Stock">In Stock</label>
                        </div>
                        <div>
                            <input
                                className='item-availability__radio'
                                type="radio"
                                id="outOfStock"
                                name="status"
                                value="out Of Stock"
                                defaultChecked={quantity == 0}
                                onChange={handleChangeStatus}
                            />
                            <label className='item-availability__label' htmlFor="outOfStock">Out of Stock</label>
                        </div>
                    </div>
                </div>
                {console.log(quantity, status)}
                {status === 'In Stock' && (
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
                    

                        {warehouses.map((warehouse) => (
                            <option key={warehouse.id} value={warehouse.id}>
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
