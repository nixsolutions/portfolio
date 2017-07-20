import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from '../reducers/index';
import rootSaga from '../saga/index';

const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();

const middleware = [
  applyMiddleware(sagaMiddleware),
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

sagaMiddleware.run(rootSaga);

const store = createStoreWithMiddleware(reducers);

export default store;
