import './ItemDetails.scss'

function ItemDetails (){
    return (
            <div className='Item'>
                <h2>Item Details</h2>
                <label className='item__label' htmlFor='item_name'></label>
                <input className='item__input' type='text' id='item_name' name='item_name'></input>
                <label className='item__label' htmlFor='description'></label>
                <input className='item__input item__input--large' type='text' id='description' name='description'></input>
                <label className='item__label' htmlFor='category' ></label>
                <select name="category">
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