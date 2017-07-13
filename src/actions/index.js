export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivePosts = (json) => ({
  type: RECEIVE_POSTS,
  projects: json,
});

const fetchPosts = () => dispatch => {
  dispatch(requestPosts());
  return fetch(`https://api.github.com/users/nixsolutions/repos`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(json)))
};

const shouldFetchPosts = (state) => {
  const projects = state.projectsFromGitHub;
  console.log(projects);
  console.log(state);
  if (!projects) {
    console.log('!projects');
    return true
  }
  if (projects.isFetching) {
    console.log('!isFetching');
    return false
  }
};

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
  console.log(getState());
  console.log(shouldFetchPosts(getState()));
  if (shouldFetchPosts(getState())) {
    return dispatch(fetchPosts())
  }
};
