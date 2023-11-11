import './Inventory.scss';
import WarehouseCard from '../../components/WarehouseCard/WarehouseCard';

const Inventory = ( {warehouses , setWarehouses} )=> {
    return (
        <WarehouseCard  warehouses={warehouses} setWarehouses={setWarehouses} />
    );
}

export default Inventory;