import './ItemDetails.scss'

function ItemDetails (){
    return (
            <div className='item-details'>
                <h2 className='item-details__heading'>Item Details</h2>
                <label className='item-details__label' htmlFor='item-details_name'>Item Name</label>
                <input className='item-details__input' type='text' id='item_name' name='item_name'></input>
                <label className='item-details__label' htmlFor='description'>Description</label>
                <input className='item-details__input item-details__input--large' type='text' id='description' name='description'></input>
                <label className='item-details__label' htmlFor='category' ></label>
                <select className='item-details__input' name="category">
                    <option value="electronics" selected>electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Health">Health</option>
                </select>
            </div>
    )
}

export default ItemDetails