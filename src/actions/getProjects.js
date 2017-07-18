import { getProjects } from '../api/index';

export default function () {
  return {
    type: 'PROMISE',
    actions: ['PROJECTS_LOADING', 'PROJECTS_LOADED', 'PROJECTS_LOAD_FAILURE'],
    promise: getProjects(),
  };
}
