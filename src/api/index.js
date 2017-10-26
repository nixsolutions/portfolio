// import fetch from 'isomorphic-fetch';
// import Constants from '../constants/api.config';
//
// export function getProjects() {
//   const header = {
//     headers: {
//       Authorization: `token ${Constants.TOKEN}`,
//     },
//   };
//
//   return fetch(`${Constants.API_ROOT}users/${Constants.USER_NAME}/repos`, header)
//     .then(r => r.json());
// }
//
// export function getPortfolio(reposName) {
//   return fetch(`${Constants.API_USERCONTENT}${Constants.USER_NAME}/${reposName}/master/.portfolio/.Portfolio.json`)
//     .then(r => r.json())
//     .catch(() => {});
// }
import projectData from '../projects.json';

function getRepositoryName(repository) {
  return repository.replace(/https:\/\/github.com\/nixsolutions\//, '');
}

export function getProjects() {
  const data = [];
  projectData.forEach(project => data.push({ name: getRepositoryName(project.repository) }));
  return data;
}

export function getPortfolio(reposName) {
  return projectData.filter(project => getRepositoryName(project.repository) === reposName)[0];
}
