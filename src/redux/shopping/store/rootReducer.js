import { combineReducers } from 'redux';
import { homeReducer } from '../pages/home/reducer';
import { detailReducer } from '../pages/detail/reducer';

const rootReducer = combineReducers({
  homeReducer,
  detailReducer
});
export default rootReducer;