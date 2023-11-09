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
          <Route path='/add-a-warehouse' element={<AddWarehouse />} />
<<<<<<< Updated upstream
          <Route path='/edit-warehouse/:id' element={<EditWarehouse />} />
=======
          <Route path='/update-warehouse/:id' element={<EditWarehouse />} />s
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;