import React, { useState } from 'react';
import './Layout.css';
import { Search } from '../../ui';
import { Analysis } from '../Analysis';

export const Layout = () => {
  const [currentTicker, setCurrentTicker] = useState('');

  return (
    <div className="main-container">
      <h1>Make profitable stock picks with AI</h1>
      <Search setCurrentTicker={setCurrentTicker} />

      <Analysis currentTicker={currentTicker} />
    </div>
  );
};
