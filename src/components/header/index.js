import React, { Component } from 'react';
import Logo from 'components/header/logo/index'
import InfoBox from 'components/header/infoBox/index'
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <Logo/>
          <InfoBox/>
        </div>
      </div>
    );
  }
}

export default Header;