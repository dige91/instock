import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Inventory from './pages/Inventory/Inventory';
import Warehouse from './pages/Warehouse/Warehouse';
import Header from './components/Header/Header';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import EditWarehouse from './components/EditWarehouse/EditWarehouse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Warehouse/>} />
          <Route path= '/inventory' element={<Inventory/>} />
<<<<<<< HEAD
          <Route path='/add-warehouse' element={<AddWarehouse />} />
=======
          <Route path='/add-a-warehouse' element={<AddWarehouse />} />
          <Route path='/edit-warehouse/:id' element={<EditWarehouse />} />
>>>>>>> develop
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;