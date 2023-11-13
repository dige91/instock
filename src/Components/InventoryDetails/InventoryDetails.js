import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./InventoryDetails.scss";
import axios from "axios";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import API_URL from "../../utils";
import PageHeader from "../PageHeader/PageHeader";
import edit from "../../assets/icons/edit-white-24px.svg";

function InventoryDetails() {
    const { id } = useParams();
    const [inventoryData, setInventoryData] = useState([]);
    const [warehouseData, setWarehouseData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    `${API_URL}/api/inventories/${id}`
                );
                console.log(data);
                setInventoryData(data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        fetchData();
    }, []);


    console.log(inventoryData.warehouse_id);

    return (
        
            <div className="inventories">
                <PageHeader text={inventoryData.item_name} path='inventory' ID={id}/>
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
        
    );
}

export default InventoryDetails;
