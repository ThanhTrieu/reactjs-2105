import * as actions from './actions';

const defaultState = {
  loadingDetail: true,
  detail: {},
  error: {},
  mess: {}
}

export const detailReducer = (state = defaultState, action) => {
  switch(action.type) {
    case actions.START_GET_PRODUCT_BY_ID: 
      return {
        ...state,
        ...{ loadingDetail: action.loading }
      }
    case actions.GET_PRODUCT_BY_ID_SUCCESS: 
      return {
        ...state,
        ...{ detail: action.deatail, error: {}, mess: {} }
      }
    case actions.GET_PRODUCT_BY_ID_FAIL: 
      return {
        ...state,
        ...{ detail: {}, error: action.error, mess: {} }
      }
    case actions.GET_PRODUCT_BY_ID_NOT_FOUND: 
      return {
        ...state,
        ...{ detail: {}, error: {}, mess: action.mess }
      }
    default:
      return state;
  }
}