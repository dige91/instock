import './EditInventoryItem.scss';
import { Link } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';
import ItemAvailability from '../ItemAvailability/ItemAvailability';
import ButtonAlternate from '../ButtonAlternate/ButtonAlternate';
import Button from '../Button/Button';
import arrow from '../../assets/icons/arrow_back-24px.svg';
import edit from '../../assets/icons/edit-white-24px.svg'


const item = {
    id: 1,
    warehouse_id: 1,
    item_name: 'Television',
    description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
    category: 'Electronics',
    status: 'In Stock',
    quantity: 500,
}
function EditInventoryItem() {
    return (
        <>
            <h1 className="header"><img className='arrow' src={arrow} alt="arrow icon"></img>Edit Inventory Item</h1>
            <div className='container1'>
                <ItemDetails item={item} />
                <ItemAvailability item={item} />
            </div>
            <div className='form__button-container'>
                <Link to='/'><ButtonAlternate text='Cancel' /></Link>
                <Button type='submit' text='Save' />
            </div>
        </>
    );
}

export default EditInventoryItem;