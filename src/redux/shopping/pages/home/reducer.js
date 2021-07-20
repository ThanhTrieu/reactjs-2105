import * as actions from './actions';

const initState = {
  loading: false,
  allProducts: {},
  errorProduct: {},
  messgaeProduct: {}
}

export const homeReducer = (state = initState, action) => {
  switch(action.type) {
    case actions.START_GET_DATA_PRODUCT:
      return {
        ...state,
        ...{ loading: action.start }
      }

    case actions.STOP_GET_DATA_PRODUCT:
      return {
        ...state,
        ...{ loading: action.stop }
      }

    case actions.GET_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        ...{ allProducts: action.data, errorProduct: {}, messgaeProduct: {} }
      }
    case actions.GET_DATA_PRODUCT_FAIL:
      return {
        ...state,
        ...{ allProducts: {}, errorProduct: action.error, messgaeProduct: {} }
      }
    case actions.NOT_FOUND_DATA_PRODUCT:
      return {
        ...state,
        ...{ allProducts: {}, errorProduct: {}, messgaeProduct: action.message }
      }
    default:
      return state;
  }
}