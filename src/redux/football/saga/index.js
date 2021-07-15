import { call, all } from 'redux-saga/effects';
import { watchHandleFootball } from './footballSaga';
import { watchDetailFootballSaga } from './detailSaga';

export default function* rootSaga() {
  yield all([
    call(watchHandleFootball),
    // call cac saga khac o day
    call(watchDetailFootballSaga)
  ])
}