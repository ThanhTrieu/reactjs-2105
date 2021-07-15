// type
export const GET_DATA_PRODUCT = Symbol('GET_DATA_PRODUCT');
// type do saga xu ly
export const START_GET_DATA_PRODUCT = Symbol('START_GET_DATA_PRODUCT');
export const STOP_GET_DATA_PRODUCT = Symbol('STOP_GET_DATA_PRODUCT');
export const GET_DATA_PRODUCT_SUCCESS = Symbol('GET_DATA_PRODUCT_SUCCESS');
export const GET_DATA_PRODUCT_FAIL = Symbol('GET_DATA_PRODUCT_FAIL');
export const NOT_FOUND_DATA_PRODUCT = Symbol('NOT_FOUND_DATA_PRODUCT');


// action xu ly saga
export const getDataProducts = () => ({
  type: GET_DATA_PRODUCT
});
