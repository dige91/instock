
import AddInventory from "../../components/AddInventory/AddInventory";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
import './Inventory.scss';
import { Link, useParams } from "react-router-dom";
import Chevron from '../../assets/icons/chevron_right-24px.svg'
import Edit from '../../assets/icons/edit-24px.svg';
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../../utils";
import labelImg from '../../assets/icons/sort-24px.svg';
import InventoryItem from "../../components/InventoryItem/InventoryItem";

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
    <div className="inventorylist">
            <div className="inventorylist__header">
                    <h1 className="iventorylist__header-title">Inventory</h1>
                    <Link to ={`/inventories-info/${inventories.id}`} >
                    <div className='inventorylist__header-name'>{inventories.item_name}
                    </div>
                    </Link>
            </div>
            <div className='inventorylist__tablet-labels'>
                <div className='inventorylist__label-container'>
                    <h3 className='inventorylist__label'>INVENTORY ITEM</h3>
                        <img className='inventorylist__label--image' src={labelImg}/>
                </div>
                <div className='inventorylist__label-container'>
                    <h3 className='inventorylist__label'>CATEGORY</h3>
                        <img className='inventorylist__label--image' src={labelImg}/>
                </div>
                <div className='inventorylist__label-container'>
                    <h3 className='inventorylist__label'>STATUS</h3>
                        <img className='inventorylist__label--image' src={labelImg}/>
                </div>
                <div className='inventorylist__label-container'>
                    <h3 className='inventorylist__label'>QTY</h3>
                        <img className='inventorylist__label--image' src={labelImg}/>
                </div>
                <div className='inventorylist__label-container'>
                    <h3 className='inventorylist__label'>WAREHOUSE</h3>
                        <img className='inventorylist__label--image' src={labelImg}/>
                </div>
                
                <div className='inventorylist__label-container inventorylist__label-container--noImg'>
                    <h3 className='inventorylist__label'>ACTIONS</h3>
                </div>
            </div>
            {inventoryData?.map((warehouseItem) => (
                            <InventoryItem key={warehouseItem.id}  warehouseDetails={warehouseItem} itemId={warehouseItem.id}/>
                        ))}
            </div>
    </>
    );
}

export default InventoryList;