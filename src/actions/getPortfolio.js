import { getPortfolio } from 'api/index';

export function loadPortfolio(projectName) {
  return {
    type: 'PROMISE',
    actions: ['PORTFOLIO_LOADING', 'PORTFOLIO_LOADED', 'PORTFOLIO_LOAD_FAILURE'],
    promise: getPortfolio(projectName)
  };
}
