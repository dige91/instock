function ItemDetails (){
    return (
            <div className='Item'>
                <h2>Item Details</h2>
                <label className='form__name-label' htmlFor='name'></label>
                <input className='form__name-input' type='text' id='name' name='name'></input>
                <label className='form__description-label' htmlFor='description'></label>
                <input className='form__description-input' type='text' id='description' name='description'></input>
                <label className='form__category-label' htmlFor='category' ></label>
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