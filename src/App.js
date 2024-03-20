import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Navbar/Header';
import Footer from './Components/Footer/Footer';
import HomeCover from './pages/HomeCover';
import NotFound from './Components/NotFound';
// import Login from './pages/Login';
import Contact from './pages/Contact';
import Signinup from './pages/Signinup';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.jpg'
import kid_banner from './Components/Assets/banner_kids.png'




function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path='/' element={<HomeCover />}></Route>

        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />

        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />

        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />

        <Route path='/product' element={<Product />}>

          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />}></Route>

        {/* <Route path='/login' element={<Login />}></Route> */}

        <Route path='/contact' element={<Contact />}></Route>

        <Route path='/signinup' element={<Signinup />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
