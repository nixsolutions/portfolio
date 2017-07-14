import fetch from 'isomorphic-fetch';
import Constants from 'constants/api.config';

export function getProjects() {
  let body = {
    headers: {
      Authorization: 'token 31d5f34a2f49a290e560d2904f22d0b78dc6d4c7'
    }
  };

  return fetch( `${Constants.API_ROOT}users/${Constants.USER_NAME}/repos`, body )
    .then( ( r ) => r.json() );
}
