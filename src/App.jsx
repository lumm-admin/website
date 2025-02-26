import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

// Manage routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' default element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
