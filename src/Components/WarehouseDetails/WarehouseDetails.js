import './WarehouseDetails.scss'

function WarehouseDetails ({warehouse}){
    return (
            <div className='warehouse'>
                <h2 className='warehouse__heading'>Warehouse Details</h2>
                <label className='warehouse__label' htmlFor='warehouse_name'>Warehouse Name</label>
                <input className='warehouse__input'  type='text' id='warehouse_name' name='warehouse_name' placeholder='Warehouse Name'></input>

                <label className='warehouse__label' htmlFor='address'>Street Address</label>
                <input className='warehouse__input'  type='text' id='address' name='address' placeholder='Street Address'></input>

                <label className='warehouse__label' htmlFor='city' >City</label>
                <input className='warehouse__input' type='text' id='city' placeholder='City'></input>

                <label className='warehouse__label' htmlFor='country' >Country</label>
                <input className='warehouse__input' type='text' id='country' placeholder='Country'></input>
                
            </div>
    )
}


export default WarehouseDetails