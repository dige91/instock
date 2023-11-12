import './ItemDetails.scss'

function ItemDetails ({setItem_name, setDescription, setCategory}){

    const handleChangeItemName = (event) => {
        setItem_name(event.target.value)
      };
      const handleChangeDescription = (event) => {
        setDescription(event.target.value)
      };
      const handleChangeCategory = (event) => {
        setCategory(event.target.value)
      };

    return (
            <div className='item-details'>
                <h2 className='item-details__heading'>Item Details</h2>
                <label className='item-details__label' htmlFor='item-details_name'>Item Name</label>
                <input className='item-details__input' type='text' id='item_name' name='item_name' 
                    onChange={handleChangeItemName}
                />
                <label className='item-details__label' htmlFor='description'>Description</label>
                <input className='item-details__input item-details__input--large' type='text' id='description' name='description' 
                    onChange={handleChangeDescription}
                />
                <label className='item-details__label' htmlFor='category' > Category</label>
                <select className='item-details__input item-availability__input--select' name="category" defaultValue='electronics' onChange={handleChangeCategory}>
                    <option value="electronics">electronics</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Health">Health</option>
                </select>
            </div>
    )
}

export default ItemDetails
