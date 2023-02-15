import './App.css';
import {Routes , Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import RefundPage from './pages/RefundPage/RefundPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import PlashPage from './pages/PlashPage/PlashPage';
import PaltoPage from './pages/PaltoPage/PaltoPage'
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route  path='/' element={<HomePage/>}/>
            <Route path='/catalog' element={<CatalogPage/>}/>
            <Route path='/refund' element={<RefundPage/>}/>
            <Route path='/tricko' element ={<ProductsPage/>}/>
            <Route path='/about' element ={<AboutPage />}/>
            <Route path='/plash' element={<PlashPage/>}/>
            <Route path='/palto' element={<PaltoPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
         </Routes>
    </div>
  );
}

export default App;
