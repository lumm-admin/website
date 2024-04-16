import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorHandlerWrapper from './ErrorHandler/ErrorHandlerWrapper';
import Home from './pages/Home/Home';

// Manage routing
function App() {
  return (
    <Router>
      <ErrorHandlerWrapper>
        <Routes>
          <Route path='/' default element={<Home />} />
        </Routes>
      </ErrorHandlerWrapper>
    </Router>
  );
}

export default App;
