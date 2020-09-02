import { takeEvery } from 'redux-saga/effects';

import { types } from 'actions';
import getCountriesSaga from './getCountriesSaga';
import addCountrySaga from './addCountrySaga';

export default function* watchers() {
  yield takeEvery(types.GET_COUNTRIES, getCountriesSaga);
  yield takeEvery(types.ADD_COUNTRY, addCountrySaga);
}