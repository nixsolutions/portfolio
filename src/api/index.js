import fetch from 'isomorphic-fetch';
import Constants from '../constants/api.config';

export function getProjects() {
  const header = {
    headers: {
      Authorization: 'token 31d5f34a2f49a290e560d2904f22d0b78dc6d4c7',
    },
  };

  return fetch(`${Constants.API_ROOT}users/${Constants.USER_NAME}/repos`, header)
    .then(r => r.json());
}

export function getPortfolio(reposName) {
  return fetch(`${Constants.API_USERCONTENT}${Constants.USER_NAME}/${reposName}/master/.portfolio/.Portfolio.json`)
    .then(r => r.json())
    .catch(() => {});
}
