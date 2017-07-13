import fetch from 'isomorphic-fetch';

export function getProjects() {
  return fetch( `http://192.168.0.106:8080/data` )
    .then( ( r ) => r.json() );
}

// export function getProjects() {
//   return fetch( 'https://api.github.com/users/nixsolutions/repos' )
//     .then( ( r ) => r.json() );
// }