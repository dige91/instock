
import AddInventory from "../../components/AddInventory/AddInventory";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
import './Inventory.scss';
import { Link } from "react-router-dom";
import Chevron from '../../assets/icons/chevron_right-24px.svg'
import Edit from '../../assets/icons/edit-24px.svg';

const InventoryList = ({ inventory, setInventory, id}) => {

    if (!inventory){
        return(
            <>
            <h2>Item not found</h2>
            </>
        )
    }
    return (
    <>
    <div className="item">
            <div className="item__left">
                <div className="item__left-inventory">
                    <h4 className='headings'>Inventory</h4>
                    <Link to ={`/inventory-info/${inventory.id}`} >
                    <div className='item__left-inventory__name'>{inventory.inventory_name}
                    </div>
                    </Link>
                        

                </div>
                <div className="item__left-adress">
                    <h4 className='headings'>ADDRESS</h4>
                    <p>{inventory.address},
                        {" " + inventory.city},
                        {" " + inventory.country}</p>
                </div>
                <DeleteInventory id={id} setInventory={setInventory} classNm=" deletemodal item__icons-delete" />
                {/* <img className="item__icons-delete" src={del} alt="delete icon"></img> */}
            </div>
            <div className='item__right'>
                <div className="item__right-name">
                    <h4 className='headings'>CONTACT NAME</h4>
                    <div>{inventory.contact_name}</div>
                </div>
                <div className="item__right-contact">
                    <h4 className='headings'>CONTACT INFORMATION</h4>
                    <p>{inventory.contact_phone}</p>
                    <p>{inventory.contact_email}</p>
                </div>

                <Link to={`/edit-inventory/${inventory.id}`}><img className="item__right-update" src={Edit} alt="edit icon"></img></Link>
            </div>
            <div className="item__icons2">
                {/* <img onClick={<DeleteModal/>} className="item__icons2-delete" src={del} alt="delete icon"></img> */}
                <DeleteInventory id={id} setinventory={setinventory} classNm=" deletemodal item__icons2-delete"/>
                <Link to={`/edit-inventory/${inventory.id}`}><img className="item__icons2-update" src={Edit} alt="edit icon"></img></Link>
            </div>
            <DeleteInventory/>÷,,
            
        </div>
                 Loading ...
    </>
    );
}

export default InventoryList;