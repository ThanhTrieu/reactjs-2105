import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Skeleton } from 'antd';

const HomePage = lazy(() => import('../pages/home/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));
const CartPage = lazy(() => import('../pages/cart/index'));

const RoutesApp = () => {
  return (
    <Router>
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
    </Router>
  )
}
export default RoutesApp;