import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Inventory from './Components/pages/Inventory/Inventory';
import Warehouse from './Components/pages/Warehouse/Warehouse';
import Header from './components/pages/Header/Header';

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
    </div>
  );
}

export default App;
