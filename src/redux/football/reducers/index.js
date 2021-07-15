import { combineReducers } from 'redux';
import { footballReducer as football } from './football';
import { detailReducer as detailFootball } from './detail';

const rootReducer = combineReducers({
  football,
  detailFootball
});
export default rootReducer;
