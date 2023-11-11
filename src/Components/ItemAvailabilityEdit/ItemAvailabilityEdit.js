import React from 'react';
import './ItemAvailabilityEdit.scss';

function ItemAvailabilityEdit({ status, setStatus, warehouses, quantity, setQuantity, setWarehouse, warehouse }) {
    console.log(status, warehouse)
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
    };

    const handleChangeWarehouse = (event) => {
        setWarehouse(event.target.value);
    };

    if (warehouses) {
        return (
            <section className='item-availability'>
                <h2 className='item-availability__heading'>Item Availability</h2>
                <fieldset className='item-availability__fieldset' onChange={handleChangeStatus}>
                    <legend className='item-availability__label'>Status</legend>
                    <div className='item-availability__status-container'>
                        <div className='item-availability__instock'>
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
                        <div className='item-availability__out-of-stock'>
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
                </fieldset>
                {status === 'inStock' && (
                    <div className='item-availability__quantity-container'>
                        <label className='item-availability__label'>Quantity</label>
                        <input
                            className='item-availability__input'
                            value={quantity}
                            onChange={handleChangeQuantity}
                        />
                    </div>
                )}

                <label className='item-availability__label' htmlFor='warehouse'>Warehouse</label>
                <select
                    className='item-availability__input item-availability__input--select'
                    name="warehouse"
                    value={warehouse}
                    onChange={handleChangeWarehouse}
                >
                    {warehouses?.map((warehouse) => (
                        <option key={warehouse.id} value={warehouse.id}>
                            {warehouse.warehouse_name}
                        </option>
                    ))}
                </select>

            </section>
        );
    }
}

export default ItemAvailabilityEdit;
