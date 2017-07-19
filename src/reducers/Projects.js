const initialState = {
  projects: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'PROJECTS_LOADED':
      return Object.assign({}, { projects: action.data });
    default:
      return state;
  }
}
