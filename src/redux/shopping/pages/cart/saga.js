import { put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { helper } from '../../helpers/common';

function* addToCartSaga({ infoProduct }){
    try {
        yield put(actions.startAddCart(true));
        if(!helper.isEmptyObject(infoProduct)){
            yield put(actions.addCartSuccess(infoProduct));
        } else {
            yield put(actions.addCartFail({
                cod: 500,
                mess: 'Not found data'
            }));
        }
    } catch (e){
        yield put(actions.addCartFail({
            cod: 500,
            mess: e
        }));
    } finally {
        yield put(actions.startAddCart(false));
    }
}

export function* watchCartSaga(){
    yield takeLatest(actions.ADD_TO_CART, addToCartSaga);
}