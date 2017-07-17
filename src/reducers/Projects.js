export default function ( state =  {projects: []}, action ) {
  switch (action.type) {
    case 'PROJECTS_LOADED':
      return action.data;
    default:
      return state;
  }
}
