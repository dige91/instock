
import AddInventory from "../../components/AddInventory/AddInventory";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
import './Inventory.scss';
import { Link } from "react-router-dom";
import Chevron from '../../assets/icons/chevron_right-24px.svg'
import Edit from '../../assets/icons/edit-24px.svg';

const InventoryList = ({ inventories, setInventories, id}) => {
    console.log(inventories);
    if (!inventories){
        return(
            <>
            <h2>Item not found</h2>
            </>
        )
    }
    return (
    <>
    <div className="inventoryheader">
            <div className="inventoryheader">
                <div className="iventoryheader-title">
                    <h4 className='inven'>Inventory</h4>
                    <Link to ={`/inventories-info/${inventories.id}`} >
                    <div className='inventoryheader__name'>{inventories.item_name}
                    </div>
                    </Link>
                 </div>
                <div className="inventorylist">
                    <div className="inventorylist-item">
                        <div className="inventorylist-item-left">
                        <h4>INVENTORY ITEM</h4>
                        <p>{inventories.item_name}</p>
                        <h4>CATEGORY</h4>
                        <p>{inventories.category}</p>
                        </div>
                        <div className="inventorylist-item-right">
                            <h4>STATUS</h4>
                            <p>{inventories.status}</p>
                            <h4>QTY</h4>
                            <p>{inventories.quantity}</p>
                            <h4>WAREHOUSE</h4>
                            <p>{inventories.warehouse_id}</p>
                        </div>
                        <div className="inventorylist-item-icons">
                            <DeleteInventory/>
                            <Link to={`/edit-inventory/${inventories.id}`}><img className="item__icons2-update" src={Edit} alt="edit icon"></img></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default InventoryList;