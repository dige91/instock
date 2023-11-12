import Warehouse from '../../pages/Warehouse/Warehouse'
import DeleteInventory from '../DeleteInventory/DeleteInventory'
import edit from '../../assets/icons/edit-24px.svg'
import forward from '../../assets/icons/chevron_right-24px.svg'
import './ActualWarehouseItem.scss'
import WarehouseDetails from '../WarehouseDetails/WarehouseDetails'


function ActualWarehouseItem ({warehouseDetails}){


    if (!warehouseDetails){
        return(
            'Loading......'
        )
    }

    console.log(warehouseDetails)
    return(
        <>
            <div className='warehouse-item'>
                <div className='warehouse-item__stat-block'>
                    <h3 className='warehouse-item__label'>INVENTORY ITEM</h3>
                    <div className='warehouse-item__title-container'>
                        <p className='warehouse-item__title'>{warehouseDetails.item_name}</p>
                        <img src={forward}/>
                    </div>
                </div>
                <div className='warehouse-item__stat-block'>
                    <h4 className='warehouse-item__label'>STATUS</h4>
                    <p className={(warehouseDetails.status === 'In Stock') ? 'warehouse-item__status warehouse-item__status--instock' : 'warehouse-item__status warehouse-item__status--outOfStock'}>{warehouseDetails.status.toUpperCase()}</p>
                </div>
                <div className='warehouse-item__stat-block'>
                    <h4 className='warehouse-item__label'>CATEGORY</h4>
                    <p className='warehouse-item__text'>{warehouseDetails.category}</p>
                </div>
                <div className='warehouse-item__stat-block'>
                    <h4 className='warehouse-item__label'>QTY</h4>
                    <p className='warehouse-item__text'>{warehouseDetails.quantity}</p>
                </div>
                <div className='warehouse-item__stat-block warehouse-item__stat-block--icons'>
                    <DeleteInventory />
                    <img className='warehouse-item__edit-icon' src={edit}/>
                </div>
            </div>
        </>
    )
}


export default ActualWarehouseItem