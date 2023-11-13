import './EditWarehouseDetails.scss'

function EditWarehouseDetails ({warehouse}){
    return (
            <div className='edit-warehouse'>
                <h2 className='edit-warehouse__heading'>Warehouse Details</h2>
                <label className='edit-warehouse__label' htmlFor='edit-warehouse_name'>Warehouse Name</label>
                <input className='edit-warehouse__input' defaultValue={warehouse.warehouse_name}  type='text' id='warehouse_name' name='warehouse_name'></input>

                <label className='edit-warehouse__label' htmlFor='address'>Street Address</label>
                <input className='edit-warehouse__input' defaultValue={warehouse.address}  type='text' id='address' name='address'></input>

                <label className='edit-warehouse__label' htmlFor='city' >City</label>
                <input className='edit-warehouse__input' defaultValue={warehouse.city} type='text' id='city'></input>

                <label className='edit-warehouse__label' htmlFor='country' >Country</label>
                <input className='edit-warehouse__input' defaultValue={warehouse.country}  type='text' id='country'></input>
                
            </div>
    )
}


export default EditWarehouseDetails