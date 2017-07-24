import React, { Component } from 'react';

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
        List of projects
      </div>
    );
  }
}

export default Projects;
