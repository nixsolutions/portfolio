import { takeEvery, all, call, put } from 'redux-saga/effects';
import { getProjects, getPortfolio } from '../api/index';
import * as actionsPortfolio from '../actions/getPortfolio';
import * as actionsProjects from '../actions/getProjects';

export function* fetchPortfolio(projectName) {
  const data = yield getPortfolio(projectName);
  try {
    yield put({ type: actionsPortfolio.RECEIVE_PORTFOLIO, data });
  } catch (error) {
    yield put({ type: actionsPortfolio.FAILURE_PORTFOLIO, error });
  }
}

export function* fetchProjects() {
  const data = yield getProjects();
  try {
    yield put({ type: actionsProjects.RECEIVE_PROJECTS, data });
    yield all(data.map(project => call(fetchPortfolio, project.name)));
  } catch (error) {
    yield put({ type: actionsProjects.FAILURE_PROJECTS, error });
  }
}

export default function* rootSaga() {
  yield takeEvery(actionsProjects.REQUEST_PROJECTS, fetchProjects);
}
