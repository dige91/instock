
import AddInventory from "../../components/AddInventory/AddInventory";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
import './Inventory.scss';
import { Link, useParams } from "react-router-dom";
import Chevron from '../../assets/icons/chevron_right-24px.svg'
import Edit from '../../assets/icons/edit-24px.svg';
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../utils";

const InventoryList = ({ inventories, setInventories}) => {
    const {id} = useParams()
    const [inventoryData, setInventoryData] = useState(null);

    useEffect(() => {
        async function getInventories(){
            const response = await axios.get(API_URL+'/api/inventories');
            setInventoryData(response.data);
        }
            getInventories();
        
    },[])

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
            </div>
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
            <div>
            {warehouseItems.map((warehouseItem) => (
                            <ActualWarehouseItem key={warehouseItem.id}  warehouseDetails={warehouseItem}/>
                        ))}
            </div>
            </div>
        </div>
    </>
    );
}

export default InventoryList;