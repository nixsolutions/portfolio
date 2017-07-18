import { getPortfolio } from '../api/index';

export default function (projectName) {
  return {
    type: 'PROMISE',
    actions: ['PORTFOLIO_LOADING', 'PORTFOLIO_LOADED', 'PORTFOLIO_LOAD_FAILURE'],
    promise: getPortfolio(projectName),
  };
}
