// src/ColorChanger.js
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ColorChanger = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = '#000';
    }
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '5px'}}>
      <button onClick={toggleDarkMode} style={{ padding: '10px 20px', fontSize: '16px', marginBottom: '10px', borderRadius: '7%' }}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} style={{ marginRight: '8px' }} />
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ColorChanger;
