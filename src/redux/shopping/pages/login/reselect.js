import { createSelector } from 'reselect';

const stateLogin = state => state.loginReducer;

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