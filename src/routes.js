import React from 'react';
import { Route } from 'react-router-dom';
import Demo from './containers/Projects';
import Projects from './containers/DemoProjects';
import Home from './components/home';
import AddProject from './components/addProject';
import Root from './components/root';

export default () => (
  <Root>
    <Route exact path="/" component={Home} />
    <Route path="/project" component={Demo} />
    <Route path="/demo" component={Projects} />
    <Route path="/addProject" component={AddProject} />
  </Root>
);

