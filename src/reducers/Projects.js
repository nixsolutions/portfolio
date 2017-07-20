import * as actionsProjects from '../actions/getProjects';

const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionsProjects.RECEIVE_PROJECTS:
      return Object.assign({}, { projects: action.data });
    default:
      return state;
  }
}
