export default function (state = [], action) {
  switch (action.type) {
    case 'PROJECTS_LOADED':
      return [...state, action.data];
    default:
      return state;
  }
}
