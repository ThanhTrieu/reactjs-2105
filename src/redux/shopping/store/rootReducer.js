import { combineReducers } from 'redux';
import { homeReducer } from '../pages/home/reducer';
import { detailReducer } from '../pages/detail/reducer';
import { cartReducer } from '../pages/cart/reducer';

const rootReducer = combineReducers({
  homeReducer,
  detailReducer,
  cartReducer
});
export default rootReducer;