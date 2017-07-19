const initialstate = {
  portfolio: [],
};

export default function (state = initialstate, action) {
  switch (action.type) {
    case 'PORTFOLIO_LOADED':
      return Object.assign({}, state, { portfolio: [...state.portfolio, action.data] });
    default:
      return state;
  }
}
