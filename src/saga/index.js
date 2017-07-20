import { takeEvery } from 'redux-saga/effects';
import { getProjects } from '../api/index';

export function* frtchProjects() {
  const products = yield getProjects();
  console.log(products);
}

export default function* rootSaga() {
  yield takeEvery('PROJECTS_LOADING', frtchProjects);
}
