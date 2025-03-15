import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Shop from './pages/Shop.jsx';
import ShopSuccess from './pages/ShopSuccess.jsx';
import ProductDetail from './pages/ProductDetail.jsx';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Home />} />
        <Route path='/about' default element={<About />} />
        <Route path='/contact' default element={<Contact />} />
        <Route path='/shop' default element={<Shop />} />
        <Route path='/shop/success' default element={<ShopSuccess />} />
        <Route path='/shop/product/:productId' element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
