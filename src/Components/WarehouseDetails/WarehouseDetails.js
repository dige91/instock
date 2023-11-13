import './WarehouseDetails.scss'

function WarehouseDetails ({warehouse}){
    return (
            <div className='warehouse'>
                <h2 className='warehouse__heading'>Warehouse Details</h2>
                <label className='warehouse__label' htmlFor='warehouse_name'>Warehouse Name</label>
                <input className='warehouse__input' value={warehouse.warehouse_name}  type='text' id='warehouse_name' name='warehouse_name'></input>

                <label className='warehouse__label' htmlFor='address'>Street Address</label>
                <input className='warehouse__input' value={warehouse.address}  type='text' id='address' name='address'></input>

                <label className='warehouse__label' htmlFor='city' >City</label>
                <input className='warehouse__input' value={warehouse.city} type='text' id='city'></input>

                <label className='warehouse__label' htmlFor='country' >Country</label>
                <input className='warehouse__input' value={warehouse.country}  type='text' id='country'></input>
                
            </div>
    )
}


export default WarehouseDetails