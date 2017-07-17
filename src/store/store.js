import { createStore, applyMiddleware } from 'redux'
import promisesMiddleware from 'middlewares/promises'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import Projects from 'reducers/Projects'
import Portfolio from 'reducers/Portfolio'
import logger from 'redux-logger'
import { combineReducers } from 'redux'

export const history = createHistory();

const middleware = [
promisesMiddleware,
thunk,
routerMiddleware( history )
];

function reducer( state, action ) {
  return {
    projects: Projects( state.projects, action ),
    portfolio: Portfolio( state.portfolio, action )
  }
}

const createStoreWithMiddleware = applyMiddleware( ...middleware, logger )( createStore );

const store = createStoreWithMiddleware(
  reducer,
  {
    projects: [],
    portfolio: []
  }
);

export default store;
