export const REQUEST_PORTFOLIO = 'REQUEST_PORTFOLIO';
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const FAILURE_PORTFOLIO = 'FAILURE_PORTFOLIO';

export function requestPortfolio() {
  return {
    type: REQUEST_PORTFOLIO,
  };
}

export function receivePortfolio(data) {
  return {
    type: RECEIVE_PORTFOLIO,
    data,
  };
}

export function failurePortfolio(data) {
  return {
    type: FAILURE_PORTFOLIO,
    data,
  };
}
