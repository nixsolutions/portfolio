import React, { Component } from 'react';
import _ from 'lodash'

class Categories extends Component {
  constructor( props ) {
    super( props );

    this.handleOnClickChecked = this.handleOnClickChecked.bind( this );
  }

  handleOnClickChecked( type ) {
    type.checked = true;
    this.setState( this.props.types );
    // _.each(this.props.types, (lang) => {this.filteringProjects(lang.name)})
  }

  // filteringProjects(type) {
  //   this.props.filteredProjects = _.map(this.props.projects, (project)=> project.language === type);
  //   this.setState(this.props.filteredProjects)
  // }

  render() {
    return (
      <div className="filters-inner">
        <div className="filters">
          <div className="filters-close-wrapper">
            <a href="home" className="filters-close">~</a>
          </div>
          <h3 className="categories-title">Categories</h3>
          <ul className="categories-inputs">
            {this.props.types.map( ( type, index ) =>
              <li key={index} className="categories-input-wrapper">
                <input type="checkbox" id={type.name} checked={type.checked === true} className="categories-input"
                       onChange={( e ) => this.handleOnClickChecked( type )}/>
                <label htmlFor={type.name} className="categories-label">{type.name}</label>
              </li>
            )}
          </ul>
          <div className="uncheck-inputs" onClick={this.props.onClick}>
            <span className="uncheck-icon">X</span>
            <span className="uncheck-text">Uncheck All</span>
          </div>
          <div className="more-categories"></div>
        </div>
        <a href="home" className="filters-apply">Apply</a>
      </div>
    );
  }
}

export default Categories;