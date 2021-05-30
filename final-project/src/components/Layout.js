import React, {} from 'react'
import { Layout, Carousel } from 'antd';

import HeaderComponent from '../components/Header/Header.js';
import SiderComponent from '../components/Sider/Sider.js';
import FooterComponent from '../components/Footer/Footer.js';
import Routes from "../components/Routes"

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const LayoutPage = () => {
    const {Content} = Layout

    return(
        <Layout style={{ minHeight: '100vh' }}>
        <SiderComponent/>
        <Layout className="site-layout">
          <HeaderComponent/>
          <Content style={{ margin: '0 16px' }}>
            <Routes/>
          </Content>
          <FooterComponent/>
        </Layout>
      </Layout>
    )
}

export default LayoutPage