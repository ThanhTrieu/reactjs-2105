import React from 'react';
import { Layout, Menu } from 'antd';
import { useLocation, NavLink } from 'react-router-dom';
import { getItemsCart } from '../../pages/cart/reselect';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const { Header } = Layout;

const HeaderShopping = () => {
  const { pathname } = useLocation();
  const { count } = useSelector(createStructuredSelector({
    count: getItemsCart
  }))
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
        <Menu.Item key="/login">
          <NavLink to="/login">
            Login
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderShopping);