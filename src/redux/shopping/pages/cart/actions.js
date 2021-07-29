export const ADD_TO_CART = Symbol('ADD_TO_CART');
export const START_ADD_CART = Symbol('START_ADD_CART');
export const ADD_CART_SUCCESS = Symbol('ADD_CART_SUCCESS');
export const ADD_CART_FAIL = Symbol('ADD_CART_FAIL');

export const CHANGE_QUANTITY_ITEM_CART = Symbol('CHANGE_QUANTITY_ITEM_CART');
export const DELETE_ITEM_CART = Symbol('DELETE_ITEM_CART');

export const deleteItemProductCart = (id) => ({
    type: DELETE_ITEM_CART,
    id // ma san pham trong gio hang
});

export const changeQtyCart = (id, qty) => ({
    // id: ma san pham trong gio hang
    // qty: so luong san pham mh can thay doi
    type: CHANGE_QUANTITY_ITEM_CART,
    id,
    qty
});

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