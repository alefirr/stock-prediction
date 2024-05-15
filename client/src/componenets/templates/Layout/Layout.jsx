import React from 'react';
import './Layout.css';
import { Search } from '../../ui';
import { Analysis } from '../Analysis';

export const Layout = () => {
  return (
    <div>
      <Search />
      <Analysis />
    </div>
  );
};
