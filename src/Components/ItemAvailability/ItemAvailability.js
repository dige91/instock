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