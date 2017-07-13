import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/store'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import App from 'components/app'
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/css/reset.css'
import 'assets/scss/style.css'

const middleware = [ thunk ];

if ( process.env.NODE_ENV !== 'production' ) {
  middleware.push( createLogger() )
}

const target = document.querySelector( '#root' );

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);
