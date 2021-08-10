import { createSelector } from 'reselect';

const stateLogin = state => state.loginReducer;

export const loadingLogin = createSelector(
    stateLogin,
    item => item.loading
);

export const getStatusLogin = createSelector(
    stateLogin,
    item => item.statusLogin
);

export const messageErr = createSelector(
    stateLogin,
    item => {
        if(item.error.hasOwnProperty('cod')){
            if(item.error.cod === 404 || item.error.cod === 500) {
                return 'Account invalid';
            }
        }
        return null;
    }
)