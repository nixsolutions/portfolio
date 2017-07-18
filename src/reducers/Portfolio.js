export default function ( state = {portfolio: []}, action ) {
  switch (action.type) {
    case 'PORTFOLIO_LOADED':
      return [...state, action.data];
    default:
      return state;
  }
}
