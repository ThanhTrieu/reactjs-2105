import * as actions from './actions';

const initialState = {
    loading: false,
    error: {},
    statusLogin: false
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
                ...{ error: action.error, statusLogin: false }
            }
        case actions.LOGIN_USER_SUCCESS:
            return {
                ...state,
                ...{statusLogin: action.status, error: {}}
            }
        case actions.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                ...{ statusLogin: action.status }
            }
        case actions.LOGOUT_USER_FAIL:
            return {
                ...state,
                ...{ error: action.error }
            }
        default:
            return state;
    }
}