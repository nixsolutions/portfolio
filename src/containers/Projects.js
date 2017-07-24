import React, { Component } from 'react';
import AddProject from '../components/addProject';

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projectName: '',
      valid: true,
    };
  }

  render() {
    return (
      <div className="container">
        <AddProject />
      </div>
    );
  }
}

export default Projects;
