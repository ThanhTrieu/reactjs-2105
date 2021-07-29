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
        case actions.CHANGE_QUANTITY_ITEM_CART:
            const idItemCart = action.id;
            let qtyChange = action.qty;
            qtyChange = (qtyChange === null || qtyChange === undefined || qtyChange === '') ? 1 : qtyChange;
            // cap nhat so luong mua cua san pham trong gio voi id tuong ung
            // cap nhat lai thong tin gio hang (co gio hang moi)
            const newDataCarts = state.dataCart.map(item => {
                return item.id === idItemCart ? {...item, qty: qtyChange } : item;
            });
            // cap nhat lai thong tin tong tien
            const newTotalMoney = newDataCarts.map(item => parseInt(item.qty) * parseInt(item.price)).reduce((pre, next) => pre + next);
            // map(item => parseInt(item.qty) * parseInt(item.price)): tra ve mang chua tien cua cac san trong gio hang can thanh toan
            // reduce((pre, next) => pre + next): tinh tong so tien mua tu ham map tra ve
            
            // cap nhat state cart
            return {
                ...state,
                ...{
                    error: {},
                    dataCart: newDataCarts,
                    totalMoney: newTotalMoney
                    // khong duoc phep cap nhat lai so luong san pham trong gio hang
                }
            }
        case actions.DELETE_ITEM_CART:
            // xu ly xoa san pham
            const idDelItem = action.id;
            // can phai lay dc toan bo thong tin cua san pham co id tuong ung do
            // muc dich : de sau nay cap nhat lai tong tien
            const delItem = state.dataCart.find(item => item.id === idDelItem);
            // ham find ko lam anh huong den mang ban dau

            // xoa bo san pham co id tuong ung ra khoi gio hang
            // de cap nhat lai gio hang
            // cap nhat lai so luong san pham trong gio hang
            const newDelCarts = state.dataCart.filter(item => item.id !== idDelItem);
            // tinh lai tong tien - de cap nhat lai
            const newTotalMoneyDel = state.totalMoney - (parseInt(delItem.price)*parseInt(delItem.qty));

            return {
                ...state,
                ...{
                    error: {},
                    dataCart: newDelCarts,
                    totalMoney: newTotalMoneyDel,
                    countItems: state.countItems - 1
                }
            }
        default:
            return state;
    }
}