import { all, call } from 'redux-saga/effects';
import { watchHomeProductSaga } from '../pages/home/saga';
import { watchDetailSaga } from '../pages/detail/saga';

export default function* rootSaga() {
  yield all([
    call(watchHomeProductSaga),
    call(watchDetailSaga)
  ])
}