import React, { Component } from 'react';
import InputField from '../components/inputField';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      valid: true,
    };
  }

  handleOnChange(field) {
    console.log(field);
  }

  render() {
    return (
      <div className="container">
        <span>Projects component</span>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <InputField
            lable={'projectName'}
            name={'ProjectName'}
            onChange={field => this.handleOnChange(field)}
            valid={isvalid => this.setState({ valid: isvalid })}
          />

          <InputField
            name={'Name'}
            onChange={field => this.handleOnChange(field)}
            valid={isvalid => this.setState({ valid: isvalid })}
          />

          <button disabled={!this.state.valid} type="submit" className="btn btn-default" >Submit</button>
        </form>
      </div>
    );
  }
}

export default Projects;
