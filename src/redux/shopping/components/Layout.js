import React from 'react';
import { Layout } from 'antd';
import BreadcrumbShopping from './partials/Breadcrumb';
import HeaderShopping from './partials/Header';
import FooterShopping from './partials/Footer';
import SidebarShopping from './partials/Sidebar';
import './style.css';

const { Content } = Layout;

const LayoutShopping = (props) => {
  return (
    <Layout>
      <HeaderShopping/>
      <Content style={{ padding: '0 50px' }}>
        <BreadcrumbShopping
          sub_1={props.sub_1}
          sub_2={props.sub_2}
          sub_3={props.sub_3}
        />
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <SidebarShopping/>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            {props.children}
          </Content>
        </Layout>
      </Content>
      <FooterShopping/>
    </Layout>
  )
}
export default React.memo(LayoutShopping);