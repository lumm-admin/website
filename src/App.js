import './App.css';
import React, { useState } from 'react';
import UnlockedPage from './UnlockedPage';
import bcrypt from 'bcryptjs';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const staticSalt = '$2b$10$r7a4qexPOVLsJ9sr3iJY/e';
  const haspeas = '$2b$10$r7a4qexPOVLsJ9sr3iJY/eCWTI8P.m5xfnFcIBfcxPpK7XZnD8agS'
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
     

       //Update isUnlocked state based on the result
      setIsUnlocked(bcrypt.compareSync(password, haspeas));

      //setIsUnlocked(compare(password, 'onlybim'))
    }
    

  };
  return (
    <div className={`App ${isUnlocked ? 'unlocked' : 'locked'}`}>
     {isUnlocked ? (
        <UnlockedPage />
      ) : (
        <div className="locked-page">
          <input
            value={password}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
            style={{
               marginTop: '0px',
               fontFamily: 'Graduate, serif',
               height: '20px',
               width: '85px',
               fontSize: '20px' }} 
               autoFocus
          />
        </div>


      )}
    </div>
  );
}

export default App;
