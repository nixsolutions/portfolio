import React from 'react';
import Header from '../header'
import Home from '../home'
import { Route } from 'react-router-dom'
import  Project from '../projects'
import  Demo from '../demo'


const App = () => (
  <div className="page-container mobile-fix-height">
    <Header/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/project" component={Project}/>
    <Route exact path="/demo" component={Demo}/>
  </div>
);

export default App