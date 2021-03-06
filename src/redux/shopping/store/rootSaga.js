import { all, call } from 'redux-saga/effects';
import { watchHomeProductSaga } from '../pages/home/saga';
import { watchDetailSaga } from '../pages/detail/saga';
import { watchCartSaga } from '../pages/cart/saga';
import { watchLoginSaga, watchLogoutSaga } from '../pages/login/saga';

export default function* rootSaga() {
  yield all([
    call(watchHomeProductSaga),
    call(watchDetailSaga),
    call(watchCartSaga),
    call(watchLoginSaga),
    call(watchLogoutSaga)
  ])
}