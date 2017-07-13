import { getProjects } from 'api/index';

export function loadProjects() {
  return {
    type: 'PROMISE',
    actions: ['PROJECTS_LOADING', 'PROJECTS_LOADED', 'PROJECTS_LOAD_FAILURE'],
    promise: getProjects()
  };
}