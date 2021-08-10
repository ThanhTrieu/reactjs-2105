import React from 'react';
import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { getItemsCart } from '../../pages/cart/reselect';
import { token } from '../../helpers/token';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { logoutUser } from '../../pages/login/actions';
import { useHistory } from "react-router-dom";

const { Header } = Layout;

const HeaderShopping = () => {
  const dispatch = useDispatch();
  const historyLogout = useHistory();
  const { pathname } = useLocation();

  const tokenLoign   = token.checkIsAuthenticated();
  const { count }    = useSelector(createStructuredSelector({
    count: getItemsCart
  }));

  const logoutApp = () => {
    dispatch(logoutUser());
    historyLogout.push('/login');
  }

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/">
          <NavLink to="/">
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/cart">
          <NavLink to="/cart">
            Cart ( { count } )
          </NavLink>
        </Menu.Item>

        { !tokenLoign && (
          <Menu.Item key="/login">
            <NavLink to="/login">
              Login
            </NavLink>
          </Menu.Item>
        )}

        { tokenLoign && (
          <Menu.Item
            onClick={() => logoutApp()}
          >
            Logout
          </Menu.Item>
        )}
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderShopping);