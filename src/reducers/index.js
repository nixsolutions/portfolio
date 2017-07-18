import { combineReducers } from 'redux';
import Portfolio from '../reducers/Portfolio';
import Projects from '../reducers/Projects';

const reducers = combineReducers({
  projects: Projects,
  portfolio: Portfolio,
});

export default reducers;
