export const ADD_TO_CART = Symbol('ADD_TO_CART');

export const START_ADD_CART = Symbol('START_ADD_CART');
export const ADD_CART_SUCCESS = Symbol('ADD_CART_SUCCESS');
export const ADD_CART_FAIL = Symbol('ADD_CART_FAIL');

export const addToCart = (infoProduct) => ({
    type: ADD_TO_CART,
    infoProduct
});

export const startAddCart = (loading) => ({
    type: START_ADD_CART,
    loading
});

export const addCartSuccess = (data) => ({
    type: ADD_CART_SUCCESS,
    data
});

export const addCartFail = (error) => ({
    type: ADD_CART_FAIL,
    error
});