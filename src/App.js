import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import RefundPage from './pages/RefundPage/RefundPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route  path='/' element={<HomePage/>}/>
            <Route path='/catalog' element={<CatalogPage/>}/>
            <Route path='/refund' element={<RefundPage/>}/>
            <Route path='/tricko' element ={<ProductsPage/>}/>
         </Routes>
    </div>
  );
}

export default App;
