import '../InventoryList/InventoryList.scss'
import Search from '../../assets/icons/search-24px.svg'

const InventoryList = ({warehouse}) => {
    return ( 
        <div className="inventorylist">
            <h2 className='inventorylist-header'>Inventory</h2>
            <input className="inventorylist-searchbox" type="textbox" placeholder='Search...' />
            <img className='inventorylist-searchicon' src={Search}/>
            <button className='inventorylist-add'>+ Add New Item</button>

            <div>
                <h4 className='inventorylist__item'>Inventory Item</h4>
                <div>{warehouse}</div>
            </div>
        </div>
     );
}
 
export default InventoryList;
