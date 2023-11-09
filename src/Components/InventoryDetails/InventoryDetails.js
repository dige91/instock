import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetails.scss";
import InventoryCard from "../InventoryCard/InventoryCard";
import axios from "axios";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";

export function InventoryDetails() {
    const { inventoryid } = useParams();
    const [inventoryData, setInventoryData] = useState([]);
    const [warehouseData, setWarehouseData] = useState([]);

    const apiURL = process.env.REACT_APP_DATA;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    `${apiURL}/inventories/${inventoryid}`
                );
                console.log(data);
                setInventoryData(...data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (inventoryData) {
            const fetchData = async () => {
                try {
                    const { data } = await axios.get(
                        `${apiURL}/warehouses/${inventoryData.warehouse_id}`
                    );
                    console.log(data);
                    setWarehouseData(data);
                } catch (error) {
                    console.log("Error:", error);
                }
            };
            fetchData();
        }
    }, []);

    console.log(inventoryData.warehouse_id);

    return (
        <div className="inventories">
            <div>
                <div className="inventories__header">
                    <Link to={`/inventorylist`}>
                        <img
                            src={backIcon}
                            alt="Back Icon"
                            className="edit-warehouse__back-icon"
                        />
                    </Link>
                    <h1 className="inventories__title">{inventoryData.item_name}</h1>
                    <form className="inventories__form">
                        <button className="inventories__button">
                            <h3>Edit</h3>
                        </button>
                    </form>
                </div>

                {/* //MOBILE */}
                <div className="inventories-sections__mobile">
                    <div className="inventories-sections__left">
                        <div>
                            <h4>INVENTORY DESCRIPTION:</h4>
                            <h3>{inventoryData.description}</h3>
                        </div>
                        <div>
                            <h4>CATEGORY:</h4>
                            <h3>{inventoryData.category}</h3>
                        </div>
                    </div>
                    <div className="inventories-sections__right">
                        <div className="inventories-sections__right-top">
                            <div className="inventories-sections__status">
                                <h4>STATUS:</h4>
                                <h3>{inventoryData.status}</h3>
                            </div>
                            <div>
                                <h4>QUANTITY:</h4>
                                <h3>{inventoryData.quantity}</h3>
                            </div>
                        </div>
                        <div>
                            <h4>WAREHOUSE:</h4>
                            <h3>{warehouseData.warehouse_name}</h3>
                        </div>
                    </div>
                </div>

                {/* //TABLET AND DESKTOP */}
                <div className="inventories-sections__tablet-desktop">
                    <div className="inventories-sections__left">
                        <div>
                            <h4>INVENTORY DESCRIPTION:</h4>
                            <h3>{inventoryData.description}</h3>
                        </div>
                        <div>
                            <h4>CATEGORY:</h4>
                            <h3>{inventoryData.category}</h3>
                        </div>
                    </div>
                    <div className="inventories-sections__right">
                        <div className="inventories-sections__right-top">
                            <div className="inventories-sections__status">
                                <h4>STATUS:</h4>
                                <h3>{inventoryData.status}</h3>
                            </div>
                            <div>
                                <h4>QUANTITY:</h4>
                                <h3>{inventoryData.quantity}</h3>
                            </div>
                        </div>
                        <div>
                            <h4>WAREHOUSE:</h4>
                            <h3>{warehouseData.warehouse_name}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InventoryDetails;
