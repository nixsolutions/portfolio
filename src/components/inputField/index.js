import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './style.css';

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      invalidField: false,
    };
    this.handleValidation = this.handleValidation.bind(this);
  }
  handleValidation(i) {
    this.setState({ invalidField: true });
    console.log(i.target.value.length);
    if (i.target.value.length === 0) {
      console.log('1');
      this.setState({ invalidField: true });
    } else {
      console.log('2');
      this.setState({ invalidField: false });
    }
    console.log(this.state.invalidField);
    this.props.valid(this.state.invalidField);
  }

  resetInvalid() {
    // this.setState({ invalidField: false });
  }

  render() {
    const inputClass = classNames({
      'form-control': true,
      // eslint-disable-next-line
      'invalid': this.state.invalidField,
    });

    const { name, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>
          {name}
          <input
            className={inputClass}
            name={name}
            type="text"
            onClick={() => this.resetInvalid()}
            onBlur={i => this.handleValidation(i)}
            onChange={i => onChange(i.target.value)}
          />
        </label>
      </div>
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
