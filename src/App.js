import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Inventory from './pages/Inventory/Inventory';
import Warehouse from './pages/Warehouse/Warehouse';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';
import WarehouseInfo from './components/WarehouseInfo/WarehouseInfo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EditInventoryItem from './components/EditInventoryItem/EditInventoryItem';


function App() {

  const REACT_APP_BACKEND_URL = "http://localhost:8080/warehouse";
  const [warehouses, setWarehouses] = useState(null);

    useEffect(() => {
        async function getWarehouses(){
            const response = await axios.get(REACT_APP_BACKEND_URL);
            setWarehouses(response.data);
        }
        getWarehouses();
    },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Warehouse warehouses={warehouses} setWarehouses={setWarehouses}/>} />
          <Route path='/inventory' element={<Inventory warehouses={warehouses} setWarehouses={setWarehouses}/>} />
          <Route path='/add-a-warehouse' element={<AddWarehouse />} />
          <Route path='/edit-warehouse/:id' element={<EditWarehouse />} />
          <Route path='/warehouse-info/:id' element={<WarehouseInfo warehouses={warehouses}/>} />
          <Route path='edit-inventory-item' element={<EditInventoryItem />} />
        </Routes>
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;