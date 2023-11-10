
function ItemAvailability (){
    return (
    <>
        <fieldset>
            <legend>Status</legend>
            <div>
                <div>
                    <input type="radio" id="inStock" name="status" value="inStock" checked />
                    <label for="inStock">In Stock</label>
                </div>
                <div>
                    <input type="radio" id="outOfStock" name="status" value="outOfStock" />
                    <label for="outOfStock">Out of Stock</label>
                </div>
            </div>
        </fieldset>
        <label className='item__label' htmlFor='warehouse'>Warehouse</label>
                <select name="warehouse">
                    {
                        warehouses.map((warehouse) =>{
                            return (
                                <option value={warehouse.warehouse_name} >{warehouse.warehouse_name}</option>
                            )
                        })

                    }
                    {/* <option value="electronics" selected>electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Health">Health</option> */}
                </select>

    </>
    )

}