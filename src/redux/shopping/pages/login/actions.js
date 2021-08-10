export const LOGIN_REQUEST = Symbol('LOGIN_REQUEST');

export const START_LOGIN_USER = Symbol('START_LOGIN_USER');
export const LOGIN_USER_FAIL = Symbol('LOGIN_USER_FAIL');
export const LOGIN_USER_SUCCESS = Symbol('LOGIN_USER_SUCCESS');

export const LOGOUT_REQUEST = Symbol('LOGOUT_REQUEST');
export const LOGOUT_USER_FAIL = Symbol('LOGOUT_USER_FAIL');
export const LOGOUT_USER_SUCCESS = Symbol('LOGOUT_USER_SUCCESS');

export const logoutUser = () => ({
    type: LOGOUT_REQUEST
});
export const logoutUserSuccess = (status) => ({
    type: LOGOUT_USER_SUCCESS,
    status
});
export const logoutUserFail = (error) => ({
    type: LOGOUT_USER_FAIL,
    error
});

export const loginUserSuccess = (status) => ({
    type: LOGIN_USER_SUCCESS,
    status
});

export const loginRequest = (email, password) => ({
    type: LOGIN_REQUEST,
    email,
    password
});

export const startLoginUser = (loading) => ({
    type: START_LOGIN_USER,
    loading
});

export const loginUserFailure = (error) => ({
    type: LOGIN_USER_FAIL,
    error
});
