import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AboutPage from './AboutPage'; 
import ContactPage from './ContactPage';
import HomePage from './HomePage';



const UnlockedPage = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to switch between pages
  const changePage = (page) => {
    setCurrentPage(page);
  }
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <nav className="bottom-nav">
        <ul>
          <li className="nav-item" onClick={() => changePage('home')}>Home</li>
          <li className="nav-item" onClick={() => changePage('about')}>About</li>
          <li className="nav-item" onClick={() => changePage('contact')}>Contact</li>
        </ul>
      </nav>
       {renderPage()}
       </div>
    
  );
}
export default UnlockedPage;