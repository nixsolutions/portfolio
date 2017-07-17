import { createStore } from 'redux';

import projectReducer from 'reducers/Projects';
function reducer( state, action ) {
  return {
    projects: projectReducer( state.projects, action )
  }
}

const store = createStore(reducer, {
  projects: []
});

export default store;
