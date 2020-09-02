import { fork } from 'redux-saga/effects';
import watchersSaga from './watchersSaga';

export default function* rootSaga() {
  yield fork(watchersSaga);
}