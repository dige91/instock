import './Warehouse.scss';
import '../../App.scss';
import WarehouseItem from '../WarehouseItem/WarehouseItem';
import { Link } from 'react-router-dom';
import sort from '../../assets/Icons/sort-24px.svg';

const warehouses = [
    {
        id: 1,
        warehouse_name: 'Manhattan',
        address: '503 Broadway',
        city: 'New York',
        country: 'USA',
        contact_name: 'Parmin Aujla',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'paujla@instock.com',
    },
    {
        id: 2,
        warehouse_name: 'Washington',
        address: '33 Pearl Street SW',
        city: 'Washington',
        country: 'USA',
        contact_name: 'Greame Lyon',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'glyon@instock.com',
    },
    {
        id: 3,
        warehouse_name: 'Jersey',
        address: '300 Main Street',
        city: 'New Jersey',
        country: 'USA',
        contact_name: 'Brad MacDonald',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'bmcdonald@instock.com',
    },
    {
        id: 4,
        warehouse_name: 'SF',
        address: '890 Brannnan Street',
        city: 'San Francisco',
        country: 'USA',
        contact_name: 'Gary Wong',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'gwong@instock.com',
    },
    {
        id: 5,
        warehouse_name: 'Santa Monica',
        address: '520 Broadway',
        city: 'Santa Monica',
        country: 'USA',
        contact_name: 'Sharon Ng',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'sng@instock.com',
    },
    {
        id: 6,
        warehouse_name: 'Seattle',
        address: '1201 Third Avenue',
        city: 'Seattle',
        country: 'USA',
        contact_name: 'Daniel Bachu',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'dbachu@instock.com',
    },
    {
        id: 7,
        warehouse_name: 'Miami',
        address: '2650 NW 5th Avenue',
        city: 'Miami',
        country: 'USA',
        contact_name: 'Alana Thomas',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'athomas@instock.com',
    },
    {
        id: 8,
        warehouse_name: 'Boston',
        address: '215 Essex Street',
        city: 'Boston',
        country: 'USA',
        contact_name: 'Vanessa Mendoza',
        contact_position: 'Warehouse Manager',
        contact_phone: '+1 (646) 123-1234',
        contact_email: 'vmendoza@instock.com',
    },
]

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
            {warehouses.map((warehouse) => (
                <WarehouseItem key={warehouse.id} warehouse={warehouse} />
            ))}
        </div>

    );
}

export default Warehouse;