import React from 'react';
import { Route, Link } from 'react-router-dom'
import Header from '../header'
import Home from '../home'
import Portfolio from '../portfolio'

const App = () => (
  <div>
    <Header/>
    <header>
      <Link to="/">Home</Link>
      <Link to="/portfolio">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home}/>
      <Route exact path="/portfolio" component={Portfolio}/>
    </main>
  </div>
);

export default App