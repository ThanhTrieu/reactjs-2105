import RoutesApp from './routes/index';
import { Provider } from 'react-redux';
import configStore from './store/index';
import { PersistGate } from 'redux-persist/integration/react';
import { Skeleton } from 'antd';

const { store, persistor } = configStore();

const Shopping = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Skeleton active />} persistor={persistor}>
        <RoutesApp/>
      </PersistGate>
    </Provider>
  )
}
export default Shopping;