import * as actions from './actions';

const initialState = {
    loading: false,
    error: {}
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.START_LOGIN_USER:
            return {
                ...state,
                ...{ loading: action.loading}
            }
        case actions.LOGIN_USER_FAIL:
            return {
                ...state,
                ...{ error: action.error}
            }
        default:
            return state;
    }
}