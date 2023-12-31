import './WarehouseInfo.scss';
import labelImg from '../../assets/icons/sort-24px.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API_URL from '../../utils';
import axios from 'axios';
import ActualWarehouseItem from '../ActualWarehouseItem/ActualWarehouseItem';
import PageHeader from '../PageHeader/PageHeader';

const WarehouseInfo = ({ warehouses }) => {


    const { id } = useParams()
    const [warehouseItems, setWarehouseItems] = useState(null)

    useEffect(() => {
        async function getWarehouses() {
            const response = await axios.get(API_URL + '/api/warehouses/' + id + '/inventories');
            setWarehouseItems(response.data);
        }
        getWarehouses();

    }, [])



    if (!warehouses || !warehouseItems) {
        return (
            <>
                <h2>Loading......</h2>
            </>
        )
    }
    const foundWarehouse = warehouses.find((warehouse) => String(warehouse.id) === id)
    return (
        <section className='warehouseinfo'>
            <div className='warehouseinfo-top'>
                <PageHeader text={foundWarehouse.warehouse_name} path={'warehouse'} ID={id} />
                <div className='warehouseinfo-top__main'>
                    <div className='warehouseinfo-top__main-section'>
                        <h4 className='warehouseinfo-top__main-section-staticaddress'>WAREHOUSE ADDRESS:</h4>
                        <div className='warehouseinfo-top__main-section-address'>{foundWarehouse.address + ' ' + foundWarehouse.city + ' ' + foundWarehouse.country}</div>
                    </div>
                    <div className='warehouseinfo-top__main-contact'>

                        <div className='warehouseinfo-top__main-contact-left'>
                            <h4 className='warehouseinfo-top__main-contact-left-staticname'>CONTACT NAME:</h4>
                            <div className='warehouseinfo-top__main-contact-left-name'>{foundWarehouse.contact_name}</div>
                            <div className='warehouseinfo-top__main-contact-left-position'>{foundWarehouse.contact_position}</div>
                        </div>
                        <div className='warehouseinfo-top__main-contact-right'>
                            <h4 className='warehouseinfo-top__main-contact-right-staticinfo'>CONTACT INFORMATION:</h4>
                            <div className='warehouseinfo-top__main-contact-right-phone'>{foundWarehouse.contact_phone}</div>
                            <div className='warehouseinfo-top__main-contact-right-email'>{foundWarehouse.contact_email}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='warehouseinfo__tablet-labels'>
                    <div className='warehouseinfo__label-container'>
                        <h3 className='warehouseinfo__label'>INVENTORY ITEM</h3>
                        <img className='warehouseinfo__label--image' src={labelImg} />
                    </div>
                    <div className='warehouseinfo__label-container'>
                        <h3 className='warehouseinfo__label'>CATEGORY</h3>
                        <img className='warehouseinfo__label--image' src={labelImg} />
                    </div>
                    <div className='warehouseinfo__label-container'>
                        <h3 className='warehouseinfo__label'>STATUS</h3>
                        <img className='warehouseinfo__label--image' src={labelImg} />
                    </div>
                    <div className='warehouseinfo__label-container'>
                        <h3 className='warehouseinfo__label'>QUANTITY</h3>
                        <img className='warehouseinfo__label--image' src={labelImg} />
                    </div>
                    <div className='warehouseinfo__label-container warehouseinfo__label-container--noImg'>
                        <h3 className='warehouseinfo__label'>ACTIONS</h3>
                    </div>
                </div>
                {
                
                
                warehouseItems.map((warehouseItem) => (

                    <ActualWarehouseItem key={warehouseItem.id} warehouseDetails={warehouseItem} itemId={warehouseItem.id} />
                ))}
            </div>
        </section>
    );
}

export default WarehouseInfo;