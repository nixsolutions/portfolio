import React, { Component } from 'react';
class Button extends Component {
  render() {
    return (
      <button className="button-large">{this.props.buttonName}</button>
    );
  }
}

export default Button;