export default function ( state =  {projects: [], showSpinnerProjects: false}, action ) {
  switch (action.type) {
    case 'PROJECTS_LOADING':
      return {
        ...state,
        projects: [],
        showSpinnerProjects: true
      };
    case 'PROJECTS_LOADED':
      return {...state,
        projects: action.data,
        showSpinnerProjects: false
      };
    default:
      return state;
  }
}
