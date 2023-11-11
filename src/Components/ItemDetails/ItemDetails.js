<<<<<<< HEAD
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
                <select className='item-details__input' name="category" defaultValue='electronics' onChange={handleChangeCategory}>
                    <option value="electronics">electronics</option>
=======
import './ItemDetails.scss';
function ItemDetails ({item}){


    return (
            <div className='Item'>
                <h2>Item Details</h2>
                <label className='form__name-label' htmlFor='name'>Item Name </label>
                <input className='form__name-input' type='text' id='name' name='name' defaultValue={item.item_name}></input>

                <label className='form__description-label' htmlFor='description'>Description</label>
                <textarea className='form__description-input' type='text' id='description' name='description' rows='4' defaultValue={item.description}></textarea>

                <label className='form__category-label' htmlFor='category'>Category</label>
                <select name="category">
                    <option value="electronics" selected>electronics</option>
>>>>>>> develop
                    <option value="Accessories">Accessories</option>
                    <option value="Gear">Gear</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Health">Health</option>
                </select>
            </div>
    )
}

<<<<<<< HEAD
export default ItemDetails
=======
export default ItemDetails;
>>>>>>> develop
