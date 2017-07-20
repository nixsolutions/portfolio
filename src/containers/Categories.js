import React, { Component } from 'react';
import classNames from 'classnames/bind';
import _ from 'lodash';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: props.types,
      listToggle: false,
      checked: false,
    };
    this.handleOnClickChecked = this.handleOnClickChecked.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.types.length !== this.state.types.length) {
      this.setState({ types: nextProps.types });
    }
  }

  handleOnClickChecked(type, index, types) {
    !type.checked ? type.checked = true : type.checked = false;
    let checkedItem = false;
    _.each(types, (item) => {
      if (item.checked) {
        checkedItem = true;
      }
    });

    this.setState({ types, checked: checkedItem });
  }

  handleClickUncheckAll() {
    _.each(this.state.types, (item) => {
      item.checked = false;
    });
    this.setState(this.props.types);
    this.props.uncheckAll();
  }

  moreCategories() {
    let status = this.state.listToggle;
    !status ? status = true : status = false;
    this.setState({ listToggle: status });
  }

  render() {
    const ulClass = classNames({
      'categories-inputs': true,
      active: this.state.listToggle,
    });

    const checkedClass = classNames({
      'uncheck-inputs': true,
      'uncheck-inputs-disabled': !this.state.checked,
    });
    return (
      <div className="filters-inner">
        <div className="filters">
          <div className="filters-close-wrapper">
            <a href="home" className="filters-close">~</a>
          </div>
          <h3 className="categories-title">Categories</h3>
          <ul className={ulClass}>
            {this.state.types.map((type, index, types) =>
              (<li key={index} className="categories-input-wrapper">
                <input
                  type="checkbox"
                  id={type.name}
                  checked={type.checked === true}
                  className="categories-input"
                  onChange={() => this.handleOnClickChecked(type, index, types)}
                  onClick={() => {
                    this.props.onClickFilter(type);
                  }}
                />
                <label htmlFor={type.name} className="categories-label">{type.name}</label>
              </li>),
            )}
          </ul>
          <div
            className={checkedClass}
            onClick={() => this.handleClickUncheckAll()}
          >
            <span className="uncheck-icon">X</span>
            <span className="uncheck-text">Uncheck All</span>
          </div>
          {this.state.types.length > 5 &&
            <div
              className="more-categories"
              onClick={() => this.moreCategories()}
            />
          }
        </div>
        <a href="home" className="filters-apply">Apply</a>
      </div>
    );
  }
}

export default Categories;
