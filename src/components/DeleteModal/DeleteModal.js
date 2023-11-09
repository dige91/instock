import React, { useState } from "react";
import '../DeleteModal/DeleteModal.scss';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Close from '../../assets/icons/close-24px.svg';
import Warehouse from "../../pages/Warehouse/Warehouse";
import axios from "axios";
import { Link } from "react-router-dom";



// const handleDelete = (id) => {

//     const deleteWarehouse = async () => {
//         try {
//             const response = await axios.delete(`http://${localhost}:8080/delete/${id}`);
//             const updatedWarehouses = Warehouse.filter((warehouse) => warehouse.id !== id);
//             setWarehouse(updatedWarehouses);
//         } catch (error) {
//             console.error(error);
//         }
//     }
//     deleteWarehouse();
// }

const DeleteModal = ({classNm}) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    
    return (

        <div className={classNm}>
            {/* <div className='user' key={Warehouse.id}>
                {warehouse.name}
                <Link to={`/update-user/${warehouse.id}`}><div>🖊</div></Link>
            </div> */}

        <img src={Delete} onClick={toggleModal} />
          
        {modal && (
            <div className="deletemodal__overlay">
                <div className="deletemodal__overlay-content">
                <div className="deletemodal__overlay-content-top">
                <img onClick={toggleModal} className="deletemodal__overlay-content-top-close" src={Close}/>
            <h2 className="deletemodal__overlay-content-top-header">Delete Washington warehouse? </h2>
            <p className="deletemodal__overlay-content-top-confirm">
                Please confirm that youd like to delete the Washington warehouse from the list of warehouses.
                 You wont be able to undo this action</p>
                </div>
            <div className="deletemodal__overlay-content-buttons">
            <button onClick={toggleModal} className="deletemodal__overlay-content-buttons-cancel">Cancel</button>
            <button onClick={toggleModal} className="deletemodal__overlay-content-buttons-delete">Delete</button>
            </div>
        </div>
        </div>
        )}

       </div> 
      );
}
 
export default DeleteModal; 