import * as types from '../actions/type';

const initState = {
  loading: false,
  detail: {},
  error: {},
  message: {}
}

export const detailReducer = (state = initState, action) => {
  switch(action.type) {
    case types.LOADING_GET_DETAIL_DATA:
      return {
        ...state,
        ...{ loading: action.loading }
      }
    case types.GET_DATA_DETAIL_SUCCESSFUL:
      return {
        ...state,
        ...{detail: action.data, error: {}, message: {}}
      }
    case types.GET_DATA_DETAIL_EMPTY:
      return {
        ...state,
        ...{ message: action.message, detail :{}, error: {}}
      }
    case types.GET_DATA_DETAIL_FAIL:
      return {
        ...state,
        ...{ error: action.error, message: {}, detail: {}}
      }
    default:
      return state;
  }
}