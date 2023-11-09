import './Warehouse.scss';
import '../../App.scss';
import WarehouseItem from '../../components/WarehouseItem/WarehouseItem';
import { Link } from 'react-router-dom';
import sort from '../../assets/icons/sort-24px.svg';
import { useState, useEffect } from 'react';
import axios from 'axios';
const REACT_APP_BACKEND_URL = "http://localhost:8080/warehouse";

const Warehouse = () => {
    const [warehouses, setWarehouses] = useState([]);

    useEffect(() => {
        async function getWarehouses(){
            const response = await axios.get(REACT_APP_BACKEND_URL);
            setWarehouses(response.data);
        }
        getWarehouses();
    },[warehouses])
    return (
        <>
            <div className="warehouses">
                <div className="warehouses__header">
                    <h1 className="warehouses__header-title">Warehouses</h1>
                    <div className="warehouses__header-container">
                        <form className="warehouses__header-form">
                            <input type="search" name="search" className="warehouses__header-form-search" placeholder="Search..." />
                            <Link to="/add-a-warehouse">
                                <button className="warehouses__header-form-button">+ Add New Warehouse</button>
                            </Link>
                        </form>
                    </div>
                </div>
                <div className="warehouses__tablet">
                    <div className='warehouses__tablet-header'>WAREHOUSE <img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='warehouses__tablet-header'>ADDRESS <img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='warehouses__tablet-header'>CONTACT NAME<img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='warehouses__tablet-header'>CONTACT INFORMATION <img className='logo' src={sort} alt="sort arrows"></img></div>
                    <div className='warehouses__tablet-header'>ACTIONS</div>
                </div>
                {warehouses.map((warehouse) => (
                    <WarehouseItem key={warehouse.id} id={warehouse?.id} warehouse={warehouse} setWarehouses={setWarehouses}/>
                ))}
            </div>
        </>
    );
}

export default Warehouse;