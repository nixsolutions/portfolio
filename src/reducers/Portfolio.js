import * as actionsPortfolio from '../actions/getPortfolio';

const initialstate = {
  portfolio: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case actionsPortfolio.RECEIVE_PORTFOLIO:
      if (!action.data) {
        return state;
      }
      return Object.assign({}, state, { portfolio: [...state.portfolio, action.data] });
    default:
      return state;
  }
}
