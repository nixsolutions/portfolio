export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const FAILURE_PROJECTS = 'FAILURE_PROJECTS';

export function requestProjects() {
  return {
    type: REQUEST_PROJECTS,
  };
}

export function receiveProjects(data) {
  return {
    type: RECEIVE_PROJECTS,
    data,
  };
}

export function failureProjects(data) {
  return {
    type: FAILURE_PROJECTS,
    data,
  };
}
