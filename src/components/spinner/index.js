import React, { Component } from 'react';
import './style.css'

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="cube1" />
        <div className="cube2" />
      </div>
    );
  }
}

export default Spinner;