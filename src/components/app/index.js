import React from 'react';
import { Route } from 'react-router-dom';
import Demo from '../../containers/Projects';
import Projects from '../../containers/DemoProjects';
import Header from '../header';
import Home from '../home';

const App = () => (
  <div className="page-container mobile-fix-height">
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/project" component={Demo} />
    <Route exact path="/demo" component={Projects} />
  </div>
);

export default App;
