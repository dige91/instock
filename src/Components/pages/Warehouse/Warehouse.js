import './Warehouse.scss';
import '../../../App.scss';
import { Link } from 'react-router-dom';
import search from '../../../assets/Icons/search-24px.svg';

const Warehouse = () => {
    return (
        <div className='warehouse'>
            <div className='warehouse__header'>
                <h1 className="warehouse__header-title">Warehouses</h1>
                <div className="warehouse__header-search">
                    <input className="warehouse__header-search__text" type="text" id="searchInput" placeholder="Search..." />
                    <img className="warehouse__header-search__icon" src={search} alt="Search" />
                </div>
                {/* <Link to='#'> */}
                    <button className="warehouse__header-button">
                        <p className="warehouse__header-button__text">+ Add New Warehouse</p>
                    </button>
                {/* </Link> */}
            </div>
        </div>
    );
}

export default Warehouse;