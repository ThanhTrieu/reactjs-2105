import { combineReducers } from 'redux';
import { homeReducer } from '../pages/home/reducer';
import { detailReducer } from '../pages/detail/reducer';
import { cartReducer } from '../pages/cart/reducer';
import { loginReducer } from '../pages/login/reducer';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// muc dich chi luu state data cart vao storage cua thang redux-persist
// storage chinh la cookie tren trinh duyet
const configPersistCart = {
  key: 'shopping_data_cart',
  storage: storage,
  whitelist: ['dataCart', 'countItems', 'totalMoney'] // ten cac state trong reducer
};

// bien history se duoc tuyen tu store va chinh la bien history trong thu muc helper
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  homeReducer,
  detailReducer,
  loginReducer,
  cartReducer: persistReducer(configPersistCart, cartReducer)
});
export default rootReducer;