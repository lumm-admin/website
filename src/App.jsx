import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';

// Manage routing
function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Routes>
          <Route path='/' default element={<Home />} />
          <Route path='/about' default element={<About />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
