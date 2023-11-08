import React, { useState } from "react";
import '../DeleteModal/DeleteModal.scss';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Close from '../../assets/icons/close-24px.svg';


const DeleteModal = () => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
    return (
       <div className="deletemodal">
        <img src={Delete} onClick={toggleModal} className="deletemodal__button"/>
            Test
        {modal && (
            <div className="deletemodal__overlay">
                <div className="deletemodal__overlay-content">
                <div className="deletemodal__overlay-content-top">
                <img onClick={toggleModal} className="deletemodal__overlay-content-top-close" src={Close}/>
            <h2 className="deletemodal__overlay-content-top-header">Delete Washington warehouse? </h2>
            <p className="deletemodal__overlay-content-top-confirm">
                Please confirm that youd like to delete the<br/> Washington warehouse from the list of warehouses.
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