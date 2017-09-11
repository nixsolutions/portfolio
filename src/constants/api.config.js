const Constants = {

  API_ROOT: 'https://api.github.com/',
  API_USERCONTENT: 'https://raw.githubusercontent.com/',
  USER_NAME: process.env.REACT_APP_GITHUB_USER,
  TOKEN: process.env.REACT_APP_GITHUB_TOKEN.replace(/ /g, ''),
};

export default Constants;
