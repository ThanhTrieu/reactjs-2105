import { call, put, takeEvery } from 'redux-saga/effects';
import { api } from '../services/api';
import { helper } from '../helpers/common';
import * as actions from '../actions/detail';
import { REQUEST_DETAIL_MATCH } from '../actions/type';

function* detailFootballSaga({ id }) {
  try {
    yield put(actions.loadingDetailMatch(true));
    const data = yield call(api.getDetailMatchFootball, id);
    if(!helper.isEmptyObject(data)){
      yield put(actions.getDetailDataSuccess(data))
    } else {
      yield put(actions.getDetailDataEmpty({
        cod: 404,
        mess: `not found data by id: ${id}`
      }))
    }
  } catch(e) {
    yield put(actions.getDetailDataFail(e));
  } finally {
    yield put(actions.loadingDetailMatch(false));
  }
}

export function* watchDetailFootballSaga() {
  yield takeEvery(REQUEST_DETAIL_MATCH, detailFootballSaga);
}