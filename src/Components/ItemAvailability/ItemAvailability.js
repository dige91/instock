<<<<<<< HEAD
import './ItemAvailability.scss'

function ItemAvailability ({ status, setStatus, quantity, setQuantity, category , setWarehouse}){

    
    const handleChangeStatus = (event) => {
        setStatus(event.target.value)
      };
      const handleChangeQuantity = (event) => {
        setQuantity(event.target.value)
      };
      const handleChangeWarehouse = (event) => {
        setWarehouse(event.target.value)
      };
    


    return (
    <section className='item-availability'>
        <h2 className='item-availability__heading'>Item Availability</h2>
        <fieldset className='item-availability__fieldset' onChange={handleChangeStatus}>
            <legend className='item-availability__label'>Status</legend>
            <div className='item-availability__status-container'>
                <div className='item-availability__instock'>
                    <input className='item-availability__radio' 
                        type="radio" 
                        id="inStock" 
                        name="status" value="inStock"  
                    />
                    <label className='item-availability__label' htmlFor="inStock">In Stock</label>
                </div>
                <div className='item-availability__out-of-stock'>
                    <input className='item-availability__radio' 
                        type="radio" 
                        id="outOfStock" 
                        name="status" 
                        value="outOfStock" 
                        defaultChecked
                    />
                    <label className='item-availability__label item-availability__label' htmlFor="outOfStock">Out of Stock</label>
                </div>
            </div>
        </fieldset>
        {status === 'inStock' && (
                       <div className='item-availability__quantity-container'>
                       <label className='item-availability__label' >Quantity</label>
                       <input 
                            className='item-availability__input' 
                            onChange={handleChangeQuantity}
                       />


                   </div>
             )}
        
        
        <label className='item-availability__label' htmlFor='warehouse'>Warehouse</label>
                <select className='item-availability__input' name="warehouse" defaultValue='electronics' onChange={handleChangeWarehouse}>
                    {/* {
                        warehouses?.map((warehouse) =>{
                            return (
                                <option value={warehouse.id} >{warehouse.warehouse_name}</option>
                            )
                        })

                    } */}
                    <option value="1" >electroni</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Health">Health</option>
                </select>

    </section>
    )

}

export default ItemAvailability
=======
import './ItemAvailability.scss';

function ItemAvailability({ item }) {
    return (
        <div className='Item'>
            <h2>Item Availability</h2>

            <h3>Status</h3>
            <input className="Item-stock" type='radio' id='inStock' name='inStock'></input>
            <label className="Item-stock" type='radio' id='inStock' name='inStock'>In stock</label>

            <input className="Item-stock" type='radio' id='outOfStock' name='outOfStock'></input>
            <label className="Item-stock" type='radio' id='outOfStock' name='outOfStock'>Out of stock</label>

            <label className='form__category-label' htmlFor='category'>Warehouse</label>
                <select name="category" defaultValue={item.warehouse}>
                    <option value="Manhattan" selected>Manhattan</option>
                    <option value="Washington">Washington</option>
                    <option value="Jersey">Jersey</option>
                    <option value="San Fran">San Fran</option>
                    <option value="Santa Monica">Santa Monica</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Miami">Miami</option>
                </select>
        </div>
    )
}

export default ItemAvailability;
>>>>>>> develop
