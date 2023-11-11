import '../WarehouseInfo/WarehouseInfo.scss';
import Back from '../../assets/icons/arrow_back-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import { Link, useParams } from 'react-router-dom';




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
            <div className='warehouseinfo__header-left'>
                <Link to={'/'} className='warehouseinfo__header-left-link'>
                <img className='warehouseinfo__header-left-link-back' src={Back}/>
                </Link>
            <h1 className='warehouseinfo__header-left-name'>{foundWarehouse.warehouse_name}</h1>
            </div>
            <img className='warehouseinfo__header-edit' src={Edit}/>
        </div>
        <div className='warehouseinfo__main'>
        <div className='warehouseinfo__main-section'>
        <h4 className='warehouseinfo__main-section-staticaddress'>WAREHOUSE ADDRESS:</h4>
            <div className='warehouseinfo__main-section-address'>{foundWarehouse.address + ' ' + foundWarehouse.city + ' ' + foundWarehouse.country}</div>
        </div>
        <div className='warehouseinfo__main-contact'>
        
                <div className='warehouseinfo__main-contact-left'>
                <h4 className='warehouseinfo__main-contact-left-staticname'>CONTACT NAME:</h4>
                <div className='warehouseinfo__main-contact-left-name'>{foundWarehouse.contact_name}</div>
                <div className='warehouseinfo__main-contact-left-position'>{foundWarehouse.contact_position}</div>
                </div>
                <div className='warehouseinfo__main-contact-right'>
                <h4 className='warehouseinfo__main-contact-right-staticinfo'>CONTACT INFORMATION:</h4>
                <div className='warehouseinfo__main-contact-right-phone'>{foundWarehouse.contact_phone}</div>
                <div className='warehouseinfo__main-contact-right-email'>{foundWarehouse.contact_email}</div>
                </div>
            </div>
       </div>
       </div>
     );
}
 
export default WarehouseInfo;