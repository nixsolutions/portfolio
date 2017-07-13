import React, { Component } from 'react';

class Categories extends Component {
  render() {
    return (
      <div className="filters-inner">
        <div className="filters">
          <div className="filters-close-wrapper">
            <a href="home" className="filters-close">~</a>
          </div>
          <h3 className="categories-title">Categories</h3>
          <ul className="categories-inputs">
            {this.props.types.map( (type, index) =>
              <li key={index} className="categories-input-wrapper">
                <input type="checkbox" id={type.name} className="categories-input"/>
                <label htmlFor={type.name} className="categories-label">{type.name}</label>
              </li>
            )}
          </ul>
          <div className="uncheck-inputs"><span className="uncheck-icon">X</span> <span className="uncheck-text">Uncheck All</span>
          </div>
          <div className="more-categories"></div>
        </div>
        <a href="home" className="filters-apply">Apply</a>
      </div>
    );
  }
}

export default Categories;