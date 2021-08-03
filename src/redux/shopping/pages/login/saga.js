import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import { apiLogin } from '../../services/login';
import { token } from '../../helpers/token';
import { helper } from '../../helpers/common';
import { push } from 'connected-react-router';

function* loginSaga({email, password}) {
    try {
        yield put(actions.startLoginUser(true));
        const data = yield call(apiLogin.loginUser,email,password);

        if(!helper.isEmptyObject(data) && data.hasOwnProperty('token')) {
            token.saveTokenLocalStorage(data['token']);

            // quay vao trang home
            yield put(push('/'));
        } else {
            yield put(actions.loginUserFailure({
                cod: 404,
                message: 'account invalid'
            })); 
        }
    } catch (err) {
        yield put(actions.loginUserFailure({
            cod: 500,
            message: err
        }));
    } finally {
        yield put(actions.startLoginUser(false));
    }
}

export function* watchLoginSaga(){
    yield takeLatest(actions.LOGIN_REQUEST, loginSaga);
}