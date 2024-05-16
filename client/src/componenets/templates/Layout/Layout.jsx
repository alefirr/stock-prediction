import React from 'react';
import './Layout.css';
import { Search } from '../../ui';
import { Analysis } from '../Analysis';

export const Layout = () => {
  return (
    <div className="main-container">
      <h1>Make profitable stock picks with AI</h1>
      <Search />
      <Analysis />
    </div>
  );
};
