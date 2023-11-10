import './ItemAvailability.scss'

function ItemAvailability ({ItemFormRef}){

    console.log(ItemFormRef)
    const form = ItemFormRef.current
    
    


    return (
    <section className='item-availability'>
        <h2 className='item-availability__heading'>Item Availability</h2>
        <fieldset className='item-availability__fieldset'>
            <legend className='item-availability__label'>Status</legend>
            <div className='item-availability__status-container'>
                <div className='item-availability__instock'>
                    <input className='item-availability__radio' type="radio" id="inStock" name="status" value="inStock" checked />
                    <label className='item-availability__label' for="inStock">In Stock</label>
                </div>
                <div className='item-availability__out-of-stock'>
                    <input className='item-availability__radio' type="radio" id="outOfStock" name="status" value="outOfStock" />
                    <label className='item-availability__label item-availability__label' for="outOfStock">Out of Stock</label>
                </div>
            </div>
        </fieldset>
        {form.status.value === 'in stock' && (
                       <div className='item-availability__quantity-container'>
                       <label className='item-availability__label'>Quantity</label>
                       <input className='item-availability__input'></input>
                   </div>
             )}
        
        
        <label className='item-availability__label' htmlFor='warehouse'>Warehouse</label>
                <select className='item-availability__input' name="warehouse">
                    {/* {
                        warehouses?.map((warehouse) =>{
                            return (
                                <option value={warehouse?.warehouse_name} >{warehouse.warehouse_name}</option>
                            )
                        })

                    } */}
                    <option value="electronics" selected>electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Health">Health</option>
                </select>

    </section>
    )

}

export default ItemAvailability