// combine cac reducer lai
import { combineReducers } from 'redux';
import { counterReducer as counter } from './counter';

const rootReducer = combineReducers({
  counter
});
export default rootReducer;