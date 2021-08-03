import RoutesApp from './routes/index';
import { Provider } from 'react-redux';
import configStore from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Skeleton } from 'antd';
import { ConnectedRouter } from 'connected-react-router';

const { store, persistor, history } = configStore();

const Shopping = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Skeleton active />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <RoutesApp/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  )
}
export default Shopping;