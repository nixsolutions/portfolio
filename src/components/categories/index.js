import React, { Component } from 'react';
import classNames from 'classnames/bind';
import _ from 'lodash'

class Categories extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      types: this.props.types,
      listToggle: false
    };
    this.handleOnClickChecked = this.handleOnClickChecked.bind( this );
  }

  handleOnClickChecked( type ) {
    !type.checked ? type.checked = true : type.checked = false;
    this.setState( this.props.types );

  }

  handleClickUncheckAll() {
    _.each( this.state.types, item => {
      item.checked = false
    } );
    this.setState( this.props.types );
    this.props.uncheckAll();
  }

  moreCategories(){
    let status = this.state.listToggle;
    !status ? status = true : status = false;
    this.setState({listToggle: status});
  }

  render() {
    const ulClass = classNames( {
      'categories-inputs': true,
      'active': this.state.listToggle
    } );
    return (
      <div className="filters-inner">
        <div className="filters">
          <div className="filters-close-wrapper">
            <a href="home" className="filters-close">~</a>
          </div>
          <h3 className="categories-title">Categories</h3>
          <ul className={ulClass}>
            {this.state.types.map( ( type, index ) =>
              <li key={index} className="categories-input-wrapper">
                <input type="checkbox" id={type.name} checked={type.checked === true} className="categories-input"
                       onChange={( e ) => this.handleOnClickChecked( type )}
                       onClick={() => this.props.onClickFilter( type )}/>
                <label htmlFor={type.name} className="categories-label">{type.name}</label>
              </li>
            )}
          </ul>
          <div className="uncheck-inputs"
               onClick={() => this.handleClickUncheckAll()}>
            <span className="uncheck-icon">X</span>
            <span className="uncheck-text">Uncheck All</span>
          </div>
          <div className="more-categories"
               onClick={() => this.moreCategories()}></div>
        </div>
        <a href="home" className="filters-apply">Apply</a>
      </div>
    );
  }
}

export default Categories;