import './WarehouseCard.scss';
import '../../App.scss';
import WarehouseItem from '../../components/WarehouseItem/WarehouseItem';
import { Link } from 'react-router-dom';
import sort from '../../assets/icons/sort-24px.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
const REACT_APP_BACKEND_URL = "http://localhost:8080/warehouse";

const WarehouseCard = ( {warehouses , setWarehouses} ) => {

    return (
        <>
            <div className="WarehouseCard">
                <div className="WarehouseCard__header">
                    <h1 className="WarehouseCard__header-title">Warehouses</h1>
                    <div className="WarehouseCard__header-container">
                        <form className="WarehouseCard__header-form">
                            <input type="search" name="search" className="WarehouseCard__header-form-search" placeholder="Search..." />
                            <Link to="/add-a-warehouse">
                                <button className="WarehouseCard__header-form-button">+ Add New Warehouse</button>
                            </Link>
                        </form>
                    </div>
                </div>
                <div className="WarehouseCard__tablet">
                    <div className='WarehouseCard__tablet-header'>INVENTORY ITEM <img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='WarehouseCard__tablet-header'>CATEGORY <img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='WarehouseCard__tablet-header'>STATUS<img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='WarehouseCard__tablet-header'>QUANTITY<img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='WarehouseCard__tablet-header'>ACTIONS</div>
                </div>
                {warehouses?.map((warehouse) => (
                    <WarehouseItem key={warehouse.id} id={warehouse?.id} warehouse={warehouse} setWarehouses={setWarehouses}/>
                ))}
            </div>
        </>
    );
}
export default WarehouseCard