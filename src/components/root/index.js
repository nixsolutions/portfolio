import React from 'react';
import Header from '../header';

const Root = ({ children }) => (
  <div className="page-container mobile-fix-height">
    <Header />
    {children}
  </div>
);

export default Root;
