import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import reducers from '../reducers/index';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware,
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const enhancer = compose(
  applyMiddleware(...middleware),
);

const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
