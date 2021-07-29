import React, { lazy, Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import configStore from '../store/index';
import {
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';

const { history } = configStore();
const HomePage = lazy(() => import('../pages/home/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));
const CartPage = lazy(() => import('../pages/cart/index'));

const RoutesApp = () => {
  return (
    <ConnectedRouter history={history}>
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>
          <Route path="/product/:slug/:id">
            <DetailPage/>
          </Route>
          <Route path="/cart">
            <CartPage/>
          </Route>
        </Switch>
      </Suspense>
    </ConnectedRouter>
  )
}
export default RoutesApp;