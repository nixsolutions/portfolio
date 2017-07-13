import fetch from 'isomorphic-fetch';

export function getProjects() {
  return fetch( `http://10.10.54.142:8080/data` )
    .then( ( r ) => r.json() );
}

// export function getProjects() {
//   return fetch( 'https://api.github.com/users/nixsolutions/repos' )
//     .then( ( r ) => r.json() );
// }