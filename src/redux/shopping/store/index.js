import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = (defaultState = {}) => {
  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  )
  // run saga
  sagaMiddleware.run(rootSaga);
  return { store }
}
export default configStore;