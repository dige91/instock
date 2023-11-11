
import AddInventory from "../../components/AddInventory/AddInventory";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
import './Inventory.scss';
import WarehouseCard from '../../components/WarehouseCard/WarehouseCard';

<<<<<<< HEAD
const Inventory = ( {warehouses , setWarehouses} )=> {
    return (
        <WarehouseCard  warehouses={warehouses} setWarehouses={setWarehouses} />
=======
const Inventory = ()=> {
    return (
    <>
    <DeleteInventory/>
                 Loading ...
    </>
>>>>>>> develop
    );
}

export default Inventory;