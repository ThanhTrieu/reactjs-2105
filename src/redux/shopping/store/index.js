import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import history from '../helpers/history';

const configRootPersist = {
  key: 'Shopping_React2105',
  storage: storage,
  whitelist: ['cartReducer'],  // ten cua reducer ben phia root reducer
  blacklist: ['router'] //ko luu
}

const rootReducerPersistent = persistReducer(configRootPersist, rootReducer(history));

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const configStore = (defaultState = {}) => {
  const store = createStore(
    rootReducerPersistent,
    defaultState,
    applyMiddleware(
      logger,
      sagaMiddleware
    )
  )
  // run saga
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return { store, persistor, history }
}
export default configStore;