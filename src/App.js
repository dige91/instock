import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Inventory from './pages/Inventory/Inventory';
import Warehouse from './pages/Warehouse/Warehouse';
import Header from './components/Header/Header';
import DeleteModal from './components/DeleteModal/DeleteModal';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Warehouse/>} />
          <Route path= '/inventory' element={<Inventory/>} />
        </Routes>
      </BrowserRouter>
      <DeleteModal/>
    </div>
  );
}

export default App;
