import DeleteInventory from '../DeleteInventory/DeleteInventory'
import edit from '../../assets/icons/edit-24px.svg'
import forward from '../../assets/icons/chevron_right-24px.svg'
import './ActualWarehouseItem.scss'
import { Link } from 'react-router-dom'


function ActualWarehouseItem ({warehouseDetails, itemId}){


    if (!warehouseDetails){
        return(
            'Loading......'
        )
    }
    if (warehouseDetails.message){
        return(
            <h2 className='empty'>This is an empty warehouse</h2>
        )
    }

    console.log(warehouseDetails)
    return(
        <>
            <div className='warehouse-item'>
                <div className='warehouse-item__stat-block'>
                    <div className='warehouse-item__title-container'>
                    <h3 className='warehouse-item__label'>INVENTORY ITEM</h3>
                        <img className='warehouse-item__label--image' src={forward}/>
                    </div>
                    
                    <div className='warehouse-item__title-container'>
                    <Link className='warehouse-item__link' to={`/inventory/${itemId}`}><p className='warehouse-item__title'>{warehouseDetails.item_name}</p>
                        <img src={forward}/></Link>
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
                    <div className='warehouse-item__icon-block'>
                        <DeleteInventory itemDetails={warehouseDetails} id={itemId}/>
                        <Link to={`/edit-inventory-item/${itemId}`} ><img className='warehouse-item__edit-icon' src={edit}/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ActualWarehouseItem