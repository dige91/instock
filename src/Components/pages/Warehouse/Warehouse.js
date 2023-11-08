import './Warehouse.scss';
import '../../../App.scss';
import { Link } from 'react-router-dom';
import search from '../../../assets/Icons/search-24px.svg';

const Warehouse = () => {
    return (

        <div className="warehouses">
            <div className="warehouses__header">
                <h1 className="warehouses__header-title">Warehouses</h1>
                <div className="warehouses__header-container">
                    <form className="warehouses__header-form">
                        <input type="search" name="search" className="warehouses__header-form-search" placeholder="Search..." />
                        <Link to="#">
                            <button className="warehouses__header-form-button">+ Add New Warehouse</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Warehouse;

