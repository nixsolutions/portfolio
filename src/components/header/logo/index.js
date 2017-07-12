import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/">
          <div className="logo-img"/>
        </Link>
      </div>
    );
  }
}

export default Logo;