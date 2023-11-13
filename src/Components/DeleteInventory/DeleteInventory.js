import API_URL from "../../utils"
import Delete from '../../assets/icons/delete_outline-24px.svg'
import Close from '../../assets/icons/close-24px.svg';
import { useState } from "react";
import axios from "axios";
import './DeleteInventory.scss'

const DeleteInventory = ({classNm, setInventory, id , itemDetails}) => {
    const handleDelete = (event) =>{
        event.preventDefault()

        const deleteInventory = async () => {
            try{
                const response = await axios.delete(`${API_URL}/api/inventories/${id}`);

                alert(`sucessfully deleted ${itemDetails.item_name}`);

                window.location.href = '/inventory'
            } catch (error) {
                console.error(error);
            }
        }
        deleteInventory();
    }

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    return(
        <div className="deleteinventory">
            <img src={Delete} onClick={toggleModal} />

            {modal && (
                <div className="deleteinventory__overlay">
                    <div className="deleteinventory__overlay-content">
                        <div className="deleteinventory__overlay-content-top">
                            <img src={Close} onClick={toggleModal} className="deleteinventory__overlay-content-top-close"/>
                            <h2 className="deleteinventory__overlay-content-top-header"> Delete {itemDetails.item_name} Inventory Item? </h2>
                            <p className="deleteinventory__overlay-content-top-confirm">Please confirm that youd like to delete the Television  item from the list of inventory.
                 You wont be able to undo this action</p>
                        </div>
                        <div className="deleteinventory__overlay-content-buttons">
                            <button onClick={toggleModal} className="deleteinventory__overlay-content-buttons-cancel">Cancel</button>
                            <button onClick={handleDelete} className="deleteinventory__overlay-content-buttons-delete">Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DeleteInventory;