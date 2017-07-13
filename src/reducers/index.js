import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

const projects = ( state = {
  isFetching: false,
  items: []
}, action ) => {
  switch (action.type) {
    case REQUEST_POSTS:
      console.log('1');
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_POSTS:
      console.log('2');
      return {
        ...state,
        items: action.projects,
        isFetching: false
      };
    default:
      return state
  }
};

const projectsFromGitHub = ( state = {}, action ) => {
  console.log('actionType', action.type);
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      console.log('projectsFromGitHub case');
      return {
        ...state,
        [action]: projects( state, action )
      };
    default:
      console.log('projectsFromGitHub default');
      return state
  }
};

const rootReducer = combineReducers( {
  routing: routerReducer,
  projectsFromGitHub
} );

export default rootReducer
