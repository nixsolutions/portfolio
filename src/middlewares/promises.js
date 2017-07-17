import { loadPortfolio } from 'actions/getPortfolio';

const middleware = store => next => action => {
  console.log(action.type);
  if (action.type !== 'PROMISE') {
    return next(action);
  }

  const [startAction, successAction, failureAction] = action.actions;
  store.dispatch({type: startAction});

  action.promise.then(
    (data) => {
      console.log(data);
      if (successAction === 'PROJECTS_LOADED') {
        data.forEach((project) => {
            store.dispatch(loadPortfolio(project.name));
        })
      }
      console.log(successAction);
      return store.dispatch({type: successAction, data})},
    (error) => store.dispatch({type: failureAction, error})
  );
};

export default middleware;