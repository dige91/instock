import '../WarehouseInfo/WarehouseInfo.scss';
import Back from '../../assets/icons/arrow_back-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API_URL from '../../utils';
import axios from 'axios';
import WarehouseItem from '../WarehouseItem/WarehouseItem';
import ActualWarehouseItem from '../ActualWarehouseItem/ActualWarehouseItem';



const WarehouseInfo = ({ warehouses ,setWarehouses }) => {
    

    const {id} = useParams()
    const [warehouseItems , setWarehouseItems ] = useState(null)
    
    useEffect(() => {
        async function getWarehouses(){
            const response = await axios.get(API_URL+'/api/warehouses/'+id+'/inventories');
            setWarehouseItems(response.data);
        }
            getWarehouses();
        
    },[])

    
    
    if (!warehouses || !warehouseItems){
        return (
            <>
                <h2>Loading......</h2>
            </>
        )
     }
    const foundWarehouse = warehouses.find((warehouse) => String(warehouse.id) === id)
    return ( 
        <section className='warehouseinfo'>
            <div className=''>
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
            <div>
            {warehouseItems.map((warehouseItem) => (
                            <ActualWarehouseItem key={warehouseItem.id}  warehouseDetails={warehouseItem}/>
                        ))}
            </div>
       </section>
     );
}
 
export default WarehouseInfo;