import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Portfolio from '../reducers/Portfolio';
import Projects from '../reducers/Projects';

const reducers = combineReducers({
  projects: Projects,
  portfolio: Portfolio,
  form: formReducer,
});

export default reducers;
