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
            <li className="categories-input-wrapper">
              <input type="checkbox" id="js" className="categories-input"/>
              <label htmlFor="js" className="categories-label">JavaScript</label>
            </li>
            <li className="categories-input-wrapper">
              <input type="checkbox" id="webDevelopment" className="categories-input"/>
              <label htmlFor="webDevelopment" className="categories-label">Web Development</label>
            </li>
            <li className="categories-input-wrapper">
              <input type="checkbox" id="php" className="categories-input"/>
              <label htmlFor="php" className="categories-label">PHP</label>
            </li>
            <li className="categories-input-wrapper">
              <input type="checkbox" id="frontEnd" className="categories-input"/>
              <label htmlFor="frontEnd" className="categories-label">Front-End</label>
            </li>
            <li className="categories-input-wrapper">
              <input type="checkbox" id="webApps" className="categories-input"/>
              <label htmlFor="webApps" className="categories-label">Web Apps</label>
            </li>
            <li className="categories-input-wrapper">
              <input type="checkbox" id="backEnd" className="categories-input"/>
              <label htmlFor="backEnd" className="categories-label">Back-End</label>
            </li>
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