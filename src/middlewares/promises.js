import loadPortfolio from '../actions/getPortfolio';

const middleware = store => next => (action) => {
  if (action.type !== 'PROMISE') {
    return next(action);
  }

  const [startAction, successAction, failureAction] = action.actions;
  store.dispatch({ type: startAction });

  action.promise.then(
    (data) => {
      if (successAction === 'PROJECTS_LOADED') {
        data.forEach((project) => {
          store.dispatch(loadPortfolio(project.name));
        });
      }
      return store.dispatch({ type: successAction, data });
    },
    error => store.dispatch({ type: failureAction, error }),
  );
  return next(action);
};

export default middleware;
