import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Inventory from './pages/Inventory/Inventory';
import Warehouse from './pages/Warehouse/Warehouse';
import Header from './components/Header/Header';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import Footer from './components/Footer/Footer'
import AddInventory from './components/AddInventory/AddInventory';
import WarehouseInfo from './components/WarehouseInfo/WarehouseInfo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EditInventoryItem from './components/EditInventoryItem/EditInventoryItem';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';


function App() {

  const REACT_APP_BACKEND_URL = "http://localhost:8080/api/warehouses";
  const [warehouses, setWarehouses] = useState(null);
  const [inventories, setInventories] = useState(null);

    useEffect(() => {
        async function getWarehouses(){
            const response = await axios.get(REACT_APP_BACKEND_URL);
            setWarehouses(response.data);
        }
        getWarehouses();
    },[])

    useEffect(() => {
      async function getInventories(){
          const response = await axios.get('http://localhost:8080/api/inventories');
          setInventories(response.data);
      }
      getInventories();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path= '/add-an-item' element={<AddInventory warehouses={warehouses} setWarehouses={setWarehouses}/>} />
          <Route path='/' element={<Warehouse warehouses={warehouses} setWarehouses={setWarehouses}/>} />
          <Route path='/inventory' element={<Inventory inventories={inventories}/>} />
          <Route path='/inventory/:id' element={<InventoryDetails warehouses={warehouses}/>} />
          <Route path='/add-a-warehouse' element={<AddWarehouse />} />
          <Route path='/edit-warehouse/:id' element={<EditWarehouse />} />
          <Route path='/warehouse-info/:id' element={<WarehouseInfo warehouses={warehouses}/>} />
          <Route path='/edit-inventory-item/:id' element={<EditInventoryItem warehouses={warehouses} setWarehouses={setWarehouses}/>} />
        </Routes>
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;