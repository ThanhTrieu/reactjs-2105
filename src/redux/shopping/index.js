import RoutesApp from './routes/index';
import { Provider } from 'react-redux';
import configStore from './store/index';

const { store } = configStore();

const Shopping = () => {
  return (
    <Provider store={store}>
      <RoutesApp/>
    </Provider>
  )
}
export default Shopping;