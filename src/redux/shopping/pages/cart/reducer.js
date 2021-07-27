import * as actions from './actions';

const initialState = {
    loading: false,
    dataCart: [],
    /*
        [{},{},{}]
    */
   countItems: 0, // so luong san pham trong gio hang
   totalMoney: 0, // tong tien can thanh toan
   error: {}
}

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.START_ADD_CART:
            return {
                ...state,
                ...{ loading: action.loading }
            }
        case actions.ADD_CART_SUCCESS:
            // xu ly them san pham vao gio hang
            let infoProduct = action.data;
            // kiem tra xem gio hang da ton tai chua ?
            // neu chua ton tai thi tao moi gio hang va them san pham vao
            // neu gio hang co roi thi them luon
            // neu san pham them vao da ton tai trong gio hang roi thi chi cap nhat so luong mua ma thoi
            if(state.dataCart === undefined || state.dataCart.length === 0) {
                // chua he co gio hang
                // them san pham luon vao
                // mac dinh luon mua 1 san pham
                infoProduct.qty = 1; // them 1 key  value vao object 
                return {
                    ...state,
                    ...{
                        dataCart: [...state.dataCart, infoProduct],
                        error: {},
                        countItems: state.countItems + 1,
                        totalMoney: parseInt(state.totalMoney) + parseInt(infoProduct.price)
                    }
                }
            } else {
                // da ton tai gio hang
                const idPd = infoProduct.id;
                // kiem tra xem id nay co ton tai trong gio hang chua ?
                // neu chua them moi
                // neu co roi chi cap nhat lai so luong mua thoi
                const searchPd = state.dataCart.filter(item => item.id === idPd)[0];
                if(searchPd !== undefined){
                    searchPd.qty += 1;
                    return {
                        ...state,
                        ...{
                            error: {},
                            totalMoney: parseInt(state.totalMoney) + parseInt(infoProduct.price)
                        }
                    }
                } else {
                    infoProduct.qty = 1; // them 1 key  value vao object 
                    return {
                        ...state,
                        ...{
                            dataCart: [...state.dataCart, infoProduct],
                            error: {},
                            countItems: state.countItems + 1,
                            totalMoney: parseInt(state.totalMoney) + parseInt(infoProduct.price)
                        }
                    }
                }
            }
        case actions.ADD_CART_FAIL:
            return {
                ...state,
                ...{ error: action.error }
            }
        default:
            return state;
    }
}