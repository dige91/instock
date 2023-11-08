import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InventoryList.scss";
import SearchIcon from "../../assets/icons/search-24px.svg";
import InventoryCard from "../InventoryCard/InventoryCard";
import { useNavigate } from "react-router-dom";

function InventoryList({ }) {
    const [inventoryData, setInventoryData] = useState([]);

    const apiURL = process.env.REACT_APP_DATA;

    let navigate = useNavigate();

    function goAdd() {
        navigate("/AddInventory");
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${apiURL}/inventories`);
                setInventoryData(data);
                console.log("Inventory Item:", data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="inventories">
            <div className="inventories__header">
                <h1 className="inventories__title">Inventory</h1>
                <form className="inventories__form">
                    <div className="inventories__input-container">
                        <input type="text" name="search" placeholder="Search..."></input>
                        <img className="inventories__search-icon" src={SearchIcon}></img>
                    </div>
                    <button className="inventories__button" onClick={goAdd}>
                        <h3>+ Add New Item</h3>
                    </button>
                </form>
            </div>
            <div className="inventories__sections">
                <h4>INVENTORY ITEM</h4>
                <h4>CATEGORY</h4>
                <h4>STATUS</h4>
                <h4>QTY</h4>
                <h4>WAREHOUSE</h4>
                <h4>ACTIONS</h4>
            </div>
            {inventoryData.map((inventory) => (
                <InventoryCard
                    key={inventory.id}
                    id={inventory.id}
                    item={inventory.item_name}
                    category={inventory.category}
                    status={inventory.status}
                    quantity={inventory.quantity}
                    warehouse={inventory.warehouse_id}
                />
            ))}
        </div>
    );
}

export default InventoryList;