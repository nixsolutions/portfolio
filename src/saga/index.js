import { takeEvery, call, put } from 'redux-saga/effects';
import { getProjects, getPortfolio } from '../api/index';
import * as actionsPortfolio from '../actions/getPortfolio';
import * as actionsProjects from '../actions/getProjects';

export function* fetchPortfolio(projectName) {
  const data = yield getPortfolio(projectName);
  try {
    yield put({ type: actionsPortfolio.RECEIVE_PORTFOLIO, data });
  } catch (error) {
    yield put({ type: actionsPortfolio.FAILURE_PORTFOLIO, data });
  }
}

export function* fetchProjects() {
  const data = yield getProjects();
  try {
    yield put({ type: actionsProjects.RECEIVE_PROJECTS, data });
    yield data.map(project => call(fetchPortfolio, project.name));
  } catch (error) {
    yield put({ type: actionsProjects.FAILURE_PROJECTS, data });
  }
}

export default function* rootSaga() {
  yield takeEvery(actionsProjects.REQUEST_PROJECTS, fetchProjects);
}
