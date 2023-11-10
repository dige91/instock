import './WarehouseItem.scss';
import '../../App.scss';
import chevron from '../../assets/icons/chevron_right-24px.svg';
import del from '../../assets/icons/delete_outline-24px.svg';
import edit from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal/DeleteModal';

const WarehouseItem = ({ warehouse ,setWarehouses, id }) => {
    
    if (!warehouse){
        return (
            <>
                <h2>Loading......</h2>
            </>
        )
    }
    console.log(warehouse)
    
    return (
        <>
        <div className="item">
            <div className="item__left">
                <div className="item__left-warehouse">
                    <h4 className='headings'>WAREHOUSE</h4>
                
                    <div className='item__left-warehouse__name'>{warehouse.warehouse_name}
                    <Link to ={`/warehouse-info/${warehouse.id}`} >
                    <img className='logo' src={chevron} alt="chevron"/>
                    </Link>
                    </div>
                        

                </div>
                <div className="item__left-adress">
                    <h4 className='headings'>ADDRESS</h4>
                    <p>{warehouse.address},
                        {" " + warehouse.city},
                        {" " + warehouse.country}</p>
                </div>
                <DeleteModal id={id} setWarehouses={setWarehouses} classNm=" deletemodal item__icons-delete" />
                {/* <img className="item__icons-delete" src={del} alt="delete icon"></img> */}
            </div>
            <div className='item__right'>
                <div className="item__right-name">
                    <h4 className='headings'>CONTACT NAME</h4>
                    <div>{warehouse.contact_name}</div>
                </div>
                <div className="item__right-contact">
                    <h4 className='headings'>CONTACT INFORMATION</h4>
                    <p>{warehouse.contact_phone}</p>
                    <p>{warehouse.contact_email}</p>
                </div>

                <Link to={`/edit-warehouse/${warehouse.id}`}><img className="item__right-update" src={edit} alt="edit icon"></img></Link>
            </div>
            <div className="item__icons2">
                {/* <img onClick={<DeleteModal/>} className="item__icons2-delete" src={del} alt="delete icon"></img> */}
                <DeleteModal id={id} setWarehouses={setWarehouses} classNm=" deletemodal item__icons2-delete"/>
                <Link to={`/edit-warehouse/${warehouse.id}`}><img className="item__icons2-update" src={edit} alt="edit icon"></img></Link>
            </div>
        </div>
        </>
    )
}

export default WarehouseItem;