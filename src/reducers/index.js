export default function ( state = [], action ) {
  switch (action.type) {
    case 'PROJECTS_LOADED':
      return action.data;
    default:
      return state;
  }
}
