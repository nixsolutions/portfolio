import React from 'react';
import { Route } from 'react-router-dom';
import Demo from './containers/Projects';
import Projects from './containers/DemoProjects';
import Home from './components/home';
import Root from './components/root';
import PrivateRoute from './common/privateRoute';

export default () => (
  <Root>
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/project" component={Demo} />
    <Route path="/demo" component={Projects} />
  </Root>
);

