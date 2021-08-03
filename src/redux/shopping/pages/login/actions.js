export const LOGIN_REQUEST = Symbol('LOGIN_REQUEST');

export const START_LOGIN_USER = Symbol('START_LOGIN_USER');
export const LOGIN_USER_FAIL = Symbol('LOGIN_USER_FAIL');
//export const SAVE_TOKEN_USER = Symbol('SAVE_TOKEN_USER');
//export const REMOVE_TOKEN_USER = Symbol('REMOVE_TOKEN_USER');

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