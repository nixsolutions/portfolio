import { createStore, applyMiddleware } from 'redux'
import promisesMiddleware from 'middlewares/promises'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from 'reducers/index'
import logger from 'redux-logger'

export const history = createHistory();

const middleware = [
  promisesMiddleware,
  thunk,
  routerMiddleware( history )
];

function reducer( state, action ) {
  return {
    projects: rootReducer( state.projects, action )
  }
}

const createStoreWithMiddleware = applyMiddleware( ...middleware, logger )( createStore );

const store = createStoreWithMiddleware(
  reducer,
  {
    projects: []
  }
);

export default store;
