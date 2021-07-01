import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';

const { Header } = Layout;

const HeaderMovies = () => {
  // biet dc vi tri duong link
  // hooks cua react router
  const { pathname } = useLocation();
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/popular-movie">
          <NavLink to="/popular-movie">
            Popular movies
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/search-movie">
          <NavLink to="/search-movie">
            Search movies
          </NavLink> 
        </Menu.Item>
      </Menu>
    </Header>
  )
}
export default React.memo(HeaderMovies);