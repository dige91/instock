import './WarehouseItem.scss';
import '../../App.scss';
// import arrow from '../../assets/Icons/chevron_right-24px.svg';
import del from '../../assets/Icons/delete_outline-24px.svg';
import edit from '../../assets/Icons/edit-24px.svg';

const WarehouseItem = ({ warehouse }) => {
    return (
        <>
        <div className="item">
            <div className="item__left">
                <div className="item__left-warehouse">
                    <h4 className='headings'>WAREHOUSE</h4>
                    <div className='item__left-warehouse__name'>{warehouse.warehouse_name}</div>

                </div>
                <div className="item__left-adress">
                    <h4 className='headings'>ADDRESS</h4>
                    <p>{warehouse.address},
                        {" " + warehouse.city},
                        {" " + warehouse.country}</p>
                </div>
                <img className="item__icons-delete" src={del} alt="delete icon"></img>
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

                <img className="item__right-update" src={edit} alt="edit icon"></img>
            </div>
            {/* <div className="item__icons">
                <img className="item__icons-delete" src={del} alt="delete icon"></img>
                <img className="item__icons-update" src={edit} alt="edit icon"></img>
            </div> */}
        </div>
        </>
    )
}

export default WarehouseItem;