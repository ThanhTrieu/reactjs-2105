import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Skeleton } from 'antd';
import { token } from '../helpers/token';

const HomePage   = lazy(() => import('../pages/home/index'));
const DetailPage = lazy(() => import('../pages/detail/index'));
const CartPage   = lazy(() => import('../pages/cart/index'));
const LoginPage  = lazy(() => import('../pages/login/index'));

function PrivateRoute({ children, ...rest }) {
  let auth = token.checkIsAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function PrivateRouteLogin({ children, ...rest }) {
  let auth = token.checkIsAuthenticated();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

const RoutesApp = () => {
  return (
      <Suspense fallback={<Skeleton active />}>
        <Switch>
          <PrivateRoute path="/" exact>
            <HomePage/>
          </PrivateRoute>
          <PrivateRoute path="/product/:slug/:id">
            <DetailPage/>
          </PrivateRoute>
          <PrivateRoute path="/cart">
            <CartPage/>
          </PrivateRoute>

          <PrivateRouteLogin path="/login">
            <LoginPage/>
          </PrivateRouteLogin>
        </Switch>
      </Suspense>
  )
}
export default RoutesApp;