import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';

const HomePage   = lazy(() => import('../pages/home/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));
const CartPage   = lazy(() => import('../pages/cart/index'));
const LoginPage  = lazy(() => import('../pages/login/index'));

const RoutesApp = () => {
  return (
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
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </Suspense>
  )
}
export default RoutesApp;