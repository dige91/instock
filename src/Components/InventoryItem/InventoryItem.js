import Warehouse from '../../pages/Warehouse/Warehouse'
import DeleteInventory from '../DeleteInventory/DeleteInventory'
import edit from '../../assets/icons/edit-24px.svg'
import forward from '../../assets/icons/chevron_right-24px.svg'
import '../InventoryItem/InventoryItem.scss'
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'
import { Link } from 'react-router-dom'


function InventoryItem ({warehouseDetails, itemId}){


    if (!warehouseDetails){
        return(
            'Loading......'
        )
    }

    console.log(warehouseDetails)
    return(
        <>
            <div className='inventory-item'>
                <div className='inventory-item__stat-block'>
                    <div className='inventory-item__title-container'>
                    <h3 className='inventory-item__label'>INVENTORY ITEM</h3>
                        <img className='inventory-item__label--image' src={forward}/>
                    </div>
                    
                    <div className='inventory-item__title-container'>
                    <Link className='inventory-item__link' to={`/inventory/${itemId}`}><p className='inventory-item__title'>{warehouseDetails.item_name}</p>
                        <img src={forward}/></Link>
                    </div>
                </div>
                <div className='inventory-item__stat-block'>
                    <h4 className='inventory-item__label'>STATUS</h4>
                    <p className={(warehouseDetails.status === 'In Stock') ? 'inventory-item__status inventory-item__status--instock' : 'inventory-item__status inventory-item__status--outOfStock'}>{warehouseDetails.status.toUpperCase()}</p>
                </div>
                <div className='inventory-item__stat-block'>
                    <h4 className='inventory-item__label'>CATEGORY</h4>
                    <p className='inventory-item__text'>{warehouseDetails.category}</p>
                </div>
                <div className='inventory-item__stat-block'>
                    <h4 className='inventory-item__label'>QTY</h4>
                    <p className='inventory-item__text'>{warehouseDetails.quantity}</p>
                </div>
                <div className='inventory-item__stat-block inventory-item__stat-block--margin'>
                    <h4 className='inventory-item__label'>WAREHOUSE</h4>
                    <p className='inventory-item__text'>{warehouseDetails.warehouse_name}</p>
                </div>
            
                <div className='inventory-item__stat-block inventory-item__stat-block--icons'>
                    <div className='inventory-item__icon-block'>
                        <DeleteInventory itemDetails={warehouseDetails} id={itemId}/>
                        <Link to={`/edit-inventory-item/${itemId}`} ><img className='inventory-item__edit-icon' src={edit}/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default InventoryItem;