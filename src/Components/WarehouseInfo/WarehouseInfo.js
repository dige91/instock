import '../WarehouseInfo/WarehouseInfo.scss';
import Back from '../../assets/icons/arrow_back-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import { useParams } from 'react-router-dom';




const WarehouseInfo = ({ warehouses ,setWarehouses }) => {
    
    const {id} = useParams()
    if (!warehouses){
        return (
            <>
                <h2>Loading......</h2>
            </>
        )
     }
    const foundWarehouse = warehouses.find((warehouse) => String(warehouse.id) === id)
    return ( 
       <div className='warehouseinfo'>
        <div className='warehouseinfo__header'>
            <img className='warehouseinfo__header-back' src={Back}/>
            <h3 className='warehouseinfo__header-name'>{foundWarehouse.warehouse_name}</h3>
            <img className='warehouseinfo__header-edit' src={Edit}/>
        </div>
        <h4 className='warehouseinfo__staticaddress'>WAREHOUSE ADDRESS:</h4>
            <div className='warehouseinfo__address'>{foundWarehouse.address + ' ' + foundWarehouse.city + ' ' + foundWarehouse.country}</div>
            <div className='warehouseinfo__contact'>
                <>
                <h4 className='warehouseinfo__staticname'>CONTACT NAME:</h4>
                <div className='warehouseinfo__contact-name'>{foundWarehouse.contact_name}</div>
                <div className='warehouseinfo__contact-position'>{foundWarehouse.contact_position}</div>
                </>
                <>
                <h4 className='warehouseinfo__staticinfo'>CONTACT NAME:</h4>
                <div className='warehouseinfo__contact-'>{foundWarehouse.contact_name}</div>
                <div className='warehouseinfo__contact-position'>{foundWarehouse.contact_position}</div>
                </>
            
            </div>
       </div>
     );
}
 
export default WarehouseInfo;