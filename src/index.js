import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import store, { history } from './store/store';
import routes from './routes';
import './assets/scss/style.css';
import './assets/css/reset.css';

const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route>{routes}</Route>
    </ConnectedRouter>
  </Provider>,
  target,
);
