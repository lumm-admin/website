import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Home />} />
        <Route path='/about' default element={<About />} />
        <Route path='/contact' default element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
