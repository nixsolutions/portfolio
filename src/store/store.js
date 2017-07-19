import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import promisesMiddleware from '../middlewares/promises';
import reducers from '../reducers/index';

export const history = createHistory();

const middleware = [
  promisesMiddleware,
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(reducers);

export default store;
