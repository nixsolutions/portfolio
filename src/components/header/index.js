import React from 'react';
import InfoBox from './infoBox/index';
import Logo from './logo/index';

const Header = () => (
  <div className="header">
    <div className="container">
      <Logo />
      <InfoBox />
    </div>
  </div>
    );

export default Header;
